import React from 'react';
import { Route } from 'react-router-dom'
import { withAuthenticationRequired} from "@auth0/auth0-react";
import { Loading } from "../components/index"

function ProtectedRoute({ component, ...args}) {
    return (
        <Route
        component={withAuthenticationRequired(component, {
            onRedirecting: () => <Loading />
        })}
        {...args}
        />
    )
}

export default ProtectedRoute