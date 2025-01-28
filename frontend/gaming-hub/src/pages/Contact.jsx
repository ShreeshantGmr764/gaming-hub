import React from "react";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
    FaDiscord,
    FaArrowLeft
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
            <Link to="/" className="absolute top-4 left-4 text-gray-900 dark:text-gray-100">
                <FaArrowLeft className="text-2xl" />
            </Link>
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center border-b pb-3">
                    Contact Us
                </h1>
                <div className="space-y-6">
                    {/* Email Section */}
                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <FaEnvelope className="text-blue-500" /> Email
                        </h2>
                        <a
                            href="mailto:ghimiresrishant764@gmail.com"
                            className="ml-7 text-blue-600 dark:text-blue-400 underline hover:no-underline"
                        >
                            ghimiresrishant764@gmail.com
                        </a>
                        <br />
                        <a
                            href="mailto:parshannakhadka@gmail.com"
                            className="ml-7 text-blue-600 dark:text-blue-400 underline hover:no-underline"
                        >
                            parshannakhadka@gmail.com
                        </a>
                    </div>

                    {/* Phone Section */}
                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <FaPhoneAlt className="text-green-500" /> Phone
                        </h2>
                        <a
                            href="tel:+9779818376762"
                            className="ml-7 text-green-600 dark:text-green-400 underline hover:no-underline"
                        >
                            +977 9818376762
                        </a>
                        <br />
                        <a
                            href="tel:+9779847933000"
                            className="ml-7 text-green-600 dark:text-green-400 underline hover:no-underline"
                        >
                            +977 9847933000
                        </a>
                    </div>

                    {/* WhatsApp Section */}
                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <FaWhatsapp className="text-green-400" /> WhatsApp
                        </h2>
                        <a
                            href="https://wa.me/9779818376762"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-7 text-green-600 dark:text-green-400 underline hover:no-underline"
                        >
                            +977 9818376762
                        </a>
                        <br />
                        <a
                            href="https://wa.me/9779847933000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-7 text-green-600 dark:text-green-400 underline hover:no-underline"
                        >
                            +977 9847933000
                        </a>
                    </div>

                    {/* Discord Section */}
                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <FaDiscord className="text-purple-500" /> Discord
                        </h2>
                        <a
                            href="https://discord.gg/xhdaS5Rz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-7 text-purple-600 dark:text-purple-400 underline hover:no-underline"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
