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
  height: 6.3rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #666b6d;
  padding: 0 1rem;
  border: none;
  outline: none;
  transition: 0.5s;
  z-index: 1;
  border-bottom: solid 0.2rem #e1e1ec;
  &:focus {
    border-bottom: 0.2rem solid #999dfd;
  }
  &:hover {
    border-bottom: 0.2rem solid #999dfd;
  }
  &:valid ~ ${StyledLabel}, &:focus ~ ${StyledLabel} {
    display: block;
    padding: 0 5px;
    transform: translateY(-1rem) scale(0.85);
    z-index: 2;
    transition: 0.2s;
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

function Input() {
  return (
    <InputWrapper>
      <StyledInput required="required" />
      <StyledLabel>Contraseña</StyledLabel>
      <i />
    </InputWrapper>
  );
}

export default Input;
