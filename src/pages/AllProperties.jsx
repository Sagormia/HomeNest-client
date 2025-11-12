import { useEffect, useState } from "react";
import Card from "../components/Card";
const AllProperties = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/properties`)
        .then(res => res.json())
        .then(data => setDatas(data))
    }, []);
    console.log(datas);
    return (
        <>
            <div className="py-16 md:py-20">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl text-base-300 font-bold">All Properties</h2>
                        <p className="mt-2 text-lg lg:text-xl">Discover our property listings</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 mt-10 text-lg">
                        {
                            datas.map(item => <Card key={item._id} item={item}></Card>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProperties;