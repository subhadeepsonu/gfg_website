"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { CircleX, Menu } from "lucide-react";
import { useState } from "react";
export default function Navbar(){
    const [ismenu,setismenu]=useState(false)
    const handlemenu=()=>{
      setismenu(!ismenu)
    }
    const router = useRouter()
    const handleClick = () => {
        router.push('/login');
      };
    return <motion.div className=" border-b-2 h-20 bg-black border-gray-900 shadow-sm flex justify-between items-center content-between fixed  z-10 w-full "
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
        <div className="flex justify-center items-center w-1/2 lg:w-1/3">

        <img className="rounded-md h-16 mr-4 " src="https://yt3.googleusercontent.com/RlzxV8P1iHmxSycd3LKXw-ca0Gh8KBFGea6ZyWYN4nG3xD1bfC45yfMtm9EbbMUjwrEYhLbJ=s176-c-k-c0x00ffffff-no-rj"></img>
        <div  className="text-green-600 font-bold text-xl ">Geeks For Geeks</div>
        </div>
       <div className="hidden lg:flex justify-around  w-1/2 items-center">
       
       <Link  className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/"}>Home</Link>
        
        <Link className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/events"}>Events</Link>
        
        <Link className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/departments"}>Departments</Link>
        <Link  className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/aboutus"}>About</Link>
        <Link  className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/contact"}>Contact</Link>
        <Button  variant={"secondary"} onClick={
        handleClick
       }  className="mr-10 font-normal rounded-md ">Log in</Button>
       </div>
       <div onClick={handlemenu} className="flex flex-col bg-black lg:hidden justify-end  pr-8 items-center text-white  cursor-pointer ">
       {ismenu?( <CircleX></CircleX>):(<Menu></Menu>)}
       {ismenu?(<div className="flex flex-col fixed justify-around h-1/2  w-1/2 items-center top-24 right-2  bg-black">
       
       <Link  className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/"}>Home</Link>
        
        <Link className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/events"}>Events</Link>
        
        <Link className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/departments"}>Departments</Link>
        <Link  className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/aboutus"}>About</Link>
        <Link  className=" hover:text-white text-gray-300 font-extralight text-lg hover:font-light" href={"/contact"}>Contact</Link>
        <Button  onClick={
        handleClick
       }  className="mr-10 font-normal rounded-md ">Log in</Button>
       </div>):(<div></div>)}
       </div>
     
    </motion.div>
}