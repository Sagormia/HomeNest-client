import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

const AllProperties = () => {
    const [datas, setDatas] = useState([]);
    const [load, setLoader] = useState(false);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        setLoader(true);
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        if (sort) params.append("sort", sort);

        fetch(`${import.meta.env.VITE_BASE_URL}/properties?${params.toString()}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                setLoader(false);
            })
            .catch(() => setLoader(false));
    }, [search, sort]);

    return (
        <>
            <title>All Properties</title>
            <div className="py-16 md:py-20">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl text-base-300 font-bold">All Properties</h2>
                        <p className="mt-2 text-lg lg:text-xl">Discover our property listings</p>
                    </div>
                    <div className="flex justify-end flex-row gap-4 mt-10 max-w-2xl ml-auto">
                        <label className="input h-auto text-base w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow">
                            <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by property name"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full text-base"
                            />
                        </label>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="select max-w-35 h-auto text-base w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow"
                        >
                            <option value="">Sort By</option>
                            <option value="oldest">Oldest</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 mt-6 text-lg">
                        {load && <div className="col-span-3"><Loader /></div>}
                        {!load && datas.length === 0 && (
                            <p className="col-span-3 text-center text-gray-500">No properties found.</p>
                        )}
                        {datas.map(item => <Card key={item._id} item={item} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProperties;
