$('#create-post').on('submit', async(e) => {
    e.preventDefault();
    let postTitle = $('#title').val();
    let postContent = $('#content').val();
    let post = { title: postTitle, content: postContent };
    // Test for connecting to server
    let response = await fetch("http://10.0.0.49:3000/blog/admin/createPost", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    });
    let result = await response.json();
    console.log(result);
    if (result) {
        if (response.status == 201) window.location.href = "/blog";
    }
});