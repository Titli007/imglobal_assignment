import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import hero_image from '../assets/hero_image.png';
import feature_icon1 from '../assets/Features_Icon.png';
import feature_icon2 from '../assets/Features_Icon (1).png';
import feature_icon3 from '../assets/Features_Icon (2).png';
import logo from '../assets/Logo_.png';
import RegisterModal from "../components/modals/Register";
import LoginModal from "../components/modals/Login";

const LandingPage = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    useEffect(() => {
        // Show login modal after 6 seconds
        const timer = setTimeout(() => {
            setIsLoginOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="font-sans">
            <Nav />
            {/* Hero Section */}
            <div
                className="relative h-[400px] bg-cover bg-center text-white flex items-center px-10"
                style={{ backgroundImage: `url(${hero_image})` }}>
                <div className="max-w-lg space-y-2">
                    <h2 className="text-xl font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </h2>
                    <p className="mt-2 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <button onClick={() => setIsLoginOpen(true)} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full">
                        Login
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="text-center py-10">
                <h2 className="text-pink-500 font-bold text-2xl">Lorem ipsum dolor sit amet</h2>
                <div className="flex justify-center gap-24 mt-6">
                    {[feature_icon1, feature_icon2, feature_icon3].map((icon, index) => (
                        <div key={index} className="p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col items-center w-40">
                            <img src={icon} alt={`Feature ${index + 1}`} className="w-14 h-14 mb-3" />
                            <p>Lorem <span className="font-bold">ipsum</span></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-10 flex justify-between">
    {/* Left Section: Title & Button */}
    <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold">
            Lorem ipsum <br />
            <span className="text-pink-500">dolor</span>
        </h2>
        <button className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-full">
            Sit Amet
        </button>
    </div>

    {/* Right Section: Two Parts */}
    <div className="flex flex-col gap-4">
        {/* Top Section: 01 & 02 */}
        <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-pink-100 rounded-lg shadow-md">
                <span className="text-pink-500 font-bold">01</span>
                <p>Sit Amet</p>
            </div>
            <div className="p-6 bg-pink-100 rounded-lg shadow-md">
                <span className="text-pink-500 font-bold">02</span>
                <p>Lorem Ipsum Dolor Sit Amet</p>
            </div>
        </div>

        {/* Bottom Section: 03 (Full Width) */}
        <div className="p-6 bg-pink-100 rounded-lg shadow-md">
            <span className="text-pink-500 font-bold">03</span>
            <p>Consectetur <span className="text-pink-500">Adipiscing</span> Elit...</p>
        </div>
    </div>
</div>


            {/* Footer */}
            <footer className="p-6 border-top border-5 border-gray-200">
                <div className="max-w-6xl mx-auto flex justify-between items-start">
                    <p className="font-bold text-lg">
                        <img src={logo} alt="logo" />
                    </p>
                    <div className="grid grid-cols-2 gap-20 text-lg">
                        <div><p>sit amet</p><p>ipsum</p><p>ut labore</p><p>consectetur</p></div>
                        <div><p>sit amet</p><p>ipsum</p><p>ut labore</p><p>consectetur</p></div>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSwitch={() => { setIsLoginOpen(false); setIsRegisterOpen(true); }} />
            <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} onSwitch={() => { setIsRegisterOpen(false); setIsLoginOpen(true); }} />
        </div>
    );
};

export default LandingPage;
