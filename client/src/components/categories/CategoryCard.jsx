import Card from "../ui/Card";

function CategoryCard({ icon, title, description }) {
    return (
        <Card
            hoverable
            className="
                group
                flex
                h-full
                flex-col
                items-center
                rounded-2xl
                p-6
                text-center
                transition-all
                duration-300
                sm:p-8
            "
        >
            <div
                className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-3xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            >
                {icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-3 flex-grow text-sm leading-7 text-slate-600 sm:text-base">
                {description}
            </p>

            <button
                className="
                    mt-6
                    font-medium
                    text-blue-600
                    transition-all
                    duration-300
                    hover:text-blue-700
                    group-hover:translate-x-1
                "
            >
                Explore →
            </button>
        </Card>
    );
}

export default CategoryCard;