import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
    const { loginWithRedirect } = useAuth0()
    return (
        <button
            className="btn btn-primary btn-black"
            onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
    )
}

export default LoginButton