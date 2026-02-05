import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import { Camera, Utensils } from 'lucide-react';

export default function FoodLog() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      alert(`Image "${files[0].name}" selected!`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Food Log</h2>
            <p className="text-slate-500 dark:text-slate-400">Track your meals with AI</p>
          </div>
          
          <div className="flex gap-3">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileSelect} 
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              <Camera size={20} />
              <span>AI Snap</span>
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-16 border-2 border-dashed border-slate-200 dark:border-slate-800 text-center">
          <Utensils className="text-blue-600 mx-auto mb-6" size={36} />
          <h3 className="text-xl font-semibold mb-2">No meals logged today</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Snap a photo to get started.</p>
          <button 
            onClick={() => fileInputRef.current?.click()} 
            className="text-blue-600 font-medium hover:underline"
          >
            Try AI Snapping now →
          </button>
        </div>
      </main>
    </div>
  );
}