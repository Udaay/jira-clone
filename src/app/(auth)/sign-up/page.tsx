import { redirect } from "next/navigation";

import { SignUpCard } from "@/features/auth/components/sign-up-card";

import { getCurrentUser } from "@/features/auth/actions";

async function SignUpPage() {
  const user = await getCurrentUser();

  if (user) redirect("/");

  return <SignUpCard />;
}

export default SignUpPage;
