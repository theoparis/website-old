import React, { Component } from "react";

import { Container } from "react-bootstrap";
import { getSinglePost, dateToString } from "../../api";

export class Post extends Component<any, { post: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            post: {},
        };
    }

    componentDidMount() {
        const {
            match: { params },
        } = this.props;
        getSinglePost(params.id).then((post) => {
            this.setState({ post });
        });
    }

    render() {
        const post = this.state.post;
        if (post && post._id)
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
                                                        "/blog/post/" + post._id
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
                                                    new Date(
                                                        post.createdAt,
                                                    ).getTime()
                                                }
                                            >
                                                Created By {post.author} At{" "}
                                                {dateToString(post.createdAt) +
                                                    " "}
                                                In {post.category || "Uncategorized"}
                                            </a>
                                            <div className="post-content card-text">
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.content,
                                                    }}
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
        else
            return (
                <div>
                    <main id="content">
                        <Container>
                            <div className="container mt-4 mb-4">
                                <h1 className="page-title">Blog</h1>
                                <div id="posts"></div>
                            </div>
                        </Container>
                    </main>
                </div>
            );
    }
}
