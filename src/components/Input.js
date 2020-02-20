import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2px 30px 2px 15px;
  font-size: 16px;
  :focus {
    box-shadow: 0 0 0 2px blue;
  }
`;

const Label = styled.label`
  display: block;
  margin: 0 0 4px 2px;
  font-weight: 600;
`;

export default ({ id, onInput, onFocus, onBlur, type = 'text', children }) => {
  return (
    <div>
      <Label htmlFor={id}>{children}</Label>
      <Input
        id={id}
        type={type}
        onInput={e => onInput(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
