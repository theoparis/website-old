import { Link as WLink } from "wouter";
import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "~/components/CustomLink";

export const Header = () => (
    <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bg="#232323"
        p="1.5em"
    >
        <Heading fontSize="3em">
            <Link href="/">Theo Paris Designs</Link>
        </Heading>
        <Flex flexDir="column" justifyContent="center" alignItems="center">
            <Link href="/about" fontSize="1.5em">
                About
            </Link>
        </Flex>
    </Flex>
);
