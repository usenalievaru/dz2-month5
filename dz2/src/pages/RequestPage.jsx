import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const RequestPage = () => {
    const [postUser, setPostUser]= useState([])
    const getPost = async () =>{
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json()
        setPostUser(data.posts)
    }
    useEffect(() => {
        getPost()
    }, []);

    return (
        <div>
            {
                postUser.map((el, index) =>[
                    <div key={index}>
                        <Link to={`/${el.id}`}>
                            <h2>Title: {el.title}</h2>
                            <p>{el.body}</p>
                        </Link>

                    </div>
                ])
            }

        </div>
    );
};

export default RequestPage;