import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../src/index.css';

addDecorator(story => <div style={{ margin: '15px' }}>{story()}</div>);
addDecorator(withKnobs({ escapeHTML: false }));
