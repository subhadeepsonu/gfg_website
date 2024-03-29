import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Title from "../utils/title"
export default function Faq(){
    return <div className="bg-black flex flex-col justify-center items-center py-10">
    <Title name={"FAQ'S"}></Title>
  <Accordion type="single" className="w-2/3 ">
    <AccordionItem value="1">
      <AccordionTrigger className="text-white flex justify-between font-medium ">How can I contribute to the GFG Club?</AccordionTrigger>
      <AccordionContent className="text-gray-300 flex justify-center font-light">There are many ways to contribute to the GFG Club, such as organizing events, sharing your knowledge and expertise with fellow members, mentoring newcomers, and suggesting ideas for activities or projects.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger  className="text-white flex justify-between font-medium">What are the goals of the GFG Club?</AccordionTrigger>
      <AccordionContent className="text-gray-300 flex justify-center font-light">The primary goals of the GFG Club are to provide a platform for students to enhance their technical skills, facilitate knowledge sharing and collaboration, organize workshops, hackathons, and coding competitions, and promote a culture of innovation and problem-solving.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionTrigger className="text-white flex justify-between font-medium">What kind of activities does the GFG Club organize?</AccordionTrigger>
      <AccordionContent className="text-gray-300 flex justify-center font-light">The GFG Club organizes a variety of activities including coding workshops, tech talks, guest lectures, hackathons, coding competitions, project showcases, and networking events.</AccordionContent>
    </AccordionItem>

  </Accordion>
  </div>
}