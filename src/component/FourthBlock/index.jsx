import {
  Container,
  Info,
  Title,
  Text,
  Bg,
  Times,
  Timing,
  Time,
  Circle,
  Im,
  Times2,
  Line,
  Dot,
  Dot2,
  Dot3,
  Dot4,
  TimingLine,
  TimingLine2,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";
import closh from "./assets/closh.png";
import cheers from "./assets/cheers.png";
import cake from "./assets/cake.png";
import confetti from "./assets/confetti.png";
export default function FourthBlock() {
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
            Программа
            <br /> дня
          </Title>
        ) : (
          <Title key='hiddenTitle' ref={ref1}>
            <br /> <br /> <br />
          </Title>
        )}
        {isLoadedText ? (
          <>
            <Timing key='hText' ref={refText}>
              <TimingLine>
                <Times>
                  <Circle>
                    <Im src={cheers} />
                  </Circle>
                  <Time>15:00</Time>
                  <Text>
                    Сбор
                    <br />
                    гостей
                  </Text>
                </Times>
                <Times>
                  <Circle>
                    <Im src={cake} />
                  </Circle>
                  <Time>20:30</Time>
                  <Text>
                    Шедевр <br />
                    кондитерского
                    <br />
                    искусства
                  </Text>
                </Times>
              </TimingLine>
              <Line>
                <Dot></Dot>
                <Dot2></Dot2>
                <Dot3 />
                <Dot4 />
              </Line>
              <TimingLine2>
                <Times2>
                  <Circle>
                    <Im src={closh} />
                  </Circle>
                  <Time>15:30</Time>
                  <Text>
                     Начало
                    <br />
                    свадебного
                    <br />
                    банкета
                  </Text>
                </Times2>

                <Times2>
                  <Circle>
                    <Im src={confetti} />
                  </Circle>
                  <Time>21:30</Time>
                  <Text>Финал</Text>
                </Times2>
              </TimingLine2>
            </Timing>
          </>
        ) : (
          <Text key='hiddenText' ref={refText}>
            <br /> <br /> <br /> <br />
          </Text>
        )}
      </Info>
    </Container>
  );
}
