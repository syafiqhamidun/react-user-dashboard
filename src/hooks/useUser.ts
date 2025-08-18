import { useEffect, useState } from "react"
import type { ApiState, User } from "@/types/User"
import { fetchUsers } from "@/services/api";


export const useUser = () => {

    const [state, setState] = useState<ApiState<User[]>>({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        const loadUsers = async () => {
            try {
                setState(prev => ({ ...prev, loading: true, error: null }));
                const users = await fetchUsers();

                setState({ data: users, loading: false, error: null });
            } catch (error) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: error instanceof Error ? error.message : 'Unexpected error occured'
                }));
            };
        };
        loadUsers();
    }, []);

    return state;
}