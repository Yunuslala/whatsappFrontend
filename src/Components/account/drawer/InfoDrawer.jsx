import React from 'react'
import {Drawer,Box, Typography,styled} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Profile } from './Profile';


export const InfoDrawer = ({openDrawer,setOpenDrawer}) => {

const handleClose=()=>{
  setOpenDrawer(false)
}
const drawerStyle={
  left:20,
  top:17,
  height:'95%',
  width:'30%'
}

const HeaderStyle= styled(Box)`
background:#008069;
height:107px;
color:#FFFFFF;
display:flex;
& > svg, & > P{
  margin-top:auto;
  font-weight:600;
  padding:15px;
}
`

const ComponentStyle=styled(Box)`
background"#ededed;
height:85%;
`

const TextStyle=styled(Typography)`
font-size:18px;
`

  return (
    <Drawer
    open={openDrawer}
    onClose={handleClose}
    PaperProps={{sx:drawerStyle}}
    style={{zIndex:1500}}
    >
    <HeaderStyle>
    <ArrowBackIcon onClick={()=>setOpenDrawer(false)}/>
    <TextStyle>Profile</TextStyle>
    </HeaderStyle>
    <ComponentStyle>
    <Profile />
    </ComponentStyle>
    </Drawer>
  )
}
