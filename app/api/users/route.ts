import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try{
    const body = await req.json()
    const resp = prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            password:body.password,
            imgurl:body.imgurl
        }
    })
    return Response.json({
        resp
    })}
    catch{
        Response.json({
            "msg":"error",
            "status":404
        })
    }
}
export async function PUT(req:NextRequest){
    try{
        const body= await req.json()
        const resp = await prisma.user.update({
            where:{
                email:body.email
            },
            data:{
                imgurl:body.imgurl
            }

    })
    return Response.json({
        resp
    })
    }catch{
        return Response.json({
            "msg":"error",
            "status":404
        })
    }
}
// export async function UPDATE(req:NextRequest){
//     try{
//         const body = await req.json()
//         const resp = await prisma.user.update({
//             where:{
//                 email:body.email
//             },
//             data:{
//                 name:body.name,
//                 password:body.password,
//                 imgurl:body.imgurl

//             }
        
//         })
//         return Response.json({
//             resp
//         })
//     }catch{
//         return Response.json({
//             "msg":"error",
//             "status":404
//         })
//     }
// }
