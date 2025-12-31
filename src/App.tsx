import { Route, Routes } from "react-router-dom";
import Timer from "./pages/GregorianNewYear/Timer";
import NowruzTimer from "./pages/Nowruz/Timer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Timer />} />
      <Route path="/Nowruz" element={<NowruzTimer />} />
    </Routes>
  );
}

export default App;
