import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import '../Components/Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/> 
                    </IconButton>                  
                </div>
            </div>

            <div className="sidebar_search">
                <SearchOutlined/>
                <input type="text" placeholder="Search or start bew chat"/>
            </div>

            <div className="sidebar_chats">

            </div>
        </div>
    )
}

export default Sidebar
