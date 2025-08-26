// src/components/Layout.tsx
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen">
			{/* NavBar: pasa props si quieres personalizar logo / números / url */}
			<NavBar />

			{/* Main content: ocupa el espacio disponible para empujar el footer abajo */}
			<main className="flex-1 bg-white text-gray-900">
				<div className="max-w-5xl mx-auto px-6 py-12">{children}</div>
			</main>

			{/* Footer: también configurable vía props */}
			<Footer />
		</div>
	);
}
