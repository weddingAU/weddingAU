import styled from "styled-components";
import bg from "./assets/bg.jpeg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${bg});
  background-size: cover;
  gap: 32px;
  height: 100vh;
  height: 100dvh;
`;

export const Data = styled.h2`
  opacity: 0.4;
  height: 20px;
  padding: 40px 0 0;
  margin: 0;
  animation: aniData 1.5s forwards;
  color: #534f75;
  font-size: 20px;
  font-family: "maki";
  line-height: 1;
  font-weight: 400;
  letter-spacing: 1.5px;
  animation-delay: 3.5s;

  @keyframes aniData {
    0% {
      opacity: 0.4;
      padding: 40px 0 0;
    }
    100% {
      opacity: 0.8;
      padding: 0 0 40px;
    }
  }
`;

export const Names = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "cyrillic";
  gap: 8px;
  margin: 40px 0;
  font-size: 78px;
  color: #486f91;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  line-height: 149%;
  align-items: center;
  justify-content: center;
  background-color: #fffff5;

  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 48px;
  }

  @media (max-width: 680px) {
    width: 305px;
    height: 305px;
  }
`;
