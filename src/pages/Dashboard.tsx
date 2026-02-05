import Navbar from '../components/Navbar';

export default function Dashboard() {
  // We will eventually get this data from our backend/local storage
  const stats = [
    { label: "Calories Consumed", value: "1,200", goal: "2,000 kcal", color: "text-orange-500" },
    { label: "Calories Burned", value: "450", goal: "600 kcal", color: "text-red-500" },
    { label: "Water Intake", value: "1.5L", goal: "3L", color: "text-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Daily Overview</h2>
        
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-sm text-slate-400">/ {stat.goal}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for the Graph */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 h-64 flex items-center justify-center">
          <p className="text-slate-500">Activity Graph Coming Soon (Phase 3)</p>
        </div>
      </main>
    </div>
  );
}