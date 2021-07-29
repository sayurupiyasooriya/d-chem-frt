import React from 'react'
import { Link } from 'react-router-dom'
import {sidebarData} from '../../sidebarData'
import './sideBarCat.css'
function SideBarCat(props) {
    return (
        <div className="sidebar-component">
                        <strong className="title">{props.name}</strong>
                        <ul> 
                            
                                {sidebarData.test.map((item,index)=>{
                                     return (
                                         <Link to={item.path}  className="side-bar-link">
                                         <li className="sidebar-item-list"
                                     key={index} > 
                                     {item.icon}
                                     <span>{item.title}</span> 
                                     </li>
                                         </Link>
                                     
                                     )
                                })}
                           
                        </ul>
                        </div>
    )
}

export default SideBarCat

