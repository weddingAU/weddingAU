import styled from "styled-components";
import lavander from "./assets/lavander-circle.png";
import lavanderTop from "./assets/lavander-top.png";
import leaf from "./assets/leaf.png";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  gap: 32px;
  height: calc(100% - 80px);
`;

export const MainImage = styled.div`
  position: absolute;
  width: 100%;
  top: -40px;
  height: calc(100% + 80px);
  background-image: url(${lavander});
  gap: 32px;
  background-position: center;
  background-size: 480px;
  background-repeat: no-repeat;
  animation: aniCircle 3s forwards;
  animation-delay: 3s;

  @keyframes aniCircle {
    0% {
      background-size: 480px;
    }
    100% {
      background-size: 430px;
    }
  }
`;

export const Play = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid #534f75;
  animation: aniPllay 1.5s forwards, aniPllayCircle 1.5s infinite;
  animation-delay: 5s;
  opacity: 0;
  svg {
    cursor: pointer;
    bottom: 0px;
    height: 40px;
    width: 40px;
  }

  @keyframes aniPllay {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.8;
    }
  }

  @keyframes aniPllayCircle {
    0% {
      height: 60px;
      width: 60px;
      margin-bottom: 0;
    }
    50% {
      height: 70px;
      margin-bottom: -5px;
      width: 70px;
    }
    100% {
      height: 60px;
      width: 60px;
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h2`
  opacity: 0.4;
  height: 40px;
  padding: 40px 0 0;
  margin: 0;
  animation: ani 1.5s forwards;
  animation-delay: 3s;
  color: #534f75;
  font-size: 17px;
  font-family: "maki";
  line-height: 1;
  font-weight: 400;
  letter-spacing: 1.5px;

  @keyframes ani {
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
  font-family: "madelyn";
  height: 280px;
  gap: 8px;
  margin: 40px 0;
  font-size: 64px;
  color: #534f76;
  width: 100%;

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
  }
`;

export const Man = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  line-height: 82px;
  font-size: 98px;
  animation: aniMan 1.5s forwards;
  animation-delay: 3.005s;

  @keyframes aniMan {
    0% {
      left: 0%;
    }
    100% {
      left: calc(50% - 60px);
    }
  }
`;

export const Women = styled.p`
  position: absolute;
  bottom: 40px;
  right: 0;
  line-height: 82px;
  font-size: 92px;
  animation: aniWomen 2s forwards;
  animation-delay: 3.001s;

  @keyframes aniWomen {
    0% {
      right: 0%;
    }
    100% {
      right: calc(50% - 120px);
    }
  }
`;

export const LavanderTop = styled.div`
  position: absolute;
  background-image: url(${lavanderTop});
  width: 290px;
  height: 290px;
  right: calc(50% - 390px);
  top: -208px;
  background-size: contain;
  opacity: 0.6;

  animation: aniTop 3s forwards;
  animation-delay: 3s;

  @keyframes aniTop {
    0% {
      top: -208px;
    }
    100% {
      top: -108px;
    }
  }
`;

export const LavanderTopLeft = styled.div`
  position: absolute;
  background-image: url(${lavanderTop});
  width: 290px;
  height: 290px;
  left: calc(50% - 390px);
  top: -108px;
  background-size: contain;
  transform: scale(-1, 1);
  opacity: 0.6;

  animation: aniTop 3s forwards;
  animation-delay: 3s;
`;

export const Leaf = styled.div`
  position: absolute;
  background-image: url(${leaf});
  width: 273px;
  height: 273px;
  top: -108px;
  background-size: contain;
  opacity: 0.2;

  animation: aniTop 3s forwards;
  animation-delay: 3s;
`;
