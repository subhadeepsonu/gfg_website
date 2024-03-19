"use client"
import { motion } from "framer-motion";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";


export default function MemberCard(props:{
    name:string,
    imgurl:string,
    giturl:string,
    instaurl:string,
    linkdinurl:string,
}){
    return <motion.div  className="bg-black  border-gray-800 border-2 h-96 w-64 flex justify-between flex-col items-center rounded-lg  cursor-pointer m-2 hover:scale-105 duration-100 "
    initial={{
        y:10,opacity:0
    }}
    animate={{
        y:0,opacity:1
    }}
    transition={{
        duration:0.4,delay:0.2
    }}
    >
        <div className="h-72 w-56  rounded-lg flex justify-center items-center bg-membercardback">
        <img src={props.imgurl} alt="haha" className="h-64 w-56 rounded-lg" ></img>
        </div>
        <div className="h-12 flex justify-center items-center font-semibold text-md text-gray-200">
        {props.name}
        </div>
        <div className="flex justify-evenly items-center h-12 w-full">
            <a href={props.instaurl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-100" >
                <InstagramIcon color="white"></InstagramIcon>
            </a>
            <a href={props.linkdinurl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-100">
                <LinkedinIcon color="white"></LinkedinIcon>
            </a>
            <a href={props.giturl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-100">
                <GithubIcon color="white"></GithubIcon>
            </a>
            </div>
    </motion.div>
}