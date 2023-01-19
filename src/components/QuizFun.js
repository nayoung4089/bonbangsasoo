import React, { useState } from "react";
import MyData from "components/MyData";

const QuizFun = ({which, range, slide}) => {
    const [select, setSelect] = useState([]);
    const [star, setStar] = useState([]);
    const selectedData = range.map((category) => MyData.filter(data => data.category === category));
    console.log(selectedData);
    console.log(star);
    return(
        <>
        {
            <div className="quiz_wrapper">
            {
            selectedData.map((datas)=>{
                return(
                    datas.map((data)=>{
                        return(
                            <>
                            <div className="button_box">
                            <button
                            key={data.id}
                            onClick={() => {
                                !star.includes(data.id)
                                  ? setStar((star) => [...star, data.id])
                                  : setStar(star.filter((button) => button !== data.id))
                            }}
                            className={
                                star.includes(data.id)
                                  ? "star clicked"
                                  : "star non_clicked"
                            }
                            >
                            {star.includes(data.id) ? <>★</> : <>☆</>}
                            </button>
                            <button
                            key={data.id}
                            onClick={() => {
                              !select.includes(data.id)
                                ? setSelect((select) => [...select, data.id])
                                : setSelect(select.filter((button) => button !== data.id))
                            }}
                            className={
                              select.includes(data.id)
                                ? "button table_btn_s"
                                : "button table_btn_ns"
                            }
                            >
                            {
                                slide ? (select.includes(data.id) ? data.name: data[which]) : 
                                (select.includes(data.id) ? data[which]: data.name)
                            }
                            </button>                                
                            </div>
                            </>
                        )
                    })
                )
            })
            }
        </div> 
        }
        </>
    )
}
export default QuizFun;