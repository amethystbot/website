import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";

function Navbar() {

	const navigation = [
		{ name: "Support Server", link: "https://discord.gg/ekxZPZAKUV" },
		{ name: "GitHub", link: "https://github.com/amethyst-dev" },
		{ name: "Top.gg", link: "https://top.gg/bot/771667974343360552" },
	];

	return (
		<nav className="max-w-7xl mx-auto bg-transparent border-gray-200 dark:border-gray-800 border-b px-2 sm:px-4 py-6 rounded">
			<div className="container flex flex-wrap justify-between items-center">
				<Link to="/" className="flex">
					<img alt="Amethyst's Logo" src="/assets/Amethyst.svg" width="45.2" height="42" />
					<span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Amethyst</span>
				</Link>

				<div className="flex">
					<div className="hidden lg:visible justify-between items-center w-full lg:flex lg:w-auto border-r pr-6 border-gray-200 dark:border-gray-800">
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold">
							<Link to="/commands" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Commands
							</Link>
							{navigation.map((item) => (
								<li key={item.name}>
									<a href={item.link} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<button id="theme-toggle" type="button" className="ml-3 text-blue-800 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-2">
						<svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>

						<svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;