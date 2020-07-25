import React, { Component, useRef } from "react";
import { Form } from "react-bootstrap";
import { sendLoginRequest } from "../../api";

export class Register extends Component<
    any,
    { username: string; password: string }
> {
    form: React.MutableRefObject<HTMLFormElement | undefined>;
    constructor(props: any) {
        super(props);
        this.state = { username: "", password: "" };
        this.form = useRef();
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
        sendLoginRequest(this.state.username, this.state.password).then(
            (result) => {
                if (result !== "") this.context.history.push("/dashboard");
            },
        );
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <Form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleUsernameChange}
                        />{" "}
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            onChange={this.handlePasswordChange}
                        />{" "}
                    </label>
                    <input type="submit" value="Register" />
                </Form>
            </div>
        );
    }
}
