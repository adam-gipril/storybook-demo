import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, array } from '@storybook/addon-knobs';
import { Select } from '../components';

export default { title: 'Components/Select', component: Select };

const options = array('Options', ['', 'option 1', 'option 2']);

export const Default = () => (
  <Select
    id="select-default"
    options={options}
    onInput={action('input')}
    onFocus={action('focus')}
    onBlur={action('blur')}
  >
    {text('Label', 'Label')}
  </Select>
);
