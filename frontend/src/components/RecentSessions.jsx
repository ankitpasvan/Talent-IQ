import { Code2, Clock, Users, Trophy, Loader2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-xs mt-8">
      <div className="card-body p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 rounded-xl bg-gradient-to-tr from-accent to-secondary flex items-center justify-center shadow-xs">
            <Clock className="size-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-base-content tracking-tight">
              Past Session History
            </h2>
            <p className="text-xs text-base-content/60">
              Your previously completed pair programming sessions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-base-content/50">
              <Loader2Icon className="size-8 animate-spin text-primary mb-2" />
              <span className="text-xs">Loading past sessions...</span>
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="card bg-base-200/50 border border-base-300 hover:border-accent/40 hover:bg-base-200 transition-all duration-200 rounded-2xl"
              >
                <div className="card-body p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="size-10 rounded-xl bg-gradient-to-tr from-primary/80 to-secondary/80 flex items-center justify-center shrink-0">
                      <Code2 className="size-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base text-base-content mb-1 truncate">
                        {session.problem}
                      </h3>
                      <span
                        className={`badge badge-xs sm:badge-sm font-semibold ${getDifficultyBadgeClass(
                          session.difficulty
                        )}`}
                      >
                        {session.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-base-content/70 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="size-3.5" />
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="size-3.5" />
                      <span>
                        {session.participant ? "2 participants" : "1 participant"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-base-300 text-xs">
                    <span className="font-semibold text-[11px] uppercase tracking-wider text-base-content/50">
                      Completed
                    </span>
                    <span className="text-base-content/50">
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 px-4 bg-base-200/30 rounded-2xl border border-dashed border-base-300">
              <div className="size-14 mx-auto mb-3 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <Trophy className="size-7" />
              </div>
              <p className="text-base font-bold text-base-content/80 mb-1">
                No past sessions recorded yet
              </p>
              <p className="text-xs text-base-content/50 max-w-xs mx-auto">
                Completed interview rooms will be archived and displayed here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;
