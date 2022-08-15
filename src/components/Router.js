import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "routes/Auth";
import Main from "routes/Main";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import Quiz from "routes/Quiz";

const AppRouter =  ({isLoggedIn, userObj, refreshUser }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {isLoggedIn ? 
                <>
                <Route path ="/" element={<Main />} />
                <Route path ="/detail/:id" element={<Home userObj = {userObj} />} />
                <Route path ="/quiz" element={<Quiz />} />
                <Route path ="/profile" element={<Profile userObj = {userObj} refreshUser={refreshUser} />} />
                <Route path="*" element={ <Navigate to="/" /> } />
                </> : 
                <>
                <Route path ="/" element={<Auth />} />
                <Route path="*" element={ <Navigate to="/" /> } />
                </>
                }
            </Routes>
        </Router>
    )
}
export default AppRouter;