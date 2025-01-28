import React from 'react';
import qr from '../assets/Qr.jpg';

const Payment = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl">
                {/* Important Notice Section */}
                <div className="w-full max-w-lg bg-red-500 dark:bg-red-700 shadow-lg rounded-2xl p-6 mb-8 text-white animate-fadeIn">
                    <h2 className="text-2xl font-semibold mb-4 font-sans">Important Notice</h2>
                    <p className="text-lg font-mono">
                        You must screenshot the payment and send it to our Discord. If not, the team will not be qualified to play. You must also send the UID of the players.
                    </p>
                </div>

                {/* Title Section */}
                <h1 className="text-4xl font-extrabold mb-8 text-black font-sans">Payment Options</h1>

                {/* Payment Options Container */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* FonePay Section */}
                    <div className="w-full bg-white text-black shadow-lg rounded-2xl p-6 aspect-square flex flex-col items-center justify-center animate-fadeIn">
                        <h2 className="text-2xl font-semibold mb-4 font-sans">Payment Method</h2>
                        <p className="text-lg font-mono">FonePay</p>
                        <img
                            src={qr}
                            alt="FonePay QR Code"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Khalti Section */}
                    <div className="w-full bg-white text-black shadow-lg rounded-2xl p-6 aspect-square flex flex-col items-center justify-center animate-fadeIn">
                        <h2 className="text-2xl font-semibold mb-4 font-sans">Payment Method</h2>
                        <p className="text-lg font-mono">Khalti</p>
                        <p className="text-lg font-mono">Number: 9807440777</p>
                    </div>

                    {/* eSewa Section */}
                    <div className="w-full bg-white text-black shadow-lg rounded-2xl p-6 aspect-square flex flex-col items-center justify-center animate-fadeIn">
                        <h2 className="text-2xl font-semibold mb-4 font-sans">Payment Method</h2>
                        <p className="text-lg font-mono">eSewa</p>
                        <p className="text-lg font-mono">Number: 9807440777</p>
                    </div>
                </div>

                {/* Payment Confirmation Section */}
                <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mt-8 animate-fadeIn">
                    <h2 className="text-2xl font-semibold mb-4 font-sans">Confirm Payment and Send it to My Discord</h2>
                    {/* Button for Payment Confirmation */}
                    <a
                        href="https://discord.gg/JWRgbt8p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-xs py-3 bg-blue-600 text-white text-lg font-semibold text-center rounded-xl shadow-md hover:bg-white hover:shadow-2xl hover:text-black transition duration-300 ease-in-out left-32 relative font-sans"
                    >
                        Confirm Payment
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Payment;
