import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar({isSignin, isHome, atSignup}) {

    let navElements;
    if (isSignin) {
        navElements = [
            <Link to='/dashboard'>Dashboard</Link>,
            <Link to='/activities'>My Activity</Link>,
            <Link to='/community'>Community</Link>,
            <Link to='/setting'>Setting</Link>
        ]
    } else {
        if(atSignup){
            navElements = [
                <Link to='/registration'>Sign Up</Link>
            ]
        }
        else{
            navElements = [
                <Link to='/signin'>Sign In</Link>
            ]
        }
    }

    if (isHome) {
        navElements.push(<Link to='/registration'><p>Get Started</p></Link>)
    }

    return (
        <div className="navbar">
            <Link to='/home' className="logo">
            <img src='/logo.png' alt="logo" />
                <h1>EXTRACKS</h1>
            </Link>
            <nav>
                {navElements}
            </nav>
        </div>
  )
}