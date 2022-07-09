import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ExamplePage from './pages/ExamplePage';
import CelebratePage from './pages/CelebratePage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import Develop from "./pages/Develop";
import './App.css';
import Footer from "./components/design/template/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* pages associated with auth */}
          <Route path="/" element={<HomePage />} />
          <Route path="/celebrate/:id" element={<CelebratePage />} />
          <Route path="/example/:id" element={<ExamplePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route paht="/signup" element={<SignupPage />} />
          {/* need authorization */}
          <Route path="/edit" element={<p>hi</p>} />;
          <Route path="/edit/:id" element={<EditPage />} />;

          {/* for devleopment  */}
          <Route path="/dev" element={<Develop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
