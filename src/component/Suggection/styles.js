import styled from "styled-components";
import flower from "./flower.png";
export const Container = styled.div`
  padding: 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Bg = styled.div`
  background-image: url(${flower});
  height: 100px;
  width: 142px;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.8;
  z-index: 1;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "montserrat";
  width: 350px;
  z-index: 2;
`;

export const Title = styled.p`
  font-size: 64px;
  line-height: 52px;
  font-family: "cyrillic";
  line-height: 1.5;
  color: #486f91;
  text-align: center;
  margin: 12px 0;
  opacity: 0;

  animation: aniTB1 1.5s forwards;
  animation-duration: 2s;
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
  font-family: "montserrat";
  font-size: 18px;
  font-weight: 400;
  color: #486f91;
  text-align: center;
  opacity: 0.8;
  animation: aniTB1 3s forwards;
`;
