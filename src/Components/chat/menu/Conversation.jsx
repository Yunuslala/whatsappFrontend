import React, { useContext } from 'react'
import {Box,Typography,styled} from '@mui/material'
import {  useSelector } from 'react-redux'
import { AccountContext } from '../../context/AccountProvider';

const Conversation = ({user}) => {
console.log("object of users",user)
const {setrelations}=useContext(AccountContext)
    const Component=styled(Box)`
    display:flex;
    height:45px;
    padding:13px 0;
    cursor: pointer;

    `
    const Image=styled('img')({
        width:50,
        height:50,
        borderRadius:`50%`,
        padding:'0 14px',
        objectFit:'cover',
        
    })

    const loguser=useSelector((state)=>state.userReducer.user);
  
    const createRelation=async(user)=>{
      
      const obj={
        senderId:loguser.id,
        reciverId:user.id
      }
      const response=await fetch('http://localhost:4500/createRelations',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      if(response.ok){
        const result=await response.json();
        setrelations(result.relations)
      }

    }

  return (
    <>
  <Component onClick={()=>createRelation(user)}>
    <Box>
        <Image src={user.picture} alt="dp" />
    </Box>
    <Box>
        <Typography>{user.name}</Typography>
    </Box>
    </Component>
    </>
  
  )
}

export default Conversation
