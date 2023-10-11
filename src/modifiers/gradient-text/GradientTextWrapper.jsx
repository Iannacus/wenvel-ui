import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  width: fit-content;
  background: #fff;
  background: linear-gradient(
    90deg,
    rgba(77, 239, 161, 1) 25%,
    rgba(255, 147, 242, 1) 50%,
    rgba(172, 157, 252, 1) 75%,
    rgba(128, 226, 255, 1) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

function GradientTextWrapper({ children }) {
  return <StyledText>{children}</StyledText>;
}

export default GradientTextWrapper;
