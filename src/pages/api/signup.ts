// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../lib/prisma"
import bcrypt from "bcryptjs"
import {User, Prisma} from "@prisma/client"
import {errorCodes} from "../../data/"

type Data = string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
        const {linkTag, email, password} = req.body;
        const hashedPass = await bcrypt.hash(password, Number(process.env.SALT))
        if (req.method === "POST") {
           let user: User = await prisma.user.create({
                data: {
                    linkTag: linkTag,
                    email: email,
                    password: hashedPass
                }
            })
            if (user) {
                res.json(JSON.stringify({id: user.id, image: user.image, status: 200, ok: true, url: "/signin"}))
            }
        }
        
    } catch (error: unknown) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.json(JSON.stringify({error: errorCodes[error.code], status: 401, ok: false, url: null}))
        }
    }
}