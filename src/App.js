import React, {useState, useEffect} from 'react';
import './App.css';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {AdressBar} from './Components/AdressBar/AdressBar';
import {Map} from './Components/Map/Map';

function App() {
  const [showResults, setShowResults] = useState(true);

  const [searchResults, setSearchResults] = useState({
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    },
});

  const getLocation = () => {
    let userIP;
    let domain;
    // let domain='api.ipify.org';
    return fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(response => userIP = response.ip)
      .then( response => {
      return fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FnidoGHL3WLUd3pXwq1AgGgR6jxUn&ipAddress=${userIP}`)})
      .then(response => response.json())
      .then(jsonResponse => {
      setSearchResults(jsonResponse);
      setShowResults(true)
      } 
      )};

    //useEffect(() => getLocation(), [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>IP Address Tracker</h1>
        <SearchBar setSearchResults={setSearchResults}></SearchBar>
      </header>
      {showResults? <div><AdressBar searchResults={searchResults}></AdressBar>
      <Map location={searchResults.location}></Map></div> : '' }
      
    </div>
  );
}

export default App;
