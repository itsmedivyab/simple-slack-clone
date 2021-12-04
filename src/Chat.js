import React from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import  StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { InfoOutlined } from '@material-ui/icons';
import db from './Firebase';
import Message from './Message'
import ChatInput from './ChatInput'
function Chat() {
    const {roomId} = useParams();
    const [ roomDetails, setroomDetails ] = useState(null);
    const [ roomMessages, setroomMessages ] = useState([]);

    
   
    useEffect(() => {
      if(roomId)
      {
             db.collection('Rooms').doc(roomId).onSnapshot(snapshot => {
                 setroomDetails(snapshot.data())
             })
      }

      db.collection("Rooms").doc(roomId).collection("messages").orderBy("timestamp","asc")
      .onSnapshot( snapshot => 
        setroomMessages( snapshot.docs.map(( doc ) => doc.data()))
      )
     
    }, [roomId])

    return (
        <div className='chat'>
           <div className = 'chat__header'>
              
               <div className ='chat__header__left'>
                 <div className = 'chat__channelName'>
                 <strong>#{roomDetails?.name}</strong>
                 <StarBorderOutlinedIcon/>
               </div>
               </div>
               <div className ='chat__header__right'>
                   
                    <p><InfoOutlined/>Details
                    </p>
                    
                </div>
           </div>
           <div className ='chat__messages'>
           {   

                roomMessages.map (({message,timestamp,user,userimage}) => 
                <Message  message = {message}    timestamp ={timestamp} user= {user}  userImageUrl ={userimage}/>)
            }
           </div>
           <ChatInput channelName ={roomDetails?.name} channelId = {roomId}/>
           
         
         
        </div>
    )
}

export default Chat
