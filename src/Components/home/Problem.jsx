'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react'; 

const problems = [
  "Manually tracking items in messy spreadsheets.",
  "Losing track of expiration dates or stock levels.",
  "No synchronization between your devices.",
];

const solutions = [
  "Automated dashboard with real-time updates.",
  "Smart notifications and low-stock alerts.",
  "Cloud sync: Access your data anywhere, anytime.",
];

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Stop struggling with outdated tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            We built a better way to manage your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/20"
          >
            <h3 className="text-xl font-semibold text-red-600 mb-6">The Old Way</h3>
            <ul className="space-y-4">
              {problems.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20"
          >
            <h3 className="text-xl font-semibold text-emerald-600 mb-6">The Smart Way</h3>
            <ul className="space-y-4">
              {solutions.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default problems