import React, { useEffect, useState } from 'react'
import "./Feed.css";
import PostStatus from './PostStatus';
import StoryReel from './StoryReel';
import UserPost from './UserPost';
import db from "../firebase"
import { collection, doc, setDoc, orderBy, onSnapshot, query } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   //   db.collection('posts')
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
      onSnapshot(q, (snapshot) =>
        setPosts(snapshot.docs.map((doc) => (
           { id: doc.id, data: doc.data() })))
     );
  }, []);

  return (
      <div className='feed'>
         <StoryReel />
         <PostStatus />
       
         {posts.map((post) => (
            <UserPost 
               key={post.id}
               profilePic={post.data.profilePic}
               message={post.data.message}
               timestamp={post.data.timestamp}
               username={post.data.username}
               image={post.data.image}
            />
      
         ))}
      </div>
   );
}

export default Feed;