import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.css";

import "./index.css";
import { Helmet } from "react-helmet";

import { Home } from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import Footer from "./components/Footer";
import ErrorDialog from "./components/ErrorDialog";
import { Container } from "react-bootstrap";
import { WorkspacePage } from "./pages";

render(
    <BrowserRouter>
        <Helmet>
            <meta charSet="UTF-8" />
            <meta name="description" content="Theo's Website" />
            <meta name="keywords" content="Website, About Me, Blog" />
            <meta name="author" content="Theo Paris" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content="Theo's Website" />
            <meta property="og:image" content="/assets/creepinson.png" />
            <meta
                property="og:description"
                content="Theo Paris's website and blog made from the scratch with React and Express."
            />
            <meta property="og:url" content="https://theoparis.com/" />
            <title>Theo's Website</title>
        </Helmet>
        <Header />
        <main id="content">
            <Container>
                <ErrorDialog />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path={"/p/workspace"}>
                        <WorkspacePage />
                    </Route>
                </Switch>
            </Container>
        </main>
        <Footer />
    </BrowserRouter>,
    document.getElementById("root")
);
