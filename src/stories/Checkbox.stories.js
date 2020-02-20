import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Checkbox } from '../components';

export default { title: 'Checkbox', component: Checkbox };

export const Default = () => (
  <Checkbox onChange={action('change')}>{text('Label', 'Label')}</Checkbox>
);
