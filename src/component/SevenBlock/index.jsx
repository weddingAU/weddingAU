import {
  Container,
  Info,
  Text,
  Numbers,
  DatesBeforeWedding,
  Invite,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function SevenBlock() {
  const refText1 = useRef(null);
  const refText2 = useRef(null);

  const [isLoadedText1, setIsLoadedText1] = useState(false);
  const [isLoadedText2, setIsLoadedText2] = useState(false);

  const isInViewportText1 = useIsInViewport(refText1);
  const isInViewportText2 = useIsInViewport(refText2);

  var endDate = new Date("Aug 24, 2024 15:00:00").getTime();
  var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

  function decOfNum(number, titles) {
    if (!decCache[number])
      decCache[number] =
        number % 100 > 4 && number % 100 < 20
          ? 2
          : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
  }

  setInterval(function () {
    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      const sec = decOfNum(secs, ["СЕКУНДА", "СЕКУНДЫ", "СЕКУНД"]);
      const min = decOfNum(mins, ["МИНУТЫ", "МИНУТЫ", "МИНУТ"]);
      const h = decOfNum(hours, ["ЧАС", "ЧАСА", "ЧАСОВ"]);
      const d = decOfNum(days, ["ДЕНЬ", "ДНЯ", "ДНЕЙ"]);

      document.getElementById("timer-days").innerHTML =
        days + `<span class='label'>${d}</span>`;

      document.getElementById("timer-hours").innerHTML =
        ("0" + hours).slice(-2) + `<span class='label'>${h}</span>`;

      document.getElementById("timer-mins").innerHTML =
        ("0" + mins).slice(-2) + `<span class='label'>${min}</span>`;

      document.getElementById("timer-secs").innerHTML =
        ("0" + secs).slice(-2) + `<span class='label'>${sec}</span>`;
    } else {
      document.getElementById("timer").innerHTML = "The countdown is over!";
    }
  }, 1000);

  useEffect(() => {
    // 👇️ listen for changes
    if (!isLoadedText1 && isInViewportText1) setIsLoadedText1(true);
    if (!isLoadedText2 && isInViewportText2) setIsLoadedText2(true);
  }, [isInViewportText1, isInViewportText2]);

  return (
    <Container>
      {isInViewportText1 ? (
        <div key='infoHidden' ref={refText1}></div>
      ) : (
        <Info key='infoNew' ref={refText1}>
          <Text>
            <p>Ждем Вас через...</p>
            <DatesBeforeWedding>
              <Numbers id='timer-days' />
              <p>:</p>
              <Numbers id='timer-hours' />
              <p>:</p>
              <Numbers id='timer-mins' />
              <p>:</p>
              <Numbers id='timer-secs' />
            </DatesBeforeWedding>
          </Text>
        </Info>
      )}
      {isInViewportText2 ? (
        <div key='h' ref={refText2}></div>
      ) : (
        <Invite key='i' ref={refText2}>
          С ЛЮБОВЬЮ, АНДРЕЙ И ЮЛИЯ
        </Invite>
      )}
    </Container>
  );
}
