import styled from "styled-components";
import {Link } from "react-router-dom"
import { FaRegTimesCircle} from "react-icons/fa";

export const SidebarContainer = styled.aside`
    width:100%;
    height:100vh;
    position:absolute;
    left:${({isOpen})=>isOpen?"0":"-2000px"};
    top:0;
    background:linear-gradient(to left,rgb(250,130,0),rgb(250,150,0),rgba(250,170,0,0.8));
    z-index:99;
    transition:1s ease-in-out;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

    @media screen and (min-width:800px){
        width:40vw;
        height:100vh;
        position:absolute;
        top:0;
        left:${({isOpen})=>isOpen?"0":"-2000px"};
    }
`;
export const CloseIcon = styled(FaRegTimesCircle)`
    transform:scale(2);
    cursor:pointer;
`;
export const SidebarItems = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:70%;
    align-items:center;
    justify-content:space-around;
`;
export const SidebarLink = styled(Link)`
    text-decoration:none;
    font-size:24px;
    color:black;
    cursor:pointer;
    text-transform:uppercase;
    font-weight:800;
    letter-spacing:1px;

    &:hover{
        color:red;
        border-bottom:1px solid black;
    }
`;
export const SidebarBtnWrap = styled.button`
    background-color:rgba(50,50,50,0.9);
    border:none;
    outline:none;
    width:200px;
    height:60px;
    border-radius:5px;
    cursor:pointer;
    transition:0.5s ease-out;

    &:hover{
        transition:0.5s ease-out;
        background-color:red;
    }
`;
export const SidebarRoute = styled(Link)`
    font-size:24px;
    text-decoration:none;
    letter-spacing:1px;

    &:hover{
        color:black;
    }
`;