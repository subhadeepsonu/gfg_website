"use client"
import EventCard from "@/components/eventCard"
import { Button } from "@/components/ui/button"
import Title from "@/components/utils/title"
import { useRouter } from "next/navigation"
export default async function(){
    const router = useRouter()
      
    return <div className="flex justify-center  items-center flex-col bg-black text-white min-h-screen">
        <div className="bg-black h-20"></div>

        
        <div className="grid grid-cols-1 pl-10  md:grid-cols-2 lg:grid-cols-3 ">
        <EventCard dateAndTime={"22/01/24 2:00 pm"} eventName={"Code crunch"} imgurl={"https://media.licdn.com/dms/image/D5622AQGtonh54XGkjg/feedshare-shrink_2048_1536/0/1710127693814?e=2147483647&v=beta&t=B8QJsN_R__n0VoCFYtMWfhnjIssooWDomwbXwHhAMso"} location={"cb-202"} key={
            1
        }></EventCard>
   <EventCard dateAndTime={"2/02/24 4:00 pm"} eventName={"Hacktober fest"} imgurl={"https://media.licdn.com/dms/image/D5622AQGkS_OJXzlbKw/feedshare-shrink_2048_1536/0/1699532223506?e=2147483647&v=beta&t=hzZj0ku73xEqWAHjnu1PSfr94WldHY7lD2vWampblHc"} location={"cb-202"} key={
            1
        }></EventCard>
           <EventCard dateAndTime={"10/03/24 3:00 pm"} eventName={"BGMI"} imgurl={"https://media.licdn.com/dms/image/D5622AQH0o9y4izzPhA/feedshare-shrink_800/0/1701582896729?e=2147483647&v=beta&t=byNOPn9xawMq6JQe98HmtJTDQt6p9GlJnwU8cziWaAk"} location={"cb-202"} key={
            1
        }></EventCard>
           <EventCard dateAndTime={"14/04/24 12:00 pm"} eventName={"Blind guess"} imgurl={"https://media.licdn.com/dms/image/D5622AQFJ7XRehHzGGw/feedshare-shrink_800/0/1701583476221?e=2147483647&v=beta&t=NZAR_ShzKBiXPWkj_wCpkCUZYcYOhWEySTZO4hF8qCs"} location={"cb-202"} key={
            1
        }></EventCard>
</div>
        <Button variant={"secondary"} className="fixed right-10 bottom-10" onClick={()=>{
            router.push("/events/add_event")
        }

        }>Create event</Button>
       
    </div>
}