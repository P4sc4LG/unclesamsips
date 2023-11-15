import React from 'react';
import {Label} from "../../index";

export default {
    title: 'public/Label',
    component: Label
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
    content: "",
    color: ""
};

export const WithContent = Template.bind({});

WithContent.args = {
    content: "Cocktails",
    color: ""
};

export const WithColor = Template.bind({});

WithColor.args = {
    content: "Cocktails",
    color: "blue"
};