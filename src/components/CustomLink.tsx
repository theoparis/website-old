import { Link as CLink, LinkProps } from "@chakra-ui/react";
import { RenderableProps } from "preact";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as WLink } from "wouter";
import { MotionText } from "./motion";

export const Link = (props: RenderableProps<LinkProps>) => (
    <MotionText
        color="white"
        whileHover={{
            scale: 0.9,
        }}
    >
        <CLink
            as={props.isExternal ? "a" : WLink}
            _hover={{
                color: "#66ff9e",
            }}
            rel="noopener noreferrer"
            {...props}
        >
            {props.children}
            {props.external && <ExternalLinkIcon mx="2px" />}
        </CLink>
    </MotionText>
);
