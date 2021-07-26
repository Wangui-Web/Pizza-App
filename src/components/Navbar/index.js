import React from 'react';
import { Nav,NavLink,PizzaSlice } from "./NavbarElements";

function Navbar({ toggleMenu }) {
    return <>
        <Nav>
            <div className='menu' onClick={toggleMenu }>
                <h3>Menu</h3>
                <button className='pizzaMenu'>
                    <PizzaSlice />
                </button> 
            </div> 
            <NavLink to="/">PizzaEats</NavLink>
               
        </Nav>
        
    </>
}

export default Navbar;
