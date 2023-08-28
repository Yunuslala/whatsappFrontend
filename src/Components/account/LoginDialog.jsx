import React, { useContext } from 'react'
import {Dialog,Box, Typography,List, ListItem,styled} from "@mui/material";
import { qrCodeImage } from '../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decoded from 'jwt-decode'
import { AccountContext } from '../context/AccountProvider';
import {PostUsers } from "../Redux/auth/authAction"
import { useDispatch, useSelector } from 'react-redux';
export const LoginDialog = () => {
const dispatch=useDispatch()
  const loginSucess=(res)=>{
    const decoded=jwt_decoded(res.credential);

    let obj={
      "name":decoded.name,
      "email":decoded.email,
      "picture":decoded.picture,
      "About":"Hey there i am using Whatsapp"
    }
    dispatch(PostUsers(obj))

    // setAccount(decoded)
  }

  const LoginError=(res)=>{
   
  }
  const  dialogStyle={
    height:'95%',
    width:'70%',
    marginTop:'30px',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
  }
  const BoxStyle={
    display:'flex'
  }
  const ChildBoxStyle={
    padding:'56px 0 56px 56px'
  }
  const QrCodeStyle= styled('img')({
    height:264,
    width:264,
    margin:'50px'
  })
  const titleStyle={
    fontSize:'26px',
    color:'#525252',
    fontWeight:300,
    fontFamily:'inherit',
    marginBottom:'25px'
  }
  const StyledList= styled(List)`
  & > li {
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:4a4a4a;
  }
  `
 return(
  <Dialog open={true} hideBackdrop={true} PaperProps={{sx:dialogStyle}}>
    <Box style={BoxStyle}>
    <Box style={ChildBoxStyle}>
    <Typography style={titleStyle}>To use WhatsApp on your computer</Typography>
    <StyledList>
    <ListItem>1. Open WhatsApp on your phone</ListItem>
    <ListItem>2. Tap Menu settings and select WhatsApp Web</ListItem>
    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
    </StyledList>
    </Box>
    <Box style={{position:'relative'}}>
    <QrCodeStyle src={qrCodeImage} alt="qr code" />
    <Box style={{position:'absolute',top:'50%',transform:'translateX(25%)'}} >
      <GoogleLogin 
        onSuccess={loginSucess}
        onError={LoginError}
      />
    </Box>
    </Box>
    </Box>
    
  </Dialog>
 )
}
