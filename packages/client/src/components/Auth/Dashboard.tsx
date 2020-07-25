import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, currentUser, hasRole } from "../../api";

export class Dashboard extends Component {
    render() {
        return (
            <div>
                {isLoggedIn() ? (
                    <h3>Welcome, {currentUser.username}</h3>
                ) : (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
                {hasRole("admin") ? (
                    <Link to="/admin">Admin Dashboard</Link>
                ) : (
                    <div />
                )}
            </div>
        );
    }
}
