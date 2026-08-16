function StatsCard({ label, value, description, type = 'default' }) {
    const styles = {
        default: {
            dot: 'bg-slate-400',
            glow: 'from-slate-500/10',
        },
        planning: {
            dot: 'bg-amber-400',
            glow: 'from-amber-500/10',
        },
        active: {
            dot: 'bg-blue-400',
            glow: 'from-blue-500/10',
        },
        completed: {
            dot: 'bg-emerald-400',
            glow: 'from-emerald-500/10',
        },
    }

    const currentStyle = styles[type]

    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/70 p-5 shadow-lg shadow-black/10 backdrop-blur">
            <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${currentStyle.glow} to-transparent`}
            />

            <div className="relative">
                <div className="flex items-center gap-2">
          <span
              className={`h-2 w-2 rounded-full ${currentStyle.dot}`}
          />

                    <p className="text-sm font-medium text-slate-400">
                        {label}
                    </p>
                </div>

                <p className="mt-4 text-3xl font-bold tracking-tight text-white">
                    {value}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default StatsCard