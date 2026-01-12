'use client';

import React from 'react';

const Team = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Built by developers, for developers</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12">We’re a small team dedicated to building better productivity tools.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((member) => (
                        <div key={member} className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                            <h4 className="font-bold">Team Member {member}</h4>
                            <p className="text-sm text-gray-500">Co-founder</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;