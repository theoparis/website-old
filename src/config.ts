import { State } from "@anissoft/state";
import { extendTheme } from "@chakra-ui/react";

export const apiUrl = process.env.VITE_APP_API || "http://localhost:8080";

export const errorStore = new State<{ error?: string }>({
    error: undefined,
});

export enum Errors {
    AUTHENTICATION = "Authentication error encountered - double check your credentials and make sure you are logged in.",
}

export const theme = extendTheme({
    colors: {
        gray: {
            800: "#2e2e2e"
        }
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    }
})
