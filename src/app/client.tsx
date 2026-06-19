'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { Button } from '@/components/ui/button';

type Phase = 'intro' | 'flashing' | 'main';

export function App() {
	const [phase, setPhase] = useState<Phase>('intro');
	const [visible, setVisible] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (phase === 'main') {
			const id = setTimeout(() => setVisible(true), 20);
			return () => clearTimeout(id);
		}
	}, [phase]);

	function handleEnter() {
		audioRef.current?.play().catch(() => {});
		setPhase('flashing');
	}

	return (
		<div className="fixed inset-0 bg-black">
			{/* biome-ignore lint/a11y/useMediaCaption: decorative sound effect, no dialogue content */}
			<audio ref={audioRef} src="/Heartbeat.wav" preload="auto" />

			{phase === 'intro' && (
				<div className="flex h-full items-center justify-center">
					<Button
						variant="outline"
						onClick={handleEnter}
						className="px-12 py-4 text-base"
					>
						Click to enter
					</Button>
				</div>
			)}

			{phase === 'flashing' && (
				<>
					<div
						className="fixed inset-0"
						style={{ animation: 'hb-flash-1 126ms linear forwards' }}
					>
						<Image
							src="/heartbeat-impact-1.png"
							alt=""
							fill
							sizes="100vw"
							style={{ objectFit: 'cover' }}
							priority
						/>
					</div>
					<div
						className="fixed inset-0"
						style={{ animation: 'hb-flash-2 126ms linear forwards' }}
						onAnimationEnd={() => setPhase('main')}
					>
						<Image
							src="/heartbeat-impact-2.png"
							alt=""
							fill
							sizes="100vw"
							style={{ objectFit: 'cover' }}
							priority
						/>
					</div>
				</>
			)}

			<div
				className={`h-full overflow-y-auto transition-opacity duration-500 ${phase !== 'main' ? 'pointer-events-none' : ''}`}
				style={{ opacity: phase === 'main' && visible ? 1 : 0 }}
			>
				<Hero />
				<About />
			</div>
		</div>
	);
}
