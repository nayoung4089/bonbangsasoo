import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import QuizFun from "./QuizFun";

const QuizCategory = ({which, userObj}) => {
    const [checkedList, setCheckedList] = useState([]);
    const [slide, setSlide] = useState(false);
    const onChange = () => {
        setSlide(!slide);
    }
    const onCheckedElement = (checked, item) => {
        if (checked) {
          setCheckedList([...checkedList, item]);
        } else {
          setCheckedList(checkedList.filter(el => el !== item));
        }
    };
    useEffect(() => {
        console.log(checkedList)
    }, [checkedList])
    return(
        <>
        <div class="checkbox-grid">
        {CategoryList.map((category)=>{
            return(
                <div className="checkbox">
                <input type='checkbox' 
                id= {`checkbox ${category.id}`}
                name='category' 
                value={category.name}
                key={category.id}
                onChange={e => {
                    onCheckedElement(e.target.checked, e.target.value);
                }}
                /> <label htmlFor={`checkbox ${category.id}`}>{category.name}</label>
                </div>
            )
        })}
        </div>
        <div>{checkedList}</div>
        <button onClick={onChange}>뒤집기</button>
        <QuizFun which={which} range={checkedList} slide={slide} userObj = {userObj}/>
        </>
    )

}
export default QuizCategory;