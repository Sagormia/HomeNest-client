import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg"
import email from "../assets/mail.svg"
import { RiHome8Line } from "react-icons/ri";
import { Link } from "react-router";
const Footer = () => {
    return (
        <footer className="bg-[#1e0d00] border-t border-accent/30 text-accent pt-7.25 lg:pt-11">
            <div className="container">
                <div className="flex flex-wrap items-start justify-between -mx-3.75">
                    <div className="px-3.75 mt-9 w-full lg:w-3/12">
                        <Link href="/" className="flex gap-2 items-center z-50">
                            <div className="h-12 w-12 rounded-full flex-center bg-gradient-to-l from-primary to-secondary text-3xl text-white">
                                <RiHome8Line />
                            </div>
                            <h1 className="text-2xl font-bold text-white">Home<span className="text-primary">Nest</span></h1>
                        </Link>
                        <p className="mt-4">Your trusted partner in finding the perfect home. We connect property seekers with their dream properties. With expert guidance and personalized service, we make your property journey seamless and stress-free.</p>
                    </div>
                    <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
                        <h2 className="text-white font-semibold text-xl">Quick Links</h2>
                        <ul className="space-y-4 mt-4">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">All Properties</a></li>
                            <li><a href="#" className="hover:text-white">Add Properties</a></li>
                            <li><a href="#" className="hover:text-white">My Properties</a></li>
                        </ul>
                    </div>
                    <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
                        <h2 className="text-white font-semibold text-xl">Services</h2>
                        <ul className="space-y-4 mt-4">
                            <li><a href="#" className="hover:text-white">Buy Property</a></li>
                            <li><a href="#" className="hover:text-white">Rent Property</a></li>
                            <li><a href="#" className="hover:text-white">Sell Property</a></li>
                            <li><a href="#" className="hover:text-white">Property Management</a></li>
                        </ul>
                    </div>
                    <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
                        <h2 className="text-white font-semibold text-xl">Information</h2>
                        <ul className="space-y-4 mt-4">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-white">Join Us</a></li>
                        </ul>
                    </div>
                    <div className="px-3.75 mt-9 w-6/12 sm:w-auto">
                        <h2 className="text-white font-semibold text-xl">Contact Info</h2>
                        <ul className="space-y-3.5 mt-4">
                            <li>
                                <a href="#" className="hover:text-white flex items-center gap-2">
                                    <img src={twitter} className="w-6 shrink-0" alt="" />
                                    @HomeNest.io
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white flex items-center gap-2">
                                    <img src={linkedin} className="w-6 shrink-0" alt="" />
                                    @HomeNest.io
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white flex items-center gap-2">
                                    <img src={facebook} className="w-6 shrink-0" alt="" />
                                    @HomeNest.io
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white flex items-center gap-2">
                                    <img src={email} className="w-6 shrink-0" alt="" />
                                    info@HomeNest.io
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-12 lg:mt-20 py-7.5 border-t border-accent/20">
                    <p className="text-accent">Copyright © 2025 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;