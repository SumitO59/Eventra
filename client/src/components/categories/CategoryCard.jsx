import Card from "../ui/Card";

function CategoryCard({ icon, title, description }) {
    return (
        <Card
    hoverable
    className="h-full flex flex-col items-center text-center p-8"
>
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
        {icon}
    </div>

    <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {title}
    </h3>

    <p className="mt-3 text-slate-600 flex-grow">
        {description}
    </p>

    <button className="mt-6 font-medium text-blue-600 hover:text-blue-700 transition-colors">
        Explore →
    </button>
</Card>
    );
}

export default CategoryCard;