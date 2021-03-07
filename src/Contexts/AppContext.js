import React, { useState,useEffect ,createContext } from "react";
import { message } from "antd";
import axios from "axios";
import Swal from 'sweetalert';

export const AppContext = createContext();


export const AppProvider = (props) => {


// ---------------------------------------------------States---------------------------------------
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(null);
  const [queryActive, setQueryActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')));
  const [showWatchList, setShowWatchList] = useState(null);
  const [coord , setCoord]=useState('');
  const [forecast , setForecast]=useState(null);
  const [showForecast , setShowForecast]=useState(0);
  const [time , setTime]=useState([]);
  const [dateDay , setDateDay]=useState([]);
  const [profileModal , setProfileModal]=useState(false);


//----------------------------------------------Component Did Mount----------------------------------
  useEffect(() => {
    getTime();
    getDate();
  }, [])


//-----------------------------------------------get user location-----------------------------------
  const accessUserLocation=()=>{
     navigator.geolocation.getCurrentPosition(async(position)=>{
      await axios.get(`https:api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
      .then(
        function(res){
          if(res.status===200){
            userLocationWeather(res);
          }else{
            Swal("Error while reciving data!")
          }
        }
      )
    })
  }


//-------------------------------------------User Location Weather------------------------------------
  const userLocationWeather=async(res)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${res.data.city}&appid=498e14c3edcd5cadea0be9209c066677`)
    .then(function (response){
      setCity(response.data);
      setCoord({lat:JSON.stringify(response.data.coord.lat) , lon:JSON.stringify(response.data.coord.lon)});
      setQueryActive(true);
      setShowForecast(0);
      setQuery("Your Location");
    })
  }  
//------------------------------------------------get city data--------------------------------------
  const getData = async (e) => {
    e.preventDefault();
    if(query===""){
      Swal('Enter a city name!')
    }else{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=498e14c3edcd5cadea0be9209c066677`)
    if(response.status===200){
      setCity(response.data);
      setCoord({lat:JSON.stringify(response.data.coord.lat) , lon:JSON.stringify(response.data.coord.lon)});
      setQueryActive(true);
      setShowForecast(0);
    }
  }}


//---------------------------------------------show hourly forecast---------------------------------
  const showHourly= async () => {
    setShowForecast(1);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=498e14c3edcd5cadea0be9209c066677`);
    setForecast(response.data);
  }


//----------------------------------------------show daily forecast---------------------------------
  const showDaily=async()=>{
    setShowForecast(2);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=498e14c3edcd5cadea0be9209c066677`);
    setForecast(response.data);
  }


//--------------------------------------------------get hour-----------------------------------------
  const getTime=()=>{
    let date=new Date();
    let hour=date.getHours();
    for(let i=0;i<=47;i++){
      if(hour===25){
        hour=1
      }
    time.push(JSON.stringify(hour++))
    }
  }
  

//--------------------------------------------------get day------------------------------------------
  const getDate=()=>{
    let date = new Date();
    let day = date.getDay();
    let insideDay=[];
    insideDay.push(day);
    for(let i=0 ; i<7 ; i++){
      if(day===6){
        day=-1
      }
      day++;
      insideDay.push(day);
    }
    insideDay.map((item)=>{
      switch (item) {
        case 0:
          dateDay.push('Sunday');
          break;
        case 1:
          dateDay.push('Monday');
          break;
        case 2:
          dateDay.push('Tuesday');
          break;
        case 3:
          dateDay.push('Wednesday');
          break;
        case 4:
          dateDay.push('Thursday');
          break;
        case 5:
          dateDay.push('Friday');
          break;
        case 6:
          dateDay.push('Saturday');
          break;
        default:
          break;
      }
    })
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
    setWatchlist(Array.from(new Set(watchlist.map(a => a.id)))
    .map(id => {
    return watchlist.find(a => a.id === id)}));
    localStorage.setItem('watchlist',JSON.stringify(watchlist));
  };


// ------------------------------------------------load watchlist-------------------------------------
  const loadWatchList=async()=>{
      const showWatchListinside = [];
      for(let i=0 ; i<watchlist.length;i++){
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${watchlist[i].name}&appid=498e14c3edcd5cadea0be9209c066677`)
        showWatchListinside.push(response.data);
      }
      setShowWatchList(showWatchListinside);
  }


//-------------------------------------------remove city from Watchlist-------------------------------
  const removeFromWatch=(city)=>{
    const filterWatch = showWatchList;
    const filterWatchName=watchlist;
    setShowWatchList(
    filterWatch.filter((item)=>(item.id!==city.id))
    )
    setWatchlist(
    filterWatchName.filter((item)=>(item.id!==city.id))
    )
    localStorage.setItem('watchlist',JSON.stringify(filterWatchName.filter((item)=>(item.id!==city.id))));
  }


//-------------------------------------------cancel pop confirm---------------------------------------
  const cancel = () => {
    message.error("Not Added");
  };


//----------------------------------------------profile modal-----------------------------------------
  const openProfileModal=()=>{
    setProfileModal(true);
  }

  const closeProfileModal=()=>{
    setProfileModal(false);
  }
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
    loadWatchList,
    showHourly,
    showDaily,
    showForecast,
    setShowForecast,
    forecast,
    time,
    dateDay,
    profileModal,
    openProfileModal,
    closeProfileModal,
    setProfileModal,
    accessUserLocation
  };



  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
