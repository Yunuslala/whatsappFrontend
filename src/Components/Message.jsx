import React, { useContext, useEffect } from 'react'
import { LoginDialog } from './account/LoginDialog'
import {AppBar,Toolbar,Box} from '@mui/material';
import AccountProvider, { AccountContext } from './context/AccountProvider';
import { ChatDialogs } from './chat/ChatDialogs';
import { useDispatch, useSelector } from 'react-redux';
import { PostUsers } from './Redux/auth/authAction';
// import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Message = () => {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(PostUsers())
},[])
  const data=useSelector((state)=>state.userReducer.user)
  const header = { height:'200px',
  backgroundColor:'#00bfa5',
}

const loginHeader={ 
  height:'125px',
backgroundColor:'#00bfa5',
}


const component= {
  height:"100vh",
backgroundColor:"#DCDCDC"
}
return (
<Box style={component}>
{
data.id? 
  <>
  <AppBar style={loginHeader}>
    <Toolbar>
    </Toolbar>
  </AppBar>
  <ChatDialogs />
  </>
  :
  <>
  <AppBar style={header}>
    <Toolbar>
        </Toolbar>
    </AppBar>
    <LoginDialog />
  </>
}
   
</Box>
)
}
