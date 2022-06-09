import { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function Privacy() {
	useEffect(() => {
		window.scrollTo(0, 0);
	})

	return (
		<Fragment>
			<main className="container px-4 py-16 lg:py-20 mx-auto xl:max-w-4xl text-center">
				<h1 className="text-4xl font-extrabold tracking-tight dark:text-gray-100 text-gray-800 sm:leading-none md:text-5xl lg:text-6xl">Amethyst's Privacy Policy</h1>

				<h3 className="text-gray-500 dark:text-gray-300 font-normal text-lg my-8">
					This is our "Privacy Policy" which sets out the policy which governs our use of information you provide in connection with the <b>Amethyst</b> bot. The terms "you" and "your" refer to all individuals or entities using the bot. The terms "we," "us," "our," refer to <b>cxntered</b> and "bot" refers to <b>Amethyst</b>. <br /><br />
					We may update this Privacy Policy from time to time. Changes in our Privacy Policy will be effective immediately. If you are a regular user of this bot, we recommend that you check this Privacy Policy on a regular basis. By using the bot, you consent to the collection, use and transfer of your information in accordance with this Privacy Policy. If you do not agree to this Privacy Policy, please do not use this bot. <br /><br />
					<b style={{ textDecoration: "underline" }}>What data is stored?</b> <br /> When you use our Bot, if you run the link command and successfully link your Discord and Minecraft accounts, we will store your user ID and Minecraft UUID. <br /><br />
					<b style={{ textDecoration: "underline" }}>How long is this data stored for?</b> <br /> Indefinitely, until you decide to unlink your accounts, where your data gets deleted off of our database. <br /><br />
					<b style={{ textDecoration: "underline" }}>How do I get my data removed?</b> <br /> To get your data removed from the database, simply run the unlink command in Discord. <br /><br />
					<b style={{ textDecoration: "underline" }}>Is this data shared with anyone?</b> <br /> No third parties are ever given access to this data. <br /><br />
					If you have any regards or issues, feel free to DM us on Discord at <b>cxntered#8012</b> or email us at <b><a href="mailto:cxntered@duck.com" style={{ textDecoration: "underline" }}>cxntered@duck.com</a></b>.
				</h3>
			</main>

			<Footer />
		</Fragment>
	);
}

export default Privacy;
