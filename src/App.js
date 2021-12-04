import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Chat from './Chat';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './Login'
import { useStateValue } from './StateProvider';
function App() {
  const [ {user} , dispatch ] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (<Login/>
        ) :
        (<><Header/>
        <div className = "app__body">
        <SideBar/>
        <Switch>
        <Route path ="/room/:roomId">
           <Chat/>
          </Route>
          <Route path ="/">
            {<h1>Hello</h1>}
          </Route>
        </Switch>
        </div>
       </> )}
      </Router>
       
   </div>
  );
}

export default App;
