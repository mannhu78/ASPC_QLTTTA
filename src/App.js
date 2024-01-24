import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './page/HomePage/HomePage.js';
import SelectCourse from './page/SelectCourse/SelectCourse.js';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/select-course" element={<SelectCourse />} />

      {/* TODO */}
      {/* <Route path="/confirm-course" element={<ConfirmCourse />} /> */}
    </Routes>
  </BrowserRouter>
  ) 
}

export default App;
