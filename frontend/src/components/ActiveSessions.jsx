import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
  Loader2Icon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="lg:col-span-2 card bg-base-100 border border-base-300 shadow-xs hover:shadow-sm transition-all duration-200 h-full">
      <div className="card-body p-5 sm:p-6">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-5">
          {/* TITLE AND ICON */}
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-xs">
              <ZapIcon className="size-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-base-content tracking-tight">
                Live Sessions
              </h2>
              <p className="text-xs text-base-content/60">
                Active collaborative rooms ready for interviewers & candidates
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold border border-success/20">
            <div className="size-2 bg-success rounded-full animate-pulse" />
            <span>{sessions.length} active</span>
          </div>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-base-content/50">
              <Loader2Icon className="size-8 animate-spin text-primary mb-2" />
              <span className="text-xs">Fetching live rooms...</span>
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="card bg-base-200/50 border border-base-300 hover:border-primary/40 hover:bg-base-200 transition-all duration-200 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5">
                  {/* LEFT SIDE */}
                  <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                    <div className="relative size-12 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shrink-0 shadow-xs">
                      <Code2Icon className="size-6 text-white" />
                      <div className="absolute -top-0.5 -right-0.5 size-3 bg-success rounded-full border-2 border-base-100" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold text-base text-base-content truncate">
                          {session.problem}
                        </h3>
                        <span
                          className={`badge badge-xs sm:badge-sm font-semibold ${getDifficultyBadgeClass(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty.slice(0, 1).toUpperCase() +
                            session.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5 text-xs text-base-content/70 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <CrownIcon className="size-3.5 text-amber-400" />
                          <span className="font-medium text-base-content/85">
                            {session.host?.name || "Host"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="size-3.5" />
                          <span>{session.participant ? "2/2 (Full)" : "1/2 (Waiting)"}</span>
                        </div>
                        {session.participant && !isUserInSession(session) ? (
                          <span className="px-2 py-0.5 rounded-md bg-error/10 text-error text-[10px] font-bold border border-error/20">
                            FULL
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md bg-success/10 text-success text-[10px] font-bold border border-success/20">
                            OPEN
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT ACTION BUTTON */}
                  <div className="shrink-0 self-end sm:self-center">
                    {session.participant && !isUserInSession(session) ? (
                      <button className="btn btn-disabled btn-sm rounded-xl text-xs">
                        In Progress
                      </button>
                    ) : (
                      <Link
                        to={`/session/${session._id}`}
                        className="btn btn-primary btn-sm rounded-xl text-xs font-semibold gap-2 shadow-xs cursor-pointer"
                      >
                        <span>{isUserInSession(session) ? "Rejoin Room" : "Join Room"}</span>
                        <ArrowRightIcon className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-4 bg-base-200/30 rounded-2xl border border-dashed border-base-300">
              <div className="size-16 mx-auto mb-3 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <SparklesIcon className="size-8" />
              </div>
              <p className="text-base font-bold text-base-content/80 mb-1">
                No active sessions right now
              </p>
              <p className="text-xs text-base-content/50 max-w-xs mx-auto">
                Launch a new session above to invite a peer or candidate to code together!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiveSessions;
