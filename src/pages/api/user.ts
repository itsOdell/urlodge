// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser, findUser, updateUser } from 'src/controller/UserController'
import { exclude } from 'src/shared/utils/utils'
import bcrypt from "bcryptjs"
import {errorCodes} from "../../shared/data"
import { getSession } from 'next-auth/react'

type Response = User | null

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token: any = await getSession({req})
  const userId = token?.user?.id
    if (req.method === "GET") {
      try {
        const {type} = req.query;
        let userData = exclude(await findUser(String(type), userId, {links: true}) || {}, "password", "emailVerified")
        res.status(200).json(userData)
      } catch (error: any) {
        res.status(500).send({error: errorCodes[error.code] || error.message})
      }
    }
    if (req.method === "PUT") {
      try {
        let userData = exclude(await updateUser(userId, {...req.body}) || {}, "password", "emailVerified");
        res.status(200).json(userData);
      } catch (error: any) {
        console.error(error.message);
        res.status(500).send({error: errorCodes[error.code] || error.message})
      }
    }
    if (req.method === "POST") {
      try {
        const {linkTag, email, password} = req.body;
        const hashedPass = await bcrypt.hash(password, Number(process.env.SALT))
        let user: User = await createUser(linkTag, email, hashedPass)
        res.status(200).json({id: user.id, image: user.image})
      } catch (error: any) {
        res.status(400).send({error: errorCodes[error.code] || error.message})   
      }
    }   
}