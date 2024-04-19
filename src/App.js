import "./App.css";
import FirstBlock from "./component/FirstBlock";
import SecondBlock from "./component/SecondBlock";
import ThirdBlock from "./component/ThirdBlock";
import FourthBlock from "./component/FourthBlock";
import FifthBlock from "./component/FifthBlock";
import SixBlock from "./component/SixBlock";
import Suggection from "./component/Suggection";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && (
        <div class='loaderdiv'>
          <span class='loader'></span>
        </div>
      )}
      <Container>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <FifthBlock />
        <Suggection />
        <SixBlock />
        <SevenBlock />
      </Container>
    </>
  );
}

export default App;
