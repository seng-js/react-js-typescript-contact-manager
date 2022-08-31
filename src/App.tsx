import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import People from "./pages/People";
import Contacts from "./pages/Contacts";
import Companies from "./pages/Companies";
import React, {useEffect} from "react";
import {getInitDataHandler} from "./services";
import {useDispatch} from "react-redux";
import SideBar from "./components/SideBar";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        getInitDataHandler(dispatch);
    });

    return (
      <>
          <BrowserRouter>
              <div className="container">
                  <SideBar />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/contacts" element={<Contacts />} />
                      <Route path="/favorites" element={<Favorites  />} />
                      <Route path="/people" element={<People />} />
                      <Route path="/companies" element={<Companies  />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </>
    );
}

export default App;
