import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';

const Home = () => {
     const [pages ,setPages]=useState([])
     let [currentPage ,setCurrentPage]=useState(0)
    const { status, data, refetch, error } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products/?currentPage=${currentPage}`)
            console.log(data)
            return data
        },
    })
    useEffect(() => {
        const fetchData = async () => {
          try {
            const {data} = await axios.get('http://localhost:3000/totalProducts');
            // setTotalProducts(response.data.count);
            const totalPage= Math.ceil(data.count/9)
            let makePage = []
            for (let index = 0; index < totalPage; index++) {
                const a = parseInt(index)
                makePage.push(a)
                
            }
           setPages(makePage)
            console.log(totalPage); // Log the total products count
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    if (status === 'pending') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }
 const handlePrevious = ()=>{
    if (0<currentPage) {
      setCurrentPage(currentPage -1) 
      refetch() 
    }

 }
 const handleNext = ()=>{
    if (currentPage<pages.length-1) {
      setCurrentPage(currentPage +1) 
      refetch() 
    }

 }
 const handleClick=(e)=>{
  setCurrentPage(e);
  refetch()
 }

    console.log('Hello, world!', pages,currentPage );
    return (
        <div>
            <section className='mt-10 flex items-center justify-start gap-10'>
                <div className="relative  w-1/3">

                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full pl-3 pb-2 text-stone-950 rounded-md bg-white border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute -top-3 inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-4 w-4 font-bold"
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
                <div className="flex gap-8 bg-slate-100 p-4 rounded-2xl">
                    <div className="relative">
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span className="text-sm font-medium"> Sort by Price </span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                                <div className="w-40 rounded border border-gray-200 bg-white">
                                    <header className="flex items-center justify-between p-4">

                                        <button type="reset" className="text-sm text-gray-900 underline underline-offset-4">
                                            Reset
                                        </button>
                                    </header>

                                    <ul className="space-y-1 border-t border-gray-200 p-4">
                                        <li className="cursor-pointer hover:text-xl">
                                            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">


                                                <span className="font-medium text-gray-700 "> Low to High </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">


                                                <span className=" hover:text-xl font-medium text-gray-700"> High to Low </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>


                </div>
                <div className='w-1/2'>
                    <h1 className="text-center text-white text-2xl font-bold">Categorization:</h1>
                    <div className="flex items-center justify- gap-10">
                        <div className='bg-slate-50 p-4 rounded-xl'>
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
                        <div className='bg-slate-50 p-4 rounded-xl'>
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
                        <div className='bg-slate-50 p-4 rounded-xl'>
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

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full bg-white py-10 px-6 rounded-2xl'>
                    {
                        data.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }

                </div>


                <div className="join grid-cols-2 mx-auto mt-16 flex justify-center mb-16">
                    <button onClick={handlePrevious} className="join-item btn btn-outline mr-1">Previous page</button>
                    <div className="">
                            {
                            pages.map((page ,i)=>(
                                <button type='button' key={page} onClick={()=>handleClick(page)} className={`
                                    btn btn-square ${currentPage != i?"bg-yellow-600" : " bg-white "} `}>{page + 1}</button>
                            ))
                            }
                       
                      
                    </div>
                    <button onClick={handleNext} className="join-item btn btn-outline">Next</button>
                </div>
            </section>

        </div>
    );
};

export default Home;