import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


const CometPost = () => {
    const {postId} =useParams()


    const [postUser, setPostUser]= useState([])
    const getPost = async () =>{
        const response = await fetch(`https://dummyjson.com/posts/${postId}`)
        const data = await response.json()
        setPostUser(data)
    }
    useEffect(() => {
        getPost()
    }, []);
    return (
        <div>
            <h1>Post id : {postId}</h1>
            <h2>Title: {postUser.title}</h2>
            <p>{postUser.body}</p>
        </div>
    );
};

export default CometPost;