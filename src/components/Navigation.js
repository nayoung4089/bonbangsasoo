import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => <nav>
    <ul>
        <li><Link to ="/">MainPage</Link></li>
        <li><Link to ="/quiz">퀴즈타임</Link></li>
        <li><Link to ="/profile">{userObj.displayName}</Link></li>
    </ul>
</nav>
export default Navigation;