import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SidebarBtnWrap } from './SidebarElements';

function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Deserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarRoute to ="/">Order Now</SidebarRoute>
            <SidebarBtnWrap />
        </SidebarContainer>
    )
}
 
export default Sidebar
