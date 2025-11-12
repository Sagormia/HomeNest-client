import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const PropertyDetails = () => {
    const [datas, setDatas] = useState({});
    const [load, setLoader] = useState(false);
    const ratingRef = useRef(null);
    const [rating, setRating] = useState(0);
    const {id} = useParams();

    useEffect(() => {
        setLoader(true);
        fetch(`${import.meta.env.VITE_BASE_URL}/properties/${id}`)
        .then(res => res.json())
        .then(data => {
            setDatas(data);
            setLoader(false);
        })
    }, [id]);
    useEffect(() => {
        const handleOutsideClick = (event) => {
        if (!ratingRef.current.contains(event.target)) {
            setRating(0);
        }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <>
            <title>{datas.propertyName}</title>
            <div className="container my-12 md:my-16 lg:my-20 text-lg">
                {
                    load && <Loader></Loader>
                }
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    <div className="relative">
                        <img src={datas.imgLink} className="w-full rounded-xl" alt="" />
                        <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">{datas.category}</p>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-base-300">{datas.propertyName}</h2>
                        <p>{datas.desc}</p>
                        <p><strong>Price:</strong> ${datas?.price?.toLocaleString()}</p>
                        <p><strong>Location:</strong> {datas.location}</p>
                        <p><strong>Posted date:</strong> {datas.postDate}</p>

                        <hr className="my-7 opacity-10" />
                        <p><strong>Posted by</strong></p>
                        <div className="flex gap-3 items-center">
                            <img src={datas.profilePhoto} className="h-16 aspect-square rounded-full" alt="" />
                            <div>
                                <p><strong>{datas.uname}</strong></p>
                                <p className="text-base">{datas.uemail}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-14 opacity-15" />
                <div className="mt-14 max-w-2xl">
                    <h3 className="text-2xl font-bold text-base-300 mb-7">Leave a comment</h3>
                    <form>
                        <p className="font-medium pb-2">Rate your experience</p>
                        <Rating style={{ maxWidth: 180 }} ref={ratingRef} value={rating} onChange={setRating}/>
                    
                        <label className="mt-5 block">
                            <p className="font-medium pb-2">Your Feedback</p>
                            <textarea id="desc" name="desc" className="w-full block py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Write your feelings..." rows={4}></textarea>
                        </label>

                        <div className="text-end mt-5">
                            <button className="button">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PropertyDetails;