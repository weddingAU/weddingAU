import "./App.css";
// import BannerComponent from "./component/BannerComponent";
// import WeddingConvert from "./component/WeddingConvert";
// import Place from "./component/Place";
// import Colors from "./component/Colors";
// import Prog from "./component/Prog";
// import Form from "./component/Form";
// import Contacts from "./component/Contacts";
import FirstBlock from "./component/FirstBlock";
import SecondBlock from "./component/SecondBlock";
import ThirdBlock from "./component/ThirdBlock";
import FourthBlock from "./component/FourthBlock";
import FifthBlock from "./component/FifthBlock";
import SixBlock from "./component/SixBlock";
import SevenBlock from "./component/SevenBlock";
import "./font/sweet.ttf";
import "./font/montserrat.ttf";
import "./font/czizh.ttf";
import "./font/madelyn.otf";
import "./font/lemon.otf";
import "./font/exo.otf";

import "./font/maki.ttf";
import "./font/Oranienbaum.ttf";
import { Container } from "./styles";
import { useState, useEffect } from "react";

function App() {
  // const handleClick = () => {
  //   const context = new AudioContext();
  //   context.resume();
  // };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const context = new AudioContext();
      context.resume();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  document.addEventListener("click", musicPlay);
  function musicPlay() {
    document.getElementById("myaudio").volume = 0.05;

    document.getElementById("myaudio").play();
    document.removeEventListener("click", musicPlay);
  }
  return (
    <>
      {loading && (
        <div class='loaderdiv'>
          <span class='loader'></span>
        </div>
      )}
      <Container>
        <audio id='myaudio' volume='0.1' autoPlay loop>
          <source
            src='https://od.lk/s/N18yMzg4Nzc3Nzlf/%D0%AD%D0%B4-%D0%A8%D0%B8%D1%80%D0%B0%D0%BD-Photograph-_mp3cut.net_-_1_.ogg'
            type='audio/ogg'
          />
          <source
            src='https://od.lk/s/N18yMzg4Nzc3Nzhf/%D0%AD%D0%B4%20%D0%A8%D0%B8%D1%80%D0%B0%D0%BD%20-%20Photograph%20%28mp3cut.net%29%20%281%29.mp3'
            type='audio/mpeg'
          />
        </audio>
        <FirstBlock />
        <SecondBlock />
        <FourthBlock />
        <ThirdBlock />
        <FifthBlock />
        <SixBlock />
        <SevenBlock />

        {/* <BannerComponent />
      <WeddingConvert />
      <Prog />
      <Place />
      <Colors />
      <Form />
      <Contacts /> */}
      </Container>
    </>
  );
}

export default App;
