import React from 'react';
import './App.css';
import Feed from '../Feed';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Contacts from '../Contacts';
import Login from '../Login';
import { useStateValue } from "../StateProvider";

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
