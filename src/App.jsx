import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleVacancy from "./Pages/SingleVacancy/SingleVacancy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy/:id" element={<SingleVacancy />} />
      </Routes>
    </>
  );
}

export default App;
