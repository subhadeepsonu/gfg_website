import React, { createContext } from 'react';
import EventCard from "../eventCard";
import Title from '../utils/title';

export default function ProudEvents(){
    return <div className="bg-black min-h-96 flex justify-around items-center flex-col text-white">
        <Title name={"Our Events"} ></Title>
        <div className="grid grid-cols-1 pl-10  md:grid-cols-2 lg:grid-cols-3 ">
        <EventCard dateAndTime={"22/01/24 2:00 pm"} eventName={"Code crunch"} imgurl={"https://media.licdn.com/dms/image/D5616AQHy_rGUp9aS4g/profile-displaybackgroundimage-shrink_200_800/0/1705260362825?e=2147483647&v=beta&t=2OUDdg8MiZEcNWPyv7y-YT4zBN2H4Mp9dTnLDoA5GCc"} location={"cb-202"} key={
            1
        }></EventCard>
   <EventCard dateAndTime={"2/02/24 4:00 pm"} eventName={"Hacktober fest"} imgurl={"https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg"} location={"cb-202"} key={
            1
        }></EventCard>
           <EventCard dateAndTime={"10/03/24 3:00 pm"} eventName={"BGMI"} imgurl={"https://s3.india.com/wp-content/uploads/2023/03/BGMI.jpg"} location={"cb-202"} key={
            1
        }></EventCard>
           <EventCard dateAndTime={"14/04/24 12:00 pm"} eventName={"Blind guess"} imgurl={"https://www.shutterstock.com/image-photo/closeup-hand-play-guessing-shell-600nw-2071758143.jpg"} location={"cb-202"} key={
            1
        }></EventCard>
        </div>
    </div>
}