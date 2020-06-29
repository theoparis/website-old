import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { getPosts } from "../../api";

export function Blog({ newPosts }: { newPosts?: any[] }) {
    const [posts, setPosts] = useState(newPosts || []);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getPosts()
            .then((newPosts) => {
                console.log(newPosts);
                setPosts(newPosts);
            })
            .catch(console.error);
    }, []);
    return (
        <div>
            <main id="content">
                <Container>
                    <div className="container mt-4 mb-4">
                        <h1 className="page-title">Blog</h1>
                        <p>{posts.length} Posts</p>
                        <div className="search-container">
                            <form action={"/blog?search=" + query}>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search query..."
                                        name="search"
                                        value={query}
                                        onChange={(event) =>
                                            setQuery(event.target.value)
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
                            {posts.map((post: any) => (
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
                                        <div className="post-description card-text">
                                            <p
                                                dangerouslySetInnerHTML={
                                                    post.description
                                                }
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
