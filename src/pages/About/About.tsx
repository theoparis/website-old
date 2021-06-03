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
        >
            <Flex
                id="about-me-images"
                flexDir="row"
                justifyContent="center"
                alignItems="center"
                mb="2.5em"
            >
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
            <Heading as="h2">About Me</Heading>
            <Text>
                My name is Theo. I am 15 years old and I love gaming, producing
                music, and programming! Some of my favorite video games include
                Minecraft, ARK: Survival Evolved, Destiny 2, and more. I also
                make tutorials on YouTube.
            </Text>
            <Heading>Programming</Heading>
            <Text>
                I have been coding for about 3-4 years, and have worked with
                many programming languages, such as Javascript, Typescript,
                Python, HTML + CSS, PHP, and a little bit of C++ and Assembly.
                Some of the frameworks I have used include Angular, React,
                Express, MongoDB, etc.
            </Text>
            <Heading>Social Media</Heading>
            <Text>
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
            <Heading>Other Information</Heading>
            <Text>
                <Link href="/p/workspace">
                    You can find my workspace/setup here.
                </Link>
            </Text>
        </Flex>
    );
};
