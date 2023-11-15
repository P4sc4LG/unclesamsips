import React from 'react';
import {CardCocktail} from "../../index";

export default {
    title: 'public/CardCocktail',
    component: CardCocktail
};

const Template = (args) => <CardCocktail {...args} />;

export const Default = Template.bind({});

Default.args = {
    uid: "",
    title: "",
    img: "",
    alcoholic: "Alcoholic"
};

export const WithCocktail = Template.bind({});

WithCocktail.args = {
    uid: "11007",
    title: "Margarita",
    img: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    alcoholic: "Alcoholic"
};

export const WithNoAlcoholicCocktail = Template.bind({});

WithNoAlcoholicCocktail.args = {
    uid: "12672",
    title: "Fruit Flip-Flop",
    img: "https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg",
    alcoholic: "Non alcoholic"
};