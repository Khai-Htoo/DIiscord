import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/theme-btn";
import { initialProfile } from "@/lib/initail-profile";
import { currentUser } from "@clerk/nextjs/server";
import InitialModel from "../model/initail-model";
import { db } from "@/database/db";
import { redirect } from "next/navigation";
const SignIn = async () => {
  const profile = await initialProfile();

  if (profile) {
    const server = await db.server.findFirst({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });

    server && redirect(`/server/${server.id}`);
  }
  return (
    <div>
      <SignedIn>
        <UserButton />
        <ModeToggle />
        <InitialModel />
      </SignedIn>
    </div>
  );
};

export default SignIn;
