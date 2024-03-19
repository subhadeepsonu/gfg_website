import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Signup(){
    return <div>
        <Card className="min-h-96 w-96 bg-green-600 border-black">
            <CardHeader className="">
                <CardTitle className="flex justify-center text-white font-extrabold">
                SIGN UP
                </CardTitle>
              
            </CardHeader>
            <CardContent className="flex justify-around flex-col  items-start">
            <Label className="py-4 text-white">name</Label>
                <Input type="text" placeholder="email"></Input>
                <Label className="py-4 text-white">email</Label>
                <Input type="email" placeholder="email"></Input>
                <Label className="py-4 text-white">password</Label>
                <Input type="password" placeholder="password"></Input>
            </CardContent>
            <CardFooter className="flex justify-center flex-col">
                <Button variant={"outline"}>Sign up </Button>
                <div className="flex justify-around items-center py-4">
                <p className="text-white">Already have an account?</p>
                <Link href="/login" className="text-white hover:underline">Login</Link>
                </div>
            </CardFooter>
        </Card>
   
    </div>
}