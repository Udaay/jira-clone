import Link from "next/link";
import Image from "next/image";

import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="./logo2.svg" alt="Logo" width={32} height={24} />
          <h3 className="text-blue-600 font-bold">Planify</h3>
        </div>
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
