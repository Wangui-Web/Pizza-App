import styled from "styled-components";

export const PizzaContainer = styled.div`
    width:100vw;
    background-color:#111111;
    padding-bottom:20px;

`;
export const PizzaHeading = styled.h1`
    text-align:center;
    font-size:40px;
    padding-top:10px;
`;
export const PizzaMainWrap = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;

    @media screen and (min-width:1100px){
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
    }
    
`;
export const PizzaInfo = styled.div`
    background-color:#1f1f1f;
    border-radius:10px;
    border:1px solid rgb(250,130,0);
    padding:20px;
    width:80vw;
    margin:20px 10vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media screen and (min-width:1100px){
        width:300px;
        margin:0;
    }
`;
export const PizzaImg = styled.img`
    width:240px;
    border-radius:50%;
`;
export const PizzaName = styled.h3`
    font-size:24px;
    padding:10px 0px;
    text-decoration:underline;
    letter-spacing:1px;
`;
export const PizzaDesc = styled.p`
    letter-spacing:0.7px;
    font-size:18px;
    padding-bottom:15px;
    text-align:center;
    line-height:25px;
`;
export const PizzaPrice = styled.p`
    letter-spacing:0.7px;
    font-size:18px;
    text-align:center;
    line-height:25px;
`;
export const PizzaButton = styled.button`
    margin:20px;
    cursor:pointer;
    background:rgba(250,130,0,0.7);
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