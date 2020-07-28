import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
import { sendRegistrationRequest } from "../../api";

export class Register extends Component<
    any,
    { username: string; password: string }
> {
    history: any;
    constructor(props: any) {
        super(props);
        this.state = { username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e: any) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e: any) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        sendRegistrationRequest(this.state.username, this.state.password).then(
            (result) => {
                if (!result.error) this.props.history.push("/dashboard");
                else this.props.history.push("/register");
            },
        );
    }

    render() {
        return (
            <div>
                <main id="content">
                    <Container>
                        <h2>Register</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    onChange={this.handleUsernameChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    onChange={this.handleUsernameChange}
                                    required
                                />
                                <small style={{ color: "grey" }}>Required</small>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={this.handlePasswordChange}
                                    required
                                />{" "}
                                <small style={{ color: "grey" }}>
                                    Required
                                </small>
                            </Form.Group>
                            <Form.Control type="submit" value="Register" />
                        </Form>
                    </Container>
                </main>
            </div>
        );
    }
}
