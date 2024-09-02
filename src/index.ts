import { Elysia } from "elysia";
import cors from '@elysiajs/cors';
import swagger from '@elysiajs/swagger';
import { workspaceController } from "./controllers/workspace.controller";
import { logger } from "@bogeychan/elysia-logger";

const PORT = 3000;

const app = new Elysia()
  .use(cors())
  // .use(logger({
  //   transport: {
  //     target: "pino-pretty",
  //     options: {
  //       colorize: true,
  //     },
  //   },
  // }))
  .use(swagger({
    provider: "swagger-ui"
  }))

  .onError(({ code, error, set }) => {
    if (code === 'NOT_FOUND') {
      set.status = 404
      return {
        message: "Not Found 🦊"
      }
    }
  })

  .get("/", () => "Welcome to backend server")

  .use(workspaceController)
  .listen(PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
