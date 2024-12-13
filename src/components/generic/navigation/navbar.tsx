"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	
	// Gestion du scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	
	const headerClass = isScrolled
		? "bg-[var(--header-bg)] shadow-[0_2px_3px_0_var(--shadow-color)]"
		: "bg-[var(--header-bg-dark)] shadow-[0_2px_3px_0_var(--shadow-color)]";
	
	const linkClass = isScrolled
		? "text-[var(--header-text)] hover:text-[var(--brand-primary)]"
		: "text-gray-300 hover:text-white";
	
	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
			<div className="flex justify-center items-center w-full">
				<div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex-shrink-0">
							<Link href="/dlw-agency/public">
								{ <Image
									src={ isScrolled ? "/black-logo-250.svg" :"/green-logo.svg" }
									alt="Logo"
									width={ 40 }
									height={ 40 }
									className="w-auto h-28"
								/> }
							</Link>
						</div>
						
						{/* Desktop Menu */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-center space-x-8">
								<Link href="#services" className={linkClass}>
									Services
								</Link>
								<Link href="#about" className={linkClass}>
									A propos
								</Link>
								<Link href="#blog" className={linkClass}>
									Blog
								</Link>
								<Link
									href="#contact"
									className="btn-primary"
								>
									Contact
								</Link>
							</div>
						</div>
						
						{/* Mobile menu button */}
						<div className="md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className={`inline-flex items-center justify-center p-2 rounded-md ${linkClass}`}
							>
								<span className="sr-only">Open main menu</span>
								{/* Hamburger icon */}
								<svg
									className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								{/* Close icon */}
								<svg
									className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			
			{/* Mobile menu */}
			<div className={`${isOpen ? "block" : "hidden"} md:hidden ${headerClass}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<Link
						href="#about"
						className={`block px-3 py-2 ${linkClass}`}
					>
						About Us
					</Link>
					<Link
						href="#services"
						className={`block px-3 py-2 ${linkClass}`}
					>
						Services
					</Link>
					<Link
						href="#results"
						className={`block px-3 py-2 ${linkClass}`}
					>
						Results
					</Link>
					<Link
						href="#contact"
						className="block px-3 py-2 btn-primary"
					>
						Book a call
					</Link>
				</div>
			</div>
		</nav>
	);
}