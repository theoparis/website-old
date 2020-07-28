import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, currentUser, hasRole } from "../../api";

export class Dashboard extends Component {
    render() {
        if (isLoggedIn()) {
            return (
                <div>
                    <h3>Welcome, {currentUser.username}</h3>
                </div>
            );
        } else
            return (
                <div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/admin">Admin  Dashboard</Link>
                    </div>
                </div>
            );
    }
}
