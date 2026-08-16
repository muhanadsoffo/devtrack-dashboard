function ProjectCard({ project, onEdit, onDelete }) {
    const statusStyles = {
        Planning:
            'border-amber-500/20 bg-amber-500/10 text-amber-300',
        'In Progress':
            'border-blue-500/20 bg-blue-500/10 text-blue-300',
        Completed:
            'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
    }

    const priorityStyles = {
        Low: 'text-slate-400',
        Medium: 'text-amber-300',
        High: 'text-red-400',
    }

    function formatDate(date) {
        if (!date) return 'No deadline'

        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(new Date(`${date}T00:00:00`))
    }

    return (
        <article className="group flex h-full flex-col rounded-2xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900">

            <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-white">
                        {project.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-violet-400">
                        {project.technology}
                    </p>
                </div>

                <span
                    className={`shrink-0 text-xs font-semibold ${priorityStyles[project.priority]}`}
                >
          {project.priority}
        </span>

            </div>

            <p className="mt-5 line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-400">
                {project.description}
            </p>

            <div className="mt-6 flex items-center justify-between gap-3">

        <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
                statusStyles[project.status]
            }`}
        >
          {project.status}
        </span>

                <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wider text-slate-600">
                        Deadline
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                        {formatDate(project.deadline)}
                    </p>
                </div>

            </div>

            <div className="mt-6 border-t border-white/5 pt-4">
                <div className="flex gap-3">

                    <button
                        type="button"
                        onClick={() => onEdit(project)}
                        className="flex-1 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        onClick={() => onDelete(project.id)}
                        className="flex-1 rounded-xl border border-red-500/10 bg-red-500/5 px-4 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-500/20 hover:bg-red-500/10"
                    >
                        Delete
                    </button>

                </div>
            </div>

        </article>
    )
}

export default ProjectCard