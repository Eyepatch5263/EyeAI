import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import {GoogleGenerativeAI} from '@google/generative-ai'

const apiKey=process.env.API_KEY
let genAI:any
if (typeof apiKey === 'string') {
     genAI = new GoogleGenerativeAI(apiKey);
    // Use genAI here
  } else {
    console.error('API_KEY environment variable is not set or not a string.');
    // Handle the error case (throw error, use default value, etc.)
  }
  
  // Using optional chaining (if supported by your JavaScript version)
const model=genAI?.getGenerativeModel({model:"gemini-1.5-flash"})
export async function POST(
    req: Request
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        
        const { messages } = body
        console.log(messages)

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if(!genAI){
            return new NextResponse('Unauthorized access', { status: 403 })
        }

        if (!messages) {
            return new NextResponse('Messages are required', { status: 400 })
        }
        
        const result=await model?.generateContent(messages[messages.length-1].content)
        const response=await result?.response
        const text=response?.text()
        
        return new NextResponse(text, { status: 200 })

        

        
        
    } catch (error) {
        console.log('[CONVERSATION_ERROR', error)
        return new NextResponse('Internal error', { status: 500 })
    }
}