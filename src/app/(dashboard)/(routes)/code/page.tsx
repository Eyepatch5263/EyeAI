"use client"
import * as z from 'zod'
import Heading from '@/components/Heading'
import axios from 'axios'
import { Braces, MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from './constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import { cn } from '@/lib/utils'
import BotAvatar from '@/components/BotAvatar'
import UserAvatar from '@/components/UserAvatar'
import Markdown from 'markdown-to-jsx'

const CodePage = () => {
    const router = useRouter()
    const [messages, setMessages] = useState<any[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })
    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage = {
                content: values.prompt
            }

            const newMessage = [...messages, userMessage]
            const response = await axios.post('/api/conversation', { messages: newMessage })


            const data2 = { res: response.data }
            setMessages((curr) => [...curr, userMessage, data2])

            form.reset()
        } catch (error) {
            console.log(error)
        }
        finally {

        }
    }
    return (
        <div>
            <Heading
                title='Code Generation'
                description='Generating Code Using Descriptive Text'
                icon={Braces}
                iconColor='text-purple-400'
                bgColor='bg-purple-400/10'
            />
            <div className='px-4 lg:px-8'>
                <div>
                    <Form {...form}>
                        <form className='rounded-lg border w-full p-4 px-3 md:px-6 grid gird-cols-12  gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField name='prompt' render={({ field }) => (
                                <FormItem className='col-span-12 lg:col-span-10'>
                                    <FormControl className='m-0 p-0 placeholder:text-gray-400'>
                                        <Input
                                            style={{ fontFamily: "georgia" }}
                                            className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent  text-md'
                                            disabled={isLoading}
                                            placeholder='How To Import Image In Reactjs'

                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )} />
                            <Button style={{ fontFamily: "georgia" }} className='col-span-12 lg:col-span-2 text-md w-full' disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className='space-y-4 mt-4'
                >
                    {
                        isLoading && (
                            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
                                <Loader />
                            </div>
                        )
                    }
                    {
                        messages.length === 0 && !isLoading && (
                            <div>
                                <Empty icon={Braces} title='No Code Started..' />
                            </div>
                        )
                    }
                    <div className='flex flex-col-reverse gap-y-0'>
                        {messages.map((message) => (
                            <div
                                className={cn("p-8 w-full flex items-start rounded-lg gap-x-4 my-2",message.content?"text-md bg-white border border-black/10":"text-md bg-muted")}
                                key={message}>
                                {!message.content ? <BotAvatar /> : <UserAvatar />}

                                <p dangerouslySetInnerHTML={{__html:message.content}} style={{ fontFamily: "georgia" }}>
                                    
                                </p>
                                <p  className='' style={{ fontFamily: "georgia" }}>
                                <Markdown>{message.res}</Markdown>
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodePage
