import styled from 'styled-components';
import { FiberManualRecord, Create, InsertComment, Inbox, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess, ExpandMore, Add } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {

  const [user]=useAuthState(auth);

    const [channels] = useCollection(
        collection(db, 'rooms'));

  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>FRIENDS GP</h2>
                <h3>
                    <FiberManualRecord />
                    {user?.displayName}
                </h3>
            </SidebarInfo>
            <Create />
        </SidebarHeader>

        <SidebarOption Icon={InsertComment} title='Threads' />
        <SidebarOption Icon={Inbox} title='Mentions & Reactions' />
        <SidebarOption Icon={Drafts} title='Saved items' />
        <SidebarOption Icon={BookmarkBorder} title='Channel browser' />
        <SidebarOption Icon={PeopleAlt} title='People & user group' />
        <SidebarOption Icon={Apps} title='Apps' />
        <SidebarOption Icon={FileCopy} title='File browser' />
        <SidebarOption Icon={ExpandLess} title='Show less' />
        <hr />
        <SidebarOption Icon={ExpandMore} title="Channels" />
        <hr />
        <SidebarOption Icon={Add} addChannelOption={true} title='Add Channel' />   

        {
            channels?.docs.map((doc)=>(
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />  
            ))
        }     
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer=styled.div`
    flex: 0.2;
    background-color: #3f0f40;
    border-top: 1px solid gray;
    /* padding: 50px 10px 0 30px; */
    color: white;

    > hr{
        margin: 5px 0;
        border: 1px solid #49274b;
    }
`;
const SidebarHeader=styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 40px;
    padding: 0 20px;

    > .MuiSvgIcon-root{
        background-color: white;
        border-radius: 50%;
        padding: 5px;
        color: black;
        cursor: pointer;
    }
`;

const SidebarInfo=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h2{
        font-size: 20px;
    }

    > h3{
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 100;
    }
`;


