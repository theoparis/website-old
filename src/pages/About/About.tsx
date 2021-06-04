import cody2 from "../../assets/cody2.png";
import theo from "../../assets/theo.png";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "~/components/CustomLink";

export const About = () => {
    return (
        <Flex
            id="about-me"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="75%"
        >
            <Flex
                id="about-me-images"
                flexDir="row"
                justifyContent="center"
                alignItems="center"
                p="1.5em"
            >
                <Image
                    className="about-image"
                    alt="Theo"
                    id="theo"
                    src={theo}
                    height="12.5em"
                />
                <Image
                    className="about-image"
                    alt="Cody"
                    id="cody"
                    height="12.5em"
                    src={cody2}
                />
            </Flex>
            <Heading mt="0.5em" as="h2">
                About Me
            </Heading>
            <Text textAlign="center">
                My name is Theo. I am 16 years old and I love gaming, producing
                music, and programming! Some of my favorite video games include
                Minecraft, ARK: Survival Evolved, Destiny 2, and more. I also
                make tutorials on YouTube.
            </Text>
            <Heading mt="0.5em" as="h2">
                Programming
            </Heading>
            <Text textAlign="center">
                I have been coding for about 4 years, and have worked with
                many programming languages, such as Javascript, Typescript,
                Python, HTML + CSS, PHP, and a little bit of C++ and Assembly.
                Some of the frameworks I have used include React, Express,
                MongoDB, etc.
            </Text>
            <Heading mt="0.5em" as="h2">
                Social Media
            </Heading>
            <Text textAlign="center">
                You can find my{" "}
                <Link href="https://github.com/creepinson" isExternal>
                    GitHub here
                </Link>
                ,{" "}
                <Link href="https://gitlab.com/creepinson" isExternal>
                    my GitLab here
                </Link>
                ,{" "}
                <Link
                    href="https://open.spotify.com/artist/0WKEJhDM8Ugqz5BRj1XwQx?si=mD63V-nNR4mDZlCO6lfp4A"
                    isExternal
                >
                    my Spotify songs here
                </Link>
                ,{" "}
                <Link href="https://twitter.com/Creepinson101" isExternal>
                    my Twitter here
                </Link>
                , and{" "}
                <Link
                    href="https://youtube.com/user/CreeperVsEndermen"
                    isExternal
                >
                    my YouTube videos here.
                </Link>{" "}
                If you are looking for a way to contact me, you can email me
                using{" "}
                <Link href="mailto:theoparisdesigns@gmail.com" isExternal>
                    theoparisdesigns@gmail.com
                </Link>
                . You can also contact me through discord with my tag:{" "}
                <strong>Creepinson#2817</strong>.
            </Text>
            <Heading mt="0.5em" as="h2">
                Other Information
            </Heading>
            <Text>
                <Link href="/p/workspace">
                    You can find my workspace/setup here.
                </Link>
            </Text>
        </Flex>
    );
};
