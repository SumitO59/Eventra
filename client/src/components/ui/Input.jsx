import clsx from "clsx";

function Input({ className = "", ...props }) {
    return (
        <input
            className={clsx(
                "w-full",
                "rounded-xl",
                "border border-slate-200",
                "bg-white",
                "px-4 py-3",
                "text-slate-800",
                "placeholder:text-slate-400",
                "shadow-sm",
                "transition-all duration-300",
                "focus:border-indigo-500",
                "focus:outline-none",
                "focus:ring-4",
                "focus:ring-indigo-100",
                className
            )}
            {...props}
        />
    );
}

export default Input;