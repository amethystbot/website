import { Link } from "react-router-dom";

import GitHubIcon from "../icons/GitHub";

function Footer() {
	return (
		<section className="text-gray-700 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800 border-gray-200">
			<div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
				<span className="flex flex-row">
					<img alt="Amethyst's Logo" src="/assets/Amethyst.svg" width="45.2" height="42" />
					<span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Amethyst</span>
				</span>

				<p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 dark:sm:border-gray-600 sm:mt-0 text-center sm:text-left">© 2022 - Amethyst <br /> Original website by <a href="https://mango.bot" style={{ textDecoration: "underline" }}><b>Mango</b></a> (<a href="https://fowled.club" style={{ textDecoration: "underline" }}><b>fowled</b></a>)</p>
				<p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:ml-auto sm:mr-4 sm:pr-4 sm:border-r sm:border-gray-200 dark:sm:border-gray-600 sm:mt-0 text-center sm:text-right"><Link to="/terms" style={{ textDecoration: "underline" }}><b>Terms of Service</b></Link> <br /> <Link to="/privacy" style={{ textDecoration: "underline" }}><b>Privacy Policy</b></Link></p>

				<span className="inline-flex justify-center mt-4 space-x-2 sm:mt-0 sm:justify-start">

					<a href="https://github.com/addamethyst">
						<GitHubIcon />
					</a>
				</span>
			</div>
		</section>
	);
}

export default Footer;
