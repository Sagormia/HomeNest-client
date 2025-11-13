import { TbHomeSearch } from "react-icons/tb";
import { GoVerified } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
const WhyChoose = () => {
    return (
        <>
            <div className="bg-gray-200/30 py-16 md:py-20 text-center text-lg">
                <div className="container">
                    <div>
                        <h2 className="text-3xl lg:text-4xl text-base-300 font-bold">Why Choose Home<span className="text-primary">Nest?</span></h2>
                        <p className="mt-2 text-lg lg:text-xl">Your trusted partner in finding the perfect home</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 mt-10">
                        <div>
                            <div className="h-18 w-18 flex-center mx-auto text-4xl bg-primary/15 text-primary rounded-full"><TbHomeSearch /></div>
                            <h3 className="font-bold text-2xl mt-4 text-base-300">Smart Search</h3>
                            <p className="mt-2 text-balance">Advanced filters to find properties that match your exact needs</p>
                        </div>
                        <div>
                            <div className="h-18 w-18 flex-center mx-auto text-4xl bg-primary/15 text-primary rounded-full"><GoVerified /></div>
                            <h3 className="font-bold text-2xl mt-4 text-base-300">Verified Listings</h3>
                            <p className="mt-2 text-balance">All properties are thoroughly verified for authenticity and accuracy</p>
                        </div>
                        <div>
                            <div className="h-18 w-18 flex-center mx-auto text-4xl bg-primary/15 text-primary rounded-full"><MdSupportAgent /></div>
                            <h3 className="font-bold text-2xl mt-4 text-base-300">Expert Support</h3>
                            <p className="mt-2 text-balance">Professional agents ready to assist you throughout your journey</p>
                        </div>
                        <div>
                            <div className="h-18 w-18 flex-center mx-auto text-4xl bg-primary/15 text-primary rounded-full"><SlEnergy /></div>
                            <h3 className="font-bold text-2xl mt-4 text-base-300">Quick Process</h3>
                            <p className="mt-2 text-balance">Streamlined processes to get you into your new home faster</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoose;