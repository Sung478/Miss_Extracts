import React from "react";
import { appendErrors, useForm } from 'react-hook-form';
import './SignIn.css'

const SignIn = ({onSubmit}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    // const onSubmit = data => {
    //     console.log(data);
    //     reset();
    // }
    return (
        <div className="sign-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder="Username" {...register('username',{required: true})} />
                    {errors.Username && <p>Please Enter the Username</p>}
                <br />
                <input type='password' placeholder="Password" {...register('password',{required: true})}/>
                    {errors.Password && <p>Please Enter the password</p>}
                <br/>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn