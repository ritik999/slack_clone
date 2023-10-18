import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

    const signIn=(e:React.MouseEvent)=>{
        e.preventDefault();

        signInWithPopup(auth,provider).catch((e)=>alert(e.message));
    }

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="slack" />
            <h1>Sign in to the SLACK Grp</h1>
            <p>cdac.slack.com</p>
            <SignBtn variant='contained' color='success' type='submit' onClick={signIn}>Sign in with Google</SignBtn>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer=styled.div`
    background-color: #f8f8f8;
    display: grid;
    height: 100vh;
    place-items: center;
`;

const LoginInnerContainer=styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.12);

    > img{
        object-fit: contain;
        height: 80px;
        margin-bottom: 10px;
    }
`;

const SignBtn=styled(Button)`
    margin-top: 15px !important;
`