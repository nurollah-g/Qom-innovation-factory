import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResearchProject from "./pages/ResearchProject";
import Subtopic from "./pages/Subtopic/Subtopic";
import Ecosys from "./pages/Ecosys";
import About from "./pages/About";
import Services from "./pages/services";
import { NotificationsProvider } from "./context/NotificationsContext";
import Notifications from "./pages/Notifications";
import NotFoundPage from "./pages/Notfound";
import MemberUnits from "./pages/joinedCompanies";

import "./App.css";

export default function App() {
  return (
    <NotificationsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/:id" element={<Subtopic />} />
          <Route path="/research" element={<ResearchProject />} />
          <Route path="/Ecosys" element={<Ecosys />} />
          <Route path="/service" element={<Services />} />
          <Route path="/MemberUnits" element={<MemberUnits />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </NotificationsProvider>
  );
}
