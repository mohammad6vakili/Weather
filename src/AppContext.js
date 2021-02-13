import React, { useState, createContext } from "react";
import { message } from "antd";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);
  const [queryActive, setQueryActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [showWatchList, setShowWatchList] = useState([]);

  const getData = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=498e14c3edcd5cadea0be9209c066677`
    );
    const data = await response.json();
    console.log(data);
    setCity(data);
    setQueryActive(true);
  };

  const getQuery = (e) => {
    setQuery(e.target.value);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const confirm = async () => {
    message.success("Added to Watchlist");
    const showWatchListinside = [];
    watchlist.push(query);
    console.log(watchlist);
    watchlist.map((cityName)=>(
       fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=498e14c3edcd5cadea0be9209c066677`
      )
      .then(response=>response.json())
      .then(data=>showWatchListinside.push(data))
      ));
      setShowWatchList(showWatchListinside);
      console.log(showWatchList);
  };

  const cancel = () => {
    message.error("Not Added");
  };

  const value = {
    getData,
    query,
    getQuery,
    city,
    queryActive,
    openMenu,
    closeMenu,
    menuOpen,
    confirm,
    cancel,
    watchlist,
    showWatchList,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
