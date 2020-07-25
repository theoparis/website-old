import React, { Component } from "react";
import "./Header.css";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
    navLink: {
        fontSize: 24,
        flex: 1,
        color: "#00bfff",
        textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
        marginRight: 15,
    },
    navbarToggler: {
        outline: "none !important",
        color: "#fff",
        marginBottom: 5,
        marginTop: 5,
        marginRight: 15,
    },
};

export class Header extends Component {
    render() {
        return (
            <div>
                <header className="flex-column text-center">
                    <div id="branding">
                        <Navbar.Brand className="highlight">
                            <Link
                                to="/"
                                style={{ textDecoration: "none" }}
                            >
                                {" "}
                                <h1 id="brand-name">Theo Paris Designs</h1>
                            </Link>
                        </Navbar.Brand>
                    </div>
                    <Navbar expand="lg" className="navbar">
                        <div>
                            <Nav
                                className="nav navbar-nav flex-row text-center"
                                defaultActiveKey="/"
                            >
                                <Link style={styles.navLink} to="/about">
                                    About
                                </Link>
                                <Link style={styles.navLink} to="/projects">
                                    Projects
                                </Link>
                                <Link style={styles.navLink} to="/blog">
                                    Blog
                                </Link>
                                <Link style={styles.navLink} to="/dashboard">
                                    Dashboard
                                </Link>
                            </Nav>
                        </div>
                    </Navbar>
                </header>
                <div id="error" style={{ display: "none" }}>
                    <div className="alert alert-danger alert-dismissible fade show">
                        <div id="error-message" />
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
