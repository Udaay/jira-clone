import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => c.json({ hello: "world" }));

app.get("/hello/:name", (c) => {
  const { name } = c.req.param();
  const age = c.req.query("age");

  return c.json({ name, age });
});

export const GET = handle(app);
