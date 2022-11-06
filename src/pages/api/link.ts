// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createLink } from 'src/controller/LinkController';

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
  const {query: {link, title, userId}}: any = req;
  if (req.method === 'POST') {
    let linkres = await createLink(link, title,userId)
    res.json(JSON.stringify(linkres))
  }
}
