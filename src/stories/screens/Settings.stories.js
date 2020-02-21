import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { Settings } from '../../screens';
import { SettingsService } from '../../services';

const mock = new MockAdapter(SettingsService.client);

let settings = [
  {
    id: 'first_name',
    type: 'string',
    name: 'First name',
    value: 'Lloyd',
  },
  {
    id: 'last_name',
    type: 'string',
    name: 'Last name',
    value: 'Christmas',
  },
  {
    id: 'send_emails',
    type: 'boolean',
    name: 'Send me emails',
    value: true,
  },
  {
    id: 'state',
    type: 'array',
    name: 'State of residence',
    options: ['AZ', 'CA', 'CO', 'RI', 'WI'],
    value: 'RI',
  },
];

mock.onGet('/settings').reply(200, settings);
mock.onPut('/settings').reply(202, settings);

export default { title: 'Screens/Settings', component: Settings };

export const Default = () => <Settings />;
