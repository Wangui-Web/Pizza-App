import styled from 'styled-components';
import image1 from "../../images/pizza2.jpg";

export const HeroContainer = styled.div`
    background:linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.2)),url(${image1});
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
`;

export const HeroSection = styled.div`
    width:100%;
    height:87.2vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const HeroTitle = styled.h1`
    font-size:clamp(25px,9vw,60px);
    margin-bottom:20px;
    padding:20px 30px 30px 30px;
    box-shadow: 5px 2px rgb(255,130,0);
    text-transform:capitalise;
    letter-spacing:1px
    font-weight:800;
`;
export const HeroParagraph = styled.p`
    font-size:clamp(18px,4vw,26px);
    margin-bottom:40px;
    letter-spacing:1px;
`;
export const HeroButton = styled.button`
    background-color:rgba(50,50,50,0.9);
    border:none;
    outline:none;
    font-size:22px;
    width:180px;
    height:60px;
    letter-spacing:1px;
    border-radius:5px;
    cursor:pointer;
    transition:0.5s ease-out;

    &:hover{
        transition:0.5s ease-out;
        background-color:rgba(255,130,0,0.8);
        color:red;
        text-decoration:underline;
    }
`;