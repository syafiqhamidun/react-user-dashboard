import { UserList } from "@/components/UserList";
import { UserFilters } from "@/components/UserFilters";
import { useUser } from "@/hooks/useUser";
import { useUserFilter } from "@/hooks/useUserFilter";

function App() {
  const { data: users, loading, error } = useUser();
  const { filters, setFilters, cities, companies, filteredUsers } =
    useUserFilter(users);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 animate-gradient-shift"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              User Directory
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Easily explore and filter user profiles from our directory
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <UserFilters
            filters={filters}
            onFiltersChange={setFilters}
            cities={cities}
            companies={companies}
          />

          <UserList users={filteredUsers} loading={loading} error={error} />
        </div>
      </main>
    </div>
  );
}

export default App;
