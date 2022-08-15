import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import QuizFun from "./QuizFun";

const QuizCategory = ({which}) => {
    const [checkedList, setCheckedList] = useState([]);
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
        {CategoryList.map((category)=>{
            return(
                <>
                <input type='checkbox' 
                name='category' 
                value={category.name}
                key={category.id}
                onChange={e => {
                    onCheckedElement(e.target.checked, e.target.value);
                }}
                /> {category.name}
                </>
            )
        })}
        <div>{checkedList}</div>
        <QuizFun which={which} range={checkedList}/>
        </>
    )

}
export default QuizCategory;