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
import { Projects } from "./components/Projects/Projects";
import { Blog } from "./components/Blog/Blog";
import { Post } from "./components/Blog/Post";
import { Dashboard } from "./components/Auth/Dashboard";
import { Register } from "./components/Auth/Register";

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
                content="Theo's website and blog made with EJS, CSS, Typescript, and MongoDB from scratch."
            />
            <meta property="og:url" content="https://theoparis.com/" />
            <title>Theo's Website</title>
        </Helmet>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/blog" component={Blog} />
            <Route
                path="/blog/archive/:date"
                render={(props) => (
                    <Blog archiveFilter={props.match.params.date} />
                )}
            />
            <Route
                path="/blog/category/:category"
                render={(props) => (
                    <Blog category={props.match.params.category} />
                )}
            />
            <Route path="/blog/post/:id" component={Post} />
        </Switch>
        <Footer />
    </BrowserRouter>,
    document.getElementById("root"),
);
