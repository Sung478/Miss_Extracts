import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import SignIn from '../../components/SignIn/SignIn'
import axiosInstance from '../../config/axios'

export default function SignIn_test() {
    const navigate = useNavigate()



  const onSubmit = async (data) => {
    console.log({...data})
    const response = await axiosInstance.post('auth/signin', {...data})
    console.log(response.data)
    alert('Welcome my friend!')
    navigate('/dashboard')
  }


  return (
    <div className='SignIn_test'>
        <NavBar isSignin={false} />
        <SignIn onSubmit={onSubmit}/>
    </div>
  )
}
