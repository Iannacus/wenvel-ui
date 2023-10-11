import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  padding: 1.9rem 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: #666b6d;
  transition: 0.2s;
`;

const StyledInput = styled.input`
  position: relative;
  background: transparent;
  height: 5.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #666b6d;
  padding: 0 0.5rem;
  border: none;
  outline: none;
  transition: 0.5s;
  z-index: 1;
  border-bottom: solid 0.2rem #e1e1ec;
  &:focus {
    border-bottom: ${(props) =>
      props.variant ? `0.2rem solid ${props.variant}` : "0.2rem solid #999dfd"};
  }
  &:hover {
    border-bottom: ${(props) =>
      props.variant ? `0.2rem solid ${props.variant}` : "0.2rem solid #999dfd"};
  }
  &:valid ~ ${StyledLabel}, &:focus ~ ${StyledLabel} {
    display: block;
    padding: 0 5px;
    transform: translateY(-1rem) translateX(-0.8rem) scale(0.85);
    z-index: 2;
    transition: 0.2s;
    color: ${(props) => props.variant};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  & i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #8f8f8f;
    border-radius: 7px;
    overflow: hidden;
    transition: 0.2s;
    pointer-events: none;
  }
`;

const variants = {
  primary: "#999dfd",
  secondary: "#ff93f2",
  basic: "#ff93f2",
  standard: "#ffb7f6",
  premium: "#5ed7fe",
};

function Input({ variant, label, ...props }) {
  return (
    <InputWrapper>
      <StyledInput required="required" variant={variants[variant]} {...props} />
      <StyledLabel>{label}</StyledLabel>
      <i />
    </InputWrapper>
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string.required,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "standard",
    "basic",
    "premium",
  ]),
};

Input.defaultProps = {
  variant: "primary",
  label: "example",
};
