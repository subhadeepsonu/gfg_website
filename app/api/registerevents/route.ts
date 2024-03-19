import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
const prisma = new PrismaClient()

export async function GET(){
    try{
    const data = await prisma.registerevent.findMany()
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
export async function POST(req:NextRequest) {
    try{
    const body = await req.json()
    const resp = await prisma.registerevent.create({
        data:{
            userid:body.userid,
            eventid:body.eventid
        }
    })
    return Response.json({
        resp
    })}
    catch{
        return Response.json({
            "msg":"error",
            "status":404
        })
    }
}
export async function DELETE(req:NextRequest){
    try{
            const body = await req.json()
            const resp = await prisma.registerevent.deleteMany({
                where:{
                    eventid:body.eventid,
                    userid:body.userid
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
export async function UPDATE(req:NextRequest){
    try{
        const body = await req.json()
        const resp = await prisma.registerevent.updateMany({ 
            where:{
                eventid:body.eventid,
                    userid:body.userid
            },data:{
                checkedin:true
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