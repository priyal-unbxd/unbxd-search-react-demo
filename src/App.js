import "./App.css";
import UnbxdSearchWrapper from "@unbxd-ui/react-search-sdk";
import "@unbxd-ui/react-search-sdk/public/dist/css/core.css";
import "@unbxd-ui/react-search-sdk/public/dist/css/theme.css";
import {
  FacetActions,
  Sort,
  Pagination,
  SearchTitle
} from "@unbxd-ui/react-search-sdk";
import Search from "./components/Search";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import TextFilter from "./components/TextFilter";
import RangeFilter from "./components/RangeFilter";
import SelectedFilters from "./components/SelectedFilters";
import PageSizeCrumb from "./components/PageSizeCrumb";
import View from "./components/View";
import SpellCheckComponent from "./components/SpellCheckComponent";
import SortOption from "./components/SortOption";

function App() {
  const priceUnit = "$";

  const searchConfigurations = {
    searchEndPoint: "https://search.unbxd.io/",
    searchQueryParam: "q",
    browseQueryParam: "p",
    defaultFilters: null,
    pageSize: 10,
    facetMultiSelect: true,
    updateUrls: true,
    extraParams: {
      version: "V2",
    },
    facetMultilevel: true,
    facetDepth: 6,
    applyMultipleFilters: false,
    hashMode: true,
    enableUnbxdAnalytics: false,
  };

  return (
    <div className="App">
      <UnbxdSearchWrapper
        siteKey="demo-unbxd700181503576558"
        apiKey="fb853e3332f2645fac9d71dc63e09ec1"
        productType="SEARCH"
        priceUnit={priceUnit}
        searchConfigurations={searchConfigurations}
      >
        <Search />
        <div className="UNX-search__container">
          <div className="UNX-searchMeta__container">
            <div className="UNX-searchMeta__more">
                        <SelectedFilters/>
            </div>
          </div>
          <div className="UNX-searchResults__container">
            <div className="UNX-searchFacet__container">
                        <FacetActions />
                        <RangeFilter/>
                        <TextFilter/>  
            </div>

            <div className="UNX-searchResult__container">
            <Banner />
            <SearchTitle />
            <SpellCheckComponent/>
              <div className="UNX-searchHeader__container">
                <PageSizeCrumb/>
                <View/>
                <SortOption/>
              </div>
              <ProductList />
              <Pagination padding={3}/>
            </div>
          </div>
        </div>
      </UnbxdSearchWrapper>
    </div>
  );
}

export default App;
