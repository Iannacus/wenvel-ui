import React from "react";
import styled from "styled-components";

const DropShadowStyled = styled.div`
  filter: ${(props) => `drop-shadow(3px 5px 7px ${props.dropShadowBg})`};
`;
function DropShadowWrapper({ dropShadow, children }) {
  return (
    <DropShadowStyled dropShadowBg={dropShadow || "transparent"}>
      {children}
    </DropShadowStyled>
  );
}

export default DropShadowWrapper;
