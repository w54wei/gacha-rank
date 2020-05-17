import React from 'react'
import '../Styles/Menu.css'

const Menu = () =>
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
            <p className="hLinks">Links</p>
        </div>
        <div className="hBorder"></div>
    </div>
    
export default Menu