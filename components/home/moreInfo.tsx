"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Title from "../utils/title";


const content = [
  {
    title: "Technical",
    description:
      "The Technical Department is the backbone of our club, focusing on organizing workshops, seminars, and competitions aimed at enhancing technical skills among students. From coding challenges to hardware projects, this department ensures that members have ample opportunities to engage with cutting-edge technologies and expand their knowledge in various technical domains.",
   
  },
  {
    title: "Tech Geeks",
    description:
      "Tech Geeks is the platform for the enthusiasts who are always eager to explore the latest trends and upcoming technologies. This department stays ahead of the curve by researching emerging technologies, organizing hackathons, and facilitating discussions on futuristic concepts. It's the go-to place for those who want to dive deep into the tech of tomorrow.",
 
  },
  {
    title: "G-code",
    description:
      "G-Code specializes in providing intensive bootcamps and training sessions aimed at equipping students with practical skills in programming, software development, and other technical areas. Through hands-on workshops and mentorship programs, G-Code empowers members to become proficient in coding languages and frameworks, preparing them for real-world challenges in the tech industry.",

  },
  {
    title: "Design ",
    description:
      "The Design Department focuses on unleashing creativity and innovation through visual communication and design thinking. From graphic design to user experience (UX) design, this department offers workshops and design challenges to help members hone their skills in creating impactful and aesthetically pleasing designs for both digital and physical mediums.",
  
  },
  {
    title: "Marketing",
    description:
      "The Marketing Department is responsible for promoting the club's events, initiatives, and achievements to the wider audience. Through strategic planning, social media campaigns, and creative content, this department ensures that the club maintains a strong online presence and attracts new members and partners.",
  
  },  {
    title: "Reseach and projects",
    description:
     "The Research and Projects Department encourages members to explore their interests and contribute to innovative projects. From conducting research studies to collaborating on practical projects, this department provides resources and guidance to help members turn their ideas into reality and make meaningful contributions to the field of technology." ,
  
  },  {
    title: "Outreach and PR",
    description:
      "Outreach and PR focuses on building connections with external organizations, universities, and communities to expand the club's network and reach. This department organizes outreach events, partnerships, and collaborations to create mutually beneficial opportunities and raise awareness about the club's activities and impact.",
  
  },  {
    title: "Community",
    description:
      "The Community Department fosters a sense of belonging and camaraderie among club members through social events, team-building activities, and mentorship programs. This department creates a supportive environment where members can connect, collaborate, and grow together as a community of passionate learners and innovators.",
  
  },  {
    title: "Social media",
    description:
      "The Social Media Department is responsible for managing the club's social media channels, engaging with followers, and creating engaging content to showcase the club's activities and achievements. By leveraging various social media platforms, this department helps amplify the club's message and reach a wider audience of tech enthusiasts and students.",
  
  },  {
    title: "Content",
    description:
      "The Content Department focuses on creating high-quality written, visual, and multimedia content to inform, inspire, and educate the club's audience. From blog posts to videos, this department highlights the latest trends, insights, and stories in the world of technology, keeping members informed and engaged with relevant and valuable content.",
  
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="">
        <div className="flex justify-center items-center font-bold text-white text-3xl pb-5">
            OUR DEPARTMENT'S
        </div>
        
      <StickyScroll content={content} />
      
    </div>
  );
}
