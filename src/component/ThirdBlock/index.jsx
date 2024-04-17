import { Container, Bg, Info, Title, Text, Bg2, Btn } from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function ThirdBlock() {
  const ref1 = useRef(null);
  const refText = useRef(null);

  const [isLoadedTitle, setIsLoadedTitle] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  const [isLoadedText, setIsLoadedText] = useState(false);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewportText = useIsInViewport(refText);

  const handleOpenMap = () => {
    setOpenMap(!openMap);
  };
  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedTitle && isInViewport1) setIsLoadedTitle(true);
    if (!isLoadedText && isInViewportText) setIsLoadedText(true);
  }, [isInViewport1, isInViewportText]);

  return (
    <Container>
      <Bg />
      <Bg2 />
      <Info>
        {isLoadedTitle ? (
          <Title key='displayesTitle' ref={ref1}>
            Место
            <br /> проведения
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br /> <br /> <br />
          </Title>
        )}
        {isLoadedText ? (
          <Text key='displayesText' ref={refText}>
            Торжество будет проходить на площадке "Огни Саранска" (проспект 70
            лет Октября, 169 В)
          </Text>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
        {openMap && (
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A657b576d31b55cf73886aaf95da16afc43b067cf0374fdb7f6c03b252bb61258&amp;source=constructor'
            width='350'
            height='350'
            frameborder='0'
          ></iframe>
        )}
        <Btn onClick={handleOpenMap}>ТУТ БУДЕТ КАРТАА</Btn>
      </Info>
    </Container>
  );
}
