import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-base-100/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-base-300 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="size-10 sm:size-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-md shrink-0">
                <SparklesIcon className="size-5 sm:size-6 text-white" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-primary">
                  Dashboard Overview
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-base-content tracking-tight">
                  Welcome back, {user?.firstName || user?.username || "Developer"}!
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-base-content/65 max-w-lg mt-1 sm:ml-15">
              Ready to conduct an interview or practice collaborative algorithms in real time?
            </p>
          </div>

          <button
            onClick={onCreateSession}
            className="group px-6 py-3.5 bg-primary hover:bg-primary/90 text-primary-content rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer shrink-0 font-bold text-sm sm:text-base"
          >
            <ZapIcon className="size-5" />
            <span>Create Session</span>
            <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;

