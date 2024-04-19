import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Bg = styled.div`
  transform: rotate(27deg);
  top: 0;
  position: absolute;
  right: -400px;
  background-size: 800px;
  height: 800px;
  width: 800px;
  background-repeat: no-repeat;
  opacity: 0.2;
  z-index: 1;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "montserrat";
  width: 350px;
  z-index: 2;

  iframe {
    overflow: hidden;
  }
`;

export const Title = styled.p`
  font-size: 64px;
  font-family: "cyrillic";
  line-height: 1.5;
  color: #486f91;
  text-align: center;
  opacity: 0;
  animation: aniTB1 1.5s forwards;
  animation-duration: 2s;
  margin-bottom: 0;
  @keyframes aniTB1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Text = styled.p`
  color: #486f91;
  font-size: 17px;
  font-family: "montserrat";
  line-height: 1;
  font-weight: 400;
  opacity: 0;
  animation: anText1 3s forwards;
  text-align: center;

  @keyframes anText1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
`;

export const Rounds = styled.div`
  display: flex;
  height: 80px;

  @media (max-width: 680px) {
    height: 50px;
  }
`;

export const Round = styled.div`
  background-color: ${(props) => props.color};
  box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 50%;
  width: 80px;
  margin: 0 0 0 -15px;
  height: 80px;
  opacity: 0;

  animation: color 1.5s forwards;
  animation-duration: 2s;
  @keyframes color {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 2s;
  }
  &:nth-child(4) {
    animation-delay: 3s;
  }
  &:nth-child(5) {
    animation-delay: 4s;
  }
  &:nth-child(6) {
    animation-delay: 5s;
  }
  &:nth-child(7) {
    animation-delay: 6s;
  }
  &:nth-child(8) {
    animation-delay: 7s;
  }

  @media (max-width: 680px) {
    height: 50px;
    width: 50px;
  }
`;
