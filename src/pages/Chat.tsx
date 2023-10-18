import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import {useRef,useEffect} from 'react'
import styled from 'styled-components';
import ChatInput from '../components/ChatInput';
import { useSelector } from 'react-redux';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc } from 'firebase/firestore';
import { db } from '../firebase';
import Message from '../components/Message';

const Chat = () => {

  const chatRef=useRef<HTMLDivElement>(null);

  const {roomId}=useSelector((state:any)=>state.counter);

  const [roomDetails]=useDocument(
    roomId && doc(db,`rooms/${roomId}`)
  )

  const [roomMessage]=useCollection(
    roomId && collection(db,`rooms/${roomId}/messages`)
  )

  console.log(roomDetails?.data())
  roomMessage?.docs.map((doc)=>{
      console.log(doc.data().message);
  })

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior:'smooth'
    });
  }, [roomId])
  

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
            <h4>
              <strong># {roomDetails?.data()?.name}</strong>
            </h4>
            <StarBorderOutlined />
        </HeaderLeft>

        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>

      <ChatMessage>
        {roomMessage?.docs.map((doc)=>{
          const {message,user}=doc.data();
          return(
            <Message key={doc.id} message={message} user={user} />
          )
        })}
        <ChatBottom ref={chatRef} />
      </ChatMessage>

      <ChatInput chatRef={chatRef} channelId={roomId} />

    </ChatContainer>
  )
}

export default Chat

const ChatContainer=styled.div`
  flex: 0.8;
  flex-grow: 1;
  overflow-y: scroll;
  /* margin-top: 50px; */
`

const Header=styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border-bottom: 1px solid lightgray;
`

const HeaderLeft=styled.div`
  display: flex;
  align-items: center;

  > h4{
    margin-right: 10px;
    text-transform: lowercase;
    font-weight: bolder;
    font-size: 20px;
  }
`

const HeaderRight=styled.div`
  display: flex;
  align-items: center;

  > p{
    display: flex;
    align-items: center;
    word-spacing: 100px;
    letter-spacing: 5px;
    font-weight: 800;
  }
`

const ChatMessage=styled.div`
`

const ChatBottom=styled.div`
  padding-bottom: 200px;
`

