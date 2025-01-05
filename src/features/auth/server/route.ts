import { Hono } from "hono";
import { deleteCookie, setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";
import { loginFormSchema, signUpFormSchema } from "../schemas";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { AUTH_COOKIE_NAME } from "../constant";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  .get("/currentUser", sessionMiddleware ,async (c) => {
    return c.json({
      success: true,
      message: "User fetched successfully",
      data: c.get("user"),
    });
  })
  .post("/login", zValidator("json", loginFormSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    const {account} = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);
    setCookie(c, AUTH_COOKIE_NAME, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    })

    return c.json({
      success: true,
      message: "Login successful",
    });
  })
  .post("/register", zValidator("json", signUpFormSchema), async (c) => {
    const { email, password, name } = c.req.valid("json");
    const {account} = await createAdminClient();

    await account.create(ID.unique(),  email, password, name);
    const session = await account.createEmailPasswordSession(email, password);
    setCookie(c, AUTH_COOKIE_NAME, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    })

    return c.json({
      success: true,
      message: "Register successful",
    });
  })
  .post("/logout", sessionMiddleware , async (c) => {
    const account = c.get("account");
    deleteCookie(c, AUTH_COOKIE_NAME);
    await account.deleteSession("current");
    return c.json({
      success: true,
      message: "Logout successful",
    });
  });

export default app;
