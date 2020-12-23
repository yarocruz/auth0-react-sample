import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function SignupButton() {
    const { loginWithRedirect } = useAuth0()
    return (
        <button
            className="btn btn-primary btn-black"
            onClick={() => loginWithRedirect({
                sreen_hint: "signup"
            })}
        >
            Sign Up
        </button>
    )
}

export default SignupButton