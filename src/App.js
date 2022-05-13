import "./App.css";
import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import UnbxdSearchWrapper from "@unbxd-ui/react-search-sdk";
import "@unbxd-ui/react-search-sdk/public/dist/css/core.css";
import "@unbxd-ui/react-search-sdk/public/dist/css/theme.css";
import DetailPage from "./components/DetailPage";
import ProductList from "./components/ProductList"
import Navigation from "./components/Navigation";

export const Context = createContext();

function App() {
  let [refreshId, setRefreshId] = useState(111);
  let [productType, setProductType] = useState("CATEGORY");
  const priceUnit = "$";
  const navigate = useNavigate();

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
    hashMode: false,
    enableUnbxdAnalytics: false,
  };

  const getCategoryId = () => {
    if (window.UnbxdAnalyticsConf) {
      return encodeURIComponent(window.UnbxdAnalyticsConf["page"]);
    }
  };


  return (
    <Context.Provider value={{setProductType: setProductType,setRefreshId: setRefreshId}}>
      <div className="App">
      <UnbxdSearchWrapper
        siteKey="demo-unbxd700181503576558"
        apiKey="fb853e3332f2645fac9d71dc63e09ec1"
        priceUnit={priceUnit}
        productType={productType}
        getCategoryId={getCategoryId}
        searchConfigurations={searchConfigurations}
        refreshId={refreshId}
      >
        <Navigation />
              <Routes>
                <Route path="/search" exact element={<ProductList />}></Route>
                <Route path="/category" exact element={<ProductList />}></Route>
                <Route
                  path="/product/:uniqueId"
                  exact
                  element={<DetailPage />}
                ></Route>
              </Routes>
      </UnbxdSearchWrapper>
    </div>
    </Context.Provider>
  );
}

export default App;