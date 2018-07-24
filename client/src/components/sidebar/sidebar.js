import React from 'react';
import './sidebar.scss';

const Sidebar = (props) => (
        <div 
            className= "sidebar"
            style={{
                width: `${props.width}`,
                height: `${props.height}`
        }}>
            <div className="sidebar-container">
                {props.children}
            </div>
        </div>
)


export default Sidebar;