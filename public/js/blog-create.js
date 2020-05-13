const editor = new EditorJS({
	/** 
     * Id of Element that should contain the Editor 
     */

	holderId: 'editorjs',

	/** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */

	tools: {
		header: Header,
		list: List,
	},
})

$('#create-post').on('submit', async (e) => {
	e.preventDefault()
	let postTitle = $('#title').val()
    let postDescription = $('#description').val()
    let postContent = $('#content').val()
    
	let post = { title: postTitle, description: postDescription, content: postContent }
	// Test for connecting to server
	let response = await fetch('/blog/api/admin/createPost', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(post),
	})
	let result = await response.json()
	console.log(result)
	if (result) {
		if (response.status == 201) {
			window.location.href = '/blog'
		} else if (response.status == 400) {
			$('#error').show()
			$('#error-message').text(result.message)
			$('#error').fadeOut(5000)
		}
	}
})
