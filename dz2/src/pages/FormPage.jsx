import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const FormPage = () => {

    const [titleInput, setTitleInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')


    const postRequest= async () =>{
        const response = await axios.post('https://dummyjson.com/posts/add', {
            title:titleInput,
            body:bodyInput,
            userId:5
        })
    }
    const navigate= useNavigate()
    const createPost = (e) =>{
        e.preventDefault()
        postRequest()
        navigate('/')


    }

    return (
        <>
            <form onSubmit={createPost}>
                <input type="text" placeholder='Введите title' onInput={(e) =>setTitleInput(e.target.value)}/>
                <input type="text" placeholder='Введите body' onInput={(e) =>setBodyInput(e.target.value)}/>
                <button type='submit'>Отправить</button>
            </form>

        </>
    );
};

export default FormPage;