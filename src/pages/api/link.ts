// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../lib/prisma"

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
  const {id, name, email, emailVerified = null, image = null}: ReqBody = req.body;

  if (req.method === 'POST') {
    await prisma.user.create({
      data: {
        name,
        email,
        emailVerified,
        image
      }
    })
  }
  else if (req.method === 'GET') {
    await prisma.user.findMany()
  }
  else if (req.method === 'DELETE') {
    await prisma.user.delete({
      where: {
        email
      }
    })
  }
}