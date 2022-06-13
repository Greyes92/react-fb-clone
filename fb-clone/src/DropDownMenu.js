import React, { useRef, useState } from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./DropDownMenu.css"
import { deleteUser, getAuth } from 'firebase/auth';
import { actionTypes, initialState } from './reducer';
import { useStateValue } from './StateProvider';

function DropDownMenu () {
     const auth = getAuth();
     const user = auth.currentUser;
     const [state, dispatch] = useStateValue();
     const dropdownRef = useRef(null);
     const [isActive, setIsActive] = useState(false);
     const onClickSet = () => setIsActive(!isActive);
     function refreshPage() {
          window.location.reload(false);
          alert('Your account has been deleted')
          console.log("Account has been deleted")
          done();
        }

     const deleteCurrentUser = () => {
          deleteUser(user)
          .then((result) => {
               dispatch({
                    type: initialState,
                    user: null,
               })
               console.log(result.user);
          })
          .catch((error) => {
               console.log(error.message)
          });
     }
     return (
       <div className="menu-container">
         <ExpandMoreIcon onClick={onClickSet} className="menu-trigger">
           <span>User</span>
           <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
         </ExpandMoreIcon>
         <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
           <ul>
             <li><a href="/messages">Log Out</a></li>
             <li><a className="deleteAccountBtn" onClick={(deleteCurrentUser, refreshPage)}>Delete Account</a></li>
           </ul>
         </nav>
       </div>
     );
   };

   function done() {
     setInterval(function(){
     window.location.reload();
     },3000);
   }

   export default DropDownMenu;