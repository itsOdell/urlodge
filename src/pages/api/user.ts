// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { findFirst, updateUser } from 'src/controller/UserController'
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
  if (req.method === "PUT") {
    console.log("ran")
    const {query: {userId}} = req;
    // const {params: {tag, biography}} = req.body;
    console.log({...req.body})
    console.log(req.query)
    let userData = await updateUser<any>(String(userId), {...req.body});
    res.json(userData);
  }
  if (req.method === "POST") {
    
  }
}