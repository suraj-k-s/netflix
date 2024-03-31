import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div id='bodyMain' >
            <nav>
                <Link to={''}>
                    <img src="logo.svg" alt="logo" />
                </Link>
            </nav>
            <div class="form-wrapper">
                <h2>Sign In</h2>
                <form action="#">
                    <div class="form-control">
                        <input type="text" required />
                        <label>Email or phone number</label>
                    </div>
                    <div class="form-control">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit">Sign In</button>
                    <div class="form-help">
                        <div class="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <Link to={''}>
                            Need help?
                        </Link>
                    </div>
                </form>
                <p>
                    New to Netflix?
                    <Link to={''}>
                        Sign up now
                    </Link>
                </p>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <Link to={''}>
                        Learn more.
                    </Link>
                </small>
            </div>
        </div>
    )
}

export default Login