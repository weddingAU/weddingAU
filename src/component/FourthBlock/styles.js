import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0;
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
  transform: rotate(203deg);
  bottom: 87px;
  position: absolute;
  right: calc(50% - 342px);
  background-size: 400px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.8;
  z-index: 1;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const Bg2 = styled.div`
  position: absolute;
  top: 0;
  left: 280px;
  background-size: 400px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.1;
  -webkit-animation: spin 36s linear infinite;
  -moz-animation: spin 36s linear infinite;
  animation: spin 36s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media (max-width: 680px) {
    background-size: 400px;
    height: 400px;
    width: 400px;
  }
`;

export const Bg3 = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  height: 400px;
  width: 400px;
  background-repeat: no-repeat;
  opacity: 0.1;
  -webkit-animation: spinan 56s linear infinite;
  -moz-animation: spinan 56s linear infinite;
  animation: spinan 56s linear infinite;

  @-moz-keyframes spinan {
    100% {
      -moz-transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes spinan {
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }
  @keyframes spinan {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @media (max-width: 680px) {
    background-size: 400px;
    height: 400px;
    width: 400px;
  }
`;

export const Bg4 = styled(Bg3)`
  bottom: 0;
  top: unset;
  right: 280px;
`;

export const Bg5 = styled(Bg3)`
  bottom: 0;
  top: unset;
  left: 80px;
`;

export const Info = styled.div`
  font-family: "madelyn";
  width: 350px;
  z-index: 2;
`;

export const Title = styled.p`
  font-size: 64px;
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
  font-size: 24px;
  font-weight: 400;
  color: #534f76;
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
  color: #534f76;
  font-family: "oranienbaum";
  font-size: 42px;
  text-shadow: 2px 2px 0px #fff;
  margin: 0;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #534f76;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Im = styled.img`
  width: 50px;
  height: 50px;
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
`;

export const Line = styled.div`
  position: relative;
  align-self: center;
  background-color: #534f76;
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
  background-color: #534f76;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Dot2 = styled.div`
  position: absolute;
  bottom: 0;
  right: -2px;
  background-color: #534f76;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Dot3 = styled.div`
  position: absolute;
  bottom: 180px;
  right: -2px;
  background-color: #534f76;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const Dot4 = styled.div`
  position: absolute;
  top: 150px;
  right: -2px;
  background-color: #534f76;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

export const TimingLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TimingLine2 = styled(TimingLine)`
  margin: 50% 0 0;
`;
