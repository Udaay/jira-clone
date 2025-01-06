import { NavBar } from "@/components/nav-bar";
import { Sidebar } from "@/components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full ">
          <div className="mx-auto max-w-screen-2xl h-full w-full">
            <NavBar />
            <main className="flex flex-col py-8 px-6">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
