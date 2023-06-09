import React from "react";
import MyCombobox from "./pages/page5";
import {BrowserRouter as Router, Route, Routes}from "react-router-dom";
import Login from '../src/pages/Login'
import Register from "./pages/Register";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import SearchPlace from "./pages/page4";
import store from './store/index';
import { Provider } from 'react-redux';
import ScrollToTop from "./ScrollToTop";
import PersonalCenter from "./pages/personalCenter";

export default function App() {
    return (
     <Provider store={store}>
      <Router>
          <ScrollToTop/>
          <Routes>
              <Route path="/home" element={document.cookie?<MyCombobox/>:<Login/>}/>
              <Route path="/Page2" element={<Page2/>} />
              <Route path="/Page3" element={<Page3/>} />
              <Route path="/Page4" element={<SearchPlace/>} />
              <Route path="/personalCenter" element={<PersonalCenter/>} />
              <Route index path="/" element={<Login/>} />
              <Route index path="/register" element={<Register/>} />
          </Routes>
      </Router>
     </Provider>
  );
}
