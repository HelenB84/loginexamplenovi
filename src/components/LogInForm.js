import React from 'react';
import { useForm } from "react-hook-form";

export default function LogInform (){
    return <form>
        <label htmlFor="userName">Username</label>
        <input name={"userName"} type="text"/>
        <label htmlFor="password">Password</label>
        <input name={"password"} type="password"/>
        <input type="submit"/>
    </form>
}