import styled from "styled-components";
import lavander from "./assets/3.png";
import leaf from "../FirstBlock/assets/leaf.png";
import lavanderTop from "../FirstBlock/assets/lavander-top.png";

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
  background-image: url(${leaf});
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
  color: #534f76;
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
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin: 30px 0;
  background-color: #c3a3bf;
  border-radius: 10px;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
`;

export const Numbers = styled.div`
  align-items: center;
  color: black;
  color: #534f76;
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
  background-image: url(${lavanderTop});
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
  background-image: url(${lavanderTop});
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
