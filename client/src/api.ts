export const API = "http://localhost:8080"

export function getBoxes(): any {
    // TODO: add api
    return [
        {
            image: "/assets/creepinson101.png",
            title: "About",
            description: "You can find more about me and my projects here (click me).",
            link: "/about"
        }
    ]
}

export function getProjects(): Promise<any[]> {
    return new Promise((resolve, reject) => {
        fetch((process.env.api || API) + "/projects").then(res => res.json()).then(resolve).catch(reject)
    })
}