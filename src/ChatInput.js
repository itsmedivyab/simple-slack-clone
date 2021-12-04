import React from 'react'
import './ChatInput.css'
import { useState } from 'react';
import db from './Firebase';
import firebase from "firebase/compat"
import {  useStateValue } from './StateProvider';
function ChatInput({channelName, channelId }) {
    const [input,setInput] = useState("");
    const [{user}] = useStateValue()
    const sendMessage = ( e) =>
    {
       e.preventDefault();
       if(channelId)
       {
           console.log("inside")
           db.collection("Rooms").doc(channelId).collection("messages").add(
               {
                   message: input,
                   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                   user: user.displayName,
                   userImage: user.photoURL,

               }
           )
       }
       setInput("")
    }
    return (
        <div className= "chatInput">
            <form ><input placeholder = { `Message #${channelName}`}  value={input}
					onChange={(e) => setInput(e.target.value)}/>
            <button type = "submit" onClick = {sendMessage} >Send</button></form>
        </div>
    )
}

export default ChatInput
