import React from 'react'
import './Login.css'
import {auth, provider} from './Firebase'
import { Button } from '@material-ui/core'
import { useStateValue } from "./StateProvider"
import { actionTypes } from "./reducer"
function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () =>
    {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {alert(error.msg)})
    }
    return (
        <div className="login">
              <div className= "login__container">
        
                  <img alt ="slack" src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"/>
                  <h1>Sign to WorkSpace</h1>
                  <p>domain.com</p>
                  <Button onClick = {signIn}  >Sign in with Google</Button>
              </div>

        </div>
    )
}

export default Login
