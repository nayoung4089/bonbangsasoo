import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => 
<>
    <div class="nav">
        <Link to ="/quiz">✍</Link>
        <Link to ="/profile">👋</Link>
    </div>
    <div class="large"><Link to ="/">🌱 본방사수</Link></div>
</>
export default Navigation;