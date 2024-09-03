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
    if (code === 'VALIDATION') {
      set.status = 400
      return {
        message: "Bad Request 🦊",
      }
    }
    if (code === "INTERNAL_SERVER_ERROR") {
      set.status = 500
      return {
        message: "Internal Server Error 🦊"
      }
    }
  })

  .get("/", () => "Welcome to backend server")

  .use(workspaceController)
  .listen(PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
