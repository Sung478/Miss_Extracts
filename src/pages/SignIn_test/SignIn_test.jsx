import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import SignIn from '../../components/SignIn/SignIn'
import axiosInstance from '../../config/axios'
import './SignIn_test.css'

export default function SignIn_test() {
    const navigate = useNavigate()



  const onSubmit = async (data) => {
    try{
    console.log({...data})
    const response = await axiosInstance.post('auth/signin', {...data})
    console.log(response.data)
    alert('Welcom my friend! ' + response.data.username)
    navigate('/dashboard')} catch (e) {
      console.log(e.response.data)
      alert(e.response.data)
    }
  }


  return (
    <div className='SignIn_test'>
        <NavBar isSignin={false} atSignin={true}/>
        <SignIn onSubmit={onSubmit}/>
    </div>
  )
}
