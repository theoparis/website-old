$('#delete-post').on('submit', async(e) => {
    e.preventDefault();
    let postTitle = $('#title').val();
    let postContent = $('#content').val();
    let post = { title: postTitle };
    // Test for connecting to server
    let response = await fetch("/api/blog/admin/deletePost", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    });
    let result = await response.json();
    console.log(result);
    if (result) {
        if (response.status == 200) window.location.href = "/blog";
        // TODO: handle errors
    }
});