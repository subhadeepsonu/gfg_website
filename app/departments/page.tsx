// "use client"
// import Department_card from "@/components/department_card";
// import { Button } from "@/components/ui/button";

import MemberCard from "@/components/member_card";

// import axios from "axios";
// import { useRouter } from "next/navigation";

// async function Departmentinfo() {
//     try {
//         const response = await axios.get("http://localhost:3000/api/departments");
//         return response.data; // Returning response.data
//     } catch (error) {
//         console.error("Error fetching department data:", error);
//         return []; // Return an empty array in case of an error
//     }
// }
// export default async function DepartmentPage() {
//     const router = useRouter()
    
//     const data = await Departmentinfo();
//     console.log("Data received:", data.data); // Log the received data

    
//     if (!Array.isArray(data.data)) {
        
//         return (
//             <div className="flex justify-center items-center bg-black text-white h-screen">
//                 <p>Error fetching data</p>
//             </div>
//         );
//     }

//     return (
//         <div className=" flex justify-around items-start  bg-black h-screen ">
//         <div className="grid grid-cols-6 gap-10 pl-10 pt-5 text-white w-screen ">
//             {data.data.map((department: { name: string; }) => (
                 
//                  <Department_card  inputString={department.name} />
//             ))}
//         </div>
//         <Button onClick={()=>{
//             router.push('/departments/add_department')
//         }} className="fixed bottom-10 right-10 " variant={"secondary"}>Add Department</Button>
       
//         </div>
//     );
// }
export  default function(){
    return <div className="bg-black min-h-screen flex justify-center items-center flex-col
    ">
        <div className="bg-black h-20">

        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
         <MemberCard giturl="" imgurl="https://www.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-910x1024.jpg" instaurl="" linkdinurl="" name="Subhadeep Thandaka"></MemberCard>
         <MemberCard giturl="" imgurl="https://1847884116.rsc.cdn77.org/telugu/gallery/actor/saidharamtej/saidharamtejposter.jpg" instaurl="" linkdinurl="" name="Abijit prasant"></MemberCard>
         <MemberCard giturl="" imgurl="data:image/jpeg;base64,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" instaurl="" linkdinurl="" name="nagababu"></MemberCard>
         <MemberCard giturl="" imgurl="https://w0.peakpx.com/wallpaper/207/562/HD-wallpaper-pspk-kushi-pspk-kushi-hero-pawan-kalyan-telugu-actor.jpg" instaurl="" linkdinurl="" name="sanjay"></MemberCard>
         <MemberCard giturl="" imgurl="https://qph.cf2.quoracdn.net/main-qimg-ed82f6de6d04998fac76281699831222-lq" instaurl="" linkdinurl="" name="pretam"></MemberCard>
        
         </div>
    </div>
}