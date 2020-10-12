import React from 'react'
import Menu from './Menu'
import Listing from './Listing'
import '../Styles/Body.css'
import { v4 as uuidv4 } from 'uuid';

const Body = ({data}) => 
    <div className = 'body'>
        <Menu />
        {data.map((obj, i) => (
            <Listing key = {uuidv4()} rank = {++i} obj = {obj} delay={i/12}/>)
        )}
    </div>

export default Body