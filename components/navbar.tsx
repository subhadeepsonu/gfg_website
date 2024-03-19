"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Navbar(){
    const router = useRouter()
    const handleClick = () => {
        router.push('/login');
      };
    return <motion.div className="border-b-2 h-20 bg-black border-gray-900 shadow-sm flex justify-between items-center content-between fixed  z-10 lg:w-full "
    initial={{
      y:-10,opacity:0
    }}
    animate={{
      y:0,opacity:1
    }}
    transition={{
      duration:0.4
    }}
    >
        <div className="flex justify-center items-center w-1/3">

        <img className="rounded-md h-16 mr-4 " src="https://yt3.googleusercontent.com/RlzxV8P1iHmxSycd3LKXw-ca0Gh8KBFGea6ZyWYN4nG3xD1bfC45yfMtm9EbbMUjwrEYhLbJ=s176-c-k-c0x00ffffff-no-rj"></img>
        <div  className="text-green-600 font-bold text-xl ">Geeks For Geeks</div>
        </div>
       <div className="justify-around flex w-1/2 items-center">
       
       <Link  className=" hover:text-white text-gray-300 font-extralight text-lg " href={"/"}>Home</Link>
        
        <Link className=" hover:text-white text-gray-300 font-extralight text-lg" href={"/events"}>Events</Link>
        
        <Link className=" hover:text-white text-gray-300 font-extralight text-lg" href={"/departments"}>Departments</Link>
        <Link  className=" hover:text-white text-gray-300 font-extralight text-lg " href={"/aboutus"}>About</Link>
        <Link  className=" hover:text-white text-gray-300 font-extralight text-lg " href={"/aboutus"}>Contact</Link>
        <Button  variant={"secondary"} onClick={
        handleClick
       }  className="mr-10 font-normal rounded-md ">Log in</Button>
       </div>
     
    </motion.div>
}