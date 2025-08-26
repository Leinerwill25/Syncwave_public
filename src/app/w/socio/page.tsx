'use client';

import React, { useCallback, useState } from 'react';
import CTAButtons from '@/components/CTAButtons';
import Image from 'next/image';

export default function SocioPage() {
	const [showDemoNote, setShowDemoNote] = useState(false);
	const [downloading, setDownloading] = useState(false);

	// Función de descarga centralizada (misma idea que en CTAButtons)
	const downloadPack = useCallback(async () => {
		try {
			setDownloading(true);
			const response = await fetch('/api/packSocios');
			if (!response.ok) throw new Error('Error al generar el PDF');

			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'Syncwave_Pack_Comercial.pdf';
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
		} catch (err) {
			console.error('Error descargando pack:', err);
			alert('No se pudo descargar el PDF. Intenta nuevamente más tarde.');
		} finally {
			setDownloading(false);
		}
	}, []);

	// botón reutilizable para UI pequeña (usa downloadPack)
	const PackButtonSmall = ({ children }: { children?: React.ReactNode }) => (
		<button type="button" onClick={downloadPack} disabled={downloading} aria-busy={downloading} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-medium hover:bg-sky-100 transition disabled:opacity-60 disabled:cursor-wait">
			{/* spinner */}
			{downloading ? (
				<svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
					<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
					<path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				</svg>
			) : (
				<svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
					<path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			)}
			<span>{children ?? 'Descargar pack'}</span>
		</button>
	);

	return (
		<main className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
				<div className="bg-white/96 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<div className="inline-flex items-center gap-3">
							<span className="rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-semibold border border-sky-100">Partner Program</span>
							<span className="text-xs text-slate-400">POC técnico gratis para tu primer cliente referido</span>
						</div>

						<h1 id="hero-title" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
							Bienvenido, <span className="text-sky-600">partner potencial</span> <span aria-hidden>🤝</span>
						</h1>

						<p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl">Amplía tu oferta sin inflar tu equipo: externaliza integraciones, entrega POCs más rápido y monetiza nuevos servicios con soporte técnico y white-label.</p>

						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
							{/* Primary CTA (WhatsApp) + Secondary handled by CTAButtons as download-pack */}
							<CTAButtons
								primary={{
									text: '👉 Solicitar MoU / POC',
									href: 'https://api.whatsapp.com/send/?phone=584242070878',
								}}
								secondary={{
									text: 'Descargar pack comercial (1 página PDF)',
									action: 'download-pack', // tu CTAButtons manejará la descarga (usa /api/packSocios)
								}}
							/>

							<button onClick={() => setShowDemoNote((s) => !s)} className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-slate-600 bg-transparent border border-slate-100 hover:bg-slate-50 transition" aria-expanded={showDemoNote} aria-controls="demo-note">
								Ver detalles del programa
							</button>
						</div>

						{showDemoNote && (
							<div id="demo-note" className="mt-4 text-sm text-slate-600 bg-slate-50 border border-slate-100 rounded-lg p-3 shadow-sm">
								<strong className="font-medium">Nota rápida:</strong> POC técnico gratuito para el primer cliente referido (válido por evento). Soporte, materiales comerciales y co-branding incluidos.
							</div>
						)}

						<ul className="mt-6 flex flex-wrap gap-3 text-sm">
							<li className="inline-flex items-center gap-2 text-slate-600">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">✓</span>
								White-label disponible
							</li>

							<li className="inline-flex items-center gap-2 text-slate-600">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">⚙</span>
								Integraciones rápidas (n8n, APIs, scrapers)
							</li>

							<li className="inline-flex items-center gap-2 text-slate-600">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-50 text-slate-700 text-xs font-semibold">📈</span>
								Material comercial listo para tu equipo
							</li>
						</ul>
					</div>

					<div className="flex items-center justify-center">
						<div className="w-full max-w-md transform-gpu transition-transform duration-500 hover:-translate-y-1">
							<div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-lg overflow-hidden">
								<Image src="/com.jpg" alt="Syncwave partner" width={1200} height={900} className="w-full h-full object-cover" />
							</div>

							<div className="mt-4 flex items-center justify-between gap-4 text-sm">
								<div className="text-xs text-slate-500">Partner pack • One-pager</div>

								{/* small download button that uses the API downloadPack */}
								<PackButtonSmall>Descargar pack</PackButtonSmall>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAST BENEFITS */}
			<section className="max-w-6xl mx-auto px-6 pb-8">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
					<article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
						<p className="text-xs text-slate-500">Monetización</p>
						<h3 className="mt-3 text-2xl font-extrabold text-slate-900">Nuevas líneas de ingreso</h3>
						<p className="mt-2 text-sm text-slate-600">Ofrece integraciones y servicios sin aumentar plantilla.</p>
					</article>

					<article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
						<p className="text-xs text-slate-500">Velocidad</p>
						<h3 className="mt-3 text-2xl font-extrabold text-slate-900">POC en 1 semana</h3>
						<p className="mt-2 text-sm text-slate-600">Valida negocio y cierra con rapidez.</p>
					</article>

					<article className="rounded-2xl p-6 shadow-lg text-white bg-gradient-to-r from-sky-600 to-indigo-600 border border-transparent transform transition hover:scale-[1.01]">
						<p className="text-xs opacity-90">Soporte</p>
						<h3 className="mt-3 text-2xl font-extrabold">SLA & Co-selling</h3>
						<p className="mt-2 text-sm opacity-90">Acuerdos de nivel de servicio y soporte conjunto.</p>
					</article>
				</div>
			</section>

			{/* PARTNER MODELS */}
			<section id="models" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<div className="flex items-start justify-between gap-6">
						<div>
							<h2 className="text-2xl font-bold text-slate-900">Modelos de partnership</h2>
							<p className="mt-2 text-slate-600">Elige cómo quieres colaborar — modelos flexibles para agencias, integradores y consultoras.</p>
						</div>

						<div className="flex gap-3 items-center">
							{/* botón que dispara downloadPack */}
							<button onClick={downloadPack} disabled={downloading} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 shadow hover:shadow-md transition disabled:opacity-60 disabled:cursor-wait">
								{downloading ? (
									<svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
										<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
										<path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>
								) : null}
								Descargar pack comercial
							</button>

							<a href="https://calendly.com/leinerwill25/30min?back=1&month=2025-08" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white font-semibold shadow hover:brightness-105 transition">
								Agendar reunión (15)
							</a>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
						<article className="p-4 border rounded-lg hover:shadow-md transition">
							<h3 className="text-sm font-semibold text-slate-900">White-label (Tu marca)</h3>
							<p className="mt-2 text-sm text-slate-600">Entregamos la solución con tu branding y procesos comerciales. Tú facturas al cliente final.</p>
							<ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
								<li>Soporte técnico conjunto</li>
								<li>Training comercial para tu equipo</li>
								<li>PA y SLA compartido</li>
							</ul>
						</article>

						<article className="p-4 border rounded-lg hover:shadow-md transition">
							<h3 className="text-sm font-semibold text-slate-900">Referral (Comisión)</h3>
							<p className="mt-2 text-sm text-slate-600">Refiere clientes a Syncwave y recibe comisión por proyecto cerrado o MRR compartido.</p>
							<ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
								<li>POC gratuito para tu primer referido</li>
								<li>Comisión por cada ticket y/o % de MRR</li>
								<li>Reportes de pipeline para partners</li>
							</ul>
						</article>

						<article className="p-4 border rounded-lg hover:shadow-md transition">
							<h3 className="text-sm font-semibold text-slate-900">Co-sell (Integración técnica)</h3>
							<p className="mt-2 text-sm text-slate-600">Colaboramos en propuestas conjuntas, integrando nuestras capacidades técnicas con tu fuerza comercial.</p>
							<ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
								<li>POC técnico y demo conjunta</li>
								<li>Acuerdos de reparto de ingresos</li>
								<li>SLA y soporte conjunto</li>
							</ul>
						</article>
					</div>
				</div>
			</section>

			{/* TECH STACK & INTEGRATION */}
			<section id="tech" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Stack & capacidad técnica</h2>
					<p className="mt-2 text-slate-600">Integraciones preconfiguradas y arquitectura diseñada para integradores.</p>

					<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div className="p-4 bg-slate-50 border rounded-lg text-center hover:shadow-sm transition">
							<p className="text-sm font-semibold text-slate-800">n8n</p>
							<p className="mt-1 text-xs text-slate-600">+200 integraciones listas</p>
						</div>

						<div className="p-4 bg-slate-50 border rounded-lg text-center hover:shadow-sm transition">
							<p className="text-sm font-semibold text-slate-800">Scrapers / ETL</p>
							<p className="mt-1 text-xs text-slate-600">Rotación IP, anti-bloqueo y pipelines versionadas</p>
						</div>

						<div className="p-4 bg-slate-50 border rounded-lg text-center hover:shadow-sm transition">
							<p className="text-sm font-semibold text-slate-800">Infra & DevOps</p>
							<p className="mt-1 text-xs text-slate-600">Docker, k8s, despliegues self-host o cloud</p>
						</div>
					</div>
				</div>
			</section>

			{/* ONBOARDING & SLA */}
			<section id="onboard" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Onboarding partner & SLA</h2>
					<p className="mt-2 text-slate-600">Proceso diseñado para que logres ventas y entregas con la máxima calidad.</p>

					<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="p-4 border rounded-lg hover:shadow-sm transition">
							<h4 className="text-sm font-semibold text-slate-900">Kickoff técnico</h4>
							<p className="mt-1 text-sm text-slate-600">Sesión de integración, acceso a repos y training técnico.</p>
						</div>

						<div className="p-4 border rounded-lg hover:shadow-sm transition">
							<h4 className="text-sm font-semibold text-slate-900">Onboarding comercial</h4>
							<p className="mt-1 text-sm text-slate-600">Materiales comerciales, pitch deck y demo flow para tu equipo.</p>
						</div>

						<div className="p-4 border rounded-lg hover:shadow-sm transition">
							<h4 className="text-sm font-semibold text-slate-900">SLA & soporte</h4>
							<p className="mt-1 text-sm text-slate-600">Respuesta inicial menor a 24h, soporte 24/7 y acuerdos de escalado.</p>
						</div>
					</div>
				</div>
			</section>

			{/* REVENUE EXAMPLE */}
			<section id="revenue" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-gradient-to-tr from-white to-slate-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Ejemplo de reparto de ingresos</h2>
					<p className="mt-2 text-slate-600">Modelo de muestra para partners (negociable por volumen y tipo de colaboración).</p>

					<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="p-4 bg-white border rounded-lg text-center hover:shadow-sm transition">
							<p className="text-sm text-slate-500">Ticket promedio</p>
							<p className="mt-2 text-2xl font-extrabold text-slate-900">$300</p>
							<p className="mt-1 text-xs text-slate-500">por automatización</p>
						</div>

						<div className="p-4 bg-white border rounded-lg text-center hover:shadow-sm transition">
							<p className="text-sm text-slate-500">Referral</p>
							<p className="mt-2 text-2xl font-extrabold text-slate-900">15–25%</p>
							<p className="mt-1 text-xs text-slate-500">comisión por cierre</p>
						</div>

						<div className="p-4 bg-white border rounded-lg text-center hover:shadow-sm transition">
							<p className="text-sm text-slate-500">White-label</p>
							<p className="mt-2 text-2xl font-extrabold text-slate-900">Margen acordado</p>
							<p className="mt-1 text-xs text-slate-500">según volumen y SLA</p>
						</div>
					</div>
				</div>
			</section>

			{/* TESTIMONIOS & CASES */}
			<section id="cases" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Casos & testimonios</h2>
					<p className="mt-2 text-slate-600">Historias donde partners escalaron su oferta gracias a Syncwave.</p>

					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
						<blockquote className="p-4 border rounded-lg bg-gray-50">
							<p className="text-sm text-slate-700">“Al asociarnos con Syncwave pudimos cerrar integraciones que antes rechazábamos por falta de recursos técnicos. El partner pack y el POC nos ayudaron a ganar la venta.”</p>
							<footer className="mt-3 text-xs text-slate-500">— Agencia integradora (LATAM)</footer>
						</blockquote>

						<div className="p-4 border rounded-lg">
							<p className="text-sm text-slate-700">Resumen: integración n8n + servicio de soporte 24/7. Partner vendió paquete a 5 clientes en 3 meses.</p>
							<div className="mt-3 text-xs text-slate-500">Resultado: ingresos recurrentes y relación comercial estable.</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="max-w-6xl mx-auto px-6 pb-20">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Preguntas frecuentes (Partners)</h2>

					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
						<details className="p-3 border rounded-lg">
							<summary className="font-medium cursor-pointer">¿Cómo funciona el POC gratuito?</summary>
							<div className="mt-2">Creamos una demo técnica para tu cliente en ~1 semana para validar factibilidad y ROI antes de firmar contrato.</div>
						</details>

						<details className="p-3 border rounded-lg">
							<summary className="font-medium cursor-pointer">¿Cuál es la duración de la alianza mínima?</summary>
							<div className="mt-2">No exigimos permanencia mínima; negociamos términos según modelo (referral, white-label o co-sell).</div>
						</details>

						<details className="p-3 border rounded-lg">
							<summary className="font-medium cursor-pointer">¿Hay exclusividad por región?</summary>
							<div className="mt-2">Podemos negociar exclusividad por país o segmento en acuerdos de volumen.</div>
						</details>

						<details className="p-3 border rounded-lg">
							<summary className="font-medium cursor-pointer">¿Qué soporte brindan a partners?</summary>
							<div className="mt-2">Soporte técnico, training, documentación y acceso a materiales comerciales y demos.</div>
						</details>
					</div>
				</div>
			</section>

			{/* BOTTOM CTA BANNER */}
			<section className="fixed left-1/2 -translate-x-1/2 bottom-6 z-40 w-[min(980px,95%)]">
				<div className="rounded-full bg-white/95 backdrop-blur-md shadow-lg px-4 py-3 border border-slate-100 flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
							<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
								<path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>

						<div>
							<p className="text-sm font-semibold text-slate-900">¿Listo para convertir referrals en ingresos?</p>
							<p className="text-xs text-slate-500">Solicita un MoU, descarga el pack comercial o agenda un 1:1.</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<a href="https://api.whatsapp.com/send/?phone=584242070878" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:brightness-105 transition">
							Solicitar POC gratis
						</a>

						{/* botón de descarga centralizado (usa downloadPack) */}
						<button onClick={downloadPack} disabled={downloading} aria-busy={downloading} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium bg-white hover:shadow-sm transition disabled:opacity-60 disabled:cursor-wait">
							{downloading ? (
								<svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
									<path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
								</svg>
							) : null}
							Descargar pack
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
