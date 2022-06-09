import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";

import { AcademicCapIcon, FastForwardIcon, ChartBarIcon, InformationCircleIcon, CubeIcon, DotsCircleHorizontalIcon } from "@heroicons/react/outline";

import TwitterIcon from "../icons/Twitter";
import GitHubIcon from "../icons/GitHub";

import Footer from "../components/Footer";

function Home() {
	const statsObject = [
		{ figure: "100+", description: "Servers" },
		{ figure: "16,600+", description: "Members" },
		{ figure: "3,200+", description: "Channels" },
	];

	const features = [
		{ feature: "Easy to use", feature_description: "Being integrated with Discord's slash commands, Amethyst is really easy to use. All you need to do is input the command's name and let Discord take the rest.", icon: AcademicCapIcon },
		{ feature: "Stats, quickly", feature_description: "Easy to see stats, allowing you to quickly check and track stats of you or other people.", icon: FastForwardIcon },
		{ feature: "Many gamemodes", feature_description: "Amethyst has stats of most Hypixel gamemodes, with lots more added with updates frequently.", icon: ChartBarIcon },
		{ feature: "Hypixel commands", feature_description: "Amethyst is a bot focused on the Hypixel network, so it makes sense for there to be a plethora of Hypixel commands.", icon: InformationCircleIcon },
		{ feature: "Minecraft commands", feature_description: "Easily see information such as your in game skin, cape, or even information about a server.", icon: CubeIcon },
		{ feature: "...and more!", feature_description: "Join the support server to request what you'd like to see added to Amethyst!", icon: DotsCircleHorizontalIcon },
	];

	return (
		<Fragment>
			<section id="header" className="container px-4 py-16 lg:py-20 mx-auto xl:max-w-4xl text-center">
				<h1 className="text-4xl font-extrabold tracking-tight dark:text-gray-100 text-gray-800 sm:leading-none md:text-5xl lg:text-6xl">Track Hypixel stats quickly and easily with Amethyst.</h1>

				<h3 className="text-gray-500 dark:text-gray-300 font-normal text-lg my-8">
					Do you ever need to quickly check someone's Hypixel statistics? Are websites or other bots too confusing? Meet Amethyst. <br />
					<br />
					Amethyst is a bot focused on the Hypixel Network, allowing you to track players' stats on different Hypixel gamemodes and do a lot more. Scroll down to learn more.
				</h3>

				<a href="https://discord.com/oauth2/authorize?client_id=771667974343360552&permissions=264192&scope=bot%20applications.commands" className="mt-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Add to your server
				</a>

				<a href="https://discord.gg/ekxZPZAKUV" className="text-white bg-gray-800 hover:bg-black focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 text-center md:mr-0 dark:focus:ring-black ml-2">
					Support Server
				</a>

				<div className="mt-10 border-t border-gray-200 dark:border-gray-800 text-left flex flex-wrap flex-row space-y-0 space-x-8 md:space-x-16 justify-center max-w-fit mx-auto">
					{statsObject.map((el) => (
						<div key={el.description} className="flex flex-col pt-6">
							<h1 className="text-3xl font-bold text-indigo-500">{el.figure}</h1>
							<h5 className="text-gray-700 dark:text-gray-200">{el.description}</h5>
						</div>
					))}
				</div>
			</section>

			<section className="py-16 bg-white dark:bg-gray-800 text-center" id="features">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Title content="Features" />
					<Header content="Features of Amethyst" />
					<Subtitle content="Everything that makes up Amethyst." />

					<div className="mt-10 text-left">
						<div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 sm:gap-y-16 justify-center">
							{features.map((item) => (
								<div key={item.feature} className="flex flex-col">
									<div className="absolute flex items-center rounded-lg text-white p-3 bg-indigo-500">
										<item.icon className="h-6 w-6" />
									</div>

									<span className="mt-16 space-y-2">
										<h1 className="text-gray-800 dark:text-gray-100 font-semibold text-xl">{item.feature}</h1>

										<h3 className="text-gray-500 dark:text-gray-300 font-normal">{item.feature_description}</h3>
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="team" className="container px-4 py-16 mx-auto sm:max-w-full text-center bg-gray-50 dark:bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<Title content="Team" />
					<Header content="About us" />
					<Subtitle content="The person who made Amethyst." />

					<div className="flex flex-wrap flex-col sm:flex-row justify-center mx-auto max-w-2xl sm:gap-x-12">
						<div className="mt-8 bg-transparent rounded-lg mx-auto">
							<div className="flex flex-col items-center py-5">
								<img alt="cxntered's avatar" className="w-52 h-52 rounded-full shadow-lg" src="/assets/cxntered.png" />
							</div>

							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">cxntered</h3>
							<span className="text-lg font-semibold text-indigo-500">Owner and Developer</span>

							<span className="flex justify-center space-x-3 mt-2 dark:text-gray-100">
								<a href="https://github.com/cxntered">
									<GitHubIcon />
								</a>

								<a href="https://twitter.com/cxntered">
									<TwitterIcon />
								</a>
							</span>
						</div>
					</div>
				</div>
			</section>

			<div className="border-t dark:border-gray-800 border-gray-200"></div>

			<section className="max-w-7xl text-center sm:text-left mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
					<span className="block">Ready to use Amethyst?</span>
					<span className="block text-indigo-500">Add Amethyst to your server.</span>
				</h2>

				<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
					<div className="inline-flex rounded-md shadow">
						<a href="https://discord.com/oauth2/authorize?client_id=771667974343360552&permissions=264192&scope=bot%20applications.commands" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
							Add Amethyst
						</a>
					</div>

					<div className="ml-3 inline-flex rounded-md shadow">
						<a href="https://discord.gg/ekxZPZAKUV" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
							Support Server
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</Fragment>
	);
}

export default Home;

function Title(props: { content: string }) {
	return <h2 className="text-base text-indigo-600 dark:text-indigo-500 font-semibold tracking-wide uppercase">{props.content}</h2>;
}

function Header(props: { content: string }) {
	return <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">{props.content}</p>;
}

function Subtitle(props: { content: string }) {
	return <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-200 mx-auto">{props.content}</p>;
}
