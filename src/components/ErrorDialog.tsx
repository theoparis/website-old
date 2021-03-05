import React, { Component } from "react";
import { Toast } from "react-bootstrap";
import { errorStore } from "src/config";

export default class ErrorDialog extends Component<
    Record<string, unknown>,
    { display: boolean; error: string }
> {
    timeout?: NodeJS.Timeout = undefined;

    constructor(props: Record<string, unknown>) {
        super(props);
        this.state = {
            display: false,
            error: "",
        };
        this.toggleError = this.toggleError.bind(this);
        this.getError = this.getError.bind(this);
    }

    componentDidMount() {
        errorStore.subscribe(() => {
            const error = errorStore.getState();
            this.setState({
                error,
                display: error !== undefined && error !== "",
            });
            // Hide error dialog after n milliseconds
            this.timeout = setTimeout(() => {
                this.toggleError();
            }, 5000);
        });
    }

    toggleError() {
        if (this.timeout) clearTimeout(this.timeout);
        if (this.state.display) this.setState({ display: false });
        else this.setState({ display: true });
    }

    getError() {
        return this.state.error;
    }

    render() {
        return (
            <div>
                <Toast
                    style={{
                        backgroundColor: "#555",
                        marginBottom: this.state.display ? "15px" : 0,
                        marginTop: this.state.display ? "15px" : 0,
                        transition: "opacity 0.5s linear, height 0.5s linear",
                        opacity: this.state.display ? 1 : 0,
                        height: this.state.display ? "100px" : 0,
                    }}
                    onClose={this.toggleError}
                >
                    <Toast.Header>
                        <strong className="mr-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>{this.getError()}</Toast.Body>
                </Toast>
            </div>
        );
    }
}
