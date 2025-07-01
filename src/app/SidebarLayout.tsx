"use client";
import { useState } from "react";
import { HomeIcon, BookOpenIcon, DocumentTextIcon, AcademicCapIcon, ChartBarIcon, ClipboardIcon, CalendarIcon, FlagIcon, SparklesIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

const navItems = [
  { name: "Home", icon: HomeIcon, active: true },
  { name: "Modules", icon: BookOpenIcon },
  { name: "Vocab", icon: DocumentTextIcon },
  { name: "Reading", icon: DocumentTextIcon },
  { name: "Courses", icon: AcademicCapIcon },
  { name: "Tracker", icon: ChartBarIcon },
  { name: "Mock Exams", icon: ClipboardIcon },
  { name: "Study Plan", icon: CalendarIcon },
  { name: "Challenge", icon: FlagIcon },
];

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full h-14 flex items-center justify-between px-4 border-b-2 border-[var(--color-gold)] bg-white z-30 relative shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white border border-[var(--color-gold)] rounded-full flex items-center justify-center">
            <span className="text-base font-bold text-[var(--color-gold)]">L</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-lg font-bold tracking-wide text-[var(--color-gold)]">Aralzone</span>
        </div>
        <button
          className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors ml-auto md:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Bars3Icon className="h-6 w-6 text-[var(--color-gold)]" />
        </button>
      </header>
      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className="hidden md:flex flex-col bg-white shadow-md h-[calc(100vh-3.5rem)] border-r-2 border-[var(--color-gold)] w-48">
          <nav className="flex-1 flex flex-col gap-1 px-1 mt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg font-medium text-xs transition-colors
                  ${item.active ? 'bg-[var(--color-cream)] text-[var(--color-gold)]' : 'text-[#6D5BFC] hover:bg-[var(--color-cream)]'}
                `}
              >
                {item.icon && React.createElement(item.icon, { className: `h-3 w-3 ${item.active ? 'text-[var(--color-gold)]' : 'text-[#6D5BFC]'}` })}
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg font-medium text-xs mt-2 bg-[var(--color-purple)] text-white hover:bg-purple-400 transition-colors"
            >
              <SparklesIcon className="h-3 w-3 text-white" />
              Ask Prof. Coco!
            </a>
          </nav>
          <div className="mt-auto px-1 pb-3">
            <div className="flex items-center gap-2 border-t border-[var(--color-gold)] pt-2 mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="font-medium text-xs text-[#6D5BFC]">Profile</span>
            </div>
            <button className="w-full bg-[var(--color-gold)] hover:bg-yellow-500 text-white font-semibold py-1 rounded-lg text-xs transition-colors">Logout</button>
          </div>
        </aside>
        {/* Sidebar for mobile (overlay) */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
            <aside className="fixed z-50 top-14 left-0 flex flex-col bg-white shadow-md h-[calc(100vh-3.5rem)] border-r-2 border-[var(--color-gold)] w-48 animate-slide-in">
              <div className="flex items-center h-10 px-2 border-b-2 border-[var(--color-gold)] justify-end">
                <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                  <XMarkIcon className="h-4 w-4 text-[var(--color-gold)]" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-1 px-1 mt-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg font-medium text-xs transition-colors
                      ${item.active ? 'bg-[var(--color-cream)] text-[var(--color-gold)]' : 'text-[#6D5BFC] hover:bg-[var(--color-cream)]'}
                    `}
                  >
                    {item.icon && React.createElement(item.icon, { className: `h-3 w-3 ${item.active ? 'text-[var(--color-gold)]' : 'text-[#6D5BFC]'}` })}
                    {item.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg font-medium text-xs mt-2 bg-[var(--color-purple)] text-white hover:bg-purple-400 transition-colors"
                >
                  <SparklesIcon className="h-3 w-3 text-white" />
                  Ask Prof. Coco!
                </a>
              </nav>
              <div className="mt-auto px-1 pb-3">
                <div className="flex items-center gap-2 border-t border-[var(--color-gold)] pt-2 mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-medium text-xs text-[#6D5BFC]">Profile</span>
                </div>
                <button className="w-full bg-[var(--color-gold)] hover:bg-yellow-500 text-white font-semibold py-1 rounded-lg text-xs transition-colors">Logout</button>
              </div>
            </aside>
          </>
        )}
        {/* Main content */}
        <div className="flex-1 flex flex-col pt-4 md:pt-8 px-2 md:px-6">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 