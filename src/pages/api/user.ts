// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { findFirst } from 'src/controller/UserController'
import { exclude } from 'src/shared/utils/utils'

type Response = User | null

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "GET") {
    const {query: {type, target}} = req
    let userData = await findFirst(String(type), String(target), {links: true})
    exclude(userData || {}, "password", "emailVerified")
    res.json(userData)
  }
}