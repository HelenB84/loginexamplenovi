import React from 'react';
import { useForm } from "react-hook-form";

export default function LogInform (){
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        console.log(data)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Username</label>
        <input name={"userName"} type="text" ref={register}/>
        <label htmlFor="password">Password</label>
        <input name={"password"} type="password" ref={register}/>
        <input type="submit"/>
    </form>
}