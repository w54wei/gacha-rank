import React from 'react'
import '../Styles/Menu.css'

const Menu = () =>
    <div className="menu"> 
        <div className="menuBox">
            <p className="hRank">#</p>
            <p className="hTitle">Title</p>
            <p className="hPublisher">Publisher</p>
            <p className="hAppleDownloads">IOS DL</p>
            <p className="hGoogleDownloads">Android DL</p>
            <p className="hRevenue">Revenue</p>
        </div>
        <div className="hBorder"></div>
    </div>
    
export default Menu