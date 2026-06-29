function SectionHeader({ title, subtitle }) {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {title}
            </h2>

            <p className="mt-4 text-lg text-slate-600">
                {subtitle}
            </p>
        </div>
    );
}

export default SectionHeader;