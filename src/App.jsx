import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Daswborde from "./Padges/daseborde/Daswborde";
import Sidebar from "./Padges/Sidebare/Sidebar";
import Catgroyprodect from "./Padges/Catgroyprodect/Catgroyprodect";
import Footanddrink from "./Padges/Footanddrink/Footanddrink";

function Layout() {
  const location = useLocation(); // ✅ Correct way to get the current path
  const showSidebar = location.pathname !== "/login"; // ✅ Hide sidebar on "/login"

  return (
    <div className="App col-12 d-flex">
      {showSidebar && <Sidebar />}  {/* ✅ Sidebar only appears if NOT on login page */}
      <Routes>
        <Route path="/" element={<Daswborde />} />
        <Route path="/order/:catname" element={<Catgroyprodect/>} />
        <Route path="/order" element={<Footanddrink/>} />
        <Route path="/Messages" element={<h1> 55</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
        <Route path="/bills" element={<h1>Bills</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
