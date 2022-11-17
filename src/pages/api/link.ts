// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Link } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { createLink, deleteLink } from 'src/controller/LinkController';
import { errorCodes } from 'src/shared/data';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token: any = await getSession({req})
  const userId = token?.user.id;
  if (req.method === 'POST') {
    try {
      const {link, title} = req.body;
      let linkres: Link = await createLink(link, title, userId)
      res.status(200).json(linkres)   
    } catch (error: any) {
      res.status(400).send({error: errorCodes[error.code] || error.message})
    }
  }
  if (req.method === "DELETE") {
    try {
      const {linkId}: {[x: string]: string} = req.body;
      let linkres: Link | null = await deleteLink(linkId);
      res.status(200).json(linkres)
    } catch (error: any) {
      res.status(400).send({error: errorCodes[error.code] || error.message})
    }
  }
}

