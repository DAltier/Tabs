import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const TabParagraph = styled.p`
  padding: 50px;
  font-size: 1rem;
  transition: all 1s ${fadeInAnimation};
  border: 0.75px solid rgb(230, 230, 230);
  width: 300px;
  margin: 0px auto;
  font-size: 24px;
`;

export default TabParagraph;