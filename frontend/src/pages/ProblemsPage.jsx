import { useState, useMemo } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import {
  ChevronRightIcon,
  Code2Icon,
  SearchIcon,
  SparklesIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const allProblems = useMemo(() => Object.values(PROBLEMS), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const easyProblemsCount = allProblems.filter((p) => p.difficulty.toLowerCase() === "easy").length;
  const mediumProblemsCount = allProblems.filter((p) => p.difficulty.toLowerCase() === "medium").length;
  const hardProblemsCount = allProblems.filter((p) => p.difficulty.toLowerCase() === "hard").length;

  const filteredProblems = useMemo(() => {
    return allProblems.filter((problem) => {
      const matchesSearch =
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.description?.text?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty =
        selectedDifficulty === "all" ||
        problem.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      return matchesSearch && matchesDifficulty;
    });
  }, [allProblems, searchQuery, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* HEADER & CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 border border-primary/20">
              <SparklesIcon className="size-3.5" />
              <span>Curated Problem Library</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">
              Practice Problems
            </h1>
            <p className="text-base-content/60 text-sm mt-1">
              Master algorithms and data structures with real-time test case execution
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-base-content/40" />
            <input
              type="text"
              placeholder="Search problems, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-sm sm:input-md w-full pl-10 bg-base-100 border-base-300 focus:border-primary rounded-xl text-sm shadow-sm"
            />
          </div>
        </div>

        {/* DIFFICULTY FILTER BAR */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { key: "all", label: "All Problems", count: allProblems.length },
            { key: "easy", label: "Easy", count: easyProblemsCount },
            { key: "medium", label: "Medium", count: mediumProblemsCount },
            { key: "hard", label: "Hard", count: hardProblemsCount },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedDifficulty(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                selectedDifficulty === tab.key
                  ? "bg-primary text-primary-content shadow-sm"
                  : "bg-base-100 text-base-content/70 hover:bg-base-200 border border-base-300/60"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  selectedDifficulty === tab.key
                    ? "bg-white/20 text-white"
                    : "bg-base-200 text-base-content/60"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* PROBLEMS LIST */}
        {filteredProblems.length === 0 ? (
          <div className="text-center py-16 bg-base-100 rounded-3xl border border-dashed border-base-300 shadow-sm">
            <SlidersHorizontalIcon className="size-10 mx-auto text-base-content/30 mb-3" />
            <p className="font-bold text-base-content/80 text-base">No problems found</p>
            <p className="text-xs text-base-content/50 mt-1">
              Try adjusting your search keywords or active filters
            </p>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredProblems.map((problem) => (
              <Link
                key={problem.id}
                to={`/problem/${problem.id}`}
                className="group card bg-base-100 border border-base-300 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="card-body p-5">
                  <div className="flex items-center justify-between gap-4">
                    {/* LEFT SIDE */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-colors">
                          <Code2Icon className="size-5 sm:size-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                            <h2 className="text-base sm:text-lg font-bold text-base-content group-hover:text-primary transition-colors">
                              {problem.title}
                            </h2>
                            <span
                              className={`badge badge-sm font-semibold ${getDifficultyBadgeClass(
                                problem.difficulty
                              )}`}
                            >
                              {problem.difficulty}
                            </span>
                          </div>
                          <p className="text-xs font-medium text-base-content/60">
                            {problem.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-base-content/75 line-clamp-2 pl-0 sm:pl-15">
                        {problem.description.text}
                      </p>
                    </div>

                    {/* RIGHT SIDE CTA */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-base-200 group-hover:bg-primary group-hover:text-primary-content text-primary transition-all text-xs font-semibold shrink-0">
                      <span>Solve</span>
                      <ChevronRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* STATS OVERVIEW FOOTER */}
        <div className="mt-10 card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-base-300">
              <div className="p-2">
                <div className="text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-1">
                  Total Library
                </div>
                <div className="text-2xl font-black text-primary">{allProblems.length}</div>
              </div>

              <div className="p-2">
                <div className="text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-1">
                  Easy Level
                </div>
                <div className="text-2xl font-black text-success">{easyProblemsCount}</div>
              </div>

              <div className="p-2">
                <div className="text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-1">
                  Medium Level
                </div>
                <div className="text-2xl font-black text-warning">{mediumProblemsCount}</div>
              </div>

              <div className="p-2">
                <div className="text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-1">
                  Hard Level
                </div>
                <div className="text-2xl font-black text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
