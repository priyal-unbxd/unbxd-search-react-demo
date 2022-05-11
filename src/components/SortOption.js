import React from 'react'
import {Sort} from '@unbxd-ui/react-search-sdk';

function SortOption() {
    const sortOptions = [
        {
            label: 'Most Relevant'
        },
        {
            label: 'Lowest Price',
            field: 'sortPrice',
            order: 'asc'
        },
        {
            label: 'Highest Price',
            field: 'sortPrice',
            order: 'desc'
        }
    ];

  return (
    <Sort sortOptions={sortOptions}/>
  )
}

export default SortOption
