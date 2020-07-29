import { createStore } from "redux";

export const apiUrl = process.env.REACT_APP_API || "http://localhost:8080";

function error(state = "", action) {
    if (action.type === "set") state = action.error;
    return state;
}

export const errorStore = createStore(error);

export enum Errors {
    AUTHENTICATION = "Authentication error encountered - double check your credentials and make sure you are logged in.",
}
