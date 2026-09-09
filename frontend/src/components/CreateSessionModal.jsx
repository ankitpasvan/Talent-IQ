import { useState, useMemo } from "react";
import {
  Code2Icon,
  Loader2Icon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  CheckCircle2Icon,
  XIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { PROBLEMS } from "../data/problems";
import { getDifficultyBadgeClass } from "../lib/utils";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = useMemo(() => Object.values(PROBLEMS), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesSearch =
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.category?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty =
        selectedDifficulty === "all" ||
        problem.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      return matchesSearch && matchesDifficulty;
    });
  }, [problems, searchQuery, selectedDifficulty]);

  const selectedProblemData = useMemo(() => {
    return problems.find((p) => p.title === roomConfig.problem);
  }, [problems, roomConfig.problem]);

  const handleSelectProblem = (problem) => {
    setRoomConfig({
      problem: problem.title,
      difficulty: problem.difficulty,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-base-100 rounded-3xl shadow-2xl border border-base-300 overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* HEADER */}
        <div className="px-6 py-5 border-b border-base-300 flex items-center justify-between bg-base-200/40">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-md">
              <SparklesIcon className="size-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-base-content">
                Create Interview Session
              </h2>
              <p className="text-xs text-base-content/60">
                Select a problem to start real-time coding with video & chat
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost text-base-content/70 hover:text-base-content"
          >
            <XIcon className="size-5" />
          </button>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="p-4 sm:p-6 border-b border-base-300 bg-base-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-base-content/40" />
            <input
              type="text"
              placeholder="Search problems or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-sm sm:input-md w-full pl-10 bg-base-200/60 border-base-300 focus:border-primary transition-colors text-sm rounded-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-base-content/40 hover:text-base-content"
              >
                Clear
              </button>
            )}
          </div>

          {/* Difficulty Filter Pills */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {["all", "easy", "medium", "hard"].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedDifficulty === diff
                    ? "bg-primary text-primary-content shadow-sm scale-105"
                    : "bg-base-200 text-base-content/70 hover:bg-base-300"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT AREA: GRID & PREVIEW */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* PROBLEM LIST (left / main) */}
          <div className={`${selectedProblemData ? "lg:col-span-7" : "lg:col-span-12"} space-y-3`}>
            {filteredProblems.length === 0 ? (
              <div className="text-center py-12 bg-base-200/30 rounded-2xl border border-dashed border-base-300">
                <SlidersHorizontalIcon className="size-8 mx-auto text-base-content/30 mb-2" />
                <p className="font-semibold text-base-content/80 text-sm">
                  No problems match your criteria
                </p>
                <p className="text-xs text-base-content/50 mt-1">
                  Try adjusting your search query or difficulty filter
                </p>
              </div>
            ) : (
              filteredProblems.map((problem) => {
                const isSelected = roomConfig.problem === problem.title;
                return (
                  <div
                    key={problem.id}
                    onClick={() => handleSelectProblem(problem)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 relative group ${
                      isSelected
                        ? "bg-primary/5 border-primary shadow-sm ring-1 ring-primary/40"
                        : "bg-base-200/50 border-base-300 hover:border-primary/40 hover:bg-base-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-bold text-base text-base-content group-hover:text-primary transition-colors">
                            {problem.title}
                          </span>
                          <span
                            className={`badge badge-xs sm:badge-sm font-semibold ${getDifficultyBadgeClass(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-base-content/60 mb-1.5">
                          {problem.category}
                        </p>
                        <p className="text-xs text-base-content/70 line-clamp-2">
                          {problem.description?.text}
                        </p>
                      </div>

                      <div className="pt-0.5">
                        {isSelected ? (
                          <CheckCircle2Icon className="size-5 text-primary fill-primary/20" />
                        ) : (
                          <div className="size-5 rounded-full border-2 border-base-content/20 group-hover:border-primary/50 transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* PROBLEM PREVIEW PANEL (right, visible when problem selected) */}
          {selectedProblemData && (
            <div className="lg:col-span-5 bg-base-200/50 rounded-2xl p-5 border border-base-300 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Selected Problem
                  </span>
                  <span
                    className={`badge badge-sm font-semibold ${getDifficultyBadgeClass(
                      selectedProblemData.difficulty
                    )}`}
                  >
                    {selectedProblemData.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-base-content">
                  {selectedProblemData.title}
                </h3>
                <p className="text-xs text-base-content/60 font-medium">
                  {selectedProblemData.category}
                </p>

                <div className="p-3 bg-base-100 rounded-xl text-xs text-base-content/80 leading-relaxed border border-base-300">
                  {selectedProblemData.description?.text}
                </div>

                {selectedProblemData.examples?.[0] && (
                  <div className="space-y-1 text-xs">
                    <span className="font-semibold text-base-content/70">Sample Input:</span>
                    <pre className="p-2 bg-base-300/60 rounded-lg font-mono text-[11px] overflow-x-auto text-base-content/90">
                      {selectedProblemData.examples[0].input}
                    </pre>
                  </div>
                )}
              </div>

              {/* Session features summary */}
              <div className="pt-3 border-t border-base-300 space-y-2 text-xs text-base-content/70">
                <div className="flex items-center gap-2">
                  <UsersIcon className="size-3.5 text-primary" />
                  <span>1-on-1 collaborative workspace (Host + Guest)</span>
                </div>
                <div className="flex items-center gap-2">
                  <VideoIcon className="size-3.5 text-secondary" />
                  <span>Real-time HD video call & low-latency audio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2Icon className="size-3.5 text-accent" />
                  <span>Monaco Editor + Piston code runner</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MODAL ACTION BAR */}
        <div className="px-6 py-4 border-t border-base-300 bg-base-100 flex items-center justify-between">
          <div className="text-xs text-base-content/60">
            {roomConfig.problem ? (
              <span>
                Selected: <strong className="text-base-content">{roomConfig.problem}</strong>
              </span>
            ) : (
              <span>Select a coding problem to proceed</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              className="btn btn-sm btn-ghost font-medium"
              onClick={onClose}
              disabled={isCreating}
            >
              Cancel
            </button>

            <button
              className="btn btn-sm btn-primary gap-2 font-semibold shadow-md min-w-[140px]"
              onClick={onCreateRoom}
              disabled={isCreating || !roomConfig.problem}
            >
              {isCreating ? (
                <>
                  <Loader2Icon className="size-4 animate-spin" />
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <PlusIcon className="size-4" />
                  <span>Create Session</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSessionModal;
