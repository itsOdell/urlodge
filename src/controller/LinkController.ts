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

export async function deleteLink(id: string): Promise<Link | null> {
    let linkres: Link | null = await prisma.link.delete({
        where: {
            id: id
        }
    })
    return linkres
}