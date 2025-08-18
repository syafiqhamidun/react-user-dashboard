import React from "react";

import type { useFilters as UserFiltersType } from "@/types/User";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserFiltersProps {
  filters: UserFiltersType;
  onFiltersChange: (filters: UserFiltersType) => void;
  cities: string[];
  companies: string[];
}

export const UserFilters = ({
  filters,
  onFiltersChange,
  cities,
  companies,
}: UserFiltersProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      search: e.target.value,
    });
  };

  const handleCityChange = (value: string) => {
    onFiltersChange({
      ...filters,
      city: value === "all" ? "" : value,
    });
  };

  const handleCompanyChange = (value: string) => {
    onFiltersChange({
      ...filters,
      company: value === "all" ? "" : value,
    });
  };

  const handleClearFilters = () => {
    onFiltersChange({
      search: "",
      city: "",
      company: "",
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex-1 min-w-0">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            🔍 Search by name
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Enter user name..."
              value={filters.search}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/70 placeholder-gray-800 placeholder:text-sm"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            🏙️ Filter by city
          </label>
          <Select
            value={filters.city || "all"}
            onValueChange={handleCityChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="All cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-0">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            🏢 Filter by company
          </label>
          <Select
            value={filters.company || "all"}
            onValueChange={handleCompanyChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="All companies" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All companies</SelectItem>
              {companies.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleClearFilters}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-xl hover:from-red-600 hover:to-pink-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            type="button"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};
