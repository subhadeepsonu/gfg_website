import {  InstagramIcon,YoutubeIcon,LinkedinIcon,GithubIcon} from "lucide-react";

export default function  Footer(){
    return <div className="bg-black h-32 flex justify-around items-center text-white">
            <div className="w-1/2 border-r-2 border-gray-300 flex justify-center items-center font-light text-center text-md">
            Geeks for geeks VIT-AP, the student chapter from VIT-AP is
a team of young and enthusiastic engineers dedicated with an unparalleled commitment .
            </div>
            <div className="flex justify-evenly items-center w-1/2">
            <a href="https://www.instagram.com/geeksforgeeks_vitap" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-100" >
                <InstagramIcon></InstagramIcon>
            </a>
            <a href="https://www.youtube.com/@GFGVIT-AP" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-100">
                <YoutubeIcon></YoutubeIcon>
            </a>
            <a href="https://www.linkedin.com/company/geeks-for-geeks-vitap/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-100">
                <LinkedinIcon></LinkedinIcon>
            </a>
            <a href="https://github.com/GFGVITAP" target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-100">
                <GithubIcon ></GithubIcon>
            </a>
            </div>
    </div>
}