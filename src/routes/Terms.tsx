import { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function Terms() {
	useEffect(() => {
		window.scrollTo(0, 0);
	})

	return (
		<Fragment>
			<main className="container px-4 py-16 lg:py-20 mx-auto xl:max-w-4xl text-center">
				<h1 className="text-4xl font-extrabold tracking-tight dark:text-gray-100 text-gray-800 sm:leading-none md:text-5xl lg:text-6xl">Amethyst's Terms of Service</h1>

				<h3 className="text-gray-500 dark:text-gray-300 font-normal text-lg my-8">
					<b>cxntered</b> ("us" or "we" or "our") owns and operates the <b>Amethyst</b> Discord Bot ("Bot"). The following Terms of Service ("TOS") govern your use of the Bot. <br /><br />
					Using <b>Amethyst</b> is at-will and can be terminated at any time by either us or you for any reason. By using <b>Amethyst</b>, you agree to be bound by the bot's TOS. If you do not agree to be so bound, you are not authorized to use the Bot. This TOS is an agreement between you and <b>Amethyst</b> and govern your access to and use of the bot together with any services offered through the bot. <br /><br />
					We may update these terms from time to time. Changes in our Terms of Service will be effective immediately. If you are a regular user of this bot, we recommend that you check these terms on a regular basis. <br /><br />
					The purpose of <b>Amethyst</b> is to allow you to track players' stats on different Hypixel Network gamemodes. The information supplied by <b>Amethyst</b> is provided for entertainment and informational purposes only, you shall not use it to target, harass, or disrupt any individuals or communities. You agree that you will only use <b>Amethyst</b>, or data/information provided by it, for its intended purposes, and not for other commercial ventures without first seeking approval from <b>Amethyst</b>. Do not use this bot to break Discord's Terms of Services or Discord's community guidelines. <br /><br />
					We have not reviewed, and cannot review, all of the material, including computer software, made available through the websites and webpages to which <b>Amethyst</b> links, and that link to <b>Amethyst</b>. <b>Amethyst</b> does not have any control over these non-<b>Amethyst</b> websites and webpages, and is not responsible for their contents or their use. By linking to a non-<b>Amethyst</b> website or webpage, <b>Amethyst</b> does not represent or imply that it endorses such website or webpage. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. <b>Amethyst</b> disclaims any responsibility for any harm resulting from your use of non-<b>Amethyst</b> websites and webpages.
				</h3>
			</main>

			<Footer />
		</Fragment>
	);
}

export default Terms;
