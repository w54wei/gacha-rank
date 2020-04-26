import React from 'react'
import '../Styles/Listing.css'

const Listing = ({obj, rank}) => 
    <div className='listing'>
        <img className='icon' src={obj.img} />
        <span className='info'>
            <p className="title">{obj.title}</p>
            <p className="rank">Rank: {rank}</p>
            <p>Monthly Downloads: {obj.apple + obj.google}</p>
            <p>Monthly Downloads (IOS): {obj.apple}</p>
            <p>Monthly Downloads (Android): {obj.google}</p>
            <p>Publisher: {obj.publisher}</p>
            <p>Revenue: {obj.revenue}</p>
        </span>
    </div>

export default Listing