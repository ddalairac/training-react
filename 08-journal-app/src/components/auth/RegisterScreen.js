import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submit")
    }
    return (
        <>
            <h1 className="auth__title mb-5">Register Screen</h1>
            <form onSubmit={handleSubmit}>
                <input className="auth_input" type="text" placeholder="Email" name="email" autoComplete="off" />
                <input className="auth_input" type="password" placeholder="Password" name="password" />
                <input className="auth_input" type="password" placeholder="Confirm password " name="password2" />
                <button type="submit" className="btn btn-primary btn-block mb-5" disabled={false}>Registrarse</button>
                {/* <hr />
                 <div className="auth__social-network">
                    <p>Login con red social</p>
                    <div className="google-btn"                >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div> */}
                <Link to="/auth/login" className="link ">Ya esta registrado?</Link>
            </form>
        </>
    )
}