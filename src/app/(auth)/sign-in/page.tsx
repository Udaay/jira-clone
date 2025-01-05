import { redirect } from "next/navigation";

import { getCurrentUser } from "@/features/auth/actions";
import { SignInCard } from "@/features/auth/components/sign-in-cards";

async function SignInPage() {
  const user = await getCurrentUser();

  if (user) redirect("/");
  return <SignInCard />;
}

export default SignInPage;
