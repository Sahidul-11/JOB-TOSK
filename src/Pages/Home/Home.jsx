import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';

const Home = () => {
    const [pages, setPages] = useState([])
    let [currentPage, setCurrentPage] = useState(0)
    const [call , setCall]=useState(true)
    const [search, setSearch] = useState("")
    const [sort , setSort] =useState("highToLow")
    const [category , setCategory] =useState("")
    const [brand , setBrand] =useState("")
    const [maxPrice , setMax]=useState('')
    const [minPrice , setMin]=useState('')


    const handlePrevious = async () => {
        if (0 < currentPage) {
            setCurrentPage(currentPage - 1)

        }

    }
    const handleNext = async () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)

        }

    }
    const handleClick = async (e) => {
        setCurrentPage(e);

    }
    const { status, data, refetch, error } = useQuery({
        queryKey: ['product', currentPage, call ,sort,category, brand ,maxPrice],
        queryFn: async () => {
            const { data } = await axios.get(`https://job-task-server-olive.vercel.app/products/?currentPage=${currentPage}&search=${search}&sort=${sort}&category=${category}&brand=${brand}&maxPrice=${maxPrice}&minPrice=${minPrice}`)
            console.log(data)
            return data
        },
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://job-task-server-olive.vercel.app/totalProducts/?search=${search}&category=${category}&brand=${brand}&maxPrice=${maxPrice}&minPrice=${minPrice}`);
                // setTotalProducts(response.data.count);
                const totalPage = Math.ceil(data.count / 9)
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
    }, [call , category,brand ,maxPrice]);
    console.log(search);

    if (status === 'pending') {
        return <div className="w-16 mx-auto mt-36 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCall(!call);

    }
    const handlePrice = (e) => {
        const range =e.target.value;
        if (range==="top") {
           setMax("1500") 
           setMin("800")
        }
        if (range==="mid") {
           setMax("800") 
           setMin("400")
        }
        if (range==="low") {
           setMax("400") 
           setMin("1")
        }

    }

    console.log('Hello, world!', minPrice, maxPrice);
    return (
        <div>
            <section className='mt-3 mb-10 flex flex-col lg:flex-row items-center justify-start gap-10'>
                <div className="relative px-2 w-full lg:w-1/2">

                    <form action="" onSubmit={handleSubmit} >
                       <div className='w-full flex gap-4'>
                       <input
                           onChange={(e)=>setSearch(e.target.value)}
                           defaultValue={search}
                            type="text"
                            name="Search"
                            placeholder="Search for..."
                            className="w-full  pl-3 pb-2 text-stone-950 rounded-md bg-white border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />
                         <button type="submit" className='btn  btn-outline'>Search</button>
                       </div>
                      
                        
                    </form>

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
                                        <li onClick={()=>setSort("LowToHigh")} className="cursor-pointer hover:text-xl">
                                            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">


                                                <span className="font-medium text-gray-700 "> Low to High </span>
                                            </label>
                                        </li>

                                        <li onClick={()=>setSort("highToLow")}>
                                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">


                                                <span className=" hover:text-xl font-medium text-gray-700"> High to Low </span>
                                            </label>
                                        </li>
                                        <li onClick={()=>setSort("new")}>
                                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">


                                                <span className=" hover:text-xl font-medium text-gray-700"> New products </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>


                </div>
                <div className='w-full px-2 lg:w-1/2'>
                    <h1 className="text-center text-white text-2xl font-bold">Categorization:</h1>
                    <div className="flex items-center gap-3 lg:gap-10">
                        <div className='bg-slate-50 p-4 rounded-xl'>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Category </label>

                            <select
                                onChange={(e)=>setCategory(e.target.value)}
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 bg-slate-50  w-full rounded-lg border-2 p-2 border-gray-950 text-gray-700 sm:text-sm"
                            >
                                <option value= " ">Please select</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Wearables">Wearables</option>
                                <option value="Computers">Computers</option>
                                <option value="Audio">Audio</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Home Automation">Home Automation</option>
                            </select>
                        </div>
                        <div className='bg-slate-50 p-4 rounded-xl'>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Brand Name </label>

                            <select
                                onChange={(e)=>setBrand(e.target.value)}
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 bg-slate-50  w-full rounded-lg border-2 p-2 border-gray-950 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="SmartConnect">SmartConnect</option>
                                <option value="ClickTech">ClickTech</option>
                                <option value="VisionPro">VisionPro</option>
                                <option value="GameForce">GameForce</option>
                                <option value="TechTime">TechTime</option>
                            </select>
                        </div>
                        <div className='bg-slate-50 p-4 rounded-xl'>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">Price Range ($) </label>

                            <select
                                onChange={handlePrice}
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 bg-slate-50  w-full rounded-lg border-2 p-2 border-gray-950 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="top">1500-800</option>
                                <option value="mid">800-400</option>
                                <option value="low">400-1</option>
                               
                            </select>
                        </div>



                    </div>
                </div>
            </section>

            <section>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full bg-white py-10 px-6 rounded-2xl'>
                    {
                     data.length>0? data.map(product => <ProductCard key={product._id} product={product}></ProductCard>): <div className='text-center text-3xl w-full lg:col-span-3 font-bold text-slate-900 animate-bounce'>No Data Found</div>
                    }

                </div>


                <div className="join grid-cols-2 mx-auto mt-16 flex justify-center mb-16">
                    <button onClick={handlePrevious} className="join-item btn btn-outline mr-1">Previous page</button>
                    <div className="">
                        {
                            pages.map((page, i) => (
                                <button type='button' key={page} onClick={() => handleClick(page)} className={`
                                    btn btn-square ${currentPage != i ? "bg-yellow-600" : " bg-white "} `}>{page + 1}</button>
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