import { Avatar } from '@mui/material'
import styled from 'styled-components'

type PropType={
    message?:string,
    user?:string
}

const Message = ({message, user}:PropType) => {
  return (
    <MessageContainer>
        <Avatar>{user && user[0]}</Avatar>
        <MessageInfo>
            <h4>{user}</h4>
            <p>{message}</p>
        </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer=styled.div`
    display: flex;
    align-items: center;
    margin: 20px 20px;
`

const MessageInfo=styled.div`
    margin-left: 10px;

    > p{
        font-size: 15px;
    }
`