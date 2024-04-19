import {
  Container,
  Info,
  Text,
  Bg2,
  Numbers,
  DatesBeforeWedding,
  BottomImage,
  BottomImageLeft,
} from "./styles";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef, useEffect, useState } from "react";

export default function SevenBlock() {
  const refText1 = useRef(null);

  const [isLoadedText1, setIsLoadedText1] = useState(false);

  const isInViewportText1 = useIsInViewport(refText1);

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
  }, [isInViewportText1]);

  return (
    <Container>
      <Bg2 />
      <Info>
        <Text key='displayesText1' ref={refText1}>
          <p>Мы будем рады видеть Вас на нашем празднике!</p>
          <DatesBeforeWedding>
            <Numbers id='timer-days' />
            <Numbers id='timer-hours' />
            <Numbers id='timer-mins' />
            <Numbers id='timer-secs' />
          </DatesBeforeWedding>
          <BottomImage />
          <BottomImageLeft />
        </Text>
      </Info>
    </Container>
  );
}
