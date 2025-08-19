import React from "react";
import type {User} from "@/types/User.ts"
import { UserCard } from "@/components/UserCard";

interface UserListProps {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const UserList: React.FC<UserListProps> = ({
  users,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin animation-delay-150"></div>
        </div>
        <p className="mt-6 text-lg font-medium text-gray-600 animate-pulse">Loading users...</p>
        <p className="mt-2 text-sm text-gray-400">Please wait while we fetch the data</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto text-center">
          <div className="text-6xl mb-4 animate-float">⚠️</div>
          <h3 className="text-xl font-semibold text-red-800 mb-3">Error Loading Users</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-md mx-auto text-center">
          <div className="text-6xl mb-4 animate-float">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">No Users Found</h3>
          <p className="text-gray-600">
            No users match your current filters. Try adjusting your search criteria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl px-6 py-4 shadow-sm border border-gray-200/50">
          <p className="text-lg font-medium text-gray-700">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {users.length}
            </span>{" "}
            user{users.length !== 1 ? "s" : ""} found
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div 
            key={user.id} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};
