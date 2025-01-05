import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormControl,
  FormMessage,
  Form,
  FormItem,
} from "@/components/ui/form";
import Link from "next/link";
import { loginFormSchema } from "../schemas";
import { useLogin } from "../api/use-login";

export const SignInCard = () => {
  const router = useRouter();
  const { mutateAsync: mutateLoginAsync } = useLogin();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
    mutateLoginAsync(
      { json: data },
      {
        onSuccess: () => {
          router.push("/");
        },
      }
    );
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center p-7">
        <CardTitle className="text-2xl">Welcome Back </CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email Address"
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
                      {...field}
                      type="password"
                      placeholder="Enter password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size={"lg"} className="w-full">
              Sign In
            </Button>
          </form>
        </Form>
        <div className="my-6">
          <DottedSeparator />
        </div>
        <div className="flex flex-col gap-y-4">
          <Button
            disabled={false}
            size={"lg"}
            className="w-full"
            variant={"secondary"}
            onClick={() => {}}
          >
            <FcGoogle className="mr-2 !size-5" />
            Login with Google
          </Button>
          <Button
            disabled={false}
            size={"lg"}
            className="w-full"
            variant={"secondary"}
            onClick={() => {}}
          >
            <FaGithub className="mr-2 !size-5" />
            Login with Github
          </Button>
        </div>
        <div className="my-6">
          <DottedSeparator />
        </div>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
