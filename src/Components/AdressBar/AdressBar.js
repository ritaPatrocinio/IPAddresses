import React, { useState } from "react";
import './AdressBar.css';

export function AdressBar({searchResults}) {
    
        return (
            <div className="AdressBar">
                <div className="center">
                <div className="square">
                    <p className="label">IP ADDRESS</p>
                    <p>{searchResults.ip}</p>
                </div>
                <div className="square">
                    <p className="label">LOCATION</p>
                    <p>{searchResults.location.city}, {searchResults.location.region}</p>
                    <p>{searchResults.location.postalCode}</p>    
                </div>
                <div className="square">
                    <p className="label">TIMEZONE</p>
                    <p>UTC {searchResults.location.timezone}</p>
                </div>
                <div className="square">
                    <p className="label">ISP</p>
                    <p>{searchResults.isp}</p>
                </div>
                </div>
            </div>
        )
}