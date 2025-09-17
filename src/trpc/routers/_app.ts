import { z } from "zod";
import { agentsRouter } from "@/modules/agents/server/procedures";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  //// to fix the error
  agents: agentsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;

// import { agentsRouter } from "@/modules/agents/server/procedures";
// import { createTRPCRouter } from "../init";
// export const appRouter = createTRPCRouter({
//   agents: agentsRouter,
// });
// // export type definition of API
// export type AppRouter = typeof appRouter;
