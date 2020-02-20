import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin-right: 12px;
`;

const Label = styled.label`
  cursor: pointer;
  font-weight: 600;
`;

export default ({ onChange, children }) => (
  <Label>
    <Input type="checkbox" onChange={e => onChange(e.target.checked)} />
    {children}
  </Label>
);
