import { TrophyIcon, UsersIcon, ActivityIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
      {/* Active Count */}
      <div className="card bg-base-100 border border-base-300 hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-200">
        <div className="card-body p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center">
              <UsersIcon className="size-5 text-primary" />
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 text-success text-xs font-bold border border-success/20">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              <span>Live Now</span>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-base-content tracking-tight mb-1">
            {activeSessionsCount}
          </div>
          <div className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
            Active Rooms
          </div>
        </div>
      </div>

      {/* Total Sessions Count */}
      <div className="card bg-base-100 border border-base-300 hover:border-secondary/50 shadow-xs hover:shadow-md transition-all duration-200">
        <div className="card-body p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="size-11 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <TrophyIcon className="size-5 text-secondary" />
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-base-200 text-base-content/70 text-xs font-semibold">
              <ActivityIcon className="size-3 text-secondary" />
              <span>History</span>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-base-content tracking-tight mb-1">
            {recentSessionsCount}
          </div>
          <div className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
            Completed Sessions
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
