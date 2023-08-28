import React, { useContext } from 'react'
import {Box} from "@mui/material"
import Chatheader from './Chatheader'
import MessageBox from './MessageBox'
import { AccountContext } from '../../context/AccountProvider'
const ChatBox = () => {
  const {relations}=useContext(AccountContext);
  const {existuser}=useContext(AccountContext);
  const chatheaderUser=existuser.filter((item)=>item.id===relations.reciverId);
  console.log("user relations",existuser)
  console.log("relations",relations)
  console.log("chatheaderUser from chatbox",chatheaderUser)
  return (
    <Box style={{height:'75vh'}}>
    <Chatheader chatheaderUser={chatheaderUser}/>
    <MessageBox chatheaderUser={chatheaderUser}/>

    </Box>
  )
}

export default ChatBox
 