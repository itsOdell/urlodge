// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Link } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { createLink } from 'src/controller/LinkController';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {query: {link, title, userId}}: any = req;
  if (req.method === 'POST') {
    let linkres: Link = await createLink(link, title,userId)
    res.json(linkres)
  }
}
