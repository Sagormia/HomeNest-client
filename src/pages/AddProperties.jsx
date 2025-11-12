import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { toast } from "react-toastify";
import { format } from 'date-fns';
import profile from '../assets/profile.png';

const AddProperties = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();

        const propertyName = e.target.pname.value.trim();
        const price = e.target.price.value.trim();
        const category = e.target.category.value.trim();
        const location = e.target.location.value.trim();
        const imgLink = e.target.photoUrl.value.trim();
        const uemail = e.target.uemail.value.trim();
        const uname = e.target.uname.value.trim();
        const desc = e.target.desc.value.trim();
        const profilePhoto = user?.photoURL || profile;


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

        const postDate = format(new Date(), "dd MMM yyyy");

        const payload = {
            propertyName,
            price: Number(price),
            category,
            location,
            imgLink,
            uemail,
            uname,
            desc,
            postDate,
            profilePhoto,
        };

        fetch(`${import.meta.env.VITE_BASE_URL}/properties`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })
            .then((result) => {
                if (result.ok) {
                    toast.success("Property added successfully!");
                    e.target.reset();
                } else {
                    toast.error("Failed to add property. Please try again.");
                }
            })
            .catch((err) => {
                toast.error(`Error: ${err.message}`);
            });
    };

    return (
        <>
            <title>Add Properties</title>
            <div className="container">
                <div className="max-w-3xl mx-auto my-12 md:my-16 lg:my-20 bg-base-100 p-6 sm:p-8 rounded-xl border border-gray-200 shadow-lg shadow-gray-200">
                    <h1 className="text-3xl font-bold text-base-300">Add Properties</h1>
                    <p className="text-base-200 mt-2">Add your property details below 🏡</p>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-4.5">
                            <div className="grid gap-4.5 grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">Property Name</p>
                                    <input id="pname" name="pname" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property name" />
                                </label>
                                <label>
                                    <p className="font-medium pb-2">Price</p>
                                    <input id="price" name="price" type="number" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property price" />
                                </label>
                            </div>
                            <div className="grid gap-4.5 grid-cols-2">
                                <label>
                                    <p className="font-medium pb-2">Category</p>
                                    <select defaultValue='' name="category" className="select h-auto text-base w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow">
                                        <option value='' disabled={true}>Select Category</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Sale">Sale</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Land">Land</option>
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
                            <div className="grid gap-4.5 grid-cols-2">
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
                                <textarea id="desc" name="desc" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property description" rows={4}></textarea>
                            </label>
                            <button className="button py-2.75!">
                                <span>Add Property</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProperties;