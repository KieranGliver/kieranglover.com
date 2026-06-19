import { Card, CardContent, CardTitle } from '@/components/ui/card';

export function Contact() {
	return (
		<section className="px-4 md:px-8">
			<Card className="mx-auto max-w-2xl">
				<CardContent className="pt-6">
					<CardTitle className="text-2xl font-bold mb-4">Contact</CardTitle>
					<p className="text-sm text-muted-foreground mb-4">
						Open to job opportunities, freelance work, and collaboration. Reach
						out anytime.
					</p>
					<p className="text-sm text-muted-foreground">
						<a
							href="mailto:kieran.r.glover@gmail.com"
							className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
						>
							kieran.r.glover@gmail.com
						</a>
					</p>
				</CardContent>
			</Card>
		</section>
	);
}
