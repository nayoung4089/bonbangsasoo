import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyData from "./MyData";

const SearchForm = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const onChange = async (event) => {
        const {
            target: { value },
        } = event;
        setSearch(value);
    };
    const onSubmit = (event) => {
      event.preventDefault();
      const searchID = MyData.filter((data)=>data.name === search)[0];
      console.log(searchID)
      if(searchID){
        // 해당 페이지로 이동
        navigate(`/detail/${searchID.id}`);
      }else{
        alert("검색결과가 없습니다.");
      }
    }
    return (
        <div class="search-wrap">
        <form onSubmit={onSubmit}>
            <input type="text" 
            onChange={onChange} 
            placeholder="본초 검색" 
            required
            />
            <input type="submit" value="찾기" />
        </form>
        </div>
    )
};
export default SearchForm;