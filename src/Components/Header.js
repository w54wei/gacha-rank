import React from 'react'
import '../Styles/Header.css'

const Header = ({year, month, handleChange}) =>
    <div className='header'> 
        <h1 className='name'>GACHARANK</h1>
        <p className='tagline'>Top 50 Gacha Games</p>
        <p>Updated:&nbsp;{month} {year}</p>
        <p className='sort'>Sort By:</p>
        <select className='select' onChange = {handleChange}>
            <option value='0'>Downloads</option>
            <option value='1'>Revenue</option>
        </select>
        <div className='mBorder'/>
    </div>
    
export default Header