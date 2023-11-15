import React from 'react';
import {CardIngredient} from "../../index";

export default {
    title: 'public/CardIngredient',
    component: CardIngredient
};

const Template = (args) => <CardIngredient {...args} />;

export const Default = Template.bind({});

Default.args = {
    ingredientId: "",
    ingredientName: "",
};

export const WithIngredient = Template.bind({});

WithIngredient.args = {
    ingredientId: "552",
    ingredientName: "Elderflower cordial",
};