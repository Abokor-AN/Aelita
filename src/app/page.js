import Image from "next/image";
import { ModeToggle } from "@/components/ui/toggle-theme";

import { ResponsiveDivLayout } from "@/components/responsive-div-layout";

export default function Home() {
  return (
    <ResponsiveDivLayout
      className={"flex flex-row lg:flex-row "}
    ></ResponsiveDivLayout>
  );
}

// <ModeToggle></ModeToggle>
