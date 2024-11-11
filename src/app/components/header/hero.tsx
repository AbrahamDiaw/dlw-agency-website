"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';


const avatars = [
	{ src: '/avatar1.jpg', alt: 'Client 1' },
	{ src: '/avatar2.jpg', alt: 'Client 2' },
	{ src: '/avatar3.jpg', alt: 'Client 3' },
	{ src: '/avatar4.jpg', alt: 'Client 4' },
	{ src: '/avatar5.jpg', alt: 'Client 5' },
];

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
			<GlowEffect/>
			
			<div className="container px-4 mx-auto relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<div className="mb-8 flex justify-center">
						<div className="flex flex-col items-center gap-4">
							<AvatarGroup/>
							<StarRating/>
						</div>
					</div>
					
					<motion.h1
						className="text-5xl md:text-7xl font-medium text-text-primary mb-6 tracking-tight"
						initial={ { opacity: 0, y: 20 } }
						animate={ { opacity: 1, y: 0 } }
						transition={ { delay: 0.2 } }
					>
						Transformez vos ambitions digitales en { ' ' }
						<span
							className="font-serif italic inline-block w-auto whitespace-nowrap font-normal bg-gradient-to-r from-[var(--brand-primary)] via-[var(--accent-1)] to-[var(--accent-2)] text-transparent bg-clip-text">
                croissance
						</span>{ ' ' }
						mesurable
					</motion.h1>
					
					<motion.p
						className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
						initial={ { opacity: 0, y: 20 } }
						animate={ { opacity: 1, y: 0 } }
						transition={ { delay: 0.3 } }
					>
						{ "Vous recherchez à développer votre activité grâce à des solutions technologiques sur-mesure et des stratégies innovantes, alors vous êtes au bon endroit."}
					</motion.p>
					
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
						initial={ { opacity: 0, y: 20 } }
						animate={ { opacity: 1, y: 0 } }
						transition={ { delay: 0.4 } }
					>
						<a href="#contact" className="btn-primary">
							Prendre rendez-vous
						</a>
						<a href="#clients" className="btn-secondary">
							En savoir plus
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

const GlowEffect = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<div className="absolute -left-1/2 -top-1/2 w-[200%] h-[200%] animate-slow-spin">
				<div
					className="absolute inset-0 bg-gradient-conic from-primary via-accent-1 to-transparent blur-3xl opacity-30"/>
				<div
					className="absolute inset-0 bg-gradient-conic from-accent-2 via-transparent to-transparent blur-3xl rotate-45 opacity-20"/>
				<div
					className="absolute inset-0 bg-gradient-conic from-primary-dark via-transparent to-transparent blur-3xl rotate-90 mix-blend-overlay"/>
			</div>
		</div>
	);
};

const StarRating = () => {
	return (
		<div className="flex items-center gap-1">
			{ [...Array(5)].map((_, index) => (
				<motion.div
					key={ index }
					initial={ { opacity: 0, scale: 0 } }
					animate={ { opacity: 1, scale: 1 } }
					transition={ { delay: index * 0.1 } }
				>
					<Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
				</motion.div>
			)) }
			<motion.span
				initial={ { opacity: 0 } }
				animate={ { opacity: 1 } }
				transition={ { delay: 0.5 } }
				className="ml-2 text-gray-400 text-sm"
			>
				200+ projets transformés en succès
			</motion.span>
		</div>
	);
};

const AvatarGroup = () => {
	return (
		<div className="flex -space-x-2 overflow-hidden">
			{ avatars.map((avatar, index) => (
				<motion.div
					key={ index }
					initial={ { opacity: 0, y: 20 } }
					animate={ { opacity: 1, y: 0 } }
					transition={ { delay: index * 0.1 } }
					className="relative w-9 h-9 rounded-full border border-white/10 overflow-hidden"
				>
					{/*	<Image
						src={avatar.src}
						alt={avatar.alt}
						width={36}
						height={36}
						fill
						className="object-cover"
					/>*/ }
				</motion.div>
			)) }
		</div>
	);
};