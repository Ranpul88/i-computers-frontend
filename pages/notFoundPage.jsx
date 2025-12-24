import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center gap-4 p-4">
        <div className="flex flex-col justify-center items-center gap-4 bg-white p-10 rounded-2xl shadow-lg">
            <h1 className="text-6xl font-bold text-accent">404</h1>
            <h2 className="text-2xl font-semibold text-accent">Page Not Found</h2>
            <p className="text-center text-secondary">The page you are looking for does not exist or has been moved.</p>
        </div>     
    </div>
  )
}
