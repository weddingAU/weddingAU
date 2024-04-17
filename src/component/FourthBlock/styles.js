import styled from "styled-components";
import bg from "../FirstBlock/assets/bg.jpeg";

export const Container = styled.div`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Bg = styled.div`
  position: absolute;
  background-image: url(${bg});
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.2;
  z-index: 1;
`;

export const Info = styled.div`
  font-family: "montserrat";
  width: 350px;
  z-index: 2;
`;

export const Title = styled.p`
  font-size: 64px;
  margin-top: 0;
  line-height: 1.5;
  font-family: "cyrillic";
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
  font-family: "montserrat";
  font-size: 18px;
  font-weight: 400;
  color: #486f91;
  text-align: center;
  opacity: 0.8;
  animation: aniTB1 3s forwards;
`;

export const Times = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 120px;
`;

export const Times2 = styled(Times)`
  align-self: flex-end;
`;

export const Time = styled.span`
  color: #486f91;
  font-family: "montserrat";
  font-size: 42px;
  text-shadow: 2px 2px 0px #fff;
  margin: 0;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffff5;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Im = styled.img`
  width: 50px;
  height: 50px;
  filter: invert(42%) sepia(5%) saturate(3839%) hue-rotate(167deg)
    brightness(95%) contrast(88%);
`;

export const Timing = styled.div`
  width: 300px;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  gap: 12px;
  height: 600px;
  animation: aniTB1 2s forwards;
  animation-delay: 1s;
  opacity: 0;
  margin-bottom: 32px;
`;

export const Line = styled.div`
  position: relative;
  align-self: center;
  background-color: #486f91;
  min-width: 1px;
  height: 0;
  align-self: flex-start;
  margin-top: 50px;
  animation: aniLine 2.5s forwards;

  @keyframes aniLine {
    0% {
      height: 0;
    }
    100% {
      height: 470px;
    }
  }
`;

export const Dot = styled.div`
  position: absolute;
  top: 0;
  right: -2px;
  background-color: #486f91;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Dot2 = styled.div`
  position: absolute;
  bottom: 0;
  right: -2px;
  background-color: #486f91;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Dot3 = styled.div`
  position: absolute;
  bottom: 180px;
  right: -2px;
  background-color: #486f91;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Dot4 = styled.div`
  position: absolute;
  top: 150px;
  right: -2px;
  background-color: #486f91;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const TimingLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

export const TimingLine2 = styled(TimingLine)`
  margin: 50% 0 0;
`;
