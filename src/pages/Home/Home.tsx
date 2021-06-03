import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { getBoxes, IBox } from "~/lib/api";
import { useEffect, useState } from "preact/hooks";
import Banner from "~/assets/MeBanner.png";
import { MotionFlex } from "~/components/motion";

export const Home = () => {
    const [boxes, setBoxes] = useState<IBox[]>([]);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setBoxes(getBoxes());
    }, []);

    const [, setLocation] = useLocation();

    return (
        <Flex flexDir="column" justifyContent="center" alignItems="center">
            <Image src={Banner} height="16em" mb="1.5em" />
            <Flex id="showcase">
                <Heading>Hello there.</Heading>
                <Text>
                    Welcome to my website! Click on my About Me box link to
                    learn more about me.
                </Text>
            </Flex>

            <Flex id="boxes">
                {boxes.map((box: IBox) => (
                    <MotionFlex
                        key={box.link}
                        className="box"
                        initial={{ scale: 1, rotate: 0 }}
                        animate={{
                            scale: animated ? 0.1 : 1,
                            rotate: animated ? 360 : 0,
                        }}
                        transition={{ duration: 1.5 }}
                        onClick={(): void => {
                            setAnimated(true);
                            setTimeout(
                                () => box.link && setLocation(box.link),
                                1500
                            );
                        }}
                    >
                        <Image
                            src={box.image}
                            alt={box.imageDescription || "Box Image"}
                            mb="1em"
                        />
                        {/* <img src="{{ box.iconUrl }}" /> */}
                        <Heading as="h3" fontSize="1em">
                            {box.title}
                        </Heading>
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: box.description,
                            }}
                        />
                    </MotionFlex>
                ))}
            </Flex>
        </Flex>
    );
};
