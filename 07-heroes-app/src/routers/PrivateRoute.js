import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAutenticated,
    component: Component, // renombrado para que quede en mayuscula
    ...rest // path, y todos los demas atributos
}) => {
    console.log("rest", rest)
    // console.log("pathname", rest.location.pathname)
    localStorage.setItem('lastpath',rest.location.pathname)
    return (
        <Route {...rest}
            component={(props) => {
                // console.log("props", props)
                return (isAutenticated)
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            }}
        />
    )
}

PrivateRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}