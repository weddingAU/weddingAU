import { Container, Info, Title, Text } from "./styles";

import { Bg } from "../FourthBlock/styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function SixBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);

  const [isLoadedText, setIsLoadedText] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewport1, isInViewportText]);

  return (
    <Container>
      <Bg />
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Анкета гостя
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br />
          </Title>
        )}
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            ОТВЕТЬТЕ, ПОЖАЛУЙСТА, НА НЕСКОЛЬКО ВОПРОСОВ НИЖЕ
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br />
          </Text>
        )}
        <iframe
          src='https://forms.yandex.ru/u/6624e4c6d04688625f6de1eb/?iframe=1'
          frameborder='0'
          name='ya-form-6624e4c6d04688625f6de1eb'
          height='948'
          width='370'
          scrolling='no'
        ></iframe>
      </Info>
    </Container>
  );
}
