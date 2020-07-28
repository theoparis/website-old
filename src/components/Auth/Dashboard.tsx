import React, { Component, FormEvent } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, getUser, hasRole, logout } from "../../api";
import { Container, Form } from "react-bootstrap";

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
                <main id="content">
                    <Container>
                        {isLoggedIn() ? (
                            <div>
                                <h3>
                                    Welcome,{" "}
                                    {getUser().name || getUser().username}.
                                </h3>
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
                                {hasRole("admin") ? (
                                    <Link to="/admin">Admin Dashboard</Link>
                                ) : (
                                    <div />
                                )}
                                <br />
                            </div>
                        )}
                    </Container>
                </main>
            </div>
        );
    }
}
