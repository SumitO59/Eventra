import { Link } from "react-router-dom";
import {
  CalendarDays,
  ShieldCheck,
  Users,
  LayoutDashboard,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <CalendarDays className="h-10 w-10 text-indigo-600" />,
      title: "Event Management",
      description:
        "Create, update, and manage events with an intuitive and responsive interface.",
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: "Easy Registration",
      description:
        "Participants can browse upcoming events and register in just a few clicks.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-indigo-600" />,
      title: "Secure Authentication",
      description:
        "JWT-based authentication with protected routes and role-based access control.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-indigo-600" />,
      title: "Personal Dashboard",
      description:
        "Track created events, registrations, and manage everything from one place.",
    },
  ];

  const techStack = [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Axios",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            About Eventra
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Eventra is a full-stack event management platform built using the
            MERN stack. It enables organizers to create and manage events while
            allowing participants to discover and register for them through a
            modern, secure, and responsive web application.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-20 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Managing events should be simple, efficient, and accessible.
            Eventra streamlines the entire process—from event creation and
            participant registration to organizer dashboards—providing a smooth
            experience for both organizers and attendees.
          </p>
        </section>

        {/* Features */}
        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Key Features
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {feature.icon}

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-20 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Built With
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-indigo-600 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to explore events?
          </h2>

          <p className="mt-4 text-indigo-100">
            Discover upcoming events or create your own and start building your
            community with Eventra.
          </p>

          <Link
            to="/events"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-slate-100"
          >
            Explore Events
          </Link>
        </section>
      </div>
    </main>
  );
}