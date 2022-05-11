import React from 'react';
import {ViewTypes} from '@unbxd-ui/react-search-sdk'

const ViewItemComponent = ({itemData,onClick})=>{
    const {viewType , isSelected} = itemData;
    const handleClick = () => {
        onClick(itemData);
    };
    return (
        <div className="UNX-viewType__wrapper">
            <div onClick={handleClick}>{viewType}</div>
        </div>
    );
}

function View() {
  return (
    <ViewTypes viewTypes={['GRID', 'LIST']} displayType={'LIST'} viewItemComponent={<ViewItemComponent />} />
  )
}

export default View
