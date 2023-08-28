import React, { useContext } from 'react'
import {Box,Typography,styled} from '@mui/material'
import { useSelector } from 'react-redux';
export const Profile = () => {
    const data=useSelector((state)=>state.userReducer.user)

    const ImageContainer=styled(Box)`
    display:flex;
    justify-content:center;
    `
    const ImageStyle=styled(`img`)({
        width:200,
        height:200,
        borderRadius:'50%',
        padding:'25px 0',
    })
    const BoxWrapperStyle=styled(Box)`
    background:#FFFFFF;
    padding:12px 30px 2px;
    box-shadow:0 1px 3px rgba(0,0,0,0.08);
    & :first-child{
        font-size:13px;
        color:#009688;
        font-weight:200;
     }
     & :last-child{
        margin:14px 0;
        color:#4A4A4A;

     }
    `
    const DescriptionContainer=styled(Box)`
    padding:15px 20px 20px 30px;
    & > p{
        font-size:13px;
        color:#8696a0;
    }
    `
    const AboutContainer=styled(Box)`
     background:#FFFFFF;
    padding:12px 30px 2px;
    & :first-child{
        font-size:13px;
        color:#009688;
        font-weight:200;
     }
     & :last-child{
        margin:14px 0;
        color:#4A4A4A;

     }
    `
 
  return (
    <>
        <ImageContainer>
            <ImageStyle src={data.picture} alt="dp"/>
        </ImageContainer>
        <BoxWrapperStyle>
            <Typography>Your name</Typography>
            <Typography>{data.name}</Typography>
        </BoxWrapperStyle>
        <DescriptionContainer>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
        </DescriptionContainer>
        <AboutContainer>
            <Typography>About</Typography>
            <Typography>{data.About}</Typography>
        </AboutContainer>
    </>
  )
}
