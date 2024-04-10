import {
  Container,
  NamesContainer,
  Dates,
  FirstName,
  Divider,
  Image,
  NamesAndImagesContainer,
  FullNames,
  SecondName,
} from "./styles";
import TimerComponent from "../TimerComponent";

export default function BannerComponent() {
  return (
    <Container>
      <NamesAndImagesContainer>
        <NamesContainer>
          <FirstName>E</FirstName>
          <Divider>/</Divider>
          <SecondName>K</SecondName>
        </NamesContainer>
        <Image />
      </NamesAndImagesContainer>
      <FullNames>EGOR & KATE</FullNames>
      <Dates>27.07.2024</Dates>
      <TimerComponent />
    </Container>
  );
}
