// app/w/cliente/page.tsx
'use client';

import React, { useState } from 'react';
import CTAButtons from '@/components/CTAButtons';
import CTAButtonstwo from '@/components/CTAButtonstwo';
import Modal from '@/components/Modal';

export default function ClientePage() {
	const [open, setOpen] = useState(false);

	return (
		// <Layout>
		<main className="relative overflow-hidden">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left: Texto */}
					<div>
						<h1 id="hero-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
							Hola <span aria-hidden>👋</span> — <span className="text-indigo-600">Bienvenido a Syncwave</span>
						</h1>

						<p className="mt-3 text-gray-600 max-w-prose">Hacemos que tu empresa funcione con menos esfuerzo. Estás en el lugar indicado para descubrir cómo las empresas ahorran tiempo, reducen errores y logran que su equipo se concentre en lo realmente importante.</p>

						{/* CTA row */}
						<div className="mt-6 sm:mt-8">
							<CTAButtons
								primary={{
									text: '👉 Pedir auditoría gratuita (WhatsApp)',
									href: 'https://wa.me/584242070878',
								}}
								secondary={{
									text: 'Ver caso real (3.5h → 3min)',
									href: '#caso-real',
								}}
								onSecondaryClick={() => setOpen(true)}
							/>
							<p className="mt-3 text-sm text-gray-500">Demo funcional antes de pagar — cero riesgo.</p>
						</div>

						{/* Trust / quick benefits */}
						<ul className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
							<li className="flex items-center gap-2">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-semibold">✓</span>
								Soporte 24/7
							</li>
							<li className="flex items-center gap-2">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">⚙</span>
								Integración con tus sistemas
							</li>
							<li className="flex items-center gap-2">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">🔒</span>
								Privacidad y seguridad
							</li>
						</ul>
					</div>

					{/* Right: Illustration */}
					<div className="flex items-center justify-center">
						{/* Right: Video que ocupa 100% del contenedor */}
						<div className="w-full max-w-md">
							<div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-sm overflow-hidden">
								<video className="w-full h-full object-cover" playsInline muted autoPlay loop preload="metadata" poster="/scraping-poster.jpg" aria-label="Demostración de scraping automatizado">
									<source src="/scraping.mp4" type="video/mp4" />
									Tu navegador no soporta video HTML5.
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* BENEFITS / FEATURES */}
			<section id="beneficios" className="max-w-5xl mx-auto px-6 pb-16">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
					<h2 className="text-lg font-semibold text-gray-800">Ahorra hasta un 90% del tiempo en tareas repetitivas</h2>

					<p className="mt-2 text-sm text-gray-600 max-w-prose">Automatizamos procesos: reportes, actualizaciones y transferencias de datos. Opciones flexibles para adaptarnos a tu flujo de trabajo.</p>

					<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-green-50 text-green-600">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<div>
								<h3 className="text-sm font-medium text-gray-800">Automatización segura</h3>
								<p className="mt-1 text-sm text-gray-600">Flujos probados que eliminan pasos manuales repetitivos y errores humanos.</p>
							</div>
						</li>

						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-600">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
								</svg>
							</span>
							<div>
								<h3 className="text-sm font-medium text-gray-800">Resultados rápidos</h3>
								<p className="mt-1 text-sm text-gray-600">Casos reales reduciendo horas de trabajo a minutos — demostrable ROI.</p>
							</div>
						</li>

						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 text-slate-700">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<div>
								<h3 className="text-sm font-medium text-gray-800">Flexibilidad de despliegue</h3>
								<p className="mt-1 text-sm text-gray-600">Soporte en la nube o instalación en tus servidores — tú eliges.</p>
							</div>
						</li>

						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="0" />
								</svg>
							</span>
							<div>
								<h3 className="text-sm font-medium text-gray-800">Soporte dedicado</h3>
								<p className="mt-1 text-sm text-gray-600">Equipo experto que acompaña la implementación y mantenimiento.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>

			{/* CTA BANNER */}
			<section className="max-w-5xl mx-auto px-6 pb-20">
				<div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
					<div>
						<h4 className="text-lg font-semibold">¿Listo para ahorrar tiempo y reducir errores?</h4>
						<p className="mt-1 text-sm opacity-90">Solicita una auditoría gratuita y recibe una demo funcional sin compromiso.</p>
					</div>

					<div className="flex gap-3">
						<CTAButtonstwo
							primary={{
								text: '👉 Pedir auditoría gratuita (WhatsApp)',
								href: 'https://wa.me/584242070878',
							}}
							secondary={{
								text: 'Contactar por Email',
								href: 'mailto:syncwave_agency@gmail.com',
							}}
						/>
					</div>
				</div>
			</section>

			{/* Hidden anchor target (keeps behavior for normal anchor clicks) */}
			<div id="caso-real" />

			{/* Modal: Caso real */}
			<Modal isOpen={open} onClose={() => setOpen(false)} title="Caso real: 3.5h → 3min">
				<div className="grid grid-cols-1 gap-4">
					<div className="aspect-[16/9] rounded-md overflow-hidden border border-slate-100">
						<video className="w-full h-full object-cover" controls preload="metadata" poster="/caso-real-poster.jpg" aria-label="Video caso real">
							<source src="/scraping.mp4" type="video/mp4" />
							Tu navegador no soporta video.
						</video>
					</div>

					<div>
						<p className="text-sm text-gray-600">Aquí va un resumen del caso real: cómo reducimos 3.5 horas de trabajo a 3 minutos usando automatización y flujos seguros.</p>

						<ul className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
							<li className="flex items-center gap-2">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-semibold">✓</span>
								Reducción de tareas manuales
							</li>
							<li className="flex items-center gap-2">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">⚙</span>
								Integración sin downtime
							</li>
						</ul>
					</div>
				</div>
			</Modal>
		</main>
		// </Layout>
	);
}
