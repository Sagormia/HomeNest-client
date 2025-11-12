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
            <div className="container">
                {
                    load && <Loader></Loader>
                }
                <div>
                    <div>
                        <img src={datas.imgLink} alt="" />
                    </div>
                    <div>
                        <h2>{datas.propertyName}</h2>
                        <p>{datas.desc}</p>
                        <p>{datas.price}</p>
                        <p>{datas.category}</p>
                        <p>{datas.location}</p>
                        <p>{datas.postDate}</p>

                        <p>Posted by</p>
                        <div>
                            <img src={datas.profilePhoto} alt="" />
                            <div>
                                <p><strong>{datas.uname}</strong></p>
                                <p>{datas.uemail}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Ratings & Reviews</h3>
                    <form>
                        <Rating
                    style={{ maxWidth: 180 }}
                    ref={ratingRef}
                    value={rating}
                    onChange={setRating}
                    />
                    
                        <label>
                            <p className="font-medium pb-2">Review Text</p>
                            <textarea id="desc" name="desc" type="text" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter property description" rows={4}></textarea>
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PropertyDetails;