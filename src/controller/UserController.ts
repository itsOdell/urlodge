import prisma from "../lib/prisma";

export class GetFirstUser {
    constructor(private id: string) {
        this.id = id;
    }
    async execute() {
        return await prisma.user.findFirst({
            where: {
                id: this.id
            }
        })
    }
}

export class GetAllUsers {
    async execute() {
        return await prisma.user.findMany()
    }
}

export class UpdateUser {
    constructor(private id: string, private toUpdate: {target: "name" | "image" | "email", update: string}) {
        this.id = id;
        this.toUpdate = toUpdate;
    }

    async execute() {
        return await prisma.user.update({
            where: {
                id: this.id
            },
            data: {
                [this.toUpdate.target]: this.toUpdate.update
            }
        })
    }
}