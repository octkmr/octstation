import {FormEvent, FormEventHandler, useState} from "react";
import { useForm } from '@inertiajs/react';

export default function CreateForm() {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('post.store'));
    };

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div className="flex flex-col items-center">
                <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    What are you doing?
                </label>
                <div className="m-2">
                    <textarea
                        id="body"
                        name="body"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                    />
                </div>
                <div className="m-2">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Post
                    </button>
                </div>
            </div>
        </form>
    );
}
