import React, { Component, FormEvent } from "react";
import { Form } from "react-bootstrap";
import { sendLoginRequest } from "../../api";
import { errorStore } from "src/config";

export class Login extends Component<
    any,
    { username: string; password: string }
> {
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

    handleSubmit(event: FormEvent) {
        event.preventDefault();
        sendLoginRequest(this.state.username, this.state.password).then(
            (result) => {
                // console.log(result)

                if (!result.error) this.props.history.push("/dashboard");
                else errorStore.dispatch({ type: "set", error: result.error });
            },
        );
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            onChange={this.handleUsernameChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={this.handlePasswordChange}
                        />{" "}
                    </Form.Group>
                    <Form.Control type="submit" value="Log In" />
                </Form>
            </div>
        );
    }
}
