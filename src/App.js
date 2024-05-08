import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './Components/Form'; // Import ContactUsForm component
import About from "./Components/About"
const App = () => {
  return (
    <BrowserRouter>
      <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link> {/* Link to the Contact Us page */}
            </li>
          </ul>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Form />} /> {/* Render ContactUsForm for /contact-us route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

