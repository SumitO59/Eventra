import { Link } from "react-router-dom";
import { Inbox } from "lucide-react";

export default function EmptyState({
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
      <Inbox className="mb-4 h-14 w-14 text-slate-400" />

      <h3 className="text-xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        {description}
      </p>

      {buttonText && buttonLink && (
        <Link
          to={buttonLink}
          className="mt-6 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}