import { Link } from "@prisma/client";
import prisma from "../prisma/prisma";

export async function createLink(link: string, title: string, userId: string): Promise<Link> {
    let linkres: Link = await prisma.link.create({
        data: {
            link: link,
            title: title,
            userId: userId
        }
    })
    return linkres
}

// export async function findFirst(type: string, target: string, include?: {[x: string]: boolean}): Promise<User | null> {
//     let user: User | null = await prisma.user.findFirst({ 
//         where: {
//           [type]: target
//         },
//         include: include
//       })
//     return user
// }