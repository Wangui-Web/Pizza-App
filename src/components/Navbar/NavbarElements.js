import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav `
    width:100%;
    background:transparent;
    height:80px;
    color:#fff;
    font-weight:800;
    padding:10px 30px 0px 30px;

    .menu{
        width:90px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-top:30px;

        h3{
            font-size:18px;
        }
        .pizzaMenu{
            border:none;
            outline:none;
            background:transparent;
            width:40px;
            height:30px;
        }
    }
`;
export const NavLink = styled(Link)`
    text-decoration:none;
    position:absolute;
    top:1%;
    left:50%;
    transform:translate(-50%,-1%);
    font-size:clamp(20px,5vw,35px);

    &:hover{
        color:rgb(255,130,0);
        border-bottom:1px solid red;
    }
`;
export const PizzaSlice = styled(FaPizzaSlice)`
    transform:scale(2);
    cursor:pointer;
`;