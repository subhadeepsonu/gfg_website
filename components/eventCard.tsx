"use client"
import { Calendar, CalendarDays, Locate, LocateIcon, MapPin } from "lucide-react";
import {motion} from "framer-motion";
import { Button } from "./ui/button";


export default function EventCard(props:{
    imgurl:string,
    eventName:string,
    location:string,
    dateAndTime:string
}){
    return <motion.div className="w-80 h-80 bg-white rounded-md cursor-pointer m-10" 
    initial={{
        y:10,opacity:0
      }}
      animate={{
        y:0,opacity:1
      }}
      transition={{
        duration:0.5,delay:0.2
      }}>
        <img src={props.imgurl} className="w-80 h-52 rounded-t-md"></img>
        <div className="flex justify-around items-center  ">
        <div className="flex justify-evenly items-start flex-col h-28">
        <div className="text-black font-bold">{props.eventName}
        </div>
        <div className="text-black flex ">
            <MapPin></MapPin>
            {props.location}</div>
        <div className="text-black flex">
            <CalendarDays></CalendarDays>
            {props.dateAndTime}</div>
        </div>
        <div className="flex items-end h-28 pb-4">
        <Button >Register</Button>
        </div>
        </div>
    </motion.div>
}