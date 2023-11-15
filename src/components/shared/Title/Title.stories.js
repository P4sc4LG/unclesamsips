import React from 'react';
import {Title} from "../../index";

export default {
    title: 'Shared/Title',
    component: Title
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
    content: "Title",
    color: ""
};

export const WithColor = Template.bind({});

WithColor.args = {
    content: "Title",
    color: "blue"
};