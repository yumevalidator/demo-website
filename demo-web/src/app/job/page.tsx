import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function Job() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr] gap-8 justify-items-center py-8">
      <div className="text-6xl font-black font-inter w-[48%] text-center">
        List of Jobs
      </div>
      <div className="w-[48%]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <Input placeholder="Search for a job" className="h-12 pl-10" />
        </div>
      </div>
      <div className="w-[96%]">
        <div className="grid grid-cols-3 gap-4 w-full">
          <Card>
            <CardHeader>
              <CardTitle>Software Developer</CardTitle>
              <CardDescription>Deriv</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Engineer</CardTitle>
              <CardDescription>Deriv</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Analyst</CardTitle>
              <CardDescription>Deriv</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Designer</CardTitle>
              <CardDescription>Deriv</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Manager</CardTitle>
              <CardDescription>Deriv</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Software Developer</CardTitle>
              <CardDescription>Deriv</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
