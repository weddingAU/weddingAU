import { Container, Bg, Info, Title, Text, Bg2, Rounds, Round } from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function FifthBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);
  const refColors = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);

  const [isLoadedText, setIsLoadedText] = useState(false);
  const [isLoadedColor, setIsLoadedColor] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);
  const isInViewportColor = useIsInViewport(refColors);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedColor && isInViewportColor) setIsLoadedColor(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewport1, isInViewportText, isInViewportColor]);

  return (
    <Container>
      <Bg />
      <Bg2 />
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Дресс - код
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            Мы будем очень рады, если ваши наряды будут соответствовать цветовой
            гамме нашей свадьбы
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
        {isLoadedColor ? (
          <Rounds key='loaded' ref={refColors}>
            <Round color={"#d3c7d8"} />
            <Round color={"#b297be"} />
            <Round color={"#c3a3bf"} />
            <Round color={"#907c9e"} />
            <Round color={"#FAE2FE"} />
            <Round color={"#F9B7E1"} />
            <Round color={"#F9DFF1"} />
            <Round color={"#F4E7E4"} />
          </Rounds>
        ) : (
          <Rounds key='hidden' ref={refColors}></Rounds>
        )}
      </Info>
    </Container>
  );
}
