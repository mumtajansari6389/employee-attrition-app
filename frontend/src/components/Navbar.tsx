import { Moon, Sun, TrendingUp, Users, Zap } from "lucide-react";

type Page = "prediction" | "dashboard" | "employees";

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({
  currentPage,
  onPageChange,
  darkMode,
  onToggleDarkMode,
}: NavbarProps) {
  const isActive = (page: Page) => currentPage === page;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-primary-500 p-2">
               <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-indigo-400">
              AttritionPred
            </h1>
          </div>

          <div className="flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => onPageChange("prediction")}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                isActive("prediction")
                  ? "bg-white text-primary-600 shadow-sm dark:bg-gray-700 dark:text-primary-400"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              <Zap className="h-4 w-4" />
              Predict
            </button>

            <button
              onClick={() => onPageChange("dashboard")}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                isActive("dashboard")
                  ? "bg-white text-primary-600 shadow-sm dark:bg-gray-700 dark:text-primary-400"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              Dashboard
            </button>

            <button
              onClick={() => onPageChange("employees")}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                isActive("employees")
                  ? "bg-white text-primary-600 shadow-sm dark:bg-gray-700 dark:text-primary-400"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              <Users className="h-4 w-4" />
              Employees
            </button>
          </div>

          <button
            onClick={onToggleDarkMode}
            className="rounded-xl p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
