import CategoryList from "components/CategoryList";
import MyData from "components/MyData";
import SearchForm from "components/SearchForm";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return(
    <>
    <div>
        <SearchForm />
        {CategoryList.map((category)=> {
            return(
                <div>
                    <div>{category.name}</div>
                    <ul>
                        {category.sub.map((sub)=>{
                            return(
                                <>
                                    <li key={sub.id}>{sub}</li>
                                    <ul>
                                        {MyData
                                        .filter((data)=>data.subCategory === sub)
                                        .map((dat) => (
                                            <>
                                            <Link to ={`/detail/${dat.id}`}>
                                                <li key={dat.id} id={dat.id}>{dat.name}</li>
                                            </Link>
                                            </>
                                    ))}
                                    </ul>
                                </>
                            )
                        })}
                    </ul>
                </div>
            )
        })}
    </div>
    </>
   )

}
export default Main;