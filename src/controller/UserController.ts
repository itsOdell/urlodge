import { User } from "@prisma/client";
import prisma from "../prisma/prisma";

export async function createUser(linkTag: string, email: string, hashedPass: string): Promise<User> {
    let user: User = await prisma.user.create({
        data: {
            linkTag: linkTag,
            email: email,
            password: hashedPass
        }
    })
    return user
}

export async function findFirst(type: string, target: string): Promise<User | null> {
    let user: User | null = await prisma.user.findFirst({ 
        where: {
          [type]: target
        }
      })
    return user
}