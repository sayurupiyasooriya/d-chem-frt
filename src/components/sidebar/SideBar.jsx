import React, {useContext} from 'react'
import "./sideBar.css"
import SideBarCat from '../sideBarCat/SideBarCat'
import { NavContext } from '../../context/NavContext'

const SideBar = ()=> {
    const [sideBar] = useContext(NavContext)
    return (
        <div className={sideBar ? 'sidebar' : 'sidebar sidebar-collapse'} >
        <div className="sideBarWrapper">
                <div className="sidebarHeader">
                    <SideBarCat name='test'/>         
                </div>
            </div>
        
            
            </div>
    )
}
export default SideBar