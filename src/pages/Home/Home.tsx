import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getBoxes, IBox } from "../../api";
import "./Home.css";
import { useLocation } from "wouter";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Home = () => {
    const [boxes, setBoxes] = useState<IBox[]>([]);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setBoxes(getBoxes());
    }, []);

    const [_location, setLocation] = useLocation();

    return (
        <>
            <Flex className="showcase-banner" />
            <Flex id="showcase">
                <Heading as="h1" className="page-title">
                    Hello there.
                </Heading>
                <Text>
                    Welcome to my website! Click on my About Me box link to
                    learn more about me.
                </Text>
            </Flex>

            <Flex id="boxes">
                {boxes.map((box: IBox) => (
                    <motion.div
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
                        />
                        {/* <img src="{{ box.iconUrl }}" /> */}
                        <Heading as="h3">{box.title}</Heading>
                        <Text
                            dangerouslySetInnerHTML={{
                                __html: box.description,
                            }}
                        />
                    </motion.div>
                ))}
            </Flex>
        </>
    );
};
