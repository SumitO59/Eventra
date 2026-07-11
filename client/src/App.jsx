import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import EventDetails from "./pages/EventDetails/EventDetails";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["user", "admin"]}
          />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/events/create"
          element={<CreateEvent />}
        />

        <Route
          path="/events/edit/:id"
          element={<CreateEvent />}
        />
      </Route>

      {/* Unauthorized */}
      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />
    </Routes>
  );
}

export default App;