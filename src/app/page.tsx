import Link from 'next/link';

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to Todo App
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A simple and efficient way to manage your tasks. Stay organized and never miss a deadline.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/todos"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started
          </Link>
          <Link href="/profile" className="text-sm font-semibold leading-6 text-gray-900">
            View Profile <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900">Task Management</h2>
          <p className="mt-2 text-gray-600">
            Create, edit, and organize your tasks efficiently. Mark tasks as completed when done.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900">Task Filtering</h2>
          <p className="mt-2 text-gray-600">
            Filter tasks by status to focus on what matters most. View all, active, or completed tasks.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900">User Profile</h2>
          <p className="mt-2 text-gray-600">
            View and manage your profile information. Personalize your todo experience.
          </p>
        </div>
      </div>
    </div>
  );
}
