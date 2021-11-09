import React, { useContext } from 'react'
import './topbar.scss'
import { Notifications, Language, Settings, Menu } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { NavContext } from '../../context/NavContext'
import TopBarItem from './TopBarItem'



const handleClickItem = (e) => {
    alert('nice')
}
export default function Topbar() {

    const [sideBar, setSideBar] = useContext(NavContext)

    const showSideBar = () => {
        setSideBar(!sideBar)
    }


    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarRight">
                    <div className="logo">
                        LMS
                    </div>
                    <Link to="#" className="side-bar-close">
                        <Menu onClick={showSideBar} />
                    </Link>
                </div>
                <div className="topbarLeft">
                    <TopBarItem content={<Notifications />} notification='0' />
                    <TopBarItem content={<Language />} />
                    <TopBarItem content={<Settings />} />
                    <TopBarItem content={<Avatar onClick={handleClickItem} />} />

                </div>
            </div>

        </div>
    )
}
