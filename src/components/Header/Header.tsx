import { Link as WLink } from "wouter";
import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "~/components/CustomLink";
import { Section } from "~/components/section";

export const Header = () => (
    <Section bg="bg.secondary" p="1.5em">
        <Heading fontSize="2em" fontWeight="extrabold">
            <Link href="/" color="#29bf12">
                Theo Paris Designs
            </Link>
        </Heading>
        <Flex
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
        >
            <Link href="/about" fontSize="1.25em">
                About
            </Link>
        </Flex>
    </Section>
);
