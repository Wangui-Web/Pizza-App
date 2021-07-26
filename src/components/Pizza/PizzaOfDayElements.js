import styled from "styled-components";
import image from "../../images/pizza4.jpg"

export const DayContainer = styled.div`
    background:linear-gradient(to right,rgba(0,0,0,0.3),rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(${image});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    width:100vw;
    height:480px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:0px 30px;
    text-align:center;
`;
export const DayHeading = styled.h1`
    font-size:40px;

`;
export const DayTitle = styled.h3`
    font-size:30px;
    border-bottom:2px solid rgb(250,130,0);
`;
export const DayIngredients = styled.p`
    letter-spacing:1px;
    font-size:18px;
    line-height:35px;
`;
export const DayPrice = styled.p`
    letter-spacing:1px;
    font-size:18px;
    line-height:35px;
`;
export const DayButton = styled.button`
    margin:20px;
    cursor:pointer;
    background:rgba(250,130,0,0.8);
    border:none;
    outline:none;
    font-size:18px;
    text-transform:uppercase;
    padding:20px 20px;
    border-radius:10px;
    transition:0.5s ease-out;

    &:hover{
        transition:0.5s ease-out;
        text-decoration:underline;
        background:red;
    }
`;