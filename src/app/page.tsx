"use client";

import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogout } from "@/features/auth/api/use-logout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const { data: user, isLoading } = useCurrentUser();
  const { mutateAsync: logoutUser } = useLogout();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/sign-in");
    }
  }, [user, isLoading, router]);

  const handleLogout = async () => {
    await logoutUser();
    router.push("/sign-in");
  };

  return (
    <div className="flex gap-4">
      Home Page For Authorized User
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
