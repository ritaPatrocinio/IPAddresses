import React, { useState } from "react";
import './SearchBar.css';

export function SearchBar({setSearchResults}) {
    const [term, setTerm] = useState('');
    let domain= '';

    function isValidURL(t) {
        var res = t.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if(res !== null){
          
          domain = t.replace("http://", "");
          domain = t.replace("https://", "");
          console.log('domain:', domain);
          domain = domain.replace("www.", "");
          console.log('domain:', domain);
          let lastSlash = domain.indexOf('/');
          if(lastSlash !== -1){
              domain = domain.slice(0,lastSlash)};
          console.log('domain:', domain);
        //   setTerm(() => domain)
          return true
        } else {
          return false
        }
      };
      
      function ValidateIPaddress(t) {  
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)) {  
          return (true)  
        }  
        // alert("You have entered an invalid IP address!")  
        return (false)  
      }  
      

    const onSearch = (term) => {
        if(term.trim() !== ''){
          if(ValidateIPaddress(term)){
            console.log('IP:', term);
            return fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FnidoGHL3WLUd3pXwq1AgGgR6jxUn&ipAddress=${term}`)
          .then(response => response.json())
          .then(jsonResponse => {
          setSearchResults(jsonResponse)} 
          )
          }
          else if(isValidURL(term)){
            console.log('domain:', domain);
            return fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FnidoGHL3WLUd3pXwq1AgGgR6jxUn&domain=${domain}`)
          .then(response => response.json())
          .then(jsonResponse => {
          setSearchResults(jsonResponse);
            } 
          )
          }
          else alert("You have entered an invalid IP address or domain!")  
        }
      }

    const search = () => {
        onSearch(term);
    }

    const handleTermChange = (e) => {
        setTerm(() => e.target.value ); 
    }

        return (
            <div className="SearchBar">
            <input value={term} placeholder="Search for any IP Adress or domain" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>></button>
            </div>
        )
}