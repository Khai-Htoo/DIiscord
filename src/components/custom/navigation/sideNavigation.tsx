import React from "react";
import NavigationAction from "./NavigationAction";
import { Plus } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ModeToggle } from "@/components/theme-btn";
import { UserButton } from "@clerk/nextjs";
import { currentProfile } from "@/utils/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/database/db";
import NavigationItem from "./navigation-item";

const SideNavigation = async () => {
  const profile = await currentProfile();
  if (!profile) {
    redirect("/");
  }
  const server = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="hidden space-y-3 md:flex md:flex-col  w-[80px] h-screen bg-zinc-800">
      {/* add server button */}
      <NavigationAction label="Add Server">
        <div className=" mx-auto  size-[53px] hover:rounded-[16px]  hover:bg-indigo-500 hover:text-white duration-500 my-2 rounded-full bg-zinc-600 flex justify-center items-center  text-indigo-600  ">
          <Plus className="text-2xl font-bold" />
        </div>
      </NavigationAction>
      <ScrollArea className="h-full">
        {server.map((server) => (
          <NavigationItem
            key={server.id}
            id={server.id}
            label={server.name}
            imageUrl={server.imageUrl}
          />
        ))}
      </ScrollArea>
      <ModeToggle />
      <UserButton />
    </div>
  );
};

export default SideNavigation;
