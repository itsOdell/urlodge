import axios from "axios";

export function linkValidator(link: string, title: string): boolean | void {
    try {
        let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
        let res = regEx.test(link);
        if (res == false) {
            throw new Error("Link is not valid")
        } 
        if (title == "" || title == undefined) {
            throw new Error("Please enter a title")
        }
    } catch (error: any) {
        throw new Error(error);
    }
}
