import React from 'react'
import Menu from './Menu'
import Listing from './Listing'
import '../Styles/Body.css'

const Body = ({data}) => 
    <div className="body">
        <Menu />
        {data.map((obj, i) => 
            <Listing className="listing" key={obj.title} rank={++i} obj={obj}/>)}
    </div>

export default Body