import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Cat from "../public/cat-image.png";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr] gap-8 justify-items-center py-8">
      <div className="text-6xl font-black font-inter w-[48%] text-center">
        Your dream jobs in one platform
      </div>
      <div className="w-[48%]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <Input placeholder="Search jobs" className="h-12 pl-10" />
        </div>
      </div>
      <div>
        <Image
          src={Cat}
          alt="hero"
          width={500}
          height={500}
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
