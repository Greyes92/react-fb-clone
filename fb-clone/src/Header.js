import React, { Component, useRef, useState }from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from "@mui/icons-material/Forum";
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from './StateProvider';
import DropDownMenu from './DropDownMenu';


function Header() {
  const [{ user }, dispatch] = useStateValue();


  return (
     <div className='header'>
       <div className='header__left'>
          <img
               src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
               alt=""
          />
          <div className='header__input'>
               <SearchIcon />
               <input type='text' placeholder='Search Facebook'/>
          </div>
       </div>

       <div className='header__center'>
            <div className='header__option header__option--active'>
                 <HomeIcon fontSize='large' />
            </div>
            <div className='header__option'>
                 <FlagIcon fontSize='large' />
            </div>
            <div className='header__option'>
                 <SubscriptionsOutlinedIcon fontSize='large' />
            </div>
            <div className='header__option'>
                 <StorefrontOutlinedIcon fontSize='large' />
            </div>
            <div className='header__option'>
                 <SupervisedUserCircleIcon fontSize='large' />
            </div>
       </div>

       <div className='header__right'>
          <div className='header__info'>
               <Avatar src={user.photoURL}/>
               <h4>{user.displayName}</h4>
          </div>

          <IconButton>
               <AppsIcon />
          </IconButton>
          <IconButton>
               <MapsUgcIcon />
          </IconButton>
          <IconButton>
               <NotificationsIcon />
          </IconButton>
          <IconButton>
               <DropDownMenu />
          </IconButton>
       </div>
       </div>
  );
}



export default Header;