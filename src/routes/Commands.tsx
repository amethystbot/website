import { Fragment } from 'react';
import { Link } from "react-router-dom";

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import Footer from "../components/Footer";

function Commands() {
	return (
		<Fragment>
			<div className="container px-4 py-16 lg:py-20 mx-auto xl:max-w-4xl text-center">
				<h1 className="text-4xl font-extrabold tracking-tight dark:text-gray-100 text-gray-800 sm:leading-none md:text-5xl lg:text-6xl">Commands</h1>
				<Table>
					<Thead>
						<Tr>
							<Th>Command</Th>
							<Th>Description</Th>
							<Th>Usage</Th>
							<Th>Example</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>/bedwars</Td>
							<Td>Shows you the provided player's BedWars stats</Td>
							<Td>/bedwars (IGN)</Td>
							<Td>/bedwars cxntered</Td>
						</Tr>
						<Tr>
							<Td>/blitzsurvivalgames</Td>
							<Td>Shows you the provided player's Blitz Survival Games stats</Td>
							<Td>/blitzsurvivalgames (IGN)</Td>
							<Td>/blitzsurvivalgames cxntered</Td>
						</Tr>
						<Tr>
							<Td>/buildbattle</Td>
							<Td>Shows you the provided player's Build Battle stats</Td>
							<Td>/buildbattle (IGN)</Td>
							<Td>/buildbattle cxntered</Td>
						</Tr>
						<Tr>
							<Td>/copsandcrims</Td>
							<Td>Shows you the provided player's Cops and Crims stats</Td>
							<Td>/copsandcrims (IGN)</Td>
							<Td>/buildbattle cxntered</Td>
						</Tr>
						<Tr>
							<Td>/duels</Td>
							<Td>Shows you the provided player's Duels stats</Td>
							<Td>/duels (IGN)</Td>
							<Td>/duels cxntered</Td>
						</Tr>
						<Tr>
							<Td>/guild</Td>
							<Td>Shows you the provided guild's stats</Td>
							<Td>/guild (Query) (True/False)</Td>
							<Td>/guild Rebel False</Td>
						</Tr>
						<Tr>
							<Td>/hypixel</Td>
							<Td>Shows you the provided player's Hypixel stats</Td>
							<Td>/hypixel (IGN)</Td>
							<Td>/hypixel cxntered</Td>
						</Tr>
						<Tr>
							<Td>/link</Td>
							<Td>Allows you to link your Minecraft account to Discord</Td>
							<Td>/link [IGN]</Td>
							<Td>/link cxntered</Td>
						</Tr>
						<Tr>
							<Td>/megawalls</Td>
							<Td>Shows you the provided player's Mega Walls stats</Td>
							<Td>/megawalls (IGN)</Td>
							<Td>/megawalls cxntered</Td>
						</Tr>
						<Tr>
							<Td>/murdermystery</Td>
							<Td>Shows you the provided player's Murder Mystery stats</Td>
							<Td>/murdermystery (IGN)</Td>
							<Td>/murdermystery cxntered</Td>
						</Tr>
						<Tr>
							<Td>/skywars</Td>
							<Td>Shows you the provided player's SkyWars stats</Td>
							<Td>/skywars (IGN)</Td>
							<Td>/skywars cxntered</Td>
						</Tr>
						<Tr>
							<Td>/smashheroes</Td>
							<Td>Shows you the provided player's Smash Heroes stats</Td>
							<Td>/smashheroes (IGN)</Td>
							<Td>/smashheroes cxntered</Td>
						</Tr>
						<Tr>
							<Td>/socials</Td>
							<Td>Shows you the provided player's social medias</Td>
							<Td>/socials (IGN)</Td>
							<Td>/socials cxntered</Td>
						</Tr>
						<Tr>
							<Td>/speeduhc</Td>
							<Td>Shows you the provided player's SpeedUHC stats</Td>
							<Td>/speeduhc (IGN)</Td>
							<Td>/speeduhc cxntered</Td>
						</Tr>
						<Tr>
							<Td>/status</Td>
							<Td>Shows you the provided player's status</Td>
							<Td>/status (IGN)</Td>
							<Td>/status cxntered</Td>
						</Tr>
						<Tr>
							<Td>/tntgames</Td>
							<Td>Shows you the provided player's TNT Games stats</Td>
							<Td>/tntgames (IGN)</Td>
							<Td>/tntgames cxntered</Td>
						</Tr>
						<Tr>
							<Td>/uhc</Td>
							<Td>Shows you the provided player's UHC stats</Td>
							<Td>/uhc (IGN)</Td>
							<Td>/uhc cxntered</Td>
						</Tr>
						<Tr>
							<Td>/unlink</Td>
							<Td>Allows you to unlink your Minecraft account from Discord</Td>
							<Td>/unlink</Td>
							<Td>/unlink</Td>
						</Tr>
						<Tr>
							<Td>/vampirez</Td>
							<Td>Shows you the provided player's VampireZ stats</Td>
							<Td>/vampirez (IGN)</Td>
							<Td>/vampirez cxntered</Td>
						</Tr>
						<Tr>
							<Td>/watchdog</Td>
							<Td>Shows you Watchdog's stats</Td>
							<Td>/watchdog</Td>
							<Td>/watchdog</Td>
						</Tr>
						<Tr>
							<Td>/woolwars</Td>
							<Td>Shows you the provided player's Wool Wars stats</Td>
							<Td>/woolwars stats (IGN) | /woolwars position (IGN)</Td>
							<Td>/woolwars stats cxntered | /woolwars position cxntered</Td>
						</Tr>
						<Tr>
							<Td>/cape</Td>
							<Td>Shows you the provided player's Minecraft cape</Td>
							<Td>/cape (IGN)</Td>
							<Td>/cape cxntered</Td>
						</Tr>
						<Tr>
							<Td>/namehistory</Td>
							<Td>Shows you the provided player's name history</Td>
							<Td>/namehistory (IGN)</Td>
							<Td>/namehistory cxntered</Td>
						</Tr>
						<Tr>
							<Td>/optifine</Td>
							<Td>Shows you the provided player's OptiFine cape</Td>
							<Td>/optifine (IGN)</Td>
							<Td>/optifine cxntered</Td>
						</Tr>
						<Tr>
							<Td>/server</Td>
							<Td>Shows info about the provided server</Td>
							<Td>/server [IP]</Td>
							<Td>/server mc.hypixel.net</Td>
						</Tr>
						<Tr>
							<Td>/skin</Td>
							<Td>Shows you the provided player's skin</Td>
							<Td>/skin (IGN)</Td>
							<Td>/skin cxntered</Td>
						</Tr>
						<Tr>
							<Td>/uuid</Td>
							<Td>Shows you the provided player's UUID</Td>
							<Td>/uuid (IGN)</Td>
							<Td>/uuid cxntered</Td>
						</Tr>
						<Tr>
							<Td>/help</Td>
							<Td>Shows a list of commands</Td>
							<Td>/help (Command)</Td>
							<Td>/help | /help bedwars</Td>
						</Tr>
						<Tr>
							<Td>/info</Td>
							<Td>Shows you info about Amethyst</Td>
							<Td>/info</Td>
							<Td>/info</Td>
						</Tr>
						<Tr>
							<Td>/links</Td>
							<Td>Shows you links related to Amethyst</Td>
							<Td>/links</Td>
							<Td>/links</Td>
						</Tr>
						<Tr>
							<Td>/ping</Td>
							<Td>Shows you the bot's latency and the API's latency</Td>
							<Td>/ping</Td>
							<Td>/ping</Td>
						</Tr>
						<Tr>
							<Td>/vote</Td>
							<Td>Shows you a link to vote for Amethyst on Top.gg</Td>
							<Td>/vote</Td>
							<Td>/vote</Td>
						</Tr>
					</Tbody>
				</Table>
			</div>

			<div className="border-t dark:border-gray-800 border-gray-200"></div>

			<section className="max-w-7xl text-center sm:text-left mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
					<span className="block">Ready to use Amethyst?</span>
					<span className="block text-indigo-500">Add Amethyst to your server.</span>
				</h2>

				<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
					<div className="inline-flex rounded-md shadow">
						<a href="https://go.fowled.club/mango" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
							Add Amethyst
						</a>
					</div>

					<div className="ml-3 inline-flex rounded-md shadow">
						<a href="https://discord.gg/9aT626ABdq" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
							Support Server
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</Fragment>
	);
}

export default Commands;
