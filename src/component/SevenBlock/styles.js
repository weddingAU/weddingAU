import styled from "styled-components";
import lavander from "./assets/3.png";

export const Container = styled.div`
  padding: 80px 0 0;
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
  transform: rotate(90deg);
  background-image: url(${lavander});
  background-size: 200px;
  height: 200px;
  width: 200px;
  background-repeat: no-repeat;
  z-index: 1;
`;

export const Bg2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-size: 600px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.1;

  @media (max-width: 680px) {
    background-size: 400px;
    height: 400px;
    width: 400px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "madelyn";
  width: 350px;
  z-index: 2;
`;

export const Title = styled.p`
  font-size: 74px;
  line-height: 52px;
  color: #486f91;
  text-align: center;
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
  font-family: "czizh";
  color: #534f75;
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
  font-family: "oranienbaum";
  display: flex;
  flex-direction: column;
  font-size: 44px;
  height: 100%;
  justify-content: center;
  gap: 4px;
  width: 80px;

  span {
    font-size: 14px;
  }
`;

export const DatesBeforeWedding = styled.div`
  display: flex;
  margin: 32px 0 0;
  padding-bottom: 120px;
`;

export const Images = styled.div`
  height: 120px;
  width: 100%;
`;

export const BottomImage = styled.div`
  position: absolute;
  bottom: -108px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(188deg);
  background-size: 300px;
  height: 300px;
  width: 300px;
  right: -140px;
`;

export const BottomImageLeft = styled.div`
  position: absolute;
  bottom: -108px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(188deg);
  background-size: 300px;
  height: 300px;
  width: 300px;
  left: -140px;
  transform: scale(1, -1);
`;
