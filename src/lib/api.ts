import { apiUrl, site } from "./config";

export interface IBox {
    image: string;
    imageDescription?: string;
    title: string;
    description: string;
    link?: string;
}

export function getBoxes(): IBox[] {
    // TODO: add api
    return [
        {
            image: site.image,
            title: "About",
            description:
                "You can find more about me and my projects here (click me).",
            link: "/about",
        },
    ];
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
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const output = month + "\n" + day + "," + year;
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
