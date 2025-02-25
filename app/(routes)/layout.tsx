import ClientWrapper from "@/components/Clientwrapper";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-full pt-12">
        <ClientWrapper>{children}</ClientWrapper>
      </div>
    </div>
  );
}
