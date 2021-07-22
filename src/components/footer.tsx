import { Flex, Text } from "@chakra-ui/react";
import { Section } from "./section";

export const Footer = () => {
    return (
        <Section
            pos="static"
            w="100%"
            h="4rem"
            p="1.5em"
            as="footer"
            bottom="0"
            bg="bg.secondary"
            mt="auto"
            skipMargin
        >
            <Text>Made By Theo Paris</Text>
        </Section>
    );
};
