import React, { useContext, useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import {Box,styled,Divider} from "@mui/material"
import Conversation from './Conversation';
import { AccountContext} from '../../context/AccountProvider';
// import { convertLength } from '@mui/material/styles/cssUtils';
const Conversations = ({text}) => {
  
    const [user,Alluser]=useState([])
const Component=styled(Box)`
height:81vh;
overflow:overlay;
`
const StyledDivider=styled(Divider)`
margin:0 0 0 70px;
background:#e9edf;
opacity:.7,
`

console.log("AlluserOnConver",user)


const {setexistuser,socketRef,SetActiveUser,existuser}=useContext(AccountContext)
let presentUser=useSelector((state)=>state.userReducer.user);

useEffect(()=>{
  socketRef.current.emit("addusers",presentUser);  
  socketRef.current.on("getActiveUser",(users)=>{
    console.log("incomingSocketUser",users)
    SetActiveUser(users)
  })
},[presentUser])

useEffect(()=>{
  const fetchUser=async()=>{
    try {
      const response=await fetch('http://localhost:4500/getUser');
      if(response.ok){
        const result=await response.json()
        // return result
        console.log("existuser",result);
        const filterData=result.Alluser.filter((item)=>item.name.toLowerCase().includes(text.toLowerCase()))
        console.log("existuser",filterData);
        Alluser(filterData);
        let array=user;
        setexistuser([...chatGpt,...filterData]);
        console.log("array",user)
        let newArray=[...array]
        console.log("context-exist-user",existuser)
        
       
  
        
      }
    } catch (error) {
      
    }
  }
  fetchUser()
 },[text,presentUser])
 
const chatGpt=[{
  id: 4,
  name: 'Chat-Gpt',
  email: 'Chatgpt@gmail.com',
  picture: 'https://static.vecteezy.com/system/resources/previews/021/059/825/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg',
  About: 'Hey there i am chat-gpt'
}]


const newUser=[...chatGpt,...user]
  return (
    <Component>
    {
        newUser.map((user)=>(
            user.email!==presentUser.email && <>
            <Conversation user={user}/>
            <StyledDivider />
            </>
            
        ))
    }

    </Component>
  )
}

export default Conversations
 