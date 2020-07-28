import { apiUrl } from "./config";

export function setUser(user: any) {
    sessionStorage.setItem("user", JSON.stringify(user));
}

export function getUser(): any {
    const item = sessionStorage.getItem("user");
    if (item) return JSON.parse(item);
    else return null;
}

export const isLoggedIn = () => getUser() !== null;
export const hasRole = (role: string) =>
    isLoggedIn() ? getUser().roles.includes(role) : false;

export async function logout() {
    try {
        const response = await fetch(apiUrl + "/auth/logout", {
            headers: {
                Accept: "application/json",
            },
        });
        setUser(null);
        return { response };
    } catch (error) {
        return { response: null, error };
    }
}

export async function sendLoginRequest(username: string, password: string) {
    try {
        const result = await fetch(apiUrl + "/auth/user", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
        });
        const json = await result.json();
        if (result.status === 200) {
            setUser(json.user);
            return {
                error: null,
                response: result,
            };
        } else {
            setUser(null);
            return {
                error: "login error",
                response: result,
            };
        }
    } catch (e) {
        console.error(e);
        return {
            error: e.message,
        };
    }
}

export async function sendRegistrationRequest(
    username: string,
    password: string,
) {
    try {
        const result = await fetch(apiUrl + "/auth/user/create", {
            body: JSON.stringify({
                username,
                password,
            }),
            method: "POST",
        });
        const json = await result.json();
        if (result.status === 200) {
            setUser(json.user);
            return "";
        } else {
            setUser(null);
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

export function getPosts(
    dateFilter?: string,
    category?: string,
): Promise<any[]> {
    const formattedUrl = `${apiUrl}/blog/posts?date=${
        dateFilter || ""
    }&category=${category || ""}`;

    return new Promise((resolve, reject) => {
        console.log(formattedUrl);
        fetch(formattedUrl)
            .then((res) => res.json())
            // Convert date string to js Date class
            .then((posts) =>
                posts.map((p: any) => ({
                    ...p,
                    createdAt: new Date(p.createdAt),
                })),
            )
            .then(resolve)
            .catch(reject);
    });
}

export function dateToString(dateObj: Date) {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, "0");
    let year = dateObj.getFullYear();
    let output = month + "\n" + day + "," + year;
    return output;
}

export function getSinglePost(id: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/blog/post/${id}`)
            .then((res) => res.json())
            .then((post) => ({ ...post, createdAt: new Date(post.createdAt) }))
            .then(resolve)
            .catch(reject);
    });
}
