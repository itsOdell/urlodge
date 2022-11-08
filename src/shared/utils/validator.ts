import axios from "axios";
export function linkValidator(link: string): boolean {
    let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return regEx.test(link);
}

export async function requester(method: "GET" | "POST" | "DELETE", url: string, params?: {[x: string]: any}) {
    let res = (await axios.request({
        method: method,
        url: `http://localhost:3000/api/${url}`,
        params: params
      })).data;
      return res;
}