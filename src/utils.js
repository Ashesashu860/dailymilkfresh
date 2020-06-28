import styled from "styled-components";

const fitAsPerOrientation = () => {
  let width = window.screen.width;
  let height = window.screen.height;

  return width > height ? `calc(${height}-4em)` : `calc(${width}-4em)`;
};

export const FitContainer = styled.div`
  height: ${fitAsPerOrientation()};
  width: 100%;
  padding: 2rem;
`;
