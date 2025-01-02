import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginFormSchema, signUpFormSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginFormSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    return c.json({
      success: "Sign up success",
      email,
      password,
    });
  })
  .post("/sign-up", zValidator("json", signUpFormSchema), async (c) => {
    const { email, password, name } = c.req.valid("json");
    return c.json({
      success: "Sign up success",
      email,
      password,
      name,
    });
  });

export default app;
