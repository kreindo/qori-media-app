import { z } from "zod";
import { postSchema } from "../../../pages/components/CreatePost";
import { protectedProcedure, router } from "../trpc";
export const postRouter = router({
  create: protectedProcedure.input(postSchema).mutation(({ ctx, input }) => {
    const { prisma, session } = ctx;
    const { text } = input;
    const userId = session.user.id;
    return prisma.post.create({
      data: {
        text,
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }),
});
