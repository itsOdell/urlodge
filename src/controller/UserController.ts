import { User } from "@prisma/client";
import prisma from "../prisma/prisma";

export async function createUser(linkTag: string, email: string, hashedPass: string): Promise<User> {
    try {
        let user: User = await prisma.user.create({
            data: {
                linkTag: linkTag,
                email: email,
                password: hashedPass
            }
        })
        return user
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function findUser(type: string, target: string, include?: {[x: string]: boolean}): Promise<User | null> {
    try {
        let user: User | null = await prisma.user.findFirst({ 
            where: {
              [type]: target
            },
            include: include,
          })
        return user 
    } catch (error: any) {
       throw new Error(error)
    }
}

export async function updateUser(userId: string, params: {[x: string]: string}) {
    try {
        let user: User = await prisma.user.update({
            where: {
                id: userId
            },
            data: params
        })
        return user;    
    } catch (error: any) {
        throw new Error(error)
    }
}
