function Card({
    children,
    className = "",
    hoverable = true,
}) {
    return (
        <div
            className={`
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        ${hoverable ? "hover:-translate-y-1 hover:shadow-xl" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
}

export default Card;