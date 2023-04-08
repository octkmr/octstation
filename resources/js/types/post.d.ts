
export interface Post {
    id: number;
    body: string;
    user: {
        name: string;
        icon: string;
    };
}
