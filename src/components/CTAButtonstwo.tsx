// components/CTAButtons.tsx
import React from 'react';

interface CTAProps {
	primary: { text: string; href: string };
	secondary?: { text: string; href: string };
}

export default function CTAButtonstwo({ primary, secondary }: CTAProps) {
	return (
		<div className="flex flex-col gap-3 mt-6">
			<a href={primary.href} target="_blank" className="w-full text-center border border-white bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
				{primary.text}
			</a>
			{secondary && (
				<a href={secondary.href} target="_blank" className="w-full text-center border border-blue-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-500 transition">
					{secondary.text}
				</a>
			)}
		</div>
	);
}
