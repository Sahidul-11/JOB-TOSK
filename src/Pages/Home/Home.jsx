import React from 'react';

const Home = () => {
    return (
        <>
            <section className='mt-10 flex items-center justify-start gap-10'>
                <div class="relative  w-1/3">

                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        class="w-full pl-3 pb-2 text-stone-950 rounded-md bg-white border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span class="absolute -top-3 inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" class="text-gray-600 hover:text-gray-700">
                            <span class="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4 font-bold"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
                <div class="flex gap-8 bg-slate-100 p-4 rounded-2xl">
                    <div class="relative">
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span class="text-sm font-medium"> Sort by Price </span>

                                <span class="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-4"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                                <div class="w-40 rounded border border-gray-200 bg-white">
                                    <header class="flex items-center justify-between p-4">

                                        <button type="reset" class="text-sm text-gray-900 underline underline-offset-4">
                                            Reset
                                        </button>
                                    </header>

                                    <ul class="space-y-1 border-t border-gray-200 p-4">
                                        <li class="cursor-pointer hover:text-xl">
                                            <label for="FilterInStock" class="inline-flex items-center gap-2">


                                                <span class="font-medium text-gray-700 "> Low to High </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label for="FilterPreOrder" class="inline-flex items-center gap-2">


                                                <span class=" hover:text-xl font-medium text-gray-700"> High to Low </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>


                </div>
                <div class='w-1/2'>
                    <h1 class="text-center text-white text-2xl font-bold">Categorization:</h1>
                    <div className="flex items-center justify- gap-10">
                        <div class='bg-slate-50 p-4 rounded-xl'>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Brand Name </label>

                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 bg-slate-50  w-full rounded-lg border-2 p-2 border-gray-950 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                            </select>
                        </div>
                        <div class='bg-slate-50 p-4 rounded-xl'>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Brand Name </label>

                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 bg-slate-50  w-full rounded-lg border-2 p-2 border-gray-950 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                            </select>
                        </div>
                        <div class='bg-slate-50 p-4 rounded-xl'>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Brand Name </label>

                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 bg-slate-50  w-full rounded-lg border-2 p-2 border-gray-950 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                            </select>
                        </div>



                    </div>
                </div>
            </section>

            <section>
                <div className="join grid-cols-2 mx-auto mt-16 flex justify-center">
                    <button className="join-item btn btn-outline mr-1">Previous page</button>
                    <div className="join">
                        <input
                            className="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label="1"
                            defaultChecked />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                    </div>
                    <button className="join-item btn btn-outline">Next</button>
                </div>
            </section>

        </>
    );
};

export default Home;