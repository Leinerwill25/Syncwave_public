// app/w/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../../public/globals.css'; // conserva tu path actual si funciona en tu proyecto

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Syncwave - Tu aliado en SaaS y automatización',
	description: 'Transformamos tu negocio con soluciones SaaS escalables y automatizadas. Descubre cómo optimizar tus procesos y aumentar tus ingresos.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
				{/* Skip link for accessibility */}
				<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:shadow">
					Ir al contenido
				</a>

				{/* Header (navbar) */}
				<header>
					<Navbar />
				</header>

				{/* Main content area */}
				<main id="main" className="min-h-[70vh]">
					{/* center content and keep consistent padding for all pages */}
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
				</main>

				{/* Footer */}
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
