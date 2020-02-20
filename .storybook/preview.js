import React from 'react';
import { addDecorator } from '@storybook/react';

import '../src/index.css';

addDecorator(story => <div style={{ margin: '15px' }}>{story()}</div>);
