import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY
})

export default async function hander(request: VercelRequest, response: VercelResponse) {
  // ...
  response.status(200).json({})
}