import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons//Help';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useStateValue } from "./StateProvider"
function Header() {
    const [{user}] = useStateValue();
    return (
        <div className = "header">
            <div className="header__left">
                {/* Avatar for logged user*/}
               {/* <Avatar alt = {user?.displayName} src= {user?.photoUrl} className= "header__avatar"></Avatar>*/}
               <Avatar alt = {user.displayName} src= {user.photoURL} className= "header__avatar"></Avatar>
               
                {/*time icon*/}
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                {/*search icon */}
                <SearchIcon></SearchIcon>
                {/*input txt box */}
                <input placeholder="Search for user" />

            </div>
            <div className="header__right">
                {/*help icon*/}
                <HelpIcon/>

            </div>
        </div>
    )
}

export default Header
