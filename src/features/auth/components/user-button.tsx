"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useCurrentUser } from "../api/use-current-user";
import { useLogout } from "../api/use-logout";
import { Loader, LogOut } from "lucide-react";
import { DottedSeparator } from "@/components/dotted-separator";

export const UserButton = () => {
  const { data, isLoading } = useCurrentUser();
  const { mutateAsync: logoutUser } = useLogout();

  if (isLoading || !data) {
    return (
      <div className="size-10 rounded-full flex justify-center bg-neutral-200 border-neutral-200">
        <Loader className="size-4 text-muted-foreground animate-spin" />
      </div>
    );
  }

  const { name, email } = data;

  const avatarFallback = name
    ? name[0].toUpperCase()
    : email[0].toUpperCase() ?? "U";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition border border-neutral-200">
          <AvatarFallback className="flex justify-center items-center bg-neutral-200 font-medium text-neutral-500">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-60"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar className="size-[52px] transition border border-neutral-200">
            <AvatarFallback className="flex text-xl justify-center items-center bg-neutral-200 font-medium text-neutral-500">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center items-center">
            <p className="text-small font-medium text-neutral-900">
              {name || "User"}
            </p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
        </div>
        <DottedSeparator className="mb-1" />
        <DropdownMenuItem
          onClick={() => logoutUser()}
          className="h-10 flex justify-center items-start text-amber-700 font-medium cursor-pointer "
        >
          <LogOut className="size-4  mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
