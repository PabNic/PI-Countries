// Filters.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  getCountriesByA,
  orderByName,
  orderByPopulation,
  setCountries,
} from "../../Redux/actions";

import style from "./Filters.module.css";

const Filters = ({ setCurrentPage }) => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const handleNameOrder = (e) => {
    dispatch(orderByName(e.target.value));
  };

  const handlePopulationOrder = (e) => {
    dispatch(orderByPopulation(e.target.value));
  };

  const handleContinentFilter = (e) => {
    setCurrentPage(1)   
    dispatch(filterByContinent(e.target.value));
  };
  
  const handleActivityFilter = (e) => {
    if(e.target.value !== "0"){
      setCurrentPage(1)
      dispatch(getCountriesByA(e.target.value));
    }else {
      setCurrentPage(1)
      dispatch(setCountries())
    }
  };

  const handleResetFilters = () => {
    setCurrentPage(1)
    dispatch(setCountries());
  };

  return (
    <div className={style.filters}>
      <div className={style.orderFilter}>
        <h4>Order by Alphabet</h4>
        <select name="nameOrder" defaultValue="" onChange={handleNameOrder}>
          <option value="" disabled hidden>
            --Select--
          </option>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Order by Population</h4>
        <select
          name="populationOrder"
          defaultValue=""
          onChange={handlePopulationOrder}
        >
          <option value="" disabled hidden>
            --Select--
          </option>
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Filter by Continent</h4>
        <select name="continentFilter" onChange={handleContinentFilter}>
          <option value="" disabled hidden>
            --Select--
          </option>
          <option value="All countries">All countries</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Filter by Activity</h4>
        <select name="activityFilter" onChange={handleActivityFilter}>
          <option key="0" value="0">
            All Countries
          </option>
          {activities?.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>
      <button className={style.resetButton} onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
