import React from 'react'
import '../Styles/Listing.css'

const Listing = ({obj, rank}) => 
    <div className="content">
        <div className="left">
            <img className="icon" src={obj.img} alt="App icon."/>
            <p className="rank">Rank: {rank}</p>
        </div>
        <div className="info">    
            <p className="title">{obj.title}</p>
            <p>{obj.publisher}</p>     
            <p>IOS Downloads: {obj.apple}</p>
            <p>Android Downloads: {obj.google}</p>
            <p>Revenue: {obj.revenue}</p>
            <a href="https://apple.com" target="_blank" rel="noopener noreferrer">iTunes</a> 
            &nbsp;
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google Play</a>
        </div>
    </div>

export default Listing