import React from "react";
import "./About.css";

export function About() {
    return (
        <div id="about-me">
            <div id="about-me-images">
                <img
                    className="about-image"
                    alt="Theo"
                    id="theo"
                    src={"/assets/theo.png"}
                />
                <img
                    className="about-image"
                    alt="Cody"
                    id="cody"
                    src={"/assets/cody2.png"}
                />
            </div>
            <h1 className="page-title">About Me</h1>
            <p>
                My name is Theo. I am 15 years old and I love gaming, producing
                music, and programming! Some of my favorite video games include
                Minecraft, ARK: Survival Evolved, Destiny 2, and more. I also
                make tutorials on YouTube.
            </p>
            <h2 className="page-title">Programming</h2>
            <p>
                I have been coding for about 3-4 years, and have worked with
                many programming languages, such as Javascript, Typescript,
                Python, HTML + CSS, PHP, and a little bit of C++ and Assembly.
                Some of the frameworks I have used include Angular, React,
                Express, MongoDB, etc.
            </p>
            <h2 className="page-title">Social Media</h2>
            <p>
                You can find my{" "}
                <a
                    href="https://github.com/creepinson"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub here
                </a>
                ,{" "}
                <a
                    href="https://gitlab.com/creepinson"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my GitLab here
                </a>
                ,{" "}
                <a
                    href="https://open.spotify.com/artist/0WKEJhDM8Ugqz5BRj1XwQx?si=mD63V-nNR4mDZlCO6lfp4A"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my Spotify songs here
                </a>
                ,{" "}
                <a
                    href="https://twitter.com/Creepinson101"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my Twitter here
                </a>
                , and{" "}
                <a
                    href="https://youtube.com/user/CreeperVsEndermen"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my YouTube videos here.
                </a>{" "}
                If you are looking for a way to contact me, you can email me
                using{" "}
                <a
                    href="mailto:theoparisdesigns@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    theoparisdesigns@gmail.com
                </a>
                . You can also contact me through discord with my tag:{" "}
                <strong>Creepinson#2817</strong>.
            </p>
            <h2 className="page-title">Other Information</h2>
            <p>
                <a href="/p/workspace">You can find my workspace/setup here.</a>
            </p>
        </div>
    );
}
