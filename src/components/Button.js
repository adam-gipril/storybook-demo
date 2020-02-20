import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 100%;
  border-radius: 100px;
  font-size: 16px;

  :focus {
    outline: none;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  ${props => ({
    border: props.secondary ? '1px solid blue' : 0,
    backgroundColor: props.secondary ? 'white' : 'blue',
    color: props.secondary ? 'blue' : 'white',
    ':focus': {
      boxShadow: `0 0 0 2px ${props.secondary ? 'blue' : 'red'}`,
    },
  })}
`;

export default ({ type = 'button', secondary, onClick, children }) => {
  return (
    <Button type={type} secondary={secondary} onClick={onClick}>
      {children}
    </Button>
  );
};
