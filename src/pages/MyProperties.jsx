import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { toast } from "react-toastify";
const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`${import.meta.env.VITE_BASE_URL}/properties?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProperties(data))
            .catch(() => toast.error("Failed to load properties"));
    }, [user]);

    const handleDelete = (id) => {
        toast(
            <div className="text-center">
                <p className="font-medium text-black">Are you sure you want to delete this property?</p>
                <div className="flex justify-center gap-3 mt-3">
                    <button
                        className="px-6 py-1 bg-red-600 text-white cursor-pointer rounded-md"
                        onClick={async () => {
                            try {
                                const res = await fetch(`${import.meta.env.VITE_BASE_URL}/properties/${id}`, {
                                    method: "DELETE",
                                });
                                const data = await res.json();
                                if (data.success) {
                                    setProperties(prev => prev.filter(p => p._id !== id));
                                    toast.dismiss();
                                    toast.success("Property deleted successfully!");
                                } else {
                                    toast.error(data.message || "Delete failed");
                                }
                            } catch {
                                toast.error("Delete failed");
                            }
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="px-4 py-1 bg-gray-100 cursor-pointer text-black rounded-md"
                        onClick={() => toast.dismiss()}
                    >
                        Cancel
                    </button>
                </div>
            </div>,
            { autoClose: false, closeOnClick: false, draggable: false, position: "top-center" }
        );
    };

    const handleEdit = (property) => {
        setSelectedProperty(property);
        document.getElementById("my_modal_3").showModal();
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!selectedProperty) return;

        const propertyName = e.target.pname.value.trim();
        const price = e.target.price.value.trim();
        const category = e.target.category.value.trim();
        const location = e.target.location.value.trim();
        const imgLink = e.target.photoUrl.value.trim();
        const uemail = e.target.uemail.value.trim();
        const uname = e.target.uname.value.trim();
        const desc = e.target.desc.value.trim();

        if (!propertyName) return toast.error("Please enter a property name.");
        if (!price || isNaN(price) || Number(price) <= 0)
            return toast.error("Please enter a valid price greater than 0.");
        if (!category) return toast.error("Please select a property category.");
        if (!location) return toast.error("Please enter a location.");

        const validUrlPattern =
            /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
        if (!imgLink || !validUrlPattern.test(imgLink))
            return toast.error("Please enter a valid image URL.");

        if (!desc || desc.length < 10)
            return toast.error("Description must be at least 10 characters long.");

        const updatedData = { propertyName, price, category, location, imgLink, uemail, uname, desc };

        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/properties/${selectedProperty._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });
            const data = await res.json();

            if (data.success) {
                setProperties(prev =>
                    prev.map(p => (p._id === selectedProperty._id ? { ...p, ...updatedData } : p))
                );
                toast.success("Property updated successfully!");
                document.getElementById("my_modal_3").close();
                e.target.reset();
            } else {
                toast.error(data.message || "Update failed");
            }
        } catch {
            toast.error("Update failed");
        }
    };

    return (
        <>
            <title>My Properties</title>
            <div className="py-16 md:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 text-lg">
                        {properties.length === 0 ? (
                            <div className="col-span-full text-center ">
                                <p className="font-bold text-3xl text-base-300">No properties found!</p>
                                <Link to="/all-properties" className="button mt-4">All Properties</Link>
                            </div>
                        ) : (
                            properties.map((property) => (
                                <div
                                    key={property._id}
                                    className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative"
                                >
                                    <img
                                        src={property.imgLink}
                                        alt={property.propertyName}
                                        className="w-full aspect-video object-cover"
                                    />
                                    <div className="p-6">
                                        <p className="flex items-center text-base mb-3 gap-1.5">
                                            <FaRegCalendarAlt className="text-primary" />
                                            {property.postDate}
                                        </p>
                                        <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">
                                            {property.category}
                                        </p>
                                        <h2 className="text-2xl font-bold text-base-300">
                                            {property.propertyName}
                                        </h2>
                                        <p className="mt-2 line-clamp-1">{property.desc}</p>
                                        <div className="flex items-center justify-between gap-2 mt-4">
                                            <p className="flex items-center gap-1.5">
                                                <FaLocationDot className="text-primary" /> {property.location}
                                            </p>
                                            <p className="text-primary text-xl font-bold">
                                                ${parseInt(property?.price).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6 pt-0 mt-auto flex gap-2">
                                        <Link to={`/property-details/${property._id}`} className="button w-full">
                                            View Details
                                        </Link>

                                        <button onClick={() => handleEdit(property)} className="button border-transparent! px-3! bg-primary/35! text-primary! hover:bg-primary! hover:text-white!">
                                            <MdModeEdit className="text-2xl" />
                                        </button>

                                        <button onClick={() => handleDelete(property._id)} className="button border-transparent! px-3! bg-red-600/35! text-red-600! hover:bg-red-600! hover:text-white!">
                                            <RiDeleteBin6Line className="text-2xl" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
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
                    <p className="text-base-200 mt-2">Update your property details below 🏡</p>
                    <form onSubmit={handleUpdate} className="mt-6">
                        <div className="flex flex-col space-y-4.5">
                            <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">Property Name</p>
                                    <input
                                        id="pname"
                                        name="pname"
                                        type="text"
                                        className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow"
                                        placeholder="Enter property name"
                                        defaultValue={selectedProperty?.propertyName || ""}
                                    />
                                </label>
                                <label>
                                    <p className="font-medium pb-2">Price</p>
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow"
                                        placeholder="Enter property price"
                                        defaultValue={selectedProperty?.price || ""}
                                    />
                                </label>
                            </div>

                            <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">Category</p>
                                    <select
                                        value={selectedProperty?.category || "Select Category"}
                                        onChange={(e) =>
                                            setSelectedProperty((prev) => ({ ...prev, category: e.target.value }))
                                        }
                                        name="category"
                                        className="select h-auto text-base w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow"
                                    >
                                        <option disabled>Select Category</option>
                                        <option>Rent</option>
                                        <option>Sale</option>
                                        <option>Commercial</option>
                                        <option>Land</option>
                                    </select>
                                </label>
                                <label>
                                    <p className="font-medium pb-2">Location</p>
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow"
                                        placeholder="(eg: city, area, or address)"
                                        defaultValue={selectedProperty?.location || ""}
                                    />
                                </label>
                            </div>

                            <label>
                                <p className="font-medium pb-2">Image Link</p>
                                <input
                                    id="photoUrl"
                                    name="photoUrl"
                                    type="url"
                                    className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow"
                                    placeholder="Enter property photo URL"
                                    defaultValue={selectedProperty?.imgLink || ""}
                                />
                            </label>
                            <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">User Email</p>
                                    <input value={user?.email} id="uemail" name="uemail" type="email" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none read-only:bg-gray-200/50" readOnly />
                                </label>
                                <label>
                                    <p className="font-medium pb-2">User Name</p>
                                    <input value={user?.displayName} id="uname" name="uname" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none read-only:bg-gray-200/50" readOnly />
                                </label>
                            </div>            
                            <label>
                                <p className="font-medium pb-2">Description</p>
                                <textarea
                                    id="desc"
                                    name="desc"
                                    className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow"
                                    placeholder="Enter property description"
                                    rows={4}
                                    defaultValue={selectedProperty?.desc || ""}
                                />
                            </label>

                            <button type="submit" className="button py-2.75!">
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