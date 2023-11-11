import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DuaList from './dua-list';
import DuaCapture from './dua-capture';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Dua List</Link>
          </li>
          <li>
            <Link to="/dua-capture">Create Dua</Link>
          </li>
        </ul>

        <Routes>
           {/* <Route exact path="/" element={<DuaList/>} />  */}
          <Route path="/dua-capture" element={<DuaCapture/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
