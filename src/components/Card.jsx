import { FaLocationDot } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({item}) => {
    return (
        <>
            <div className="bg-base-100 rounded-xl shadow-lg shadow-gray-200 overflow-hidden flex flex-col relative">
                <img
                    src={item.imgLink || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'}
                    alt={item.propertyName}
                    className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                    <p className="flex items-center text-base mb-3 gap-1.5"><FaRegUserCircle className="text-primary" /> Posted by: <strong>{item.uname}</strong></p>
                    <p className="absolute text-sm font-semibold py-1.5 min-w-24 text-center top-4 left-4 z-10 bg-primary rounded-full text-white px-4">{item.category}</p>
                    <h2 className="text-2xl font-bold text-base-300">{item.propertyName}</h2>
                    <p className="mt-2 line-clamp-1">{item.desc}</p>
                    <div className="flex items-center justify-between gap-2 mt-4">
                        <p className="flex items-center gap-1.5"><FaLocationDot className="text-primary"/> {item.location}</p>
                        <p className="text-primary text-xl font-bold">${item?.price?.toLocaleString()}</p>
                    </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                    <Link to={`/property-details/${item._id}`} className="button w-full">
                        View Details
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Card;