import React from 'react';
import {PizzaContainer,PizzaHeading,PizzaMainWrap,PizzaInfo,PizzaImg,PizzaName,PizzaDesc,PizzaPrice,PizzaButton } from './PizzaElements';

function Pizza({ data, heading }) {
    return (
        <PizzaContainer >
            <PizzaHeading>{heading}</PizzaHeading >
            <PizzaMainWrap>   
                {
                    data.map((product) => {
                        return (
                            <PizzaInfo  key={product.id}>
                                <PizzaImg src={product.image} alt={product.alt} />
                                <PizzaName>{product.name} </PizzaName>
                                <PizzaDesc>{product.desc} </PizzaDesc>
                                <PizzaPrice>{product.price} </PizzaPrice>
                                <PizzaButton>{ product.button} </PizzaButton>
                            </PizzaInfo>  
                        )
                    })
                }
            </PizzaMainWrap>
        </PizzaContainer>
    )
}

export default Pizza
