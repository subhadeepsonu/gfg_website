import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
const prisma = new PrismaClient()
export async function GET(){
  try{
  const data = await prisma.department.findMany({

  })
  return Response.json({
    data
  })}
  catch{
    return Response.json({
      "message":"something went wrong",
      "status":404
    })
  }
}
export async function POST(req:NextRequest){
  try{
    const body = await req.json()
    const data = await prisma.department.create({
      data:{
        name:body.name
      }
    })
    return Response.json({
        data
    })}
    catch{
      return Response.json({
        "message":"something went wrong",
        "status":404
      })
    }
}
export async function PUT(req:NextRequest) {
  try{
  const body = await req.json()
  const data = await prisma.department.update({
    where:{
      name:body.name
    },
    data:{
      name:body.newname
    }
  })
  return Response.json({
    data
  })}
  catch{
    return Response.json({
      "message":"something went wrong",
      "status":404
    })
  }
}
export async function DELETE(req:NextRequest) {
  try{
  const body = await req.json()
  const data = await prisma.department.delete({
    where:{
      name:body.name
    }
  })
  return Response.json({
    data
  })}
  catch{
    return Response.json({
      "message":"something went wrong",
      "status":404
    })
  }
}
