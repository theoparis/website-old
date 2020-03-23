$('#delete-post').on('submit', async(e) => {
    e.preventDefault();
    let postTitle = $('#title').val();
    let postContent = $('#content').val();
    let post = { title: postTitle };
    // Test for connecting to server
    let response = await fetch("https://blog.creepinson.xyz/api/admin/deletePost", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    });
    let result = await response.json();
    console.log(result);
    if (result) {
        if (response.status == 200) window.location.href = "https://blog.creepinson.xyz/";
        else if (response.status == 400) {
            $("#error").show();
            $('#error-message').text(result.message);
            $("#error").fadeOut(5000);
        }
        // TODO: handle errors
    }
});