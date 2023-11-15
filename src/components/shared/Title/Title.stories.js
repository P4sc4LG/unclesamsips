import React from 'react';
import Title from './Title';

export default {
    component: Title,
    title: 'component/Title',

};

const Template = (args) => <Title {...args} />

export const Default = Template.bind({});

Default.args = {
    content: 'lorem ipsum dolor sit amet',
    color: 'red'
}
