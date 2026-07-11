import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";
import MyEventsSection from "../../components/dashboard/MyEventsSection";
import MyRegistrationsSection from "../../components/dashboard/MyRegistrationsSection";
import RecentActivity from "../../components/dashboard/RecentActivity";


import {
  getMyEvents,
  getMyRegistrations,
  deleteEvent,
  cancelRegistration,
} from "../../services/eventService";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    eventsCreated: 0,
    registrations: 0,
    upcomingEvents: 0,
  });

  const [myEvents, setMyEvents] = useState([]);
  const [myRegistrations, setMyRegistrations] = useState([]);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const [eventsResponse, registrationsResponse] =
        await Promise.all([
          getMyEvents(),
          getMyRegistrations(),
        ]);

      const events = eventsResponse.events || [];
      const registrations =
        registrationsResponse.events || [];

      setMyEvents(events);
      setMyRegistrations(registrations);

      const today = new Date();

      const upcomingEvents = events.filter(
        (event) => new Date(event.date) >= today
      ).length;

      setStats({
        eventsCreated: events.length,
        registrations: registrations.length,
        upcomingEvents,
      });
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const handleDelete = async (eventId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    try {
      await deleteEvent(eventId);

      await loadDashboard();
    } catch (error) {
      console.error(error);
      alert("Failed to delete event.");
    }
  };

  const handleCancelRegistration = async (eventId) => {
    const confirmed = window.confirm(
      "Cancel your registration for this event?"
    );

    if (!confirmed) return;

    try {
      await cancelRegistration(eventId);

      await loadDashboard();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to cancel registration."
      );
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <p className="text-slate-600">
            Loading dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <DashboardHeader />

        <StatsGrid
          eventsCreated={stats.eventsCreated}
          registrations={stats.registrations}
          upcomingEvents={stats.upcomingEvents}
        />

        <QuickActions />

        <MyEventsSection
          events={myEvents}
          currentUser={user}
          onDelete={handleDelete}
        />

        <MyRegistrationsSection
          events={myRegistrations}
          onCancelRegistration={handleCancelRegistration}
        />

        <RecentActivity />
      </div>
    </main>
  );
}