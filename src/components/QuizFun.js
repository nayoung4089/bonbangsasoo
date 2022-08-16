import React, { useState } from "react";
import MyData from "components/MyData";

const QuizFun = ({which, range}) => {
    const [select, setSelect] = useState([]);
    const selectedData = range.map((category) => MyData.filter(data => data.category == category));
    // 이러면 array 속 array 값을 가져와야 해서 map을 2번 사용함 -> 이때 return 필수!
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