import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function Header() {
  return <div className='header'>
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
               <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQE33M2qFUBEWg/profile-framedphoto-shrink_400_400/0/1654807847669?e=1655510400&v=beta&t=HPfE3Ra2MVWKm7NMSXGbcVaAv5VRj21nTEHTFtRm4N4"/>
               <h4>Gibran Reyes</h4>
          </div>

          <IconButton>
               <AddIcon />
          </IconButton>
          <IconButton>
               <ForumIcon />
          </IconButton>
          <IconButton>
               <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
               <ExpandMoreIcon />
          </IconButton>
       </div>
  
          
  </div>;
}

export default Header;