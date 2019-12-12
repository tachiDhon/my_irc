import React from 'react';

import { 
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Client from './components/Client/Client.js';
import Chat from './components/Chat/Chat.js';  

const App = () => (
  <Router>
    <Route path= "/" exact component={Client} />
    <Route path= "/chat" component={Chat} />
  </Router>
);

export default App;