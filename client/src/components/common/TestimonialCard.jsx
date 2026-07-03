import Card from "../ui/Card";
import { Star } from "lucide-react";

function TestimonialCard({
  name,
  role,
  college,
  review,
  image,
}) {
  return (
    <Card className="p-8 h-full">
      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-current"
          />
        ))}
      </div>

      <p className="mt-5 text-gray-600 leading-relaxed">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-900">
            {name}
          </h4>

          <p className="text-sm text-gray-500">
            {role}
          </p>

          <p className="text-sm text-violet-600">
            {college}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;