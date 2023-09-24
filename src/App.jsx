import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleVacancy from "./Pages/SingleVacancy/SingleVacancy";
import Vacancies from "./Pages/Vacancies/Vacancies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy/:id" element={<SingleVacancy />} />
        <Route path="/vacancies" element={<Vacancies />} />
      </Routes>
    </>
  );
}

export default App;
