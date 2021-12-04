import React from 'react'
import './SideBarOption.css'
import { useHistory } from 'react-router-dom'
import db from './Firebase'
function SideBarOption({Icon,title,id,addChannelOption}) {
    const history = useHistory();
    const   addChannel = () => {
        const channelName = prompt('please give the channel name');
        if(channelName)
        {
                db.collection("Rooms").add({
                    name: channelName})
        }
    } 
    const  selectChannel = () => {
        if(id)
        {
            history.push(`/room/${id}`)
        }else{
            history.push('title')
        }

    }
    return (
        <div className='sideBarOption'  onClick ={addChannelOption ?  addChannel : selectChannel}>
            {Icon && <Icon className='sideBarOption__icon'/>}
            {Icon ? (<h3>{title}</h3>):
               (<h3 className = 'sideBarOption__channel'>
                <span className='sideBarOption__hash'>#</span>{title}</h3>)
            }
        </div>
    )
}

export default SideBarOption
