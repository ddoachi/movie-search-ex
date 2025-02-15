import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY
})

async function sendMessages(messages: OpenAI.ChatCompletionMessageParam[]) {
  const chatCompletion = await openai.chat.completions.create({
    messages,
    model: 'gpt-3.5-turbo'
  })
  console.log(chatCompletion)
  return chatCompletion.choices[0].message
}

export default async function hander(request: VercelRequest, response: VercelResponse) {
  const { messages } = JSON.parse(request.body)
  const message = await sendMessages(messages)
  response.status(200).json(message)
}