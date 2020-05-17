import React from 'react'
import '../Styles/Header.css'

const Header = ({year, month}) =>
    <div className="header"> 
        <h1>Gacha Rank</h1>
        <p>Last Updated:&nbsp;{month} {year}</p>
        <div className="mBorder"/>
    </div>
    
export default Header