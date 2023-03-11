function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then (data => displayPosts(data))

}
function displayPosts(posts){

    const postContainer = document.getElementById('posts-container');
   
    for(const post of posts){
         const PostDiv = document. createElement('div');
         PostDiv.classList.add('post')
         PostDiv.innerHTML = `
         <h4>user-${post.userId} </h4>
         <h5>post:${post.title} </h5>
         <p>Post description: ${post.body} </p>
        `;
        postContainer.appendChild(PostDiv);
    }
}

loadPost();