import React from 'react';
import {SearchBox} from '@unbxd-ui/react-search-sdk'

const SearchButton = ({ onSearchBoxSubmit }) => {
    return (
        <button
            onClick={onSearchBoxSubmit}
            className={'UNX-searchbox__button'}
        ></button>
    );
};

const Search = () => {
  return (
         <div className="UNX-header__container">
            <a href="/">
                <span className="UNX-header__logo"></span>
            </a>
            <div className="UNX-header__search">
                <SearchBox
                    submitComponent={<SearchButton/>}
                    autoFocus={true}
                />
            </div>
        </div>
  )
}

export default Search
