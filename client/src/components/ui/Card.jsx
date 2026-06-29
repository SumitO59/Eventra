import clsx from "clsx";

function Card({
    children,
    className = "",
    hoverable = true,
}) {
    return (
        <div
            className={clsx(
                "rounded-2xl",
                "border border-slate-100",
                "bg-white",
                "shadow-sm",
                hoverable &&
                    "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Card;