import React from "react";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Description = ({dat}) => {
    return(
        <>
        <div class="title">{dat.name}</div>
        <div class="box-wrap">
            <div class="sub">기원 : {dat.origin}</div>
            <div class="sub">효능/주치 :{dat.ability}</div>
            <div class="point"><FontAwesomeIcon icon={faSeedling} /> {dat.point}</div>
        </div>
        </>
    )
}
export default Description;