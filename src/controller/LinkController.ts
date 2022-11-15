import { Link } from "@prisma/client";
import prisma from "../prisma/prisma";
import {linkValidator} from "src/shared/utils/validator"

export async function createLink(link: string, title: string, userId: string): Promise<Link> {
    try {
        linkValidator(link, title)
        let linkres: Link = await prisma.link.create({
            data: {
                link,
                title,
                userId
            }
        })
        return linkres
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function deleteLink(id: string): Promise<Link | null> {
    try {
        let linkres: Link | null = await prisma.link.delete({
            where: {
                id: id
            }
        })
        return linkres
    } catch (error: any) {
        throw new Error(error);
    }
}