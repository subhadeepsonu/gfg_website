import Gcode from "@/components/home/g-code";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import ProudEvents from "@/components/home/proud_events";
import Moreinfo from "@/components/home/moreInfo";


export default function Home() {
  return (
    <div className="flex flex-col bg-black" 
    
    > 
    <div className="h-20 bg-back"></div>
    <Hero></Hero>
    <ProudEvents></ProudEvents>
    
    <Moreinfo></Moreinfo>
    
    <Gcode></Gcode>
    <Faq></Faq>
   </div>
  );
}
