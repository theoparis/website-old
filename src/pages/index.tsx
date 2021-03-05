import { MarkdownPage } from "@flowtr/react-page";
import React from "react";
import page from "./workspace.md";

export const WorkspacePage = () => (
    <MarkdownPage
        path={page}
        purify={true}
        render={{
            title: true,
            date: false,
            subtitle: true,
        }}
    />
);
