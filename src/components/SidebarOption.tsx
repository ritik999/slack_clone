import React from 'react'
import styled from 'styled-components';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../redux/counterReducer';

type PropsType={
    Icon?:React.ElementType,
    title:string
    addChannelOption?:boolean
    id?:string
}

const SidebarOption = ({Icon,title,addChannelOption,id}:PropsType) => {

    const dispatch=useDispatch();

    const addChannel=async()=>{
        const channelName:string|null=prompt("Please enter the channel name");

        if(channelName){
            await addDoc(collection(db,'rooms'),{
                name:channelName
            })
        }
    }

    const selectChannel=async()=>{
        if(id){
            dispatch(enterRoom(id));
        }
    }

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon fontSize='small' style={{padding:10}} />}

        {Icon ? (<h3>{title}</h3>):
        (<SidebarOptionChannel>
            <span>#</span>{title}
        </SidebarOptionChannel>)}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer=styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    padding: 0 10px;

    > h3{
        font-size: 15px;
    }

    &:hover{
        background-color: gray;
    }
`;

const SidebarOptionChannel=styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    font-weight: 500;

    > span{
        font-size: 20px;
        font-weight: bold;
        margin-right: 20px;
    }
`;