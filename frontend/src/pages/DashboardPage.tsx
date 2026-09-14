import { BarChart3, Users, AlertCircle, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

const departmentData = [
  { name: "Sales", value: 45 },
  { name: "R&D", value: 65 },
  { name: "HR", value: 15 },
];

const ageData = [
  { name: "18-25", rate: 25 },
  { name: "26-35", rate: 18 },
  { name: "36-45", rate: 12 },
  { name: "46-55", rate: 8 },
  { name: "55+", rate: 15 },
];

const salaryData = [
  { name: "< 3k", rate: 30 },
  { name: "3k-5k", rate: 22 },
  { name: "5k-8k", rate: 15 },
  { name: "8k-12k", rate: 10 },
  { name: "> 12k", rate: 5 },
];

const COLORS = ["#0ea5e9", "#f59e0b", "#ef4444", "#8b5cf6", "#10b981"];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organization-wide attrition analytics and insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Employees
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                1,234
              </p>
            </div>
            <div className="rounded-full bg-primary-100 p-3 dark:bg-primary-900/20">
               <Users className="h-6 w-6 text-primary-500" />
            </div>
          </div>
        </div>

        <div className="card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                At Risk
              </p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                187
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                15.2% of total
              </p>
            </div>
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <AlertCircle className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </div>

        <div className="card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Attrition Rate
              </p>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                16.2%
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Last 12 months
              </p>
            </div>
            <div className="rounded-full bg-yellow-100 p-3 dark:bg-yellow-900/20">
               <TrendingUp className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Model Accuracy
              </p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                87.3%
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                F1-Score: 0.83
              </p>
            </div>
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
               <BarChart3 className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
            Attrition by Department
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
             {departmentData.map((entry, idx) => (
                <div key={entry.name} className="flex items-center gap-1">
                   <span className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                   {entry.name}
                </div>
             ))}
          </div>
        </div>

        <div className="card">
          <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
            Attrition by Age Group
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                <XAxis dataKey="name" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                <YAxis tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} />
                <Bar dataKey="rate" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
            Attrition Trend by Salary Band
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                <XAxis dataKey="name" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                <YAxis tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#8b5cf6" strokeWidth={3} dot={{r: 4, fill: '#8b5cf6'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
            Top Risk Factors
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Distance from Home
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full">High Impact</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Job Satisfaction
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full">High Impact</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Work-Life Balance
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">Medium Impact</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Tenure</span>
              <span className="px-2.5 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">Medium Impact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
