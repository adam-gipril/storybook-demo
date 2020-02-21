import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  height: 40px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2px 30px 2px 15px;
  font-size: 16px;

  :focus {
    box-shadow: 0 0 0 2px blue;
  }

  :-moz-focusring {
    color: transparent !important;
    text-shadow: 0 0 0 black;
  }
`;

const Label = styled.label`
  display: block;
  margin: 0 0 4px 2px;
  font-weight: 600;
`;

export default ({ id, options, value, onInput, onFocus, onBlur, children }) => {
  return (
    <div>
      <Label htmlFor={id}>{children}</Label>
      <Select id={id} onInput={e => onInput(e.target.value)} onFocus={onFocus} onBlur={onBlur}>
        {options.map(option => (
          <option key={option} selected={option === value}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};
