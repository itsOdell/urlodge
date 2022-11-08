// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Link } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { createLink, deleteLink } from 'src/controller/LinkController';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {query: {link, title, userId}}: any = req;
    let linkres: Link = await createLink(link, title,userId)
    res.json(linkres)
  }
  if (req.method === "DELETE") {
    const {query: {linkId}}: any = req;
    let linkres: Link | null = await deleteLink(linkId);
    res.json(linkres)
  }
}
