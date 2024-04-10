import styled from "styled-components";
import flower from "./assets/flower.png";

export const Container = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
`;

export const NavigationBar = styled.div`
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  gap: 10px 32px;
  top: 0;
  padding: 20px;
  width: calc(100% - 40px);
  flex-wrap: wrap;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const NamesAndImagesContainer = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  gap: 12px;
  animation-name: example;
  animation-duration: 4s;
  height: 250px;
  width: 250px;
`;

export const Image = styled.div`
  position: absolute;
  right: 0;
  height: 250px;
  width: 150px;
  rotate: 20deg;
  background-image: url(${flower});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
`;

export const NamesContainer = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation-name: example;
  animation-duration: 4s;
  height: 250px;
  width: 180px;

  svg {
    width: 40px;
    height: 40px;
  }

  @keyframes example {
    0% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const FullNames = styled.p`
  color: black;
  font-family: "oranienbaum";
  font-size: 42px;
  text-shadow: 2px 2px 0px #fff;
  margin: 0;
`;

export const Dates = styled.p`
  color: rgba(99, 34, 64, 0.8);
  font-family: "oranienbaum";
  font-size: 42px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  margin: -8px 0 0;
  padding-left: 130px;
`;

export const PersonName = styled.p`
  color: rgba(99, 34, 64, 1);
  font-family: "oranienbaum";
  padding: 5px 10px;
  font-size: 120px;
  text-shadow: 2px 2px 0px rgba(99, 34, 64, 0.2);
  margin: 0;
`;

export const FirstName = styled(PersonName)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Divider = styled(PersonName)`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

export const SecondName = styled(PersonName)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
