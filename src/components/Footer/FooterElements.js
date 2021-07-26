import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color:#212121;
    width:100vw;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;
export const SocialMedia = styled.div`
    width:100vw;
    display:flex;
    justify-content:space-around;

    .insta,.fb,.twitter{
        transform:scale(1.3);
        cursor:pointer;
        transition:0.5s ease-in;

        &:hover{
            transition:0.5s ease-in;
            border:1px solid rgb(250,130,0);
            width:25px;
            height:25px;
            padding:2px;
            transform:scale(1.4);
            
        }
    }
`;
export const FooterEmail = styled.p`
    letter-spacing:1px;
    cursor:pointer;

    &:hover{
        text-decoration:underline;
        color:red;
    }
`;
export const FooterNumber = styled.p`
    letter-spacing:1px;

`;
export const FooterCopyright = styled.p`
    letter-spacing:1px;
`;
