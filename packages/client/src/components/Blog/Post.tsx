import React, { Component } from "react";

import { Container } from "react-bootstrap";
import { getSinglePost } from "../../api";

export class Post extends Component<any, any> {
    componentDidMount() {
        getSinglePost().then((post) => this.setState({ post }));
    }

    render() {
        const post = this.state.post;
        return (
            <div>
                <main id="content">
                    <Container>
                        <div className="container mt-4 mb-4">
                            <h1 className="page-title">Blog</h1>
                            <div id="posts">
                                <div className="border-panel card mt-4">
                                    <div className="card-body">
                                        <h2 className="post-title card-title">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={
                                                    "/blog/post/" + post.title
                                                }
                                            >
                                                {post.title}
                                            </a>
                                        </h2>
                                        <a
                                            className="text-muted card-subtitle"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={
                                                "/blog/archive/" +
                                                post.createdAt.getTime()
                                            }
                                        >
                                            Created By {post.author} At{" "}
                                            {post.createdAt.toString()}
                                        </a>
                                        <div className="post-content card-text">
                                            <p
                                                dangerouslySetInnerHTML={
                                                    post.content
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </main>
            </div>
        );
    }
}
