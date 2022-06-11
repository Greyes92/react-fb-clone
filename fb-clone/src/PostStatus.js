import React, { useState } from 'react';
import "./PostStatus.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon';

function PostStatus() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
          e.preventDefault();

          //some clever db stuff

          setInput("");
          setImageUrl("");
     };



  return (
    <div className='postStatus'>
         <div className='postStatus__top'>
              <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQE33M2qFUBEWg/profile-framedphoto-shrink_400_400/0/1654807847669?e=1655510400&v=beta&t=HPfE3Ra2MVWKm7NMSXGbcVaAv5VRj21nTEHTFtRm4N4"/>
              <form>
               <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='postStatus__input' 
                    placeholder={`What's on your mind?`} 
               />
               <input 
                    value={imageUrl}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='image URL (Optional)'
               />
               <button onClick={handleSubmit} type="submit">
                    Hidden Submit
               </button>
              </form>
         </div>

         <div className='postStatus__bottom'>

               <div className='postStatus__option'>
                    <VideocamIcon style={{ color: "red"}} />
                    <h3>Live Video</h3>
               </div>

               <div className='postStatus__option'>
                    <PhotoLibraryIcon style={{ color: "green"}} />
                    <h3>Photo/video</h3>
               </div>

               <div className='postStatus__option'>
                    <InsertEmotionIcon style={{ color: "orange"}} />
                    <h3>Feeling/activity</h3>
               </div>
         </div>
    </div>
  );
}

export default PostStatus;