// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { findFirst } from 'src/controller/UserController'
import { exclude } from 'src/shared/utils/utils'
// import prisma from "../../prisma/prisma"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const {query: {type, target}} = req
    let data = await findFirst(type as string, target as string, {links: true})
    // let user = exclude(data, 'password', "emailVerified")
    res.json(JSON.stringify(data))
  }
}