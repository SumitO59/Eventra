import clsx from "clsx";

const variants = {
    primary:
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-200",
    secondary:
        "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 focus:ring-slate-200",
    outline:
        "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-200",
};

function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    return (
        <button
            className={clsx(
                "inline-flex items-center justify-center",
                "rounded-xl",
                "px-6 py-3",
                "font-semibold tracking-tight",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-0.5 hover:shadow-lg",
                "active:translate-y-0 active:shadow-md",
                "focus:outline-none focus:ring-4",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;