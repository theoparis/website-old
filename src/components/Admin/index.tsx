import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <h2>Admin Dashboard</h2>
                <p>Hello, fellow administrator.</p>
                <Link to="/admin/blog">Blog Administration</Link>
            </div>
        );
    }
}
