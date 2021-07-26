import React,{useState} from 'react';
import Navbar from "../Navbar";
import Sidebar from '../Sidebar';
import { HeroContainer,HeroTitle,HeroParagraph,HeroButton,HeroSection } from "./HeroElements";

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { 
        setIsOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Sidebar toggleMenu={toggleMenu} isOpen={ isOpen}/>
            <Navbar toggleMenu={ toggleMenu}/>
            <HeroSection>
                <HeroTitle>Best Pizza in Town</HeroTitle>
                <HeroParagraph>We deliver to your doorstep.</HeroParagraph>
                <HeroButton>Order Now</HeroButton>
            </HeroSection>
        </HeroContainer>
    )
}

export default Hero
