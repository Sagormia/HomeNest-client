import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/auth/AuthContext";
import { Link } from "react-router";

const MyRatings = () => {
    const { user } = useContext(AuthContext);
    const [reviewsItem, setReviewsItem] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`${import.meta.env.VITE_BASE_URL}/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviewsItem(data))
            .catch(() => toast.error("Failed to load reviews"));
    }, [user]);
    return (
        <>
            <title>My Ratings</title>
            <div className="py-16 md:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 text-lg">
                        {reviewsItem.length === 0 ? (
                            <div className="col-span-full text-center ">
                                <p className="font-bold text-3xl text-base-300">No reviews found!</p>
                                <Link to="/all-properties" className="button mt-4">All Properties</Link>
                            </div>
                        ) : (
                            reviewsItem.map((item) => (
                                <div key={item._id} className="bg-base-100 rounded-xl shadow-md shadow-gray-200 border border-gray-200/50 p-6 hover:shadow-lg transition-all duration-200">
                                    <div className="flex sm:items-center flex-col sm:flex-row gap-5">
                                        <img
                                            src={item.propertyThumbnail}
                                            alt={item.propertyName}
                                            className="w-full aspect-video sm:w-34 sm:h-25 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-base-300">{item.propertyName}</h3>
                                            <p className="mb-3 mt-1 text-base"><strong>Review date:</strong> {item.reviewDate}</p>

                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill={i < item.rating ? "#ff6900" : "none"}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="#ff6900"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.21 4.475a.563.563 0 00.424.308l4.943.718a.562.562 0 01.312.959l-3.578 3.487a.563.563 0 00-.162.498l.844 4.924a.562.562 0 01-.815.592l-4.429-2.327a.563.563 0 00-.524 0l-4.43 2.327a.562.562 0 01-.814-.592l.844-4.924a.563.563 0 00-.162-.498L2.59 9.959a.562.562 0 01.312-.959l4.943-.718a.563.563 0 00.424-.308l2.21-4.475z"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mb-5 mt-4">{item.comment}</p>

                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.reviewerPhoto}
                                            alt={item.reviewerName}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="font-semibold">{item.reviewerName}</p>
                                            <p className="text-sm">{item.reviewerEmail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyRatings;