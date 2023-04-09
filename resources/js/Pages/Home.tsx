import {Link} from "@inertiajs/react";
import {React} from ""
import {PageProps} from "@/types";
import {Post} from "@/types/post";
import CreateButton from "@/Components/Post/CreateButton";

export default function Home({ auth, posts, isPostCreated }: PageProps<{posts: Post[], isPostCreated: boolean}>) {
    const formatBody = (body: string) => {
        return body.split('\n').map((word, index) => {
            return (
                <div key={index}>
                    {word}
                    <br/>
                </div>
            );
        });
    }

    return (
        <>
            <div className="p-6 text-right">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
            <div className="flex flex-col items-center">
            {isPostCreated && (
                <div className="bg-green-200 rounded-lg w-4/5 shadow-md p-4 m-2">
                    Created Post!
                </div>
            )}
            <CreateButton isPostCreated={isPostCreated} />
            { posts.map((post) => (
                <div key={post.id} className="bg-orange-200 rounded-lg w-4/5 shadow-md p-4 m-2">
                    <div className="flex items-center">
                        <img
                            src={post.user.icon}
                            alt="avatar"
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <div className="font-semibold">
                            {post.user.name}
                        </div>
                        <div className="ml-2">
                            {post.created_at}
                        </div>
                    </div>
                    <div　className="mt-3 ml-3">
                        {
                            formatBody(post.body)
                        }
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}
