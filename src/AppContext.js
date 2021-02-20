import React, { useState, useEffect, createContext } from "react";
import { message } from "antd";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {


// ---------------------------------------------------States---------------------------------------
  const [query, setQuery] = useState("");
  const [coordinates , setCoordinates]=useState([]);
  const [city, setCity] = useState([]);
  const [queryActive, setQueryActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')));
  const [watchListUnique , setWatchListUnique]=useState(JSON.parse(localStorage.getItem('watchlist')));
  const [showWatchList, setShowWatchList] = useState([]);

//----------------------------------------------Component Did Mount--------------------------------

// useEffect(()=>{

// },[])
  

// ------------------------------------------------get city data--------------------------------------
  const getData = async (e) => {
    e.preventDefault();

    //       const response = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=498e14c3edcd5cadea0be9209c066677`
    // );
    // const data = await response.json();
    if(query===""){
      alert('Enter a city name!')
    }else{
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=498e14c3edcd5cadea0be9209c066677`)
    .then(res=>setCity(res.data))
    setQueryActive(true);
    console.log(city);
  }}


// -----------------------------------------------get query value-------------------------------------
  const getQuery = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
    axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=UBzeDsLTvRf7ecUw1qy5tN5EMPXITqRc&location=${e.target.value}`)
    .then(response=>response.data.results[0].locations.map((item)=>{
      if(item.adminArea5!==""){
        setCoordinates({lat:JSON.stringify(item.latLng.lat) , lng:JSON.stringify(item.latLng.lng)})
    }}));
    console.log(coordinates);
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
  };



  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
