import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './container/Home';
import Error404 from './container/errors/Error404';

import './App.css';

function App() {
  return (
    <Provider  store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />}/>

          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
