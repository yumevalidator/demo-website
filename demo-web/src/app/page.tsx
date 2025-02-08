import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <div className="grid grid-rows-3 justify-items-center">
      <div className="text-6xl font-black font-inter w-[48%] text-center">
        Your dream jobs in one platform
      </div>
      <div className="w-[48%] relative">
        <Input placeholder="Search jobs" className="h-12" />
      </div>
      <div className="text-6xl font-extrabold font-inter">
        Your dream jobs in one platform
      </div>
    </div>
  );
}
