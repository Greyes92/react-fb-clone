import { Avatar } from '@mui/material';
import React from 'react';
import "./ContactsRow.css";

function ContactsRow({ src, Icon, title }) {
  return <div className='contactsRow'>
       {src && <Avatar src={src} />}
       {Icon && <Icon />}
       <h4>{title}</h4>
    </div>
  
}

export default ContactsRow;