import React from 'react'
import {TextFacets} from '@unbxd-ui/react-search-sdk'

const FacetItemComponent = ({ itemData, onClick }) => {
    const { name, count, isSelected } = itemData;
    console.log(name,count,isSelected)
    const handleClick = () => {
        onClick(itemData);
    };

    return (
        <div
            className={`UNX-facet__item ${isSelected ? '-selected' : ''}`}
            onClick={handleClick}
        >
            <div className="-checkbox" />
            <div className="-label">{name}</div>
            <div className="-count">({count})</div>
        </div>
    );
};

function TextFilter() {
  return (
      <TextFacets facetItemComponent={<FacetItemComponent />}/>

  )
}

export default TextFilter
