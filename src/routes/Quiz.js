import QuizCategory from "components/QuizCategory";
import React, { useEffect, useState } from "react";
import "css/Quiz.css";

const Quiz = () => {
    const [select, setSelect] = useState(false);
    const [which, setWhich] = useState("");
    const onClick = () => {
        setSelect(!select);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        setWhich("");
        console.log(which);
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setWhich(value);
    };
    useEffect(() => {
        setSelect(!select);
    }, [which])
    return(
        <>{!select? 
        <>
        <QuizCategory which={which} />
        <button onClick={onClick}>나가기</button>
        </> : <>
        <div class="title">퀴즈</div>
        <form onSubmit={onSubmit} class="radio-wrap">
           <li><input onChange={onChange} type="radio" name="which" value="ability" /> 효능주치</li>
           <li><input onChange={onChange} type="radio" name="which" value="origin" /> 기원</li>
           <li><input onChange={onChange} type="radio" name="which" value="point" /> 핵심</li>
        </form>
        </>}
        </>
    )
}
export default Quiz;