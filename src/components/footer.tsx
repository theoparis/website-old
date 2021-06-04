import { Flex, Text } from "@chakra-ui/react";
import { Section } from "./section";

export const Footer = () => {
    return (
        <Section
            pos="fixed"
            w="100%"
            p="1.5em"
            as="footer"
            bottom="0"
            bg="bg.secondary"
            skipMargin
        >
            <Text>Made By Theo Paris</Text>
        </Section>
    );
};
