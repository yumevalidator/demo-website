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

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <Card className="w-[400px] max-w-full">
        <CardHeader>
          <CardTitle className="text-xl">Sign up</CardTitle>
          <CardDescription>
            Sign up for a new account for more fun!
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
                <Label htmlFor="name">Name</Label>
                <Input placeholder="Enter name here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Enter password here" />
              </div>
            </div>
            <Button className="mt-4">Create account</Button>
          </form>
        </CardContent>
        <CardFooter>
          I have an account.
          <Button variant="outline" className="ml-4">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
