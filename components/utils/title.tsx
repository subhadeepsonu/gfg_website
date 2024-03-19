"use client"
import { motion } from "framer-motion";

export default function Title(props:{
  name:String
}){
    return <motion.div className="text-3xl font-semibold"     initial={{
        x:10,opacity:0
      }}
      animate={{
        x:0,opacity:1
      }}
      transition={{
        duration:0.2
      }}>
          {props.name}
    </motion.div>
}