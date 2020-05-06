import React from 'react'
import '../Styles/Listing.css'

const Listing = ({obj, rank}) => 
    <div className="content">
        <p className="rank">{rank}</p> 
        <img className="icon" src={obj.img} alt="App icon."/>   
        <p className="title">{obj.title}</p>
        <p className="publisher">{obj.publisher}</p>     
        <p className="appleDownloads">{obj.apple}</p>
        <p className="googleDownloads">{obj.google}</p>
        <p className="revenue">{obj.revenue}</p>
        <p>
            <a href={obj.iosLink} target="_blank" rel="noopener noreferrer">iTunes</a>
        </p>
        &nbsp;
        <p>
            <a href={obj.androidLink} target="_blank" rel="noopener noreferrer">Google Play</a>
        </p>
    </div>

export default Listing