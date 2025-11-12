import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const Featured = () => {
    return (
        <>
            <div className="py-16 md:py-20">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl text-base-300 font-bold">Featured Properties</h2>
                        <p className="mt-2 text-lg lg:text-xl">Discover our newest and most popular property listings</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 mt-10 text-lg">
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                alt="Sunny Villa"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">Rent</p>
                                <h2 className="text-2xl font-bold text-base-300">Sunny Villa</h2>
                                <p className="mt-2 line-clamp-1">
                                    A beautiful villa with sea view and modern amenities.
                                </p>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <p className="flex items-center gap-1.5"><FaLocationDot className="text-primary"/> California, USA</p>
                                    <p className="text-primary text-xl font-bold">$1,200,000</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
                                alt="Urban Apartment"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">Sale</p>
                                <h2 className="text-2xl font-bold text-base-300">Urban Apartment</h2>
                                <p className="mt-2 line-clamp-1">
                                    Modern apartment in the heart of the city.
                                </p>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <p className="flex items-center gap-1.5"><FaLocationDot className="text-primary"/> California, USA</p>
                                    <p className="text-primary text-xl font-bold">$1,200,000</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                                alt="Cozy Cottage"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">Commercial</p>
                                <h2 className="text-2xl font-bold text-base-300">Cozy Cottage</h2>
                                
                                <p className="mt-2 line-clamp-1">
                                    Charming cottage surrounded by lush greenery.
                                </p>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <p className="flex items-center gap-1.5"><FaLocationDot className="text-primary"/> California, USA</p>
                                    <p className="text-primary text-xl font-bold">$1,200,000</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
                                alt="Luxury Penthouse"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">Land</p>
                                <h2 className="text-2xl font-bold text-base-300">Luxury Penthouse</h2>
                                <p className="mt-2 line-clamp-1">
                                    Top floor penthouse with panoramic city views.
                                </p>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <p className="flex items-center gap-1.5"><FaLocationDot className="text-primary"/> California, USA</p>
                                    <p className="text-primary text-xl font-bold">$1,200,000</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
                                alt="Modern Townhouse"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                 <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">Rent</p>
                                <h2 className="text-2xl font-bold text-base-300">Modern Townhouse</h2>
                               
                                <p className="mt-2 line-clamp-1">
                                    Stylish townhouse close to all amenities.
                                </p>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <p className="flex items-center gap-1.5"><FaLocationDot className="text-primary"/> California, USA</p>
                                    <p className="text-primary text-xl font-bold">$1,200,000</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                            </div>
                        </div>

                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                                alt="Beachfront Bungalow"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">Sale</p>
                                <h2 className="text-2xl font-bold text-base-300">Beachfront Bungalow</h2>
                                
                                <p className="mt-2 line-clamp-1">
                                    Relaxing bungalow right on the beach with ocean view.
                                </p>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <p className="flex items-center gap-1.5"><FaLocationDot className="text-primary"/> California, USA</p>
                                    <p className="text-primary text-xl font-bold">$1,200,000</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;