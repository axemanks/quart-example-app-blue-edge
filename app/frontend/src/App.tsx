// App.tsx
// Defines the main routing structure for the React frontend.
// - Sets up routes for the login page and the main app layout
// - The root (/) shows the LoginPage
// - /home renders the Layout (which includes the Navbar and wraps all main pages)
// - Home page is the default under /home
// - All unknown /home/* routes fall back to Home

import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import ReactPage from "./pages/ReactPage/ReactPage";
import NamePage from "./pages/NamePage/NamePage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="name" element={<NamePage />} />
      </Route>
      <Route path="*" element={<Home />} /> {/* Catch-all routes */}
    </Routes>
  );
}
