import React from "react";
import { appendErrors, useForm } from 'react-hook-form';
const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }
    return (
        <div className="sign-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder="Username" {...register('Username',{required: true})} />
                    {errors.Username && <p>Please Enter the Username</p>}
                <br />
                <input type='password' placeholder="Password" {...register('Password',{required: true})}/>
                    {errors.Password && <p>Please Enter the password</p>}
                <br/>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn