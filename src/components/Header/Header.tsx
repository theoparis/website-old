import React, { Component } from "react";
import "./Header.css";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div id="branding">
                        <Navbar.Brand className="highlight">
                            <Link to="/">
                                {" "}
                                <h1 id="brand-name">Theo Paris Designs</h1>
                            </Link>
                        </Navbar.Brand>
                    </div>
                    <Navbar expand="lg" className="navbar">
                        <Nav
                            className="nav navbar-nav nav-flex"
                            defaultActiveKey="/"
                        >
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/dashboard">Dashboard</Link>
                        </Nav>
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
