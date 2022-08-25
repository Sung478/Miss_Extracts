import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar({isSignin, isHome, atSignup, atSignin}) {

    let navElements = [];
    if (isSignin) {
        navElements = [
            <Link to='/user/dashboard'>Dashboard</Link>,
            <Link to='/user/activities'>My Activity</Link>,
            <Link to='/user/community'>Community</Link>,
            <Link to='/user/setting'>Setting</Link>
        ]
    } else {
        if(isHome || atSignup){
             navElements = [
                <Link to='/signin'>Sign In</Link>
            ]
        }
        else if(atSignin){
             navElements = [
                <Link to='/registration'>Sign Up</Link>
            ]
        }
    }

    if (isHome) {
        navElements.push(<Link to='/registration'><p>Get Started</p></Link>)
    }

    return (
        <div className="navbar" style={isHome? { backgroundColor: "#f5aabb"} :  { backgroundColor: "none"}}>
            <Link to='/' className="logo">
            <img src='/logo.png' alt="logo" />
                <h1>EXTRACKS</h1>
            </Link>
            <nav>
                {navElements}
            </nav>
        </div>
  )
}