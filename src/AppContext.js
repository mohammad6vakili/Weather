import React, { useState, useEffect, createContext } from "react";
import { message } from "antd";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {


// ---------------------------------------------------States---------------------------------------
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);
  const [queryActive, setQueryActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')));
  const [watchListUnique , setWatchListUnique]=useState(JSON.parse(localStorage.getItem('watchlist')));
  const [showWatchList, setShowWatchList] = useState([]);
  const [coord , setCoord]=useState('');
  const [forecast , setForecast]=useState({});
  const [hourly , setHourly]=useState(false);
  const [daily , setDaily]=useState(false);

//----------------------------------------------Component Did Mount----------------------------------
  



//------------------------------------------------get city data--------------------------------------
  const getData = async (e) => {
    e.preventDefault();
    if(query===""){
      alert('Enter a city name!')
    }else{
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=498e14c3edcd5cadea0be9209c066677`)
    .then(function (response){
      setCity(response.data);
      setCoord({lat:JSON.stringify(response.data.coord.lat) , lon:JSON.stringify(response.data.coord.lon)});
    });
    setQueryActive(true);
    console.log(city);
  }}


//---------------------------------------------show hourly forecast---------------------------------
const showHourly=()=>{
  setHourly(true);
  console.log(coord);
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=498e14c3edcd5cadea0be9209c066677`)
  .then(res=>setForecast(res.data));
  console.log(forecast);
}


//----------------------------------------------show daily forecast---------------------------------
const showDaily=()=>{
  setDaily(true);
  console.log(coord);
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=498e14c3edcd5cadea0be9209c066677`)
  .then(res=>setForecast(res.data));
  console.log(forecast);
}


//-----------------------------------------------get query value-------------------------------------
  const getQuery = (e) => {
    setQuery(e.target.value);
  };


//----------------------------------------------close and open menu----------------------------------
  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


//-------------------------------------------add city to Watchlist-----------------------------------
  const addToWatch = (city) => {
    message.success("Added to Watchlist");
    watchlist.push({name:city.name , id:city.id});
    setWatchListUnique(Array.from(new Set(watchlist.map(a => a.id)))
    .map(id => {
    return watchlist.find(a => a.id === id)}));
    localStorage.setItem('watchlist',JSON.stringify(watchListUnique));
    console.log(watchListUnique);
  };


// ------------------------------------------------load watchlist-------------------------------------
  const loadWatchList=()=>{
      const showWatchListinside = [];
      watchListUnique.map((cityName)=>(
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.name}&appid=498e14c3edcd5cadea0be9209c066677`)
      .then(response=>showWatchListinside.push(response.data))));
      setShowWatchList(showWatchListinside);
      console.log(showWatchList);
  }


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
    removeFromWatch,
    watchListUnique,
    loadWatchList,
    showHourly,
    hourly,
    showDaily,
    daily
  };



  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
