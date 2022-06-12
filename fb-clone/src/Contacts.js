import { Avatar } from '@mui/material';
import React from 'react'
import "./Contacts.css"
import ContactsRow from './ContactsRow';

function Contacts() {
  return (
    <div className='contacts'>
      <h3>Contacts</h3>
      <ContactsRow
        src="https://lh3.googleusercontent.com/a-/AOh14GhX_BwV78cugWMzIqSyTpKI6UvfoU9A4q33WHpJsw=s96-c"
        title="Gibran Reyes"
      />
      <ContactsRow
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGDF0ZkoJnC4A/profile-displayphoto-shrink_100_100/0/1647982635396?e=1660176000&v=beta&t=p32iQmqWtsLHNzluZwPt_u6vjwR5WiRZug9Dx4Xk7lo"
        title="Cristal Herrera"
      />
      <ContactsRow
        src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        title="Mark ZuckerBurg"
      />
      <ContactsRow
        src="https://pbs.twimg.com/profile_images/1237550450/mstom.jpg"
        title="Tom Anderson"
      />
    </div>
  )
}

export default Contacts;