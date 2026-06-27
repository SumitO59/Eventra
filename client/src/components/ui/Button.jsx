function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition duration-200 focus:outline-none";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",

    secondary:
      "bg-slate-800 text-white hover:bg-slate-900",

    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;