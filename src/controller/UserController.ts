import { User } from "@prisma/client";
import prisma from "../prisma/prisma";
import { Prisma } from "@prisma/client";

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

export async function findFirst(type: string, target: string, include?: {[x: string]: boolean}): Promise<User | null> {
    let user: User | null = await prisma.user.findFirst({ 
        where: {
          [type]: target
        },
        include: include,
      })
    return user
}

export async function updateUser<ParamsType extends Prisma.UserUpdateInput>(userId: string, params: ParamsType) {
    let user: User = await prisma.user.update({
        where: {
            id: userId
        },
        data: params
    })
    return user;
}
