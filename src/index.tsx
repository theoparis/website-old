import { render } from "preact";
import "animate.css/animate.css";
import "./index.css";
import { Helmet } from "react-helmet";

import { Home } from "./pages/Home/Home";
import { Route } from "wouter";
import { Header } from "./pages/Header/Header";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer";
import { ChakraProvider, ColorModeProvider, Flex } from "@chakra-ui/react";
import { WorkspacePage } from "./pages/workspace";
import { ToastContainer, toast } from "react-toast";
import { errorStore, theme } from "./config";

errorStore.subscribe((ctx) => {
    if (ctx.error && ctx.error !== undefined) toast(ctx.error);
});

render(
    <ChakraProvider theme={theme}>
        <ColorModeProvider options={theme.config}>
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
            <Flex
                id="content"
                p="2em"
                mt="1.5em"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
            >
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/p/workspace">
                    <WorkspacePage />
                </Route>
                <ToastContainer />
            </Flex>
            <Footer />
        </ColorModeProvider>
    </ChakraProvider>,
    document.querySelector("#root")!
);
