import LeftSideBar from "@/components/LeftSideBar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-custom flex flex-col lg:flex-row">
      <LeftSideBar />
      <RightSidebar />
    </div>
  );
}
