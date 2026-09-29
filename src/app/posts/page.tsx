import React from 'react';

// const postsPromise = async ()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }

const getPosts2 = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok){
        throw new Error ("Failed to fetch posts!")
    }
    return res.json();
}


const getPosts = async()=>{
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    }catch (error){
        throw new Error ("Failed to fetch posts!")
    }finally {
        // alert("Finished")
    }
}
const PostPage = async () => {
    // const posts = await postsPromise();
    const posts = await getPosts();

    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();

    return (

        <div>
            <h1>Post : {posts.length}</h1>
        </div>
    );
};

export default PostPage;