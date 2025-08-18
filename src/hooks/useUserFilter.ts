import type { User, useFilters } from "@/types/User";
import { useMemo, useState } from "react";

export const useUserFilter = (users: User[] | null) => {
    const [filter, setFilter] = useState<useFilters>({
        search: "",
        city: "",
        company: "",
    });

    const { cities, companies } = useMemo(() => {
        if (!users) {
            return { cities: [], companies: [] };
        }

        const uniqueCities = [
            ...new Set(users.map((user) => user.address.city)),
        ].sort();
        const uniqueCompanies = [
            ...new Set(users.map((user) => user.company.name)),
        ].sort();

        return {
            cities: uniqueCities,
            companies: uniqueCompanies,
        };
    }, [users]);

    const filteredUsers = useMemo(() => {
        if (!users) {
            return [];
        }

        return users.filter((user) => {
            const matchesSearch =
                filter.search === "" ||
                user.name.toLowerCase().includes(filter.search.toLowerCase());

            const matchesCities =
                filter.city === "" || user.address.city === filter.city;

            const matchesCompanies =
                filter.company === "" || user.company.name === filter.company;

            return matchesSearch && matchesCities && matchesCompanies;
        });
    }, [users, filter]);

    return {
        filters: filter,
        setFilters: setFilter,
        cities,
        companies,
        filteredUsers,
    };
};
