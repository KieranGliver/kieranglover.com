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
				<Image
					src="/toronto-skyline.jpg"
					height={3001}
					width={6759}
					className="w-full"
					alt="Toronto skyline at night"
				/>
				<Card className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2/3 overflow-visible">
					<div className="absolute -top-12 left-6 ">
						<Avatar />
					</div>
					<CardContent>
						<div className="pl-28 mb-4 mt-2">
							<CardTitle>Kieran Glover</CardTitle>
						</div>
						<CardDescription className="mb-4">
							This is a one liner
						</CardDescription>
						<div className="flex justify-self-center w-2/3 justify-between ">
							{socialLinks.map((link) => (
								<Button key={link.label} size="lg" className="w-1/4" asChild>
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
