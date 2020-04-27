import React from 'react'
import '../Styles/Header.css'

const Header = ({year, month}) =>
    <div className="header"> 
        <h1>Gacha Rank</h1>
        <p>Ranking of gacha games. Updated daily.</p>
        <p>Current Stats: {month} {year}</p>
    </div>
    
export default Header