import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";

function StepCard({
  icon: Icon,
  title,
  description,
  isLast = false,
}) {
  return (
    <div className="relative flex items-center">
      <Card className="flex-1 text-center p-8">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
          <Icon className="h-8 w-8 text-violet-600" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          {description}
        </p>
      </Card>

      {!isLast && (
        <ArrowRight className="absolute -right-7 hidden h-6 w-6 text-violet-400 lg:block" />
      )}
    </div>
  );
}

export default StepCard;