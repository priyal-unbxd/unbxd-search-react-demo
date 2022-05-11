import React from 'react';
import {PageSize} from '@unbxd-ui/react-search-sdk'

function PageSizeCrumb() {
  const sizeOptions = [
    {id:5,value:'5'},
    {id:10,value:'10'},
    {id:15,value:'15'},
    {id:20,value:'20'}
  ]

  return (
    <PageSize label={'Products per page'} size={10} sizeOptions={sizeOptions}/>
  )
}

export default PageSizeCrumb