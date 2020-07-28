import React, { Component, FormEvent } from "react";
import { Container, Form } from "react-bootstrap";
import { createPost } from "src/api";
import { Link } from "react-router-dom";

export class CreatePost extends Component<
    any,
    { title: string; description: string; content: string }
> {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            content: "",
        };
    }

    handleTitleChange(e: any) {
        this.setState({ title: e.target.value });
    }

    handleDescriptionChange(e: any) {
        this.setState({ description: e.target.value });
    }

    handleContentChange(e: any) {
        this.setState({ content: e.target.value });
    }

    onSubmit(event: FormEvent) {
        event.preventDefault();
        createPost(this.state).then((result) => {
            console.log(result);
            if (!result.error)
                this.props.history.push(
                    `/blog/post/${result.json.result.upserted[0]._id}`,
                );
            else if (result.error === "authentication error")
                this.props.history.push("/login");
        });
    }

    render() {
        return (
            <main id="content">
                <Container>
                    <Form id="create-post" onSubmit={this.onSubmit.bind(this)}>
                        <Form.Group controlId="title">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                onChange={this.handleTitleChange.bind(this)}
                                type="text"
                                placeholder="Enter post title"
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Short Post Description</Form.Label>
                            <Form.Control
                                onChange={this.handleDescriptionChange.bind(
                                    this,
                                )}
                                as="textarea"
                                placeholder="Enter post description"
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="content">
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control
                                onChange={this.handleContentChange.bind(this)}
                                as="textarea"
                                placeholder="Enter post content (can be html)"
                            />
                        </Form.Group>
                        <Form.Control
                            type="submit"
                            className="btn btn-primary"
                            value="Create"
                        />
                    </Form>
                </Container>
            </main>
        );
    }
}

export default class BlogAdmin extends Component {
    render() {
        return (
            <div>
                <main id="content">
                    <Container>
                        <h2>Blog Administration Dashboard</h2>
                        <Link to="/admin/blog/new">New Post</Link>
                    </Container>
                </main>
            </div>
        );
    }
}
