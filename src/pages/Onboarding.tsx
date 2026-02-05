import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("User Data:", data);
    // For now, we just save to local storage and go to dashboard
    localStorage.setItem('userProfile', JSON.stringify(data));
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Tell us about yourself</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input {...register("age")} type="number" className="w-full p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" placeholder="e.g. 21" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Weight (kg)</label>
              <input {...register("weight")} type="number" className="w-full p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" placeholder="70" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Height (cm)</label>
              <input {...register("height")} type="number" className="w-full p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" placeholder="175" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Fitness Goal</label>
            <select {...register("goal")} className="w-full p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Muscle</option>
            </select>
          </div>

          <button type="submit" className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all">
            Continue to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}