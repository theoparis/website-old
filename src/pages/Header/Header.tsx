import "./Header.css";
import { Link as WLink } from "wouter";
import { Link, Flex, Heading, List, ListItem } from "@chakra-ui/react";

export const Header = () => (
    <>
        <Flex
            className="header"
            p="1.5em"
            bg="#232323"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
        >
            <Flex id="branding">
                <Heading className="highlight">
                    <Link as={WLink} href="/">
                        <Heading as="h1" id="brand-name">Theo Paris Designs</Heading>
                    </Link>
                </Heading>
            </Flex>
            <Flex
                flexDir="row"
                expand="lg"
                className="navbar"
                justifyContent="center"
                alignItems="center"
            >
                <List className="nav navbar-nav nav-flex">
                    <ListItem>
                        <Link as={WLink} href="/about">
                            About
                        </Link>
                    </ListItem>
                </List>
            </Flex>
        </Flex>
    </>
);
