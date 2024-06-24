"use server";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/database/db";
import { ServerFormSchema } from "@/schema";
import { z } from "zod";
import { currentProfile } from "./current-profile";
export const createServer = async (data: z.infer<typeof ServerFormSchema>) => {
  const validateData = await ServerFormSchema.parseAsync(data);
  const { imageUrl, serverName } = validateData;
  const profile = await currentProfile();
  if (profile) {
    const profileId = profile.id as number;
    const server = await db.server.create({
      data: {
        profileId,
        name: serverName,
        imageUrl,
        inviteCode: uuidv4(),
        channels: {
          create: [{ name: "general", profileId, type: "TEXT" }],
        },
        members: {
          create: [{ profileId, role: "ADMIN" }],
        },
      },
    });
    return server;
  }
};
