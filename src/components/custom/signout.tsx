import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/images/logo.gif";
import Image from "next/image";
import MainImg from "@/images/main.gif";
import BGImg from "@/images/bg.jpg";
import MessageImg from "@/images/message.gif";
import PhoneImg from "@/images/phone.gif";
import { MoveRight } from "lucide-react";
import { SignInButton, SignedOut } from "@clerk/nextjs";
const SignOut = () => {
  return (
    <div>
      <SignedOut>
        <div className=" w-full h-screen relative bg-black">
          <div className="absolute z-10 top-0 right-0 bottom-0 left-0 w-full h-full">
            <Image src={BGImg} alt="bg" className="w-full h-full z-[-99]" />
          </div>
          <div className=" lg:w-2/3 mx-auto h-full px-8 lg:px-0 py-5 relative z-10">
            <nav className=" flex justify-between items-center">
              <div className=" text-white flex items-center space-x-3">
                <Image src={logo} alt="logo" width={100} height={100} />
                <h1 className=" text-2xl font-semibold">KEPP</h1>
              </div>
              <div className="">
                <Button variant={"secondary"}>
                  <SignInButton />
                </Button>
              </div>
            </nav>
            <main className=" lg:py-32 py-6 w-full flex  flex-col-reverse lg:flex-row    justify-between items-center">
              <div className=" lg:w-2/5 w-full text-center lg:text-start">
                <div className="">
                  <h1 className=" lg:text-6xl text-4xl   font-bold text-white">
                    GROUP CHAT THAT IS ALL FUN & GAMES
                  </h1>
                  <p className="  text-md lg:my-7 my-2 text-blue-100">
                    Kepp is great for playing games and chilling with friends,
                    or even building a worldwide community. Customize your own
                    space to talk, play, and hang out.
                  </p>
                  <div className="flex space-x-5 items-center mt-8 lg:mt-0 justify-center lg:justify-start">
                    <Image
                      src={MessageImg}
                      width={70}
                      height={70}
                      alt="message"
                    />
                    <Image src={PhoneImg} width={60} height={60} alt="phone" />
                    <div className="flex items-center text-white text-xl space-x-3">
                      <h1>Everything</h1>
                      <MoveRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" sm:h-full ">
                <Image src={MainImg} width={700} height={700} alt="main" />
              </div>
            </main>
          </div>
        </div>
      </SignedOut>
    </div>
  );
};

export default SignOut;
