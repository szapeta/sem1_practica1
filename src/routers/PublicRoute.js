import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'

export const PublicRoute = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {
  return (
    <Route {...rest}
    component={(props)=>(
        (!isAutenticated)?(<Component{...props}/>):(<Redirect to="/home"/>)
    )}
    />
  )
}

 PublicRoute.prototype={
     isAutenticated: PropTypes.bool.isRequired,
     component: PropTypes.func.isRequired
 }
