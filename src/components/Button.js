import styled from "styled-components";
import { Button } from "@material-ui/core";
import { colors } from "../theme";

const StyledButton = styled(Button)`
  background-color: ${colors.primaryDark} !important;
  color: ${colors.white} !important;
  padding: 1.4vh 4vh !important;
  font-weight: normal !important;
  border-radius: 24px !important;
  font-size: 0.8rem !important;
  z-index: 0 !important;
  @media only screen and (max-width: 700px) {
    padding: 1vh 2vh !important;
  }
`;

export default StyledButton;
