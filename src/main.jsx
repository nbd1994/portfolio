import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleProject from './SingleProject.jsx';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<SingleProject />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
