import React from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => <nav>
    <div class="nav">
        <Link to ="/">본방사수</Link>
        <Link to ="/quiz">퀴즈타임</Link>
        <Link to ="/profile"><FontAwesomeIcon icon={faUser} /></Link>
    </div>
</nav>
export default Navigation;