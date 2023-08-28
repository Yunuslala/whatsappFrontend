import React, { useContext,useState } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import {Box,styled} from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import { HeaderMenu } from './HeaderMenu';
import { InfoDrawer } from '../../account/drawer/InfoDrawer';
import { useSelector } from 'react-redux';
export const Header = () => {
    const [openDrawer,setOpenDrawer]=useState(false)
    const data=useSelector((state)=>state.userReducer.user)
    const toggleDrawer=()=>{
        setOpenDrawer(true)
    }

    const BoxComponent={
        height:'44px',
        background:'#ededed',
        padding:'8px 16px',
        display:'flex'
    }
    const WraperStyle= styled(Box)`
        margin-left:auto;
        & > *{
            margin-left: 2px;
            padding:8px;
            color:#000;
        };
        & :first-child{
            font-size:22px;
            margin-right:8px;
            margin-top:3px;
        }
    
    `
    const ImageStyle=styled('img')({
        height:40,
        width:40,
        borderRadius:'50%'
    })
  return (
   <>
    <Box style={BoxComponent}>
        <ImageStyle src={data.picture} alt="dp" onClick={()=>toggleDrawer()} />
        <WraperStyle >
            <MessageIcon />
           <HeaderMenu 
            setOpenDrawer={setOpenDrawer}
           />
        </WraperStyle>
    </Box>
    <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
   </>
  )
}
