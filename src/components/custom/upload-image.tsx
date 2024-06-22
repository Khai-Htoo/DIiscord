import { UploadDropzone } from "@/utils/uploadthing";
import React from "react";
import "@uploadthing/react/styles.css";
import Image from "next/image";
import { X } from "lucide-react";

interface FileUpload {
  value: string;
  endpoint: "messageFile" | "serverImage";
  onChange: (url?: string) => void;
}

const UploadFile = ({ value, endpoint, onChange }: FileUpload) => {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className=" relative w-20 h-20">
        <Image
          src={value}
          alt="image"
          className=" rounded-full w-full h-full"
          width={100}
          height={100}
        />
        <button
          onClick={() => onChange("")}
          className=" w-5 h-5 flex justify-center items-center rounded-full top-0 absolute right-0 bg-red-500 text-white"
        >
          <X />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      className="w-full "
      endpoint={endpoint}
      onClientUploadComplete={(res: any) => {
        onChange(res?.[0]?.url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default UploadFile;
