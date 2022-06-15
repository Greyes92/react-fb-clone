import React, { useState } from 'react';
import "./PostStatus.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app'
// import { Firestore, getFirestore } from 'firebase/firestore/lite';
// import { getFirestore } from 'firebase/firestore/lite';


function PostStatus() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
          e.preventDefault();

          // db.collection('posts').add({
          // query(collection(db, 'posts')).add({
          addDoc(collection(db, 'posts'), {
               message: input,
               timestamp: serverTimestamp(),
               profilePic: user.photoURL,
               username: user.displayName,
               image: imageUrl
          });

          setInput("");
          setImageUrl("");
     };



  return (
    <div className='postStatus'>
         <div className='postStatus__top'>
              <Avatar src={user.photoURL}/>
              <form>
               <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='postStatus__input' 
                    placeholder={`What's on your mind, ${user.displayName}?`} 
               />
               <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
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