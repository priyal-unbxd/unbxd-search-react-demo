import React from 'react';
import {Products} from '@unbxd-ui/react-search-sdk';
import LoaderComponent  from './Loader';

function ProductList() {

const attributesMap = {
    title: 'title',
    uniqueId: 'uniqueId',
    imageUrl: 'imageUrl',
    price: 'salePrice',
    sellingPrice: 'displayPrice',
    productUrl: 'productUrl',
  };

  return (
    <Products attributesMap={attributesMap} showLoader={true} loaderComponent={<LoaderComponent/>}/>
  )}

export default ProductList
