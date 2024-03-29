import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
const prisma = new PrismaClient()
export async function GET(){
    try{
        const data = await prisma.events.findMany()
        return Response.json({
            data
        })
    }catch{
        return Response.json({
            "msg":"error",
            "status":404
        })
    }
}
export async function POST(req:NextRequest){
    try{
        const body = await req.json()
        const resp = await prisma.events.create({
            data:{
                name:body.name,
                startDate:body.startDate,
                startTime:body.startTime,
                endDate:body.endDate,
                endTime:body.endTime,
                location:body.location,
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
export async function PUT(req:NextRequest){
    try{
        const body = await req.json()
        const resp = await prisma.events.updateMany({
            where:{
                name:body.name
            },
            data:{
                name:body.name,
                startDate:body.startDate,
                startTime:body.startTime,
                endDate:body.endDate,
                endTime:body.endTime,
                location:body.location,
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