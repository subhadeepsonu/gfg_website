import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
const prisma = new PrismaClient()
export async function GET(){
    try{
    const data = await prisma.member.findMany()
    return Response.json({
        data
    })
}catch{
        return Response.json({
            "message":"error occured",
            "status":404
        })
    }
}
export async function POST(req:NextRequest){
    try{
    const body = await req.json();
    const haha = await prisma.member.create({
        data:{
            email:body.email,
            name:body.name,
            RG_no:body.RG_no,
            role:body.role,
            departmentname:body.departmentname
        }
    })
    return Response.json({
        haha
    })}
    catch{
        return Response.json({
          "message":"something went wrong",
          "status":404
        })
      }
}
export async function PUT(req:NextRequest){
    try{
    const body = await req.json();
    const haha = await prisma.member.update({
        where:{
            RG_no:body.RG_no
        },
        data:{
            email:body.email,
            name:body.name,
            RG_no:body.RG_no,
            role:body.role,
            departmentname:body.departmentname
        }
    })
    return Response.json({
        haha
    })}
    catch{
        return Response.json({
          "message":"something went wrong",
          "status":404
        })
      }
}
export async function DELETE(req:NextRequest){
    try{
    const body = await req.json()
    const haha = await prisma.member.delete({
        where:{
            RG_no:body.RG_no
        }
    })
    return Response.json({
        haha
    })}
    catch{
        return Response.json({
          "message":"something went wrong",
          "status":404
        })
      }
}