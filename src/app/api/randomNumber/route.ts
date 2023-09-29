import { NextRequest,NextResponse } from "next/server";

interface numResponse{
    aNumber:number;
}
export const  GET = async(req:NextRequest,res:NextResponse<numResponse>) =>{
    const aNumber = () => Math.floor(Math.random()*100);
    console.log(`Number generated in the API:${aNumber()}`)
    return NextResponse.json({aNumber : aNumber()},{status:200})
    
}