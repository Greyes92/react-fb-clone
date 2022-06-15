import { Avatar } from '@mui/material';
import React from 'react';
import './UserPost.css';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LikeButton from './LikeButton';

function UserPost({ profilePic, image, username, timestamp, message}) {
  return (
    <div className='userPost'>
         <div className='userPost__top'>
              <Avatar 
               src={profilePic} 
               className="userPost__avatar" 
              />
              <div className='userPost__topInfo'>
                   <h3>{username}</h3>
                   <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                   {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
              </div>
         </div>

         <div className='userPost__bottom'>
              <p>{message}</p>
         </div>

         <div className='userPost__image'>
              <img src={image} alt="" />
         </div>

         <div className='userPost__options'>
              <div className='userPost__option'>
                   <LikeButton />
              </div>
              <div className='userPost__option'>
                   <ChatBubbleOutlineIcon />
                   <p>Comment</p>
              </div>
              <div className='userPost__option'>
                   <NearMeIcon />
                   <p>Share</p>
              </div>
              <div className='userPost__option'>
                   <AccountCircleIcon />
                   <ExpandMoreOutlinedIcon />
              </div>
         </div>

    </div>
  )
}

export default UserPost;