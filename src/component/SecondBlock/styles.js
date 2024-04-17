import styled from "styled-components";
import Datetime from "./assets/24.png";

export const Container = styled.div`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "madelyn";
  width: 350px;
`;

export const Title = styled.p`
  font-size: 64px;
  font-family: "cyrillic";
  line-height: 1.5;
  color: #486f91;
  text-align: center;
  opacity: 0;
  margin: 0;
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
  font-size: 22px;
  font-weight: 400;
  color: #486f91;
  text-align: center;
  opacity: 0.8;
  animation: aniTB1 3s forwards;
`;

export const Date = styled.p`
  font-family: "cyrillic";
  font-size: 42px;
  font-weight: 400;
  color: #486f91;
  text-align: center;
  animation: aniTB1 3s forwards;
`;

export const Month = styled.p`
  font-family: "cyrillic";
  font-size: 64px;
  line-height: 1.5;
  color: #486f91;
  text-align: center;
  margin: 12px 0 0;
  animation: aniTB1 3s forwards;

  @media (max-width: 450px) {
    font-size: 42px;
  }
`;

export const Calendar = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 50%;
  position: relative;
  background-image: url(${Datetime});
  background-size: cover;
  background-repeat: no-repeat;
  animation: aniTB1 3s forwards;
  animation-delay: 1s;
  opacity: 0;
  margin-top: 32px;

  svg {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 165px;
    right: 96px;
    animation: aniHeart 3s infinite;

    @keyframes aniHeart {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  @media (max-width: 680px) {
    height: 400px;
    width: 400px;

    svg {
      bottom: 129px;
      right: 72px;
    }
  }

  @media (max-width: 450px) {
    height: 300px;
    margin-left: 0;
    width: 300px;

    svg {
      width: 24px;
      height: 24px;
      bottom: 100px;
      right: 57px;
    }
  }
`;

export const CalSceleton = styled.div`
  height: 350px;
  width: 350px;
`;
