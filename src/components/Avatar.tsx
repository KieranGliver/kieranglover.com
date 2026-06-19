import Image from 'next/image';
export function Avatar() {
	return (
		<div className="h-24 w-24 overflow-hidden rounded-full border-white border-2">
			<Image
				src="/luffy-beat-chest.gif"
				alt="Luffy beating his chest"
				className="h-full w-full object-cover "
				height={281}
				width={498}
			/>
		</div>
	);
}
