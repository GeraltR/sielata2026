import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FestivalPage from "./pages/FestivalPage";
import WeatherPage from "./pages/WeatherPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festiwal" element={<FestivalPage />} />
        <Route path="/pogoda" element={<WeatherPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;