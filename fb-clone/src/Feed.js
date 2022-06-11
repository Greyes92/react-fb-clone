import React from 'react'
import "./Feed.css";
import PostStatus from './PostStatus';
import StoryReel from './StoryReel';
import UserPost from './UserPost'

function Feed() {
  return <div className='feed'>
       <StoryReel />
       <PostStatus />

       <UserPost 
          profilePic="https://media-exp1.licdn.com/dms/image/D5635AQE33M2qFUBEWg/profile-framedphoto-shrink_100_100/0/1654807847669?e=1655506800&v=beta&t=ecgdufIwvFpq5KTxxb8HMtCTj_AsDR92cKJ29462Bho"
          message="First Post!"
          timestamp="June 10 2022"
          username="Gibran Reyes"
          image="https://media-exp1.licdn.com/dms/image/C5622AQFkZVXq_aDUvQ/feedshare-shrink_800/0/1654802441953?e=1657756800&v=beta&t=I5fNGL_IEOeROt0a1Uakq7jDcamWTMQpmEMYcVketWI"
       />
       <UserPost 
          profilePic="https://media-exp1.licdn.com/dms/image/D5635AQE33M2qFUBEWg/profile-framedphoto-shrink_100_100/0/1654807847669?e=1655506800&v=beta&t=ecgdufIwvFpq5KTxxb8HMtCTj_AsDR92cKJ29462Bho"
          message="This is sick!!"
          timestamp="June 10 2022"
          username="Gibran Reyes"
       />
       <UserPost />
  </div>;
  
}

export default Feed;