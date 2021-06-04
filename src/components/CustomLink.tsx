import { Link as CLink, LinkProps } from "@chakra-ui/react";
import { RenderableProps } from "preact";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as WLink } from "wouter";
import { MotionText } from "./motion";

export const Link = (props: RenderableProps<LinkProps>) => (
        <CLink
            as={props.isExternal ? "a" : WLink}
            _hover={{
                color: "#fc440f",
            }}
            rel="noopener noreferrer"
            {...props}
        >
            {props.children}
            {props.external && <ExternalLinkIcon mx="2px" />}
        </CLink>
);
