import React from 'react';
import {Products,Banners} from '@unbxd-ui/react-search-sdk';
import {
  FacetActions,
  Pagination,
  SearchTitle,
  MultilevelFacets,
} from "@unbxd-ui/react-search-sdk";
import LoaderComponent  from './Loader';
import ProductItemComponent from './ProductCard';
import TextFilter from "./TextFilter";
import RangeFilter from "./RangeFilter";
import SelectedFilters from "./SelectedFilters";
import PageSizeCrumb from "./PageSizeCrumb";
import View from "./View";
import SpellCheckComponent from "./SpellCheckComponent";
import SortOption from "./SortOption";

function ProductList() {
const attributesMap = {
    title: 'title',
    uniqueId: 'uniqueId',
    imageUrl: 'imageUrl',
    price: 'salePrice',
    sellingPrice: 'displayPrice',
    productUrl: 'productUrl',
    size: 'size',
    color: 'color'
  };

  return (
    <div className="UNX-search__container">
          <div className="UNX-searchMeta__container">
            <div className="UNX-searchMeta__more">
              <SelectedFilters />
            </div>
          </div>
          <div className="UNX-searchResults__container">
            <div className="UNX-searchFacet__container">
              <FacetActions />
              <RangeFilter />
              <TextFilter />
              <MultilevelFacets
                categoryDisplayName={"category"}
                categoryField={"categoryPath"}
                facetDepth={6}
                facetLimit={100}
              />
            </div>
            <div className="UNX-searchResult__container">
              <Banners />
              <SearchTitle />
              <SpellCheckComponent />
              <div className="UNX-searchHeader__container">
                <PageSizeCrumb />
                <View />
                <SortOption />
              </div>
              <Products productItemComponent={<ProductItemComponent />} attributesMap={attributesMap} showLoader={true} loaderComponent={<LoaderComponent/>}/>
              <Pagination padding={3} />
            </div>
          </div>
        </div>
  )}

export default ProductList