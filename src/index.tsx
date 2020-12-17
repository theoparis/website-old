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
import { Login } from "./components/Auth/Login";
import AdminDashboard from "./components/Admin";
import BlogAdmin, { CreatePost } from "./components/Admin/BlogAdmin";
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
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/admin" component={AdminDashboard} />
                    <Route exact path="/admin/blog" component={BlogAdmin} />
                    <Route exact path={"/p/workspace"}><WorkspacePage/></Route>
                    <Route
                        exact
                        path="/admin/blog/new"
                        component={CreatePost}
                    />
                    <Route exact path="/blog" component={Blog} />
                    <Route
                        path="/blog/archive/:date"
                        render={(props) => (
                            <Blog
                                location={props.location}
                                archiveFilter={props.match.params.date}
                            />
                        )}
                    />
                    <Route
                        path="/blog/category/:category"
                        render={(props) => (
                            <Blog
                                location={props.location}
                                category={props.match.params.category}
                            />
                        )}
                    />
                    <Route path="/blog/post/:id" component={Post} />
                </Switch>
            </Container>
        </main>
        <Footer />
    </BrowserRouter>,
    document.getElementById("root"),
);
