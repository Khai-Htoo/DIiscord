"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Form } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UploadFile from "@/components/custom/upload-image";
import { ServerFormSchema } from "@/schema";
import { createServer } from "@/utils/action";
import { redirect } from "next/navigation";

const InitialModel = () => {
  const form = useForm<z.infer<typeof ServerFormSchema>>({
    resolver: zodResolver(ServerFormSchema),
    defaultValues: {
      serverName: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isLoading;

  async function onSubmit(values: z.infer<typeof ServerFormSchema>) {
    const server = await createServer(values);
    console.log(server);

    form.reset();
    server?.id && redirect(`/server/${server.id}`);
  }

  return (
    <div>
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=" text-center text-2xl">
              Customize your server?
            </DialogTitle>
            <DialogDescription className=" text-center text-zinc-500">
              Give your server a personality with a name and an image.You can
              change it later.
            </DialogDescription>
          </DialogHeader>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem className=" flex justify-center">
                    <FormControl className="w-full">
                      <UploadFile
                        endpoint="serverImage"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serverName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className=" focus-visible:ring-0 bg-slate-200 py-5 focus-visible:ring-offset-purple-50"
                        disabled={isLoading}
                        placeholder="Enter Server name.."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant={"primary"}
                className="w-full "
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Save"}
              </Button>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InitialModel;
