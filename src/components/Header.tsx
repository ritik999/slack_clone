import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { AccessTime, Search, HelpOutline } from '@mui/icons-material';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {

  const [user]=useAuthState(auth);
  console.log(user)

  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar onClick={()=>auth.signOut()}>{user?.displayName?.charAt(0)}</HeaderAvatar>
            <AccessTime />
        </HeaderLeft>

        <HeaderSearch>
            <Search />
            <input type="text" placeholder='Search...' />
        </HeaderSearch>

        <HeaderRight>
            <HelpOutline />
        </HeaderRight>

    </HeaderContainer>
  )
}

export default Header

const HeaderContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
    padding: 10px 10px;
    background-color: #3f0f40;
    color: white;
`;

const HeaderLeft=styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const HeaderAvatar=styled(Avatar)`
    margin-right: 70px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const HeaderSearch=styled.div`
    flex:0.4;
    display: flex;
    align-items: center;
    border: 1px solid gray;
    padding: 3px 30px;
    border-radius: 8px;

    > input{
        background: none;
        border: none;
        outline: none;
        text-align: center;
        width: 100%;
        color: white;
        margin-left: 10px;
        font-weight: 600;
    }
`;

const HeaderRight=styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
`