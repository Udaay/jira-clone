import { UserButton } from "@/features/auth/components/user-button";
import { MobileSideBar } from "./mobile-sidebar";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between pt-4 px-6">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground"> Monitor all project task here</p>
      </div>
      <MobileSideBar />
      <UserButton />
    </nav>
  );
};
