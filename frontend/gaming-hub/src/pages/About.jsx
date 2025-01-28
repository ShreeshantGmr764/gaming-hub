import React from 'react';

const About = () => {
    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="w-full h-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-4 font-sans">About Us</h1>
                <p className="text-xl mb-6 font-serif">
                    Experience Competitive Gaming Like Never Before!
                </p>
                <p className="mb-4 font-mono">
                    Are you ready to dive into the ultimate gaming experience? We’re hosting custom gaming rooms with a minimal entry fee and offering huge rewards to players who rise to the challenge.
                </p>
                <h2 className="text-2xl font-semibold mb-2 font-sans">Why Join Our Custom Gaming Rooms?</h2>
                <ul className="list-disc list-inside mb-4 font-mono">
                    <li><strong>Thrilling Competition:</strong> Battle it out with skilled players in a dynamic and competitive environment.</li>
                    <li><strong>Big Rewards:</strong> Win exciting prizes and claim your spot as a top gamer.</li>
                    <li><strong>Affordable Entry:</strong> Join the action with a minimal entry fee, making it accessible to everyone.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 font-sans">How to Participate</h2>
                <ul className="list-disc list-inside mb-6 font-mono">
                    <li>Register for your spot in the custom room.</li>
                    <li>Compete against players from around the world.</li>
                    <li>Claim your rewards and enjoy the glory of victory!</li>
                </ul>
                <p className="text-xl font-serif">
                    Join us now and experience the excitement of competitive gaming like never before. Don’t miss out on the chance to showcase your skills and win amazing rewards!
                </p>
            </div>
        </div>
    );
}

export default About;
