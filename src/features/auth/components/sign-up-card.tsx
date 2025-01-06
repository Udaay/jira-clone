"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { signUpFormSchema } from "../schemas";
import useSignUp from "../api/use-signup";

export const SignUpCard = () => {
  const { mutateAsync: mutateSignUpAsync, isPending, isSuccess } = useSignUp();
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = (data: z.infer<typeof signUpFormSchema>) => {
    mutateSignUpAsync({ json: data });
  };

  const isDisabled = isPending || isSuccess;

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By signing up you agree to our
          <Link href="/privacy">
            <span className="text-blue-700"> Privacy Policy </span>
          </Link>
          and
          <Link href="/terms">
            <span className="text-blue-700"> Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size={"lg"} className="w-full" disabled={isDisabled}>
              Sign Up
            </Button>
          </form>
        </Form>
        <div className="my-6">
          <DottedSeparator />
        </div>
        <div className="flex flex-col gap-y-4">
          <Button
            disabled={isDisabled}
            size={"lg"}
            className="w-full"
            variant={"secondary"}
            onClick={() => {}}
          >
            <FcGoogle className="mr-2 !size-5" />
            Signup with Google
          </Button>
          <Button
            disabled={isDisabled}
            size={"lg"}
            className="w-full"
            variant={"secondary"}
            onClick={() => {}}
          >
            <FaGithub className="mr-2 !size-5" />
            Signup with Github
          </Button>
        </div>
        <div className="my-6">
          <DottedSeparator />
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/sign-in">
            <span className="text-blue-700">Login</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
