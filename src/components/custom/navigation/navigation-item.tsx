"use client";
import React from "react";
import NavigationAction from "./NavigationAction";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Link from "next/link";
interface NavigationItem {
  id: any;
  label: string;
  imageUrl: string;
}
const NavigationItem: React.FC<NavigationItem> = ({ id, label, imageUrl }) => {
  const params = useParams();

  return (
    <div className=" flex justify-center   w-full relative">
      <Link href={`/server/${id}`}>
        <div
          className={cn(
            " w-1 rounded-md  absolute left-0  bg-white",
            id == params.id ? " h-7 top-[20px]" : "h-4 top-[25px]"
          )}
        ></div>
        <NavigationAction label={label.toString()}>
          <div
            className={cn(
              "relative overflow-hidden size-[53px] hover:rounded-[16px]  hover:text-white duration-500 my-2 rounded-full bg-zinc-600 flex justify-center items-center ",
              id == params.id ? "rounded-[16px]" : ""
            )}
          >
            <Image
              src={imageUrl}
              alt="image"
              className=" w-full h-full"
              width={300}
              height={300}
            />
          </div>
        </NavigationAction>
      </Link>
    </div>
  );
};

export default NavigationItem;
