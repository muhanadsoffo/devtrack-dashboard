import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectForm from '../components/ProjectForm'
import StatsCard from '../components/StatsCard'
import useLocalStorage from '../hooks/useLocalStorage'

const initialProjects = [
    {
        id: '1',
        title: 'Portfolio Website',
        description:
            'Redesign and improve my personal developer portfolio.',
        technology: 'React',
        status: 'In Progress',
        priority: 'High',
        deadline: '2026-09-10',
    },
    {
        id: '2',
        title: 'Mobile Finance App',
        description:
            'Build a mobile application for tracking personal expenses.',
        technology: 'Flutter',
        status: 'Planning',
        priority: 'Medium',
        deadline: '2026-10-01',
    },
    {
        id: '3',
        title: 'REST API',
        description:
            'Create a REST API for managing tasks and projects.',
        technology: 'Express.js',
        status: 'Completed',
        priority: 'Low',
        deadline: '2026-08-01',
    },
]

function Dashboard() {
    const [projects, setProjects] = useLocalStorage(
        'devtrack-projects',
        initialProjects
    )

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [editingProject, setEditingProject] = useState(null)

    const totalProjects = projects.length

    const planningProjects = projects.filter(
        (project) => project.status === 'Planning'
    ).length

    const activeProjects = projects.filter(
        (project) => project.status === 'In Progress'
    ).length

    const completedProjects = projects.filter(
        (project) => project.status === 'Completed'
    ).length

    function handleSaveProject(project) {
        if (editingProject) {
            setProjects((currentProjects) =>
                currentProjects.map((currentProject) =>
                    currentProject.id === project.id
                        ? project
                        : currentProject
                )
            )
        } else {
            setProjects((currentProjects) => [
                ...currentProjects,
                project,
            ])
        }
    }

    function handleEditProject(project) {
        setEditingProject(project)
        setIsFormOpen(true)
    }

    function handleDeleteProject(projectId) {
        const confirmed = window.confirm(
            'Are you sure you want to delete this project?'
        )

        if (!confirmed) return

        setProjects((currentProjects) =>
            currentProjects.filter(
                (project) => project.id !== projectId
            )
        )
    }

    function handleCloseForm() {
        setIsFormOpen(false)
        setEditingProject(null)
    }

    function handleOpenAddForm() {
        setEditingProject(null)
        setIsFormOpen(true)
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

            {/* Background decoration */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

                {/* Navigation */}
                <nav className="mb-14 flex items-center justify-between">
                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg font-bold shadow-lg shadow-violet-500/20">
                            D
                        </div>

                        <div>
                            <p className="font-semibold tracking-tight text-white">
                                DevTrack
                            </p>

                            <p className="text-xs text-slate-500">
                                Project workspace
                            </p>
                        </div>

                    </div>

                    <div className="rounded-full border border-white/5 bg-slate-900/70 px-4 py-2 text-xs text-slate-400">
                        Local workspace
                    </div>
                </nav>

                {/* Hero */}
                <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                        <p className="mb-2 text-sm font-medium text-violet-400">
                            Dashboard
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Your development projects
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                            Keep your projects organized, track their progress
                            and manage everything from one place.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleOpenAddForm}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 active:scale-[0.98]"
                    >
                        <span className="text-lg leading-none">+</span>
                        Add Project
                    </button>

                </header>

                {/* Statistics */}
                <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <StatsCard
                        label="Total Projects"
                        value={totalProjects}
                        description="All projects"
                    />

                    <StatsCard
                        label="Planning"
                        value={planningProjects}
                        description="Not started yet"
                        type="planning"
                    />

                    <StatsCard
                        label="In Progress"
                        value={activeProjects}
                        description="Currently active"
                        type="active"
                    />

                    <StatsCard
                        label="Completed"
                        value={completedProjects}
                        description="Finished projects"
                        type="completed"
                    />

                </section>

                {/* Projects */}
                <section className="mt-14">

                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <h2 className="text-xl font-semibold tracking-tight">
                                Projects
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                {projects.length === 1
                                    ? '1 project in your workspace'
                                    : `${projects.length} projects in your workspace`}
                            </p>
                        </div>
                    </div>

                    {projects.length > 0 ? (
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onEdit={handleEditProject}
                                    onDelete={handleDeleteProject}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 px-6 py-20 text-center">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-2xl">
                                +
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-white">
                                No projects yet
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Create your first project to get started.
                            </p>

                            <button
                                type="button"
                                onClick={handleOpenAddForm}
                                className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                            >
                                Create Project
                            </button>

                        </div>
                    )}

                </section>

                <footer className="mt-16 border-t border-white/5 py-6 text-center text-xs text-slate-600">
                    DevTrack · Project Management Dashboard
                </footer>

            </div>

            {isFormOpen && (
                <ProjectForm
                    projectToEdit={editingProject}
                    onSaveProject={handleSaveProject}
                    onClose={handleCloseForm}
                />
            )}

        </main>
    )
}

export default Dashboard