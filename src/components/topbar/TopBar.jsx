import React, {useContext} from 'react'
import './topbar.css'
import { Notifications, Language,Settings, Menu } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { NavContext } from '../../context/NavContext'


export default function Topbar() {

    const [sideBar, setSideBar] = useContext(NavContext)

    const showSideBar = ()=>{
       setSideBar(!sideBar)
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarRight">
                    <div className="logo">
                        D-Chem
                    </div>
            <Link to="#" className="side-bar-close">
            <Menu onClick={showSideBar}/>
            </Link>
                </div>
                <div className="topbarLeft">
                    <div className="topbarIconContainer">
                    <Notifications/>
                    <span className="topIconBadge">
                        2
                    </span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">
                        2
                    </span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <div className="topbarIconContainer">
                    <Avatar className="topAvatar" alt="User Image" src="https://ibb.co/pxBVGNr"/>
                   
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
