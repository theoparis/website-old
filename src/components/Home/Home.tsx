import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { getBoxes, IBox } from "../../api";

import "./Home.css";

export function Home() {
    const [boxes, setBoxes] = useState<IBox[]>([]);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setBoxes(getBoxes());
    }, []);

    const history = useHistory();
    return (
        <div>
            <div className="showcase-banner" />
            <section id="showcase">
                <h1 className="page-title">Hello there.</h1>
                <p>
                    Welcome to my website! Click on my About Me box link to
                    learn more about me.
                </p>
            </section>

            <section id="boxes">
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
                            setTimeout(() => box.link && history.push(box.link), 1500);
                        }}
                    >
                        <img
                            src={box.image}
                            alt={box.imageDescription || "Box Image"}
                        />
                        {/* <img src="{{ box.iconUrl }}" /> */}
                        <h3>{box.title}</h3>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: box.description,
                            }}
                        />
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
