import React from "react";
import "./About.css";
import cody2 from "../../assets/cody2.png";
import theo from "../../assets/theo.png";
import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as WLink } from "wouter";

export function About() {
    return (
        <Flex
            id="about-me"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
        >
            <Flex id="about-me-images" mb="2em">
                <Image
                    className="about-image"
                    alt="Theo"
                    id="theo"
                    src={theo}
                />
                <Image
                    className="about-image"
                    alt="Cody"
                    id="cody"
                    src={cody2}
                />
            </Flex>
            <Heading as="h1" className="page-title">
                About Me
            </Heading>
            <Text>
                My name is Theo. I am 15 years old and I love gaming, producing
                music, and programming! Some of my favorite video games include
                Minecraft, ARK: Survival Evolved, Destiny 2, and more. I also
                make tutorials on YouTube.
            </Text>
            <Heading as="h2" className="page-title">
                Programming
            </Heading>
            <Text>
                I have been coding for about 3-4 years, and have worked with
                many programming languages, such as Javascript, Typescript,
                Python, HTML + CSS, PHP, and a little bit of C++ and Assembly.
                Some of the frameworks I have used include Angular, React,
                Express, MongoDB, etc.
            </Text>
            <Heading as="h2" className="page-title">
                Social Media
            </Heading>
            <Text>
                You can find my{" "}
                <Link
                    as={WLink}
                    href="https://github.com/creepinson"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub here
                </Link>
                ,{" "}
                <Link
                    as={WLink}
                    href="https://gitlab.com/creepinson"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my GitLab here
                </Link>
                ,{" "}
                <Link
                    as={WLink}
                    href="https://open.spotify.com/artist/0WKEJhDM8Ugqz5BRj1XwQx?si=mD63V-nNR4mDZlCO6lfp4A"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my Spotify songs here
                </Link>
                ,{" "}
                <Link
                    as={WLink}
                    href="https://twitter.com/Creepinson101"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my Twitter here
                </Link>
                , and{" "}
                <Link
                    as={WLink}
                    href="https://youtube.com/user/CreeperVsEndermen"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my YouTube videos here.
                </Link>{" "}
                If you are looking for a way to contact me, you
                can email me using{" "}
                <Link
                    as={WLink}
                    href="mailto:theoparisdesigns@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    theoparisdesigns@gmail.com
                </Link>
                . You can also contact me through discord with my tag:{" "}
                <Text fontWeight="bold">Creepinson#2817</Text>.
            </Text>
            <Heading as="h2" className="page-title">
                Other Information
            </Heading>
            <Text>
                <Link as={WLink} href="/workspace">
                    You can find my workspace/setup here.
                </Link>
            </Text>
        </Flex>
    );
}
