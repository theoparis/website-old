import { render } from "preact";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css/animate.css";

import "jetbrains-mono";
// import "./global.scss";
import { Layout } from "./components/layout";

// import { WorkspacePage } from "./pages";

const root = document.querySelector("#app");

if (root) render(<Layout />, root);
