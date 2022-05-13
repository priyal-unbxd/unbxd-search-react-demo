import React,{useContext} from "react";
import { SearchBox } from "@unbxd-ui/react-search-sdk";
import {useNavigate} from 'react-router-dom';
import { Context } from "../App";


const SearchButton = ({ onSearchBoxSubmit }) => {
  return (
    <button
      onClick={onSearchBoxSubmit}
      className={"UNX-searchbox__button"}
    ></button>
  );
};

const Search = () => {
  const {setProductType} = useContext(Context)
  const navigate = useNavigate();
  const onSubmit = (query) => {
    setProductType('SEARCh')
    navigate('/search')
    return true;
  };
  return (
        <SearchBox submitComponent={<SearchButton />} autoFocus={true} onSubmit={onSubmit} />
  );
};

export default Search;