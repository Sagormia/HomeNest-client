import { FaHome, FaSmile, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaHome className="text-4xl text-primary" />,
    value: "1200+",
    label: "Properties Listed",
  },
  {
    icon: <FaSmile className="text-4xl text-primary" />,
    value: "850+",
    label: "Happy Clients",
  },
  {
    icon: <FaUsers className="text-4xl text-primary" />,
    value: "150+",
    label: "Expert Agents",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl text-primary" />,
    value: "20+",
    label: "Cities Covered",
  },
];

const Statistics = () => {
    return (
        <>
            <section className="py-16 md:py-20">
                <div className="container text-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl text-base-300 font-bold">Our Achievements</h2>
                        <p className="mt-2 mx-auto text-lg max-w-2xl lg:text-xl">We take pride in helping thousands of people find their dream home and making real estate investment easier and more transparent.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-base-100 border border-gray-200/50 rounded-2xl shadow-lg shadow-gray-200 p-6"
                            >
                                <div className="flex flex-col items-center justify-center space-y-3">
                                    <div className="bg-primary/10 p-4 rounded-full">{stat.icon}</div>
                                    <h3 className="text-3xl font-bold text-base-300">
                                        {stat.value}
                                    </h3>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Statistics;