"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

export default function Login(){
    return <motion.div 
    initial={{
        x:-10,opacity:0
    }}
    animate={{
        x:0,opacity:1
    }}
    transition={{
        duration:0.3
    }}
    >
        <Card className="min-h-80 w-96 bg-green-600 border-black">
            <CardHeader className="">
                <CardTitle className="flex justify-center text-white font-extrabold">
                LOG IN
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around flex-col  items-start">
                <Label className="py-4 text-white">email</Label>
                <Input type="email" placeholder="email"></Input>
                <Label className="py-4 text-white">password</Label>
                <Input type="password" placeholder="password"></Input>
            </CardContent>
            <CardFooter className="flex justify-center flex-col">
                <Button  variant={"outline"}>Log in </Button>
                <div className="flex justify-around items-center py-4">
                <p className="text-white">Dont have an account?  </p>
                <Link href="/signup" className="text-white hover:underline">Signup</Link>
                </div>
            </CardFooter>
        </Card>
   
    </motion.div>
}