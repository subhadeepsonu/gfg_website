import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
export default function Faq(){
    return <div className="bg-black flex flex-col justify-center items-center py-10">
    <div className="text-white text-3xl font-semibold pb-10">
      Frequently asked question's
    </div>
  <Accordion type="single" className="w-1/2 ">
    <AccordionItem value="1">
      <AccordionTrigger className="text-white flex justify-between font-medium ">How can I contribute to the GFG Club?</AccordionTrigger>
      <AccordionContent className="text-white flex justify-center font-light">There are many ways to contribute to the GFG Club, such as organizing events, sharing your knowledge and expertise with fellow members, mentoring newcomers, and suggesting ideas for activities or projects.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger  className="text-white flex justify-between font-medium">What are the goals of the GFG Club?</AccordionTrigger>
      <AccordionContent className="text-white flex justify-center font-light">The primary goals of the GFG Club are to provide a platform for students to enhance their technical skills, facilitate knowledge sharing and collaboration, organize workshops, hackathons, and coding competitions, and promote a culture of innovation and problem-solving.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionTrigger className="text-white flex justify-between font-medium">What kind of activities does the GFG Club organize?</AccordionTrigger>
      <AccordionContent className="text-white flex justify-center font-light">The GFG Club organizes a variety of activities including coding workshops, tech talks, guest lectures, hackathons, coding competitions, project showcases, and networking events.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="4">
      <AccordionTrigger className="text-white flex justify-between font-medium">Do I need to have prior programming experience to join the GFG Club?</AccordionTrigger>
      <AccordionContent className="text-white flex justify-center font-light">No, the GFG Club welcomes students of all skill levels, from beginners to advanced programmers. Our activities cater to a wide range of interests and proficiency levels, and we encourage everyone to participate and learn at their own pace.
</AccordionContent>
    </AccordionItem>
    <AccordionItem value="5">
      <AccordionTrigger className="text-white flex justify-between font-medium">How can I stay updated with GFG Club events and announcements?</AccordionTrigger>
      <AccordionContent className="text-white flex justify-center font-light">To stay updated with GFG Club events and announcements, follow us on social media platforms like Facebook, Instagram, and Twitter.</AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
}