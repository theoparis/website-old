// import cody2 from "../../assets/cody2.png";
import theo from "../../assets/theo.png";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "~/components/CustomLink";

export const AboutPage = () => {
    return (
        <Flex
            aria-label="about-me"
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
                    width="10rem"
                />
            </Flex>
            <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
                About Me
            </Heading>
            <Text textAlign="center">
                My name is Theo. I am 16 years old and I love gaming, producing
                music, and programming! One of my favorite video games is
                Minecraft. I also create YouTube videos.
            </Text>
            <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
                Programming
            </Heading>
            <Text textAlign="center">
                I have been coding for about 4 years, and have worked with many
                programming languages, such as Javascript, Typescript, Python,
                HTML + CSS, PHP. Some of the frameworks I have used include
                React, Express, Fastify, MongoDB, etc.
            </Text>
            <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
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
                <strong>TheoParis#6969</strong>.
            </Text>
            <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
                Other Information
            </Heading>
            <Text textAlign="center">
                <Link href="/p/workspace">
                    You can find my workspace/setup here.
                </Link>
            </Text>
        </Flex>
    );
};
