import React from 'react';
import { useForm } from "react-hook-form";

export default function SignUpForm (){
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data){
        console.log(data)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Username</label>
        <input name={"userName"} type="text" ref={register({required:true})}/>
        {errors.userName && <span>This field is required</span>}
        <label htmlFor="password">Password</label>
        <input name={"password"} type="password" ref={register({required:true})}/>
        {errors.password && <span>This field is required</span>}
        <label htmlFor="email">Email</label>
        <input name={"email"} type="email" ref={register({required:true})}/>
        {errors.email && <span>This field is required</span>}
        <input type="submit"/>
    </form>
}