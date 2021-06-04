import { Flex, FlexProps } from "@chakra-ui/react";
import { RenderableProps } from "preact";

export const Section = (
    props: RenderableProps<FlexProps> & { skipMargin?: boolean }
) => (
    <Flex
        className="section"
        mb={!props.skipMargin ? "1.5em" : 0}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        {...props}
    >
        {props.children}
    </Flex>
);
