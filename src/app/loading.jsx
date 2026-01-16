'use client'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 overflow-hidden">
      <div className="flex flex-col items-center gap-10">
        
        {/* AuraMart Premium Loader Logo Area */}
        <div className="relative flex items-center justify-center">
          {/* Outer Glowing Orbit */}
          <div className="absolute w-28 h-28 rounded-full border-t-4 border-l-4 border-blue-600 animate-spin-slow"></div>
          <div className="absolute w-28 h-28 rounded-full border-b-4 border-r-4 border-blue-400/30 animate-spin-slow"></div>
          
          {/* Central Logo Symbol (Abstract Shopping Bag) */}
          <div className="relative z-10 flex flex-col items-center animate-pulse-slow">
            <div className="w-12 h-10 border-4 border-blue-600 rounded-t-2xl mb-[-4px]"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl shadow-lg shadow-blue-500/40 flex items-center justify-center">
              <span className="text-white font-black text-2xl tracking-tighter">A</span>
            </div>
          </div>
        </div>

        {/* Text & Progress Section */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-black tracking-widest text-slate-800 dark:text-white uppercase italic">
            Aura<span className="text-blue-600">Mart</span>
          </h2>
          
          {/* Modern Loading Track */}
          <div className="w-48 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full animate-loading-slide"></div>
          </div>

          <p className="text-slate-400 text-[10px] font-bold tracking-[0.3em] animate-fade uppercase">
            Curating your experience
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.1); filter: brightness(1.2); }
        }
        @keyframes loading-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-loading-slide {
          animation: loading-slide 1.5s infinite linear;
        }
        .animate-fade {
          animation: fade 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}