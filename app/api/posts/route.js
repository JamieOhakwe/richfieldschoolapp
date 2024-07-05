import { NextResponse } from "next/server"; 
import connect from "../../../db";
import  post from '../../../models/post'

export  const Get = async(request)=>{
    try {
        await connect();
    } catch (error) {
        return new NextResponse("Error in fetching posts" + error, {status:500});
    }
}