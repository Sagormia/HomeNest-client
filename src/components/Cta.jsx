import { Link } from "react-router";

const Cta = () => {
    return (
        <>
            <section className="bg-linear-to-r from-primary to-secondary text-white py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        Find Your Dream Home Today
                    </h2>
                    <p className="mt-2 mx-auto text-lg max-w-2xl lg:text-xl">
                        Explore the best properties in your preferred location. Let us help
                        you find the perfect home that fits your lifestyle.
                    </p>
                    <Link
                        to="/all-properties"
                        className="bg-white! mt-8 border-transparent! text-lg text-black! button hover:bg-black! hover:text-white!"
                    >
                        Explore Properties
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Cta;