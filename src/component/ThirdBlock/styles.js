import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  iframe {
    height: 0;
    animation: aniIframe 2s forwards;

    @keyframes aniIframe {
      0% {
        height: 0;
      }
      100% {
        height: 350px;
      }
    }
  }
  @media (max-width: 680px) {
    padding: 20px 0 80px;
  }
`;

export const Bg = styled.div`
  transform: rotate(203deg);
  top: 227px;
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
  font-family: "montserrat";
  width: 350px;
  z-index: 2;
`;

export const Title = styled.p`
  font-size: 64px;
  font-family: "cyrillic";
  line-height: 1.5;
  color: #486f91;
  text-align: center;
  opacity: 0;
  margin: 12px 0;

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
