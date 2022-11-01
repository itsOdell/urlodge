// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface ReqBody { 
  id: string,
  name: string,
  email: string,
  emailVerified: string | null,
  image: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
}