import React from 'react';
import { DayContainer, DayHeading, DayTitle, DayIngredients, DayPrice, DayButton } from "./PizzaOfDayElements"

function PizzaOfDay() {
    return (
        <DayContainer>
            <DayHeading>Pizza Of The Day.</DayHeading>
            <DayTitle>Tamu Pizza.</DayTitle>
            <DayIngredients>Ingredients: Roma Tomatoes,Onions, Italian Sausage, Periperi,olives,basil and Oregano and Grape Sauce</DayIngredients>
            <DayPrice>Price: Ksh.850 medium,Ksh.1050 large,Ksh.150 per slice.</DayPrice>
            <DayButton>Order Now</DayButton>
        </DayContainer>
    )
}

export default PizzaOfDay
