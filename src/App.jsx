import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
