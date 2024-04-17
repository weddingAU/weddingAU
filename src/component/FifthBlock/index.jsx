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
            Будем крайне признательны, если Ваши наряды будут соответствовать
            цветовой гамме нашей свадьбы
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
        {isLoadedColor ? (
          <Rounds key='loaded' ref={refColors}>
            <Round color={"#fdcecd"} />
            <Round color={"#f9bcbc"} />
            <Round color={"#a7b8e1"} />
            <Round color={"#7c9ad5"} />
            <Round color={"#fff6db"} />
          </Rounds>
        ) : (
          <Rounds key='hidden' ref={refColors}></Rounds>
        )}
      </Info>
    </Container>
  );
}
