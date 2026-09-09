import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-base-100/90 backdrop-blur-lg border-b border-base-300/80 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="size-9 sm:size-10 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent flex items-center justify-center shadow-md">
            <SparklesIcon className="size-5 text-white" />
          </div>

          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-tight">
              Talent IQ
            </span>
            <span className="text-[11px] text-base-content/60 font-medium -mt-1 hidden sm:inline">
              Pair Programming Platform
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* PROBLEMS PAGE LINK */}
          <Link
            to="/problems"
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 ${
              isActive("/problems")
                ? "bg-primary text-primary-content shadow-xs"
                : "text-base-content/70 hover:text-base-content hover:bg-base-200/80"
            }`}
          >
            <BookOpenIcon className="size-4" />
            <span className="hidden sm:inline">Problems</span>
          </Link>

          {/* DASHBOARD PAGE LINK */}
          <Link
            to="/dashboard"
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 ${
              isActive("/dashboard")
                ? "bg-primary text-primary-content shadow-xs"
                : "text-base-content/70 hover:text-base-content hover:bg-base-200/80"
            }`}
          >
            <LayoutDashboardIcon className="size-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>

          <div className="pl-2 flex items-center border-l border-base-300 ml-1">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "size-8 sm:size-9 ring-2 ring-primary/20",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
