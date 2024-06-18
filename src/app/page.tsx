import SignIn from "@/components/custom/signin";
import SignOut from "@/components/custom/signout";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-screen">
      <SignIn />
      <SignOut />
    </div>
  );
};

export default page;
