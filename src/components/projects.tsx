'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/card';

export type Tech =
	| 'TypeScript'
	| 'Svelte'
	| 'React'
	| 'Next.js'
	| 'PostgreSQL'
	| 'Go'
	| 'Godot'
	| 'Docker'
	| 'AWS'
	| 'Vercel'
	| 'Tailwind'
	| 'Shell'
	| 'GitHub Actions'
	| 'Redis'
	| 'npm';

const badgeColors: Record<Tech, string> = {
	TypeScript: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
	Svelte: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
	React: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
	'Next.js': 'bg-zinc-400/20 text-zinc-300 border-zinc-400/30',
	PostgreSQL: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
	Go: 'bg-sky-400/20 text-sky-300 border-sky-400/30',
	Godot: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
	Docker: 'bg-blue-400/20 text-blue-300 border-blue-400/30',
	AWS: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
	Vercel: 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30',
	Tailwind: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
	Shell: 'bg-stone-500/20 text-stone-300 border-stone-500/30',
	'GitHub Actions': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
	Redis: 'bg-red-500/20 text-red-300 border-red-500/30',
	npm: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
};

type Project = {
	title: string;
	description: string;
	href: string;
	image: string;
	badges: Tech[];
};

const projects: Project[] = [
	{
		title: 'opeope.gg',
		description:
			'Competitive deck builder and meta-analysis platform for the One Piece TCG. Free for everyone.',
		href: 'https://opeope.gg',
		image: '/opeope.gg.png',
		badges: [
			'TypeScript',
			'Svelte',
			'PostgreSQL',
			'Redis',
			'Docker',
			'GitHub Actions',
			'Vercel',
		],
	},
	{
		title: 'Bitburner Larry',
		description:
			'Go CLI that syncs local scripts into Bitburner via WebSocket, plus a daemon that runs scripts autonomously inside the game.',
		href: 'https://github.com/KieranGliver/bitburner-larry',
		image: '/bitburner-larry.png',
		badges: ['Go', 'TypeScript'],
	},
	{
		title: 'MC Server Installer',
		description:
			"Zero-dependency Minecraft server installer for Ubuntu cloud instances. Paste one script into EC2 user data and you're running.",
		href: 'https://github.com/KieranGliver/mc-server',
		image: '/minecraft-server.png',
		badges: ['Go', 'Shell', 'AWS'],
	},
	{
		title: 'Svelte Search Component',
		description:
			'Reusable generic fuzzy search component for Svelte 5, built with Fuse.js and fully typed with TypeScript.',
		href: 'https://github.com/KieranGliver/search-component-svelte',
		image: '/svelte-search.png',
		badges: ['Svelte', 'TypeScript', 'npm'],
	},
	{
		title: 'kieranglover.com',
		description: 'This site. Built with Next.js, React, and Tailwind.',
		href: 'https://github.com/KieranGliver/kieranglover.com',
		image: '/this-website.png',
		badges: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'AWS'],
	},
	{
		title: 'First to Bleed',
		description:
			'Bounce, build, battle. A strategy browser game built in Godot.',
		href: 'https://eggsenbacon.itch.io/first-to-bleed',
		image: '/first-to-bleed.png',
		badges: ['Godot'],
	},
	{
		title: 'Space Power Defense',
		description:
			'Produce, exploit, survive. A survival browser game built in Godot.',
		href: 'https://eggsenbacon.itch.io/space-power-defense',
		image: '/space-defense.png',
		badges: ['Godot'],
	},
	{
		title: 'Morphing Mazes',
		description:
			'Navigate, swap, survive. A maze-based browser game built in Godot.',
		href: 'https://eggsenbacon.itch.io/morphing-mazes',
		image: '/morphing-mazes.png',
		badges: ['Godot'],
	},
	{
		title: 'Inventory Demo',
		description: 'An interactive inventory system demo built in Godot.',
		href: 'https://eggsenbacon.itch.io/inventory-demo',
		image: '/inventory-demo.png',
		badges: ['Godot'],
	},
	{
		title: 'Godot Shooting Gallery',
		description: 'A shooting gallery demo built in Godot.',
		href: 'https://eggsenbacon.itch.io/godot-shooting-gallery',
		image: '/shooting-gallery.png',
		badges: ['Godot'],
	},
];

const PAGE_SIZE = 9;

export function Projects() {
	const [page, setPage] = useState(0);
	const sectionRef = useRef<HTMLElement>(null);
	const isFirstRender = useRef(true);
	const totalPages = Math.ceil(projects.length / PAGE_SIZE);
	const visible = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

	// biome-ignore lint/correctness/useExhaustiveDependencies: page is an intentional trigger, not read inside the callback
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}, [page]);

	return (
		<section ref={sectionRef} className="px-4 md:px-8">
			<h2 className="text-2xl font-bold mb-6">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{visible.map((project) => (
					<a
						key={project.title}
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						className="block"
					>
						<Card className="h-full flex flex-col hover:bg-accent transition-colors overflow-hidden">
							<div className="relative h-36 w-full shrink-0">
								<Image
									src={project.image}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover"
									alt={project.title}
								/>
							</div>
							<CardContent className="pt-4 flex flex-col gap-3 flex-1">
								<CardTitle className="text-base">{project.title}</CardTitle>
								<CardDescription className="flex-1">
									{project.description}
								</CardDescription>
								<div className="flex flex-nowrap gap-1.5 overflow-x-auto pb-0.5">
									{project.badges.map((badge) => (
										<span
											key={badge}
											className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${badgeColors[badge]}`}
										>
											{badge}
										</span>
									))}
								</div>
							</CardContent>
						</Card>
					</a>
				))}
			</div>
			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-2 mt-6">
					<Button
						variant="outline"
						size="sm"
						onClick={() => setPage((p) => p - 1)}
						disabled={page === 0}
					>
						Previous
					</Button>
					{Array.from({ length: totalPages }, (_, i) => {
						return (
							<Button
								// biome-ignore lint/suspicious/noArrayIndexKey: pagination buttons are stable and never reorder
								key={`page-${i}`}
								variant={page === i ? 'default' : 'outline'}
								size="sm"
								onClick={() => setPage(i)}
							>
								{i + 1}
							</Button>
						);
					})}
					<Button
						variant="outline"
						size="sm"
						onClick={() => setPage((p) => p + 1)}
						disabled={page === totalPages - 1}
					>
						Next
					</Button>
				</div>
			)}
		</section>
	);
}
