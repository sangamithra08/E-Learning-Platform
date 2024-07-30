import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-full w-full flex justify-center items-center  ">
      <Card className="w-1/4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="roll">Rollnumber</Label>
            <Input id="roll" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@skct.edu.in" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="******"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="grid gap-4">
          <div className="grid gap-2">
            <Link to='/'>
            <Button>Create account</Button></Link>
          </div>
          <div className=" flex justify-center items-center">
            <span>
              Already have an account ? <Link className="text-teal-600" to="/login">Login</Link>
            </span>
          </div>
        </CardFooter>
      </Card>
      
    </div>
  );
};

export default Register;
