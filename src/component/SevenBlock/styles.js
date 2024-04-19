import styled from "styled-components";
import bg from "../FirstBlock/assets/bg.jpeg";

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

export const Info = styled(Circle)`
  position: absolute;
  top: 0%;
  left: 20%;
  font-family: "cyrillic";
  gap: 8px;
  font-size: 72px;
  width: 450px;
  height: 450px;
  line-height: 149%;
  animation: animate 1.5s forwards;
  animation-delay: 1s;
  opacity: 0;

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
    font-family: "cyrillic";
    font-size: 68px;
    margin: 0;
  }
  b {
    font-weight: 300;
  }
  @media (max-width: 680px) {
    width: 350px;
    height: 350px;
    left: 2%;
    animation: animateMobile 1.5s forwards;

    p {
      font-size: 45px;
    }

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
  @media (max-width: 400px) {
    width: 300px;
    height: 300px;

    p {
      font-size: 45px;
    }
  }
`;

export const Text = styled.p`
  font-family: "czizh";
  color: #486f91;
  font-size: 22px;
  line-height: 1;
  font-weight: 400;
  opacity: 0;
  animation: anText1 3s forwards;
  text-align: center;
  position: relative;

  @keyframes anText1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Btn = styled.button`
  background-color: #486f91;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "montserrat";
  font-size: 22px;
  font-weight: 500;
  height: 42px;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 32px;

  :hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }

  @media (min-width: 768px) {
    padding: 0 2.6rem;
  }
`;

export const Numbers = styled.div`
  align-items: center;
  color: black;
  color: #486f91;
  font-family: "montserrat";
  display: flex;
  flex-direction: column;
  font-size: 52px;
  height: 100%;
  justify-content: center;
  gap: 4px;

  span {
    font-size: 14px;
    margin-top: 12px;
  }

  @media (max-width: 680px) {
    font-size: 32px;
    span {
      font-size: 14px;
      margin-top: 8px;
    }
  }
  @media (max-width: 400px) {
    font-size: 28px;
    span {
      font-size: 12px;
      margin-top: 4px;
    }
  }
`;

export const DatesBeforeWedding = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 0;

  p {
    font-size: 72px;
    margin: 0 8px;
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
  animation-delay: 1s;
  text-transform: uppercase;
  opacity: 0;

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
