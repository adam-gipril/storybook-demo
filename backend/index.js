const cors = require('cors');
const express = require('express');
const app = express();

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

app.use(cors());
app.use(express.json());

app.get('/settings', (req, res) => {
  res.status(200).json(settings);
});

app.put('/settings', (req, res) => {
  settings = req.body;
  res.status(202).json(settings);
});

app.listen(3000, () => console.log('now listening on port 3000'));
