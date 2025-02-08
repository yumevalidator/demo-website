import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <Card className="w-[400px] max-w-full">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>
            Welcome back to your job hunting journey!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="Enter email here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Enter password here" />
              </div>
            </div>
            <Button className="mt-4">Login</Button>
          </form>
        </CardContent>
        <CardFooter>
          I don&apos;t have an account.
          <Button variant="outline" className="ml-4">
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
