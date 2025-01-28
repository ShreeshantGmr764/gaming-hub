import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const games = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Game 1",
      players: 100,
      map: "TDM, Erangle",
      odds: "Rs 300",
      time: "3:00 PM",
      fee: "Rs 50",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Game 2",
      players: 150,
      map: "TDM, Miramar",
      odds: "Rs 500",
      time: "4:00 PM",
      fee: "Rs 100",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Game 3",
      players: 200,
      map: "TDM, Sanhok",
      odds: "Rs 700",
      time: "5:00 PM",
      fee: "Rs 150",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Game 4",
      players: 250,
      map: "TDM, Vikendi",
      odds: "Rs 1000",
      time: "6:00 PM",
      fee: "Rs 200",
    },
  ];

  return (
    <div className="relative top-20 md:top-10 md:mt-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-xl rounded-xl transform transition-all duration-300 hover:scale-105">
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white hover:text-yellow-200 transition duration-300 ease-in-out font-sans">
            Welcome to Gaming Hub
          </h1>
          <p className="text-lg md:text-xl text-white font-mono">
            Your ultimate destination for all things gaming. Join our community
            and stay updated with the latest news, reviews, and more. Discover
            exciting new games every day.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/400"
            alt="Gaming"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Games List Section */}
      <div className="p-6 mt-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-auto rounded-lg mb-4 transition duration-500 ease-in-out transform hover:scale-110"
              />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 font-sans">
                {game.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
                Players: {game.players}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
                Map: {game.map}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
                Odds for Winner: {game.odds}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
                Time: {game.time}
              </p>
              <Link
                to="/payment"
                className="inline-block text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-600 transition duration-300 ease-in-out font-sans"
              >
                Entry Fee: {game.fee}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
