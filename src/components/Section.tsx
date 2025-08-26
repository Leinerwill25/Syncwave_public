// components/Section.tsx
import React from 'react';

interface SectionProps {
	title: string;
	subtitle?: string;
	text?: string;
	children?: React.ReactNode;
}

export default function Section({ title, subtitle, text, children }: SectionProps) {
	return (
		<section className="mb-12">
			<h2 className="text-2xl font-bold mb-2">{title}</h2>
			{subtitle && <h3 className="text-lg text-gray-600 mb-2">{subtitle}</h3>}
			{text && <p className="text-gray-700 mb-4">{text}</p>}
			{children}
		</section>
	);
}
