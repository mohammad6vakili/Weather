import React, { useState, useEffect, createContext } from "react";
import { message } from "antd";

export const AppContext = createContext();

export const AppProvider = (props) => {


// ---------------------------------------------------States---------------------------------------
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);
  const [queryActive, setQueryActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')));
  const [watchListUnique , setWatchListUnique]=useState([]);
  const [showWatchList, setShowWatchList] = useState([]);


  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('watchlist')));
    console.log(showWatchList);
  }, [])
  

// ------------------------------------------------get city data--------------------------------------
  const getData = async (e) => {
    e.preventDefault();
    if(query===""){
      alert('Enter a city name!')
    }else{
          const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=498e14c3edcd5cadea0be9209c066677`
    );
    const data = await response.json();
    console.log(data);
    setCity(data);
    setQueryActive(true);
    }
  };



// -----------------------------------------------get query value-------------------------------------
  const getQuery = (e) => {
    setQuery(e.target.value);
  };

  

//----------------------------------------------close and open menu-----------------------------------
  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };



//-------------------------------------------add city to Watchlist-----------------------------------
  const addToWatch = (city) => {
    message.success("Added to Watchlist");
    const showWatchListinside = [];
    watchlist.push({name:query , id:city.id});
    setWatchListUnique(Array.from(new Set(watchlist.map(a => a.id)))
    .map(id => {
    return watchlist.find(a => a.id === id)}));
    localStorage.setItem('watchlist',JSON.stringify(watchListUnique));
    console.log(watchListUnique);
    watchListUnique.map((cityName)=>(
       fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName.name}&appid=498e14c3edcd5cadea0be9209c066677`
      )
      .then(response=>response.json())
      .then(data=>showWatchListinside.push(data))
      ));
    setShowWatchList(showWatchListinside);
    console.log(showWatchList);
  };



//-------------------------------------------remove city from Watchlist-------------------------------
  const removeFromWatch=(city)=>{
    const filterWatch = showWatchList;
    const filterWatchName=watchListUnique;
    setShowWatchList(
    filterWatch.filter((item)=>(item.id!==city.id))
    )
    setWatchListUnique(
    filterWatchName.filter((item)=>(item.id!==city.id))
    )
    localStorage.setItem('watchlist',JSON.stringify(filterWatchName.filter((item)=>(item.id!==city.id))));
    console.log(watchListUnique);
  }



//-------------------------------------------cancel pop confirm---------------------------------------
  const cancel = () => {
    message.error("Not Added");
  };



//--------------------------------------------Pass to Provider----------------------------------------
  const value = {
    getData,
    query,
    getQuery,
    city,
    queryActive,
    openMenu,
    closeMenu,
    menuOpen,
    addToWatch,
    cancel,
    watchlist,
    showWatchList,
    removeFromWatch
  };



  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
