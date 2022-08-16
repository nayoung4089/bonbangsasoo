import CategoryList from "components/CategoryList";
import MyData from "components/MyData";
import SearchForm from "components/SearchForm";
import React from "react";
import { Link } from "react-router-dom";
import "css/Main.css";

const Main = () => {
    return(
    <>
    <div>
        <SearchForm />
        <div class="title-wrap">
        {CategoryList.map((category)=> {
            return(
                <details>
                    <summary class="main-title">{category.name}</summary>
                    <ul>
                        {category.sub.map((sub)=>{
                            return(
                                <>
                                <details>
                                    <summary key={sub.id} class="sub-title">{sub}</summary>
                                    <ul class="ssub-title-wrap">
                                        {MyData
                                        .filter((data)=>data.subCategory === sub)
                                        .map((dat) => (
                                            <>
                                            <Link to ={`/detail/${dat.id}`}>
                                                <li key={dat.id} id={dat.id} class="ssub-title">{dat.name}</li>
                                            </Link>
                                            </>
                                    ))}
                                    </ul>
                                </details>
                                </>
                            )
                        })}
                    </ul>
                </details>
            )
        })}
        </div>
    </div>
    </>
   )

}
export default Main;