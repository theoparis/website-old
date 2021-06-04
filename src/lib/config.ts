import { extendTheme } from "@chakra-ui/react";
import { createStore } from "redux";
import creepinson101 from "../assets/creepinson101.png";

export const apiUrl = import.meta.env.REACT_APP_API || "http://localhost:8080";

function error(state = "", action) {
    if (action.type === "set") state = action.error;
    return state;
}

export const errorStore = createStore(error);

export enum Errors {
    AUTHENTICATION = "Authentication error encountered - double check your credentials and make sure you are logged in.",
}

export const site = {
    name: "Theo's Website",
    desc: "Theo Paris's website and blog made from the scratch with Vite ❤️ Preact.",
    image: creepinson101,
    theme: extendTheme({
        config: {
            initialColorMode: "dark",
        },
        fonts: {
            heading: "JetBrains Mono",
            body: "JetBrains Mono",
        },
        colors: {
            bg: {
                main: "#212121",
                secondary: "#121212",
            },
        },
        styles: {
            global: {
                body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: "bg.main",
                },
                a: {
                    color: "white",
                },
                p: {
                    color: "white",
                },
            },
        },
    }),
};
