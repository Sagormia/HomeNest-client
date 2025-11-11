const AddProperties = () => {
    return (
        <>
            <title>Add Properties</title>
            <div className="container">
                <div className="max-w-3xl mx-auto my-12 md:my-16 lg:my-20 bg-base-100 p-6 sm:p-8 rounded-xl border border-gray-200 shadow-lg shadow-gray-200">
                    <h1 className="text-3xl font-bold text-base-300">Add Properties</h1>
                    <p className="text-base-200 mt-2">Add your property details below 🏡</p>
                    <form action="#" className="mt-6">
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
                            <div className="grid gap-4.5 grid-cols-2">
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