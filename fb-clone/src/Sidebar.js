import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import { Avatar } from '@mui/material';

function Sidebar() {
  return <div className='sidebar'>
       <SidebarRow src={Avatar} title="Gibran Reyes"/>
       <SidebarRow Icon={PeopleIcon} title="Friends"/>
       <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups"/>
       <SidebarRow Icon={ChatIcon} title="Messenger"/>
       <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Watch"/>
       <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
       <SidebarRow Icon={ExpandMoreOutlined} title="See More"/>
  </div>
  
}

export default Sidebar;