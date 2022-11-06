import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import {Prisma, User} from "@prisma/client"
import {errorCodes} from "../../shared/data"
import { createUser } from 'src/controller/UserController'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const {linkTag, email, password} = req.body;
        const hashedPass = await bcrypt.hash(password, Number(process.env.SALT))
        if (req.method === "POST") {
            let user: User = await createUser(linkTag, email, hashedPass)
            if (user) {
                res.json({id: user.id, image: user.image, status: 200, ok: true, url: "/signin"})
            }
        }
        
    } catch (error: unknown) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.json({error: errorCodes[error.code] || error.message, status: 401, ok: false, url: null})
        }
    }
}