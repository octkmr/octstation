
export interface Post {
    id: number;
    body: string;
    created_at: string;
    user: {
        name: string;
        icon: string;
    };
}
