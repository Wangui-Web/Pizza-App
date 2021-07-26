import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import { FooterContainer,FooterEmail,FooterNumber,FooterCopyright,SocialMedia } from "./FooterElements";

function Footer() {
    return (
        <FooterContainer>
            <SocialMedia>
                <FaInstagram className="insta"/>
                <FaFacebook className="fb"/>
                <FaTwitter className="twitter"/>
            </SocialMedia>    
            <FooterEmail>pizzaeats@gmail.com</FooterEmail>
            <FooterNumber><FaPhone className="phone"/> :+(254)712345678 </FooterNumber>
            <FooterCopyright>PizzaEats,2021.All Reserved.</FooterCopyright>
        </FooterContainer>
    )
}

export default Footer
