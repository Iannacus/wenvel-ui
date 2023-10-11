import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DropShadowWrapper from "../../modifiers/drop-shadow/DropShadowWrapper";

const StyledButton = styled.button`
  display: inline-block;
  width: max-content;
  background-color: #000;
  border: none;
  overflow: hidden;
  border-radius: 0 4rem 4rem 4rem;
  color: #fff;
  background: ${(props) => props.bg1};
  background: ${(props) => `linear-gradient(
    ${props.deg},
    ${props.bg2} 0%,
    ${props.bg3} 100%
  )`};

  &:hover {
    cursor: pointer;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  padding: ${(props) => props.value};
  background-color: transparent;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${(props) => props.innerBg};
    transition: all 0.4s ease-in-out 0s;
  }
  ${StyledButton}:hover & {
    &::after {
      left: 100%;
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${StyledButton}:hover & {
    color: #fff;
  }
`;

const StyledLabel = styled.p`
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  text-transform: ${({ theme }) => theme.typography.button.transform};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
`;

const sizes = {
  small: {
    value: "1.2rem 2.4rem",
  },
  medium: { value: "1.4rem 3.5rem" },
  large: { value: "1.9rem 5.6rem" },
};

const variants = {
  primary: {
    color: "#fff",
    deg: "270deg",
    bg1: "rgb(153,157,253)",
    bg2: "rgba(153,157,253, 1)",
    bg3: "rgba(128, 226, 255, 1)",
    innerBg: "#999dfd",
    dropShadowBg: "rgba(142, 139, 245, 0.4)",
  },
  secondary: {
    color: "#fff",
    deg: "90deg",
    bg1: "rgba(255,183,246,1)",
    bg2: "rgba(153,157,253, 1)",
    bg3: "rgba(255,183,246,1)",
    innerBg: "#ff93f2",
    dropShadowBg: "255,147,242, 0.4",
  },
  basic: {
    color: "#fff",
    deg: "90deg",
    bg1: "rgba(255,147,242, 1)",
    bg2: "rgba(153,157,253, 1)",
    bg3: "rgba(255,147,242, 1)",
    innerBg: "#ff93f2",
    dropShadowBg: "rgba(255,147,242, 0.4)",
  },
  standard: {
    color: "#fff",
    deg: "270deg",
    bg1: "rgba(255,183,246,1)",
    bg2: "rgba(255,183,246,1)",
    bg3: "rgba(153,157,253, 1)",
    innerBg: "#ffb7f6",
    dropShadowBg: "rgba(255,147,242, 0.4)",
  },
  premium: {
    color: "#fff",
    deg: "270deg",
    bg1: "rgba(94,215,254, 1)",
    bg2: "rgba(94,215,254, 1)",
    bg3: "#00d8ab",
    innerBg: "#5ed7fe",
    dropShadowBg: "rgba(94,215,254, 0.4)",
  },
};

function Button({ variant, size, label, ...props }) {
  return (
    <DropShadowWrapper
      dropShadow={variants[variant]?.dropShadowBg || "transparent"}
    >
      <StyledButton {...{ ...variants[variant], ...props }}>
        <InnerContainer {...{ ...variants[variant], ...sizes[size] }}>
          <Content>
            <StyledLabel>{label}</StyledLabel>
          </Content>
        </InnerContainer>
      </StyledButton>
    </DropShadowWrapper>
  );
}

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "standard",
    "basic",
    "premium",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
};

Button.defaultProps = {
  variant: "",
  size: "medium",
  label: "Example",
};
