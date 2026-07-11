import {
  Mail,
  Globe,
  MapPin,
  UserRound,
} from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="h-8 w-8 text-indigo-600" />,
      title: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
  {
  icon: <Globe className="h-8 w-8 text-indigo-600" />,
  title: "GitHub",
  value: "github.com/yourusername",
  href: "https://github.com/yourusername",
},
 {
  icon: <UserRound className="h-8 w-8 text-indigo-600" />,
  title: "LinkedIn",
  value: "linkedin.com/in/yourusername",
  href: "https://linkedin.com/in/yourusername",
},
    {
      icon: <MapPin className="h-8 w-8 text-indigo-600" />,
      title: "Location",
      value: "Jammu & Kashmir, India",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Contact
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Have feedback, suggestions, or want to collaborate?
            I'd be happy to connect.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {contacts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {item.icon}

                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h2>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-slate-600 transition hover:text-indigo-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-slate-600">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Form */}
        <section className="mt-20 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Send a Message
          </h2>

          <p className="mt-3 text-slate-600">
            This contact form is a UI demonstration for Eventra v1.0.
            Backend email integration will be added in a future version.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}