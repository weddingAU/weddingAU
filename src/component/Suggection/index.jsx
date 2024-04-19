import { Container, Bg, Info, Title, Text } from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function Suggection() {
  const ref1 = useRef(null);
  const refText = useRef(null);
  const refText2 = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);

  const [isLoadedText, setIsLoadedText] = useState(false);
  const [isLoadedText2, setIsLoadedText2] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);
  const isInViewportText2 = useIsInViewport(refText2);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedText2 && isInViewportText2) setIsLoadedText2(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewport1, isInViewportText, isInViewportText2]);

  return (
    <Container>
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Пожелания
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}
        <Bg />

        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            Мы не хотим утруждать Вас выбором подарка, поэтому будем рады вкладу
            в бюджет нашей молодой семьи
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
        <Bg />

        {isLoadedText2 ? (
          <Text key='displayesText2' ref={refText2}>
            Так же просим Вас в качестве альтернативы цветам дарить бутылку
            любимого напитка
          </Text>
        ) : (
          <Text key='hiddenText2' ref={refText2}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
      </Info>
    </Container>
  );
}
