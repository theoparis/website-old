import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <main id="content">
                    <Container>
                        <h2>Admin Dashboard</h2>
                        <p>Hello, fellow administrator.</p>
                        <Link to="/admin/blog">Blog Administration</Link>
                    </Container>
                </main>
            </div>
        );
    }
}
