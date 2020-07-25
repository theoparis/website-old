import { apiUrl } from "./config";

export let currentUser: any = null;

export function setUser(user: any, token: string) {
    localStorage.setItem("session", JSON.stringify(token));
    currentUser = user;
}

export const isLoggedIn = () => currentUser !== null;
export const hasRole = (role: string) =>
    isLoggedIn() ? currentUser.roles.includes(role) : false;

export async function sendLoginRequest(username: string, password: string) {
    try {
        const result = await fetch(apiUrl + "/auth/user", {
            body: JSON.stringify({
                username,
                password,
            }),
            method: "POST",
        });
        const json = await result.json();
        if (result.status === 200) {
            setUser(json.user, json.token);
            return "";
        } else {
            setUser(null, "");
            return "login error";
        }
    } catch (e) {
        console.error(e);
        return e.message;
    }
}

export function getBoxes(): any {
    // TODO: add api
    return [
        {
            image: "/assets/creepinson101.png",
            title: "About",
            description:
                "You can find more about me and my projects here (click me).",
            link: "/about",
        },
    ];
}

export function getProjects(): Promise<any[]> {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + "/projects")
            .then((res) => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function getPosts(): Promise<any[]> {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + "/blog/posts")
            .then((res) => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function getSinglePost(): Promise<any[]> {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + "/blog/post")
            .then((res) => res.json())
            .then(resolve)
            .catch(reject);
    });
}
