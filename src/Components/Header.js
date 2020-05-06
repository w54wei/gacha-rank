import React from 'react'
import '../Styles/Header.css'

const Header = ({year, month}) =>
    <div className="header"> 
        <h1>Gacha Rank</h1>
        <p>Current Stats: {month} {year}</p>
        <div className="menu">
            <div className="menuBox">
                <p className="hRank">#</p>
                <p className="hTitle">Name</p>
                <p className="hPublisher">Publisher</p>
                <div className="downloads">
                    <p>Monthly Downloads</p>
                    <div className="downloadsBox">
                        <p className="hAppleDownloads">IOS</p>
                        <p>Android</p>
                    </div>
                </div>
                <p className="hRevenue">Revenue</p>
                <p>Links</p>
            </div>
        </div>
        <hr />
    </div>
    
export default Header