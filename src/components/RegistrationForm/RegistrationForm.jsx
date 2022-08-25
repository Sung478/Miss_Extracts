import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axios";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      username: '',
      name: '',
      email: '',
      password: '',
      birthDate: '',
      height: '',
      weight: ''
    }
  });

  const onSummit = async (data) => {
    try {
      await axiosInstance.post('/auth/signup', { ...data, picture: '/cyborg-id-1.png' })
      console.log(data);
      reset();
      navigate('../home');
    } catch (e) { console.log(e) }
    // เปลี่ยน navigate ไป signin ตอน page signin เสร็จ
  }
  // goals: { weeklyGoal: 0, weightGoal: 0, inspiration: "not set"}

  return (
    <div className='regis-form'>
      <form onSubmit={handleSubmit(onSummit)}>
        <h2>Create Account</h2>
        <input {...register('username', { required: true, minLength: 6, maxLength: 15 })} id='username' placeholder='Username' /><br />
        {errors.username && errors.username.type === 'required' && <span>Invalid or empty username.<br /></span>}
        {errors.username && (errors.username.type === 'minLength' || errors.username.type === 'maxLength') && <span>Username should be between 6-15 characters.<br /></span>}

        <input {...register('name', { required: true, minLength: 1, maxLength: 50 })} id='name' placeholder='Name' /><br />
        {errors.name && errors.name.type === 'required' && <span>What's your name?<br /></span>}
        {errors.name && (errors.name.type === 'minLength' || errors.name.type === 'maxLength') && <span>Name should be between less than 50 characters.<br /></span>}

        <input {...register('email', { required: true })} type='email' placeholder='email' /><br />
        {errors.email && errors.email.type === 'required' && <span>Please enter a valid email.<br /></span>}

        <input {...register('password', { required: true, minLength: 8, maxLength: 16 })} id='password' type="password" placeholder="Password" /><br />
        {errors.password && errors.password.type === 'required' && <span>Password is required<br /></span>}
        {errors.password && (errors.password.type === 'minLength' || errors.password.type === 'maxLength') && <span>Your password must be between 8-16 characters.<br /></span>}

        <input {...register('birthDate', { required: true })} id='birthDate' type="date" placeholder="Date of birth" /><br />

        <input {...register('height', { required: true })} id='height' type="number" placeholder="Height(cm)" /><br />
        {errors.height && errors.height.type === 'required' && <span>What's your height?<br /></span>}

        <input {...register('weight', { required: true })} id='weight' type="number" placeholder="Weight(kg)" /><br />
        {errors.weight && errors.weight.type === 'required' && <span>What's your weight?<br /></span>}


        <input id='register-button' type="submit" />
      </form>
    </div>
  );
}

