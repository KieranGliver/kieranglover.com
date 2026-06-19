import { Card, CardContent, CardTitle } from '@/components/ui/card';

export function About() {
	return (
		<section className="px-4 py-12 md:px-8">
			<Card className="mx-auto max-w-2xl">
				<CardContent className="pt-6">
					<CardTitle className="text-2xl font-bold mb-6">About Me</CardTitle>
					<div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
						<p>
							I'm a Computer Science graduate from the University of Waterloo,
							based in Toronto. Coding clicked for me as a kid making Unity
							games and posting them on Kongregate. These days I build
							full-stack web apps with a strong frontend focus in TypeScript
							across SvelteKit, React, and PostgreSQL, with AI tools like Claude
							and GitHub Copilot as a real part of my workflow.
						</p>
						<p>
							My biggest project is{' '}
							<a
								href="https://opeope.gg"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
							>
								opeope.gg
							</a>{' '}
							— a competitive deck builder and meta-analysis platform for the
							One Piece TCG. I'm a big fan of the game and wanted to build
							something for the community that was easy to use and completely
							free.
						</p>
						<p>
							Building it end-to-end meant getting hands-on with the full
							lifecycle: designing the database schema and system architecture
							from scratch, setting up CI/CD pipelines with GitHub Actions, and
							deploying to production.
						</p>
						<p>
							I'm actively looking for entry-level developer roles. Feel free to
							reach out.
						</p>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
