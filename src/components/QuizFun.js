import React, { useState } from "react";
import MyData from "components/MyData";

const QuizFun = ({which, range}) => {
    const [select, setSelect] = useState([]);
    const selectedData = range.map((category) => MyData.filter(data => data.category == category));
    console.log(selectedData);

    return(
        selectedData.map((datas)=>{
            return(
                datas.map((data)=>{
                    return(
                        <>
                        <div className="button_container">
                        <button
                        key={data.id}
                        onClick={() => {
                          !select.includes(data.id)
                            ? setSelect((select) => [...select, data.id])
                            : setSelect(select.filter((button) => button !== data.id));
                        }}
                        className={
                          select.includes(data.id)
                            ? "button table_btn_s"
                            : "button table_btn_ns"
                        }
                        >
                        {
                            select.includes(data.id)
                              ? data[which] // data.which 하면 which가 미지수로 지정이 안됨 ...
                              : data.name
                        }
                    </button>
                    </div>
                        </>
                    )
                })
            )
        })
    )
}
export default QuizFun;