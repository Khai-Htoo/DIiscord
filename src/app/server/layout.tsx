import SideNavigation from "@/components/custom/navigation/sideNavigation";
import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-zinc-700 h-screen w-full flex">
      <SideNavigation />
      {children}
    </div>
  );
}
