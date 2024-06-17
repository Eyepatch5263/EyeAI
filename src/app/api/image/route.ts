import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"


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
        if (!messages) {
            return new NextResponse('Messages are required', { status: 400 })
        }
        
        

        

        
        
    } catch (error) {
        console.log('[CONVERSATION_ERROR', error)
        return new NextResponse('Internal error', { status: 500 })
    }
}