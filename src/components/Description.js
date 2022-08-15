import React from "react";

const Description = ({dat}) => {
    return(
        <>
        <div>{dat.name}</div>
        <div>{dat.origin}</div>
        <div>{dat.ability}</div>
        <div>{dat.point}</div>
        </>
    )
}
export default Description;