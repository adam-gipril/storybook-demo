import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from '../components';

export default { title: 'Components/Button', component: Button };

export const Primary = () => (
  <Button onClick={action('click')}>{text('Button text', 'Submit')}</Button>
);
export const Secondary = () => (
  <Button secondary onClick={action('click')}>
    {text('Button text', 'Submit')}
  </Button>
);
