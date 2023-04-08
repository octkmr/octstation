import {Link} from "@inertiajs/react";
import {PageProps} from "@/types";
import {Post} from "@/types/post";

export default function Home({ auth, posts }: PageProps<{posts: Post[]}>) {
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
            {/* 記事の一覧を表示する */}
            {posts.map((post) => (
                <div className="flex flex-col items-center">
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
                        </div>
                        <div>
                            {post.body}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
