import React,{useContext} from "react";
import {useNavigate} from 'react-router-dom'
import Search from "./Search";
import { Context } from "../App";

function Navigation() {
    const {setProductType,setRefreshId} = useContext(Context)
    const navigate = useNavigate();

    const getCategory = (e) => {
        const el = e.target;
        const { dataset } = el;
        if (dataset && dataset.id) {
          window.UnbxdAnalyticsConf["page"] = `categoryPath:${dataset.id}`;
        //   window.UnbxdAnalyticsConf["page_type"] = "BOOLEAN";
          setProductType('CATEGORY')
          setRefreshId(Math.floor(Math.random() * 100 + 1));
          navigate('/category')
        }
      };

  return (
    <div className="UNX-header__container">
        <a href="/">
          <span className="UNX-header__logo"></span>
        </a>

        <nav id="categoryLinks" className="UNX-naviagtion-wrap">
          <button data-id="cat700001" className="nav-links" onClick={getCategory}>
            Tail
          </button>
          <button data-id="cat120002" className="nav-links" onClick={getCategory}>
            New Arrivals
          </button>
          <button data-id="cat3410002" className="nav-links" onClick={getCategory}>
            Petite Tops
          </button>
          <button data-id="cat2120039" className="nav-links" onClick={getCategory}>
            Stretch Cloths
          </button>
        </nav>

        <div className="UNX-header__search">
          <Search />
        </div>
    </div>
  );
}

export default Navigation;
