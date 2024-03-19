"use client"
import { motion } from "framer-motion";


export default  function Hero(){
    return <div className="bg-black  h-[500px] flex justify-center items-center text-white mb-10" 
    
    >
        <motion.div className="grid grid-cols-1 lg:grid-cols-2" 
        initial={{
            y:10,opacity:0
        }}
        animate={{
            y:0,opacity:1
        }}
        transition={{
            duration:0.4
        }}
        >
        <div className="flex justify-center items-start flex-col w-[500px]  ">
        <div className="font-bold text-5xl text-center">
            GEEKS FOR GEEKS
        </div>
        <div className="font-semibold text-3xl py-10 text-center">
            VITAP STUDENT CHAPTER
        </div>
        <div className="text-green-600 font-light text-xl ">
        Geeks for geeks Vit-ap, the student chapter from VIT-AP is a team of young and enthusiastic engineers dedicated with an unparalleled commitment to
student's satisfaction. This platform has been created for every geek wishing to expand their knowledge.
        </div>
        </div>
        <div className="flex justify-center items-center">
            <img className="h-96" src="https://media.licdn.com/dms/image/D5622AQG_m-Z1AVn8qA/feedshare-shrink_2048_1536/0/1701702067342?e=2147483647&v=beta&t=fHLO2LWw8y5HojoCwS_r9iNcyWJIPU4YIVSnkbYoRds">
                
            </img>
        </div>
    </motion.div>
    </div>
}