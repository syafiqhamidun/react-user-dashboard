import type { User } from "@/types/User";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`);
        
        if(!response.ok){
            throw new Error(`Failed to fetch users: ${response.statusText}`)
        };

        const users:User[] = await response.json();
        return users;

    } catch (error) {
        if(error instanceof Error){
            throw error;
        };
        throw new Error('An unexpected error occured when fetching data');
    };
};
