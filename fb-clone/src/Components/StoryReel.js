import React from 'react'
import Story from './Story';
import "./StoryReel.css"

function StoryReel() {
  return (
     <div className='storyReel'>
       <Story 
          image="https://cedarpointrecovery.com/frontlinerehab.com/wp-content/uploads/2017/06/Med11.jpg"
          profileSrc="https://media-exp1.licdn.com/dms/image/D5635AQE33M2qFUBEWg/profile-framedphoto-shrink_100_100/0/1654807847669?e=1655506800&v=beta&t=ecgdufIwvFpq5KTxxb8HMtCTj_AsDR92cKJ29462Bho"
          title="Gibran Reyes"
       />
       <Story 
          image="https://storage.googleapis.com/kaggle-datasets-images/456014/2387086/f53e5f904de85a8d8d1fd0fe603d8889/dataset-card.jpg?t=2021-07-01-22-44-44"
          profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQGDF0ZkoJnC4A/profile-displayphoto-shrink_100_100/0/1647982635396?e=1660176000&v=beta&t=p32iQmqWtsLHNzluZwPt_u6vjwR5WiRZug9Dx4Xk7lo"
          title="Cristal Herrera"
       />
       <Story 
          image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F02%2Fmark-zuckerberg-at-f8.jpg&q=60"
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
          title="Mark Zuckerburg"
       />
       <Story 
          image="https://recentlyheard.com/wp-content/uploads/2020/09/Tom-Anderson.jpg"
          profileSrc="https://pbs.twimg.com/profile_images/1237550450/mstom.jpg"
          title="Tom Anderson"
       />
     </div>
  )
}

export default StoryReel;