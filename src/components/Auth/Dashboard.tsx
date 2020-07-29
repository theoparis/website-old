import React, { Component, FormEvent } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, getUser, hasRole, logout } from "../../api";
import { Form } from "react-bootstrap";

const mbStyle = {
    display: "block",
    marginBottom: "15px",
};

export class Dashboard extends Component<any, { user: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount(): void {
        this.setState({ user: getUser() });
    }

    logOut(event: FormEvent): void {
        event.preventDefault();
        logout().then((result) => this.props.history.push("/dashboard"));
    }

    render() {
        return (
            <div>
                {isLoggedIn() ? (
                    <div className="dashboard">
                        <h3 style={mbStyle}>
                            Welcome, {getUser().name || getUser().username}.
                        </h3>
                        {hasRole("admin") ? (
                            <Link style={mbStyle} to="/admin">
                                Admin Dashboard
                            </Link>
                        ) : (
                            <div />
                        )}
                        {hasRole("writer") ? (
                            <Link style={mbStyle} to="/admin/blog">
                                Blog Administration Dashboard
                            </Link>
                        ) : (
                            <div />
                        )}
                        <Form onSubmit={this.logOut.bind(this)}>
                            <Form.Group>
                                <button
                                    className="form-control btn btn-primary"
                                    type="submit"
                                >
                                    Log Out
                                </button>
                            </Form.Group>
                        </Form>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">Login</Link>
                        <br />
                        <Link to="/register">Register</Link>
                        <br />
                    </div>
                )}
            </div>
        );
    }
}
