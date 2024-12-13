import Image from 'next/image'

import {
	logoBrightPath,
	logoFamilyFund, logoGreenLife,
	logoHomeWork,
	logoMailSmirk, logoNorthAdventures,
	logoPhobiaLight,
	logoUnseal
} from "@/components/specific/clients/clients-logo";
import { Container } from "@/components/generic/container";
import { FadeIn, FadeInStagger } from "@/components/generic/motion/fade-in";

const clients = [
	['Phobia', logoPhobiaLight],
	['Family Fund', logoFamilyFund],
	['Unseal', logoUnseal],
	['Mail Smirk', logoMailSmirk],
	['Home Work', logoHomeWork],
	['Green Life', logoGreenLife],
	['Bright Path', logoBrightPath],
	['North Adventures', logoNorthAdventures],
]

export default function Clients(){
	return (
		<div className="mt-24 rounded-4xl bg-background py-20 sm:mt-32 sm:py-32 lg:mt-24">
			<Container>
				<FadeIn className="flex items-center gap-x-8">
					<h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
						We’ve worked with hundreds of amazing people
					</h2>
					<div className="h-px flex-auto bg-neutral-800"/>
				</FadeIn>
				<FadeInStagger faster>
					<ul
						role="list"
						className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
					>
						{ clients.map(([client, logo]) => (
							<li key={ client }>
								<FadeIn>
									<Image src={ logo } alt={ client } unoptimized/>
								</FadeIn>
							</li>
						)) }
					</ul>
				</FadeInStagger>
			</Container>
		</div>
	);
}