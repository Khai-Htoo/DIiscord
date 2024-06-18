import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/theme-btn";
import { initialProfile } from "@/lib/initail-profile";
import { currentUser } from "@clerk/nextjs/server";
const SignIn = async () => {
  const user = await initialProfile();
  console.log(user);

  return (
    <div>
      <SignedIn>
        <UserButton />
        <ModeToggle />
      </SignedIn>
    </div>
  );
};

export default SignIn;
