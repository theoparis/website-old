import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getBoxes } from "../../api";

import "./App.css";

const bannerStyle = {
    height: "450px",
    top: "25px",
    width: "100%",
    position: "relative",
/*     backgroundImage: "/assets/creepinson.png",
    backgroundRepeat: "noRepeat",
    backgroundSize: "contain",
    backgroundAttachment: "scroll",
    backgroundPosition: "center", */
    color: "#fff",
    marginBottom: "25px",
};


export function Home() {
    const [boxes, setBoxes] = useState([]);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setBoxes(getBoxes());
        return () => {};
    }, []);

    const history = useHistory();
    return (
        <div>
            <main id="content">
                <Container>
                    <div className="showcase-banner" />
					{/* <Creepinson style={bannerStyle}/> */}
                    <section id="showcase">
                        <h1 className="page-title">Hello there.</h1>
                        <p>
                            Welcome to my website! Click on my About Me box link
                            to learn more about me.
                        </p>
                    </section>

                    <section id="boxes">
                        {boxes.map((box: any) => (
                            <motion.div
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
                                        () => history.push(box.link),
                                        1500,
                                    );
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
                </Container>
            </main>
        </div>
    );
}