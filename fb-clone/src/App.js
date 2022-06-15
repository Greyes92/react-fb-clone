import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Contacts from './Components/Contacts';
import Login from './Login';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <>

      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Contacts />
      </div>

      </>
      )}
    </div>
  );
}

export default App;
