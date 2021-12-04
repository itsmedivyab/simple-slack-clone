import { FiberManualRecordRounded } from '@material-ui/icons'
import CreateIcon  from '@material-ui/icons/Create'
import AddIcon from '@material-ui/icons/Add'
import React, { useEffect } from 'react'
import './SideBar.css'
import SideBarOption from './SideBarOption';
import { useState } from 'react';
import db from './Firebase';
import { useStateValue } from "./StateProvider"
function SideBar() {
    const [channels,setChannels]=useState([])
    const [{user}] = useStateValue();
    useEffect(() => {
        db.collection('Rooms').onSnapshot((snapshot)=> (
           setChannels(snapshot.docs.map( doc => (
               {
                 id: doc.id,
                 name: doc.data().name

               }
           )))
        ))}, []);
    return (
        <div className = 'sideBar'>
         <div className = 'sideBar__header'>
                <div className="sideBar__info">
                    <h2>Citrix WorkSpace</h2> 
                    <h3><FiberManualRecordRounded/>{user?.displayName}
                    </h3>
                </div>
                <CreateIcon/>
         </div>
        {/* <SideBarOption Icon={InsertCommentRounded} title="threads"/>

         <SideBarOption  title="Yippe"/>
         <hr/>
         <SideBarOption Icon ={ExpandMoreIcon} title="Channels"/>


         Connect to db and show all the channels and threads
    */}
    <SideBarOption Icon={AddIcon} title= "Add Channel" addChannelOption = {true} />
    {   
        channels.map((channel)=>
        <SideBarOption title= {channel.name} id={channel.id}/>)
        
    }
        </div>
    )
}

export default SideBar
