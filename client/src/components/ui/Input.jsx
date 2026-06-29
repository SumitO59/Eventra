function Input({
    id,
    label,
    type = "text",
    error,
    ...props
}) {
    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            <input
                id={id}
                type={type}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                {...props}
            />

            {error && (
                <p className="mt-1 text-5m text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

export default Input;