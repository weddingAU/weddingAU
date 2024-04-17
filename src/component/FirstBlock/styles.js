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

export const Circle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 40px 0;
  color: #486f91;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #fffff5;
`;

export const Names = styled(Circle)`
  position: absolute;
  top: 15%;
  left: 20%;
  font-family: "cyrillic";
  gap: 8px;
  font-size: 78px;
  width: 350px;
  height: 350px;
  line-height: 149%;
  animation: animate 1.5s forwards;
  animation-delay: 3s;

  @keyframes animate {
    0% {
      opacity: 0;
      left: 0;
    }
    100% {
      opacity: 1;
      left: 20%;
    }
  }
  p {
    padding: 0;
    margin: 0;
    font-family: "montserrat";
    font-size: 18px;
    line-height: 18px;
  }
  b {
    font-weight: 300;
  }
  @media (max-width: 680px) {
    width: 305px;
    height: 305px;
    left: 2%;
    animation: animateMobile 1.5s forwards;

    @keyframes animateMobile {
      0% {
        opacity: 0;
        left: 0;
      }
      100% {
        opacity: 1;
        left: 2%;
      }
    }
  }
`;

export const Invite = styled(Circle)`
  position: absolute;
  font-family: "montserrat";
  bottom: 0;
  right: 20%;
  gap: 8px;
  font-size: 18px;
  width: 200px;
  line-height: 189%;
  height: 200px;
  animation: animateRight 1.5s forwards;
  animation-delay: 3s;
  text-transform: uppercase;

  @keyframes animateRight {
    0% {
      opacity: 0;
      right: 0;
    }
    100% {
      opacity: 1;
      right: 20%;
    }
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 48px;
  }

  @media (max-width: 680px) {
    right: 2%;
    animation: animateRightMobile 1.5s forwards;

    @keyframes animateRightMobile {
      0% {
        opacity: 0;
        right: 0;
      }
      100% {
        opacity: 1;
        right: 2%;
      }
    }
  }
`;
