import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #ddd;
`;

const Button = (props) => (
  <StyledButton className="button" onClick={props.onClick} {...props}>
    {Children.toArray(props.children)}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
