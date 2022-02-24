import React from 'react'
import PropTypes  from 'prop-types'
import {Route, Redirect, Navigate} from 'react-router-dom'

export const PrivateRoute = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)

  return (
    <Route {...rest}
    component={(props)=>(
        (!isAutenticated)?(<Component{...props}/>):(<Redirect to="/homeuser"/>)
    )}
    />
  )
}

PrivateRoute.propTypes = {
     isAuthenticated: PropTypes.bool.isRequired,
     component: PropTypes.func.isRequired
 }