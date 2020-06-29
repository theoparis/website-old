import React, { Component } from "react";
import "./Header.css";
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
    state: any;
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu });
    }

    render() {
        return (
            <div>
                <header className="flex-column text-center">
                    <div id="branding">
                        <Navbar.Brand className="highlight" href="/">
                            <h1 id="brand-name">Theo Paris Designs</h1>
                        </Navbar.Brand>
                    </div>
                    {/* <div
                        style={styles.navbarToggler}
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.toggleMenu}
                    >
                        <Menu />
                    </div> */}
                    <Navbar expand="lg" className="navbar">
                        {/* <Collapse dimension="width" in={this.state.menu}> */}
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
                                </Nav>
                            </div>
                        {/* </Collapse> */}
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
