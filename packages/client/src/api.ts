import { apiUrl } from "./config";

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