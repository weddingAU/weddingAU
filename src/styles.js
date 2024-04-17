import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f2dcd4;
  overflow: hidden;
  opacity: 0;
  animation: aniLoad 1ms forwards;
  animation-delay: 3s;
  @keyframes aniLoad {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
