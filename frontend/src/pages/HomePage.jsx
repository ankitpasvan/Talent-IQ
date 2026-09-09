import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  ShieldCheckIcon,
  TerminalIcon,
  CpuIcon,
  ChevronRightIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-base-300 text-base-content selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] bg-accent/10 blur-3xl pointer-events-none -z-10" />

      {/* TOP NAVIGATION */}
      <header className="bg-base-100/80 backdrop-blur-xl border-b border-base-300/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="size-10 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
              <SparklesIcon className="size-5 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-tight">
                Talent IQ
              </span>
              <span className="text-[11px] text-base-content/60 font-medium -mt-1 hidden sm:inline">
                Live Technical Interview Platform
              </span>
            </div>
          </Link>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <Link
              to="/problems"
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-base-content/70 hover:text-base-content hover:bg-base-200 rounded-xl transition-colors"
            >
              Browse Problems
            </Link>

            <SignInButton mode="modal">
              <button className="group px-4 sm:px-5 py-2 sm:py-2.5 bg-primary hover:bg-primary/90 text-primary-content rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                <span>Sign In / Register</span>
                <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </SignInButton>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: PITCH & CTA */}
          <div className="lg:col-span-6 space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-base-100 border border-primary/20 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-base-content/80">Real-Time Interview Infrastructure</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Code together.{" "}
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Interview with confidence.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-base-content/75 leading-relaxed max-w-xl">
              Conduct high-fidelity technical interviews and collaborative pair programming sessions.
              Featuring synchronized Monaco code editing, multi-language test execution, low-latency video, and curated algorithm challenges.
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-100/70 border border-base-300 text-xs font-medium text-base-content/80">
                <CheckCircle2Icon className="size-3.5 text-success" />
                <span>WebRTC Video & Chat</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-100/70 border border-base-300 text-xs font-medium text-base-content/80">
                <CheckCircle2Icon className="size-3.5 text-success" />
                <span>Monaco Live Editor</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-100/70 border border-base-300 text-xs font-medium text-base-content/80">
                <CheckCircle2Icon className="size-3.5 text-success" />
                <span>Isolated Code Runner</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-md sm:btn-lg font-bold shadow-lg shadow-primary/25 rounded-2xl gap-2 cursor-pointer">
                  <span>Get Started Free</span>
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>

              <Link
                to="/problems"
                className="btn btn-outline btn-md sm:btn-lg rounded-2xl border-base-300 hover:border-primary/50 text-base-content/90 font-semibold gap-2"
              >
                <Code2Icon className="size-5" />
                <span>Explore Problems</span>
              </Link>
            </div>

            {/* Live Stats Bar */}
            <div className="pt-4 border-t border-base-300/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-primary">50+</div>
                <div className="text-xs text-base-content/60 font-medium">Curated Problems</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-secondary">&lt;50ms</div>
                <div className="text-xs text-base-content/60 font-medium">Editor Sync Latency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-accent">100%</div>
                <div className="text-xs text-base-content/60 font-medium">Sandboxed Execution</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE PLATFORM PREVIEW CANVAS */}
          <div className="lg:col-span-6 relative animate-float-slow">
            {/* Outer Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-60" />

            {/* Simulated Workspace Window */}
            <div className="relative bg-[#1e1e24] rounded-2xl border border-white/10 shadow-2xl overflow-hidden font-sans text-white text-xs">
              {/* Window Header */}
              <div className="bg-[#141418] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-[11px] text-gray-400">talent-iq-session • Two Sum</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-gray-300 font-mono">Live Call Connected</span>
                </div>
              </div>

              {/* Main Window Body: Code & Video Overlay */}
              <div className="p-4 bg-[#1a1a20] space-y-3 font-mono text-[12px] leading-relaxed">
                <div className="flex items-center justify-between text-[11px] text-gray-400 pb-2 border-b border-white/5 font-sans">
                  <span>solution.js</span>
                  <span className="text-primary font-semibold">JavaScript (Node 18)</span>
                </div>

                <pre className="text-gray-300 overflow-x-auto py-1">
                  <code>{`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`}</code>
                </pre>

                {/* Video Call Avatar Overlay Bar */}
                <div className="bg-[#24252f] rounded-xl p-3 flex items-center justify-between border border-white/10 font-sans">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="size-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white shadow-xs">
                        AP
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-emerald-500 rounded-full border-2 border-[#24252f]" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">Ankit (Host)</div>
                      <div className="text-[10px] text-gray-400">Speaking...</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    <CheckCircle2Icon className="size-3.5" />
                    <span className="font-semibold">All Tests Passed</span>
                  </div>
                </div>

                {/* Output Console Box */}
                <div className="bg-[#0f1015] rounded-xl p-3 font-mono text-[11px] border border-white/5 text-gray-300 space-y-1">
                  <div className="text-gray-500 text-[10px] uppercase font-sans font-bold">Execution Output:</div>
                  <div className="text-emerald-400">✓ Test Case 1: [0, 1]</div>
                  <div className="text-emerald-400">✓ Test Case 2: [1, 2]</div>
                  <div className="text-gray-400">Time: 38ms | Memory: 42.1 MB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-base-300">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <ZapIcon className="size-3.5" />
            <span>Engineered for Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">
            Everything you need for seamless technical interviews
          </h2>
          <p className="text-base-content/60 text-sm sm:text-base">
            Eliminate friction between video conferencing, disconnected code pads, and delayed feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card bg-base-100 border border-base-300 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-200 p-6 space-y-3">
            <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <VideoIcon className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-base-content">HD Video & Low-Latency Audio</h3>
            <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
              Crystal-clear WebRTC audio, video, and screen sharing powered by Stream infrastructure with automatic reconnection.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 border border-base-300 hover:border-secondary/40 shadow-xs hover:shadow-md transition-all duration-200 p-6 space-y-3">
            <div className="size-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
              <Code2Icon className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-base-content">Monaco Code Editor</h3>
            <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
              VSCode-grade editing experience with syntax highlighting, indentation guides, and quick language switching.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 border border-base-300 hover:border-accent/40 shadow-xs hover:shadow-md transition-all duration-200 p-6 space-y-3">
            <div className="size-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <TerminalIcon className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-base-content">Instant Test Execution</h3>
            <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
              Run your code securely inside isolated execution environments with instant test evaluation and stdout diagnostics.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-100 border border-base-300 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-200 p-6 space-y-3">
            <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <UsersIcon className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-base-content">1-on-1 Locked Rooms</h3>
            <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
              Interview rooms strictly enforce a 2-participant limit (Interviewer & Candidate), preventing eavesdropping or interruptions.
            </p>
          </div>

          {/* Card 5 */}
          <div className="card bg-base-100 border border-base-300 hover:border-secondary/40 shadow-xs hover:shadow-md transition-all duration-200 p-6 space-y-3">
            <div className="size-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
              <CpuIcon className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-base-content">Solo Practice Mode</h3>
            <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
              Prepare independently across curated algorithm problems with pre-configured starter templates and test harnesses.
            </p>
          </div>

          {/* Card 6 */}
          <div className="card bg-base-100 border border-base-300 hover:border-accent/40 shadow-xs hover:shadow-md transition-all duration-200 p-6 space-y-3">
            <div className="size-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <ShieldCheckIcon className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-base-content">Enterprise-Grade Security</h3>
            <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
              Secure authentication via Clerk, encrypted WebRTC media streams, and tokenized API authorizations.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-1 shadow-2xl">
          <div className="bg-base-100 rounded-[22px] px-8 py-12 sm:py-16 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight">
              Ready to elevate your engineering interviews?
            </h2>
            <p className="text-base-content/70 max-w-xl mx-auto text-sm sm:text-base">
              Join developers and hiring teams who use Talent IQ for seamless pair programming and technical assessments.
            </p>
            <div className="pt-2">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg rounded-2xl font-bold shadow-lg shadow-primary/20 gap-2 cursor-pointer">
                  <span>Start a Free Session Now</span>
                  <ChevronRightIcon className="size-5" />
                </button>
              </SignInButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-base-300 bg-base-100/60 py-8 text-center text-xs text-base-content/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <SparklesIcon className="size-4 text-primary" />
            <span>Talent IQ • High-Performance Technical Interviewing</span>
          </div>
          <div>© {new Date().getFullYear()} Talent IQ. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
