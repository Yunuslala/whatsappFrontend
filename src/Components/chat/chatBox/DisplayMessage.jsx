import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { downloadImages } from "../../utils/download";


const SentMessageBox = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  display: flex;
  word-break: break-word;
`;
const ReciveMessageBox = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  display: flex;
  word-break: break-word;
`;
const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;


const DisplayMessage = ({ message }) => {
  const user = useSelector((state) => state.userReducer.user);
  const ImageBox=({message})=>{
  
    return (
      <Box style={{position:"relative"}}>
      <img style={{width:300,height:50%Box,objectFit:'cover'}}   src={message.fileurl} alt="uploadedImages"/>
      <Time style={{position:"absolute",bottom:5,right:0 }}>
      <FileDownloadIcon
      onClick={(e)=>{
        downloadImages(e,message.fileurl)}}
      style={{marginRight:10,border:'1px solid grey',borderRadius:'50%'}}
      fontSize="small"
       />
      {message.time}
      </Time>
      </Box>
    )
  }
  
  const TextMessageBox=({message})=>{
    return (
      <>
            <Text>{message.text}</Text>
            <Time>{message.time}</Time>
      </>
    )
  }
  return (
    <>
      {user.id === message.textId ? (
        <SentMessageBox>
        {
          message.type==="text"? <TextMessageBox key={message.id} message={message}/> :<ImageBox key={message.id} message={message} />
        }
        </SentMessageBox>
      ) : (
        <ReciveMessageBox>
        {/* <Text>{message.text}</Text>
            <Time>{message.time}</Time> */}
        {
          message.type==="text"? <TextMessageBox key={message.id} message={message}/> :<ImageBox key={message.id} message={message} />
        }
        </ReciveMessageBox>
      )}
    </>
  );


  
};

export default DisplayMessage;
