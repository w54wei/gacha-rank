import React from 'react'
import '../Styles/Listing.css'

const Listing = ({obj, rank, delay}) => 
    <div className="bigDiv" style={{animationDelay: delay + 's' }}>
        <div className="content">
            <p className="rank">{rank}</p> 
            <img className="icon" src={obj.img} alt="App icon."/>   
            <p className="title">{obj.title}</p>
            <p className="publisher">{obj.publisher}</p>     
            <p className="appleDownloads">{obj.appleDownloads}</p>
            <p className="googleDownloads">{obj.googleDownloads}</p>
            <p className="revenue">{obj.totalRevenue}</p>
        </div>
    </div>

export default Listing