import React from 'react';

export function PortfolioHero() {
  return (
    <div className="mb-16">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
          <span className="text-sm">Case Studies & Projects</span>
        </div>
        <h1 className="text-4xl lg:text-5xl mb-6 text-slate-900">
          Design Work That <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Drives Results</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          A collection of user-centered design work spanning enterprise applications, AI integration, sustainability, and emerging technologies — all focused on measurable impact.
        </p>
      </div>
    </div>
  );
}