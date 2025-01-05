import { redirect } from "next/navigation";

import { getCurrentUser } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return (
    <div className="flex gap-4">
      <UserButton />
    </div>
  );
}
