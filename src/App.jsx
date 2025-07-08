import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthForm from "./components/AuthForm/AuthForm";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/auth";
  const hideFooter = location.pathname === "/auth";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
