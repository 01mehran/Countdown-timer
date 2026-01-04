import { Route, Routes } from "react-router-dom";
import Timer from "./pages/GregorianNewYear/Timer";
import NowruzTimer from "./pages/Nowruz/Timer";
import CustomCountDown from "./pages/CustomCountdown/CustomCountDown";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Timer />} />
      <Route path="/Nowruz" element={<NowruzTimer />} />
      <Route path="/customCountdown" element={<CustomCountDown />} />
    </Routes>
  );
}

export default App;
