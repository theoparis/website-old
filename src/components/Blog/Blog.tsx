import React, { Component } from "react";

import { Container } from "react-bootstrap";
import { getPosts, dateToString } from "../../api";

export class Blog extends Component<
    {
        archiveFilter?: string;
        category?: string;
    },
    { posts: any[]; query: string }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [],
            query: "",
        };
    }

    componentDidMount() {
        getPosts(this.props.archiveFilter, this.props.category)
            .then((newPosts) => {
                console.log(newPosts);
                this.setState({ posts: newPosts });
            })
            .catch(console.error);
    }

    render() {
        return (
            <div>
                <main id="content">
                    <Container>
                        <div className="container mt-4 mb-4">
                            <h1 className="page-title">Blog</h1>
                            <p>{this.state.posts.length} Posts</p>
                            <div className="search-container">
                                <form
                                    action={"/blog?search=" + this.state.query}
                                >
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search query..."
                                            name="search"
                                            value={this.state.query}
                                            onChange={(event) =>
                                                this.setState({
                                                    query: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="form-control btn btn-primary"
                                            type="submit"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div id="posts">
                                {this.state.posts.map((post: any) => (
                                    <div
                                        key={post._id}
                                        className="border-panel card mt-4"
                                    >
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
                                                    post.createdAt.getTime()
                                                }
                                            >
                                                Created By {post.author} At{" "}
                                                {dateToString(post.createdAt) +
                                                    " "}
                                                In {post.category || "Uncategorized"}
                                            </a>
                                            <div className="post-description card-text">
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            post.description,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </main>
            </div>
        );
    }
}
