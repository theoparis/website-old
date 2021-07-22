import { useHead } from "hoofd";
import { HomePage } from "../pages/Home/Home";
import { Router, Switch, Route } from "wouter";
import { Header } from "./Header/Header";
import { AboutPage } from "../pages/About/About";
import { Footer } from "./footer";
import { ToastContainer } from "react-toastify";
import { ChakraProvider, ColorModeProvider, Flex } from "@chakra-ui/react";
import { site } from "../lib/config";
import { WorkspacePage } from "~/pages/Workspace";

export const Layout = () => {
    useHead({
        title: site.name,
        language: "en",
        metas: [
            {
                charset: "utf-8",
            },
            {
                name: "description",
                content: site.desc,
            },
            {
                name: "keywords",
                content: "Website, About Me, Blog",
            },
            {
                name: "author",
                content: "Theo Paris",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
            },
            {
                name: "og:description",
                content: site.desc,
            },
            {
                name: "og:title",
                content: site.name,
            },
            {
                name: "og:image",
                content: site.image,
            },
            {},
        ],
    });

    return (
        <ChakraProvider theme={site.theme}>
            <ColorModeProvider options={site.theme.config}>
                <Router>
                    <Header />
                    <Flex
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                        p="1.5em"
                        bg="bg.main"
                        id="content"
                        h="calc(100% - 4em)"
                    >
                        <ToastContainer />
                        <Switch>
                            <Route path="/" component={HomePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path={"/p/workspace"} component={WorkspacePage}></Route>
                        </Switch>
                    </Flex>
                    <Footer />
                </Router>
            </ColorModeProvider>
        </ChakraProvider>
    );
};
