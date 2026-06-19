import Image from 'next/image';
import { Avatar } from '@/components/Avatar';
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';

const socialLinks: { label: string; href: string }[] = [
	{ label: 'Github', href: 'https://github.com/KieranGliver' },
	{
		label: 'Linkedin',
		href: 'https://www.linkedin.com/in/kieran-glover-211b46175/',
	},
	{ label: 'Itch.io', href: 'https://eggsenbacon.itch.io/' },
];

export function Hero() {
	return (
		<section>
			<Card className="relative p-0">
				<div className="relative min-h-[340px] md:min-h-0 md:aspect-[6759/3001]">
					<Image
						src="/toronto-skyline.jpg"
						fill
						className="object-cover object-center"
						sizes="100vw"
						alt="Toronto skyline at night"
					/>
				</div>
				<Card className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 w-11/12 md:w-2/3 overflow-visible">
					<div className="absolute -top-10 left-4 md:-top-16 md:left-6">
						<Avatar />
					</div>
					<CardContent className="pt-4 md:pt-6">
						<div className="pl-28 mb-2 md:pl-36">
							<CardTitle className="text-xl md:text-2xl font-bold">
								Kieran Glover
							</CardTitle>
						</div>
						<CardDescription className="mb-4">
							Software developer based in Toronto. I build games, apps, and
							tools.
						</CardDescription>
						<div className="grid grid-cols-3 gap-2">
							{socialLinks.map((link) => (
								<Button key={link.label} size="lg" asChild>
									<a href={link.href} target="_blank" rel="noopener noreferrer">
										{link.label}
									</a>
								</Button>
							))}
						</div>
					</CardContent>
				</Card>
			</Card>
		</section>
	);
}
