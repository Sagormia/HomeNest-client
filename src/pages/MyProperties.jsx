import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
const MyProperties = () => {
    return (
        <>
            <div className="py-16 md:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 text-lg">
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                alt="Sunny Villa"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="flex items-center text-base mb-3 gap-1.5">
                                    <FaRegCalendarAlt className="text-primary"/> 
                                    10 Nov 2025
                                </p>
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
                            <div className="p-6 pt-0 mt-auto flex gap-2">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="button !border-transparent !px-3 !bg-primary/35 !text-primary hover:!bg-primary hover:!text-white tooltip" data-tip="Update">
                                    <MdModeEdit className="text-2xl" />
                                </button>
                                <button className="button !border-transparent !px-3 !bg-red-600/35 !text-red-600 hover:!bg-red-600 hover:!text-white tooltip" data-tip="Delete">
                                    <RiDeleteBin6Line className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
                                alt="Urban Apartment"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="flex items-center text-base mb-3 gap-1.5">
                                    <FaRegCalendarAlt className="text-primary"/> 
                                    10 Nov 2025
                                </p>
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
                            <div className="p-6 pt-0 mt-auto flex gap-2">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="button !border-transparent !px-3 !bg-primary/35 !text-primary hover:!bg-primary hover:!text-white tooltip" data-tip="Update">
                                    <MdModeEdit className="text-2xl" />
                                </button>
                                <button className="button border-transparent! px-3! bg-red-600/35! text-red-600! hover:!bg-red-600! hover:text-white! tooltip" data-tip="Delete">
                                    <RiDeleteBin6Line className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                                alt="Cozy Cottage"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="flex items-center text-base mb-3 gap-1.5">
                                    <FaRegCalendarAlt className="text-primary"/> 
                                    10 Nov 2025
                                </p>
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
                            <div className="p-6 pt-0 mt-auto flex gap-2">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="button !border-transparent !px-3 !bg-primary/35 !text-primary hover:!bg-primary hover:!text-white tooltip" data-tip="Update">
                                    <MdModeEdit className="text-2xl" />
                                </button>
                                <button className="button !border-transparent !px-3 !bg-red-600/35 !text-red-600 hover:!bg-red-600 hover:!text-white tooltip" data-tip="Delete">
                                    <RiDeleteBin6Line className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
                                alt="Luxury Penthouse"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="flex items-center text-base mb-3 gap-1.5">
                                    <FaRegCalendarAlt className="text-primary"/> 
                                    10 Nov 2025
                                </p>
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
                            <div className="p-6 pt-0 mt-auto flex gap-2">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="button !border-transparent !px-3 !bg-primary/35 !text-primary hover:!bg-primary hover:!text-white tooltip" data-tip="Update">
                                    <MdModeEdit className="text-2xl" />
                                </button>
                                <button className="button !border-transparent !px-3 !bg-red-600/35 !text-red-600 hover:!bg-red-600 hover:!text-white tooltip" data-tip="Delete">
                                    <RiDeleteBin6Line className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
                                alt="Modern Townhouse"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="flex items-center text-base mb-3 gap-1.5">
                                    <FaRegCalendarAlt className="text-primary"/> 
                                    10 Nov 2025
                                </p>
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
                            <div className="p-6 pt-0 mt-auto flex gap-2">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="button !border-transparent !px-3 !bg-primary/35 !text-primary hover:!bg-primary hover:!text-white tooltip" data-tip="Update">
                                    <MdModeEdit className="text-2xl" />
                                </button>
                                <button className="button !border-transparent !px-3 !bg-red-600/35 !text-red-600 hover:!bg-red-600 hover:!text-white tooltip" data-tip="Delete">
                                    <RiDeleteBin6Line className="text-2xl" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                            <img
                                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                                alt="Beachfront Bungalow"
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <p className="flex items-center text-base mb-3 gap-1.5">
                                    <FaRegCalendarAlt className="text-primary"/> 
                                    10 Nov 2025
                                </p>
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
                            <div className="p-6 pt-0 mt-auto flex gap-2">
                                <Link to="/property-details" className="button w-full">
                                    View Details
                                </Link>
                                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="button !border-transparent !px-3 !bg-primary/35 !text-primary hover:!bg-primary hover:!text-white tooltip" data-tip="Update">
                                    <MdModeEdit className="text-2xl" />
                                </button>
                                <button className="button !border-transparent !px-3 !bg-red-600/35 !text-red-600 hover:!bg-red-600 hover:!text-white tooltip" data-tip="Delete">
                                    <RiDeleteBin6Line className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* update modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box p-6 sm:p-8 max-w-3xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-3xl font-bold text-base-300">Update Property</h3>
                    <p class="text-base-200 mt-2">Update your property details below 🏡</p>
                    <form action="#" className="mt-6">
                        <div className="flex flex-col space-y-4.5">
                            <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">Property Name</p>
                                    <input id="pname" name="pname" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property name" />
                                </label>
                                <label>
                                    <p className="font-medium pb-2">Price</p>
                                    <input id="price" name="price" type="number" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property price" />
                                </label>
                            </div>
                            <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">Category</p>
                                    <select defaultValue="Select Category" className="select h-auto text-base w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow">
                                        <option disabled={true}>Select Category</option>
                                        <option>Rent</option>
                                        <option>Sale</option>
                                        <option>Commercial</option>
                                        <option>Land</option>
                                    </select>
                                </label>
                                <label>
                                    <p className="font-medium pb-2">Location</p>
                                    <input id="location" name="location" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="(eg: city, area, or address)" />
                                </label>
                            </div>
                            <label>
                                <p className="font-medium pb-2">Image Link</p>
                                <input id="photoUrl" name="photoUrl" type="url" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property photo URL" />
                            </label>
                            <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">User Email</p>
                                    <input id="uemail" name="uemail" type="email" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none read-only:bg-gray-200/50" readOnly />
                                </label>
                                <label>
                                    <p className="font-medium pb-2">User Name</p>
                                    <input id="uname" name="uname" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none read-only:bg-gray-200/50" readOnly />
                                </label>
                            </div>
                            <label>
                                <p className="font-medium pb-2">Description</p>
                                <textarea id="desc" name="desc" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property description" rows={4}></textarea>
                            </label>
                            <button className="button !py-2.75">
                                <span>Update Property</span>
                            </button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default MyProperties;