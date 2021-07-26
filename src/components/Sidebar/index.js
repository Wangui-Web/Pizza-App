import React from 'react';
import {SidebarContainer,CloseIcon,SidebarItems,SidebarLink,SidebarBtnWrap,SidebarRoute } from "./SidebarElement"

function Sidebar({ toggleMenu,isOpen }) {
    
        return (
            <SidebarContainer onClick={toggleMenu} isOpen={isOpen}>
                <CloseIcon />
                <SidebarItems>
                    <SidebarLink to="./Pizza">Pizzas</SidebarLink>
                    <SidebarLink to="/">Full Menu</SidebarLink>
                    <SidebarLink to="/">Contact</SidebarLink>
                </SidebarItems>
                <SidebarBtnWrap>
                    <SidebarRoute to="/">Place Order</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarContainer>
        )
}

export default Sidebar
