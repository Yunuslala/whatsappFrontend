import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import DisplayMessage from "./DisplayMessage";
import { getConversations, uploadFiles } from "../../service/api";
import { currentDate, currentTime } from "../../constants/dateAndTime";
import { AccountContext } from "../../context/AccountProvider";
import { CleaningServices } from "@mui/icons-material";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  padding: 1px 18px;
`;

const MessageBox = ({ chatheaderUser }) => {
  const ScrollRefrence=useRef()
    const { relations,socketRef } = useContext(AccountContext);
  const [conversations, setconversations] = useState([]);
  const [text, settext] = useState("");
  const [flag, setflag] = useState(false);
  const [file, setFile] = useState();
  const [incomingCurMessage,setIncomingCurMessage]=useState(null)
  const user = useSelector((state) => state.userReducer.user);
  const senderID = user.id;
  const receiverId = chatheaderUser[0].id;


      const getImage = async (file) => {
        if(file){
          const data=new FormData();
          data.append("textId",senderID);
          data.append("conversationsID",relations.id);
          data.append("date",currentDate());
          data.append("time",currentTime());
          data.append("type","images");
          data.append("profile",file);
          settext("");
          let result=uploadFiles(data)
          setflag((prevstate) => !prevstate);
        }
      }


      useEffect(()=>{
        console.log(socketRef.current._callbacks.$getMessage);
        socketRef.current.on('getMessage',(data)=>{
          console.log("messagefromsocket",data)
          setIncomingCurMessage(data)
        })
      },[incomingCurMessage,flag])



      useEffect(()=>{
        console.log("incomingCurMessage",incomingCurMessage);
        console.log("coversations",conversations?.members?.includes(incomingCurMessage.textId));
        if (
          incomingCurMessage &&
          conversations.some(item => item.textId === incomingCurMessage.textId)
        ) {
          const updatedConversations = [...conversations, incomingCurMessage];
          setconversations(updatedConversations);
        }
       
      },[incomingCurMessage])



  const postMessage=async(e)=>{
    const date = currentDate();

    const time = currentTime();
    console.log(senderID, receiverId, text, "id", relations.id);
    let obj = {
      text: text,
      textId: senderID,
      conversationsID: relations.id,
      type: "text",
      date,
      time,
    };

    settext("");
    if(receiverId==4){
      console.log("object",obj)
      obj={receiverId,...obj};
      console.log("objectchatgpt",obj)
      const response = await fetch(
        "http://localhost:4500/chatWithGPT",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      if (response.ok) {
        const result = await response.json();
        setflag((prevstate) => !prevstate);
      }
    }
    else{
      socketRef.current.emit("sendMessage",{...obj,receiverId})
      const response = await fetch(
        "http://localhost:4500/createConversations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      if (response.ok) {
        const result = await response.json();
        setflag((prevstate) => !prevstate);
      }
    }
   
  }

  useEffect(() => {
    const getMessage = async () => {
      const ans = await getConversations(relations.id);
      console.log("object")
      setconversations(ans);
      console.log("conversations",conversations)
    };
    getMessage();
  }, [relations.id, flag]);


  const SendText = async (e) => {
    if (e.key == "Enter") {
      if(file){
        getImage(file)
      }else{
        postMessage(e)
      }
    }
 
  };



  return (
    <Wrapper>
      <Component>
       {conversations&&conversations.map((message)=>(
        <Container>
          <DisplayMessage message={message} />
        </Container>

       )) }
      </Component>
      <Footer
        chatheaderUser={chatheaderUser}
        SendText={SendText}
        settext={settext}
        text={text}
        file={file}
        setFile={setFile}
      />
    </Wrapper>
  );
};

export default MessageBox;
