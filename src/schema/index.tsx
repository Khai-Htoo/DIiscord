import { z } from "zod";

export const ServerFormSchema = z.object({
  serverName: z.string().min(2, {
    message: "Server must be at least 2 characters.",
  }),
  imageUrl: z.string().min(2, {
    message: "Image url must be at least 2 characters.",
  }),
});
