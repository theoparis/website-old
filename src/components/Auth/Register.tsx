import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { sendRegistrationRequest } from "../../api";
import { errorStore } from "src/config";

export class Register extends Component<
    any,
    { username: string; password: string; name: string }
> {
    history: any;
    constructor(props: any) {
        super(props);
        this.state = { username: "", password: "", name: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e: any) {
        this.setState({ username: e.target.value });
    }

    handleNameChange(e: any) {
        this.setState({ name: e.target.value });
    }

    handlePasswordChange(e: any) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        sendRegistrationRequest(this.state).then((result) => {
            console.log(result);
            if (!result.error) this.props.history.push("/dashboard");
            else errorStore.dispatch({ type: "set", error: result.error });
        });
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onChange={this.handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="username">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            onChange={this.handleUsernameChange}
                            required
                        />
                        <small style={{ color: "grey" }}>Required</small>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={this.handlePasswordChange}
                            required
                        />{" "}
                        <small style={{ color: "grey" }}>Required</small>
                    </Form.Group>
                    <Form.Control type="submit" value="Register" />
                </Form>
            </div>
        );
    }
}
