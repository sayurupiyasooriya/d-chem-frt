import React from 'react';
import { Language,Settings, Menu } from '@material-ui/icons'
import './topbar.scss'


const TopBarItem = (props)=>{
    return(
    <div className="topBarItem">
    <div className="topbarIconContainer">
                    {props.content}
                    {props.notification && <span className="topIconBadge">
                        {props.notification}
                    </span>}
                    
                    </div>
    </div>)
}

export default TopBarItem