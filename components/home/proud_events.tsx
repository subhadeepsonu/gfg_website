"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export default function ProudEvents() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center text-white text-3xl font-semibold pb-10"> OUR EVENT'S</div>
    <div className="min-h-[40rem] grid grid-col-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      <DirectionAwareHover imageUrl="https://media.licdn.com/dms/image/D5622AQGtonh54XGkjg/feedshare-shrink_800/0/1710127693819?e=1714003200&v=beta&t=JYw4EVLkTARKLOb30helKaEn-q9XnymVWEnaRsMOpVw">
        <p className="font-bold text-xl">Code crunch</p>
        <p className="font-normal text-sm">CB G-13</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl="https://media.licdn.com/dms/image/D5622AQF76szM-tALpg/feedshare-shrink_800/0/1705484506018?e=1714003200&v=beta&t=RfP4F5wAehwG_jDzWMay-dsPGMweiSML2TdtGj1_thg">
        <p className="font-bold text-xl">Designathon</p>
        <p className="font-normal text-sm">CB IIC</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl="https://media.licdn.com/dms/image/D5622AQEyN9Qg1f1jaQ/feedshare-shrink_800/0/1706114643431?e=1714003200&v=beta&t=2CU3mibpXoxrC7R2iDRZm8EkN5aClAP5OJOx1TSHoKo">
        <p className="font-bold text-xl">Linkedin workshop</p>
        <p className="font-normal text-sm">CB G-18</p>
      </DirectionAwareHover>
      
    </div>
    </div>
  );
}
