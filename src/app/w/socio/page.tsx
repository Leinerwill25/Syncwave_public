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

			{/* FAST BENEFITS (refinado) */}
			<section className="max-w-6xl mx-auto px-6 pb-8">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
					{/* CARD 1 */}
					<article className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 hover:shadow-2xl transform hover:-translate-y-1 transition">
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-sky-600 grid place-items-center text-white shadow">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
										<path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>

							<div>
								<p className="text-xs uppercase tracking-wider text-slate-500">Monetización</p>
								<h3 className="mt-2 text-xl font-semibold text-slate-900 leading-tight">Nuevas líneas de ingreso</h3>
								<p className="mt-3 text-sm text-slate-600 max-w-prose">Ofrece integraciones y servicios sin aumentar plantilla, con modelos escalables y soporte técnico.</p>

								<div className="mt-4 flex items-center gap-3">
									<span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-50 text-xs font-medium text-slate-700 ring-1 ring-slate-100">B2B</span>
									<span className="text-xs text-slate-400">Modelos: referral · white-label · revenue-share</span>
								</div>
							</div>
						</div>
					</article>

					{/* CARD 2 */}
					<article className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 hover:shadow-2xl transform hover:-translate-y-1 transition">
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-sky-500 grid place-items-center text-white shadow">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
										<path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>

							<div>
								<p className="text-xs uppercase tracking-wider text-slate-500">Velocidad</p>
								<h3 className="mt-2 text-xl font-semibold text-slate-900 leading-tight">POC en 1 semana</h3>
								<p className="mt-3 text-sm text-slate-600 max-w-prose">Validación rápida para cerrar oportunidades comerciales con evidencia técnica y resultados.</p>

								<div className="mt-4 flex items-center gap-3">
									<span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-50 text-xs font-medium text-slate-700 ring-1 ring-slate-100">Low friction</span>
									<span className="text-xs text-slate-400">Entrega, test y demo</span>
								</div>
							</div>
						</div>
					</article>

					{/* CARD 3 (destacado) */}
					<article className="relative rounded-2xl p-6 shadow-2xl text-white bg-gradient-to-r from-sky-600 to-indigo-600 border border-transparent transform transition hover:scale-[1.01]">
						<div className="flex items-start gap-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 rounded-lg bg-white/10 grid place-items-center text-white shadow">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
										<path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>

							<div>
								<p className="text-xs opacity-90 uppercase tracking-wider">Soporte</p>
								<h3 className="mt-2 text-2xl font-extrabold leading-tight">SLA & Co-selling</h3>
								<p className="mt-3 text-sm opacity-90 max-w-prose">Acuerdos comerciales y técnicos que garantizan cobertura y co-venta efectiva para tus clientes.</p>

								<div className="mt-4 flex items-center gap-3">
									<span className="inline-flex items-center px-2 py-1 rounded-full bg-white/10 text-xs font-medium text-white/90 ring-1 ring-white/10">SLA 24/7</span>
									<span className="text-xs text-white/80">Planes personalizados</span>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>

			{/* PARTNER MODELS (refinado) */}
			<section id="models" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100">
					<div className="flex items-start justify-between gap-6">
						<div>
							<h2 className="text-2xl font-bold text-slate-900">Modelos de partnership</h2>
							<p className="mt-2 text-slate-600 max-w-prose">Modelos flexibles para agencias, integradores y consultoras. Selecciona el que mejor encaje con tu go-to-market.</p>
						</div>

						<div className="flex gap-3 items-center">
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

					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
						{[
							{ title: 'White-label (Tu marca)', desc: 'Entregamos la solución con tu branding. Tú facturas al cliente final.', items: ['Soporte técnico conjunto', 'Training comercial', 'PA y SLA compartido'], color: 'from-slate-800 to-sky-600' },
							{ title: 'Referral (Comisión)', desc: 'Refiere clientes y recibe comisión por proyecto o % MRR.', items: ['POC gratuito primer referido', 'Comisión por ticket/MRR', 'Reportes de pipeline'], color: 'from-emerald-500 to-sky-400' },
							{ title: 'Co-sell (Integración)', desc: 'Propuestas conjuntas con integración técnica y fuerza comercial combinada.', items: ['POC técnico', 'Reparto de ingresos', 'SLA y soporte conjunto'], color: 'from-violet-500 to-fuchsia-500' },
						].map((m) => (
							<article key={m.title} className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:shadow-2xl transition">
								<div className={`absolute -left-4 top-6 w-12 h-12 rounded-lg bg-gradient-to-br ${m.color} text-white grid place-items-center font-bold shadow`} aria-hidden>
									{m.title.split(/\s+/)[0][0]}
								</div>

								<div className="ml-12">
									<h3 className="text-sm font-semibold text-slate-900">{m.title}</h3>
									<p className="mt-2 text-sm text-slate-600">{m.desc}</p>

									<ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
										{m.items.map((it) => (
											<li key={it}>{it}</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* TECH STACK & INTEGRATION (refinado) */}
			<section id="tech" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-2xl font-bold text-slate-900">Stack & capacidad técnica</h2>
							<p className="mt-2 text-slate-600 max-w-prose">Integraciones preconfiguradas y arquitectura diseñada para integradores y agencias.</p>
						</div>
						<div className="text-sm text-slate-500">Integraciones listas · Deploys flexibles</div>
					</div>

					<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
						{[
							{ title: 'n8n', subtitle: '+200 integraciones listas', icon: '⚙️' },
							{ title: 'Scrapers / ETL', subtitle: 'Pipelines versionadas y anti-bloqueo', icon: '🛰️' },
							{ title: 'Infra & DevOps', subtitle: 'Docker, k8s, self-host/cloud', icon: '☁️' },
						].map((t) => (
							<div key={t.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-md transition">
								<div className="text-3xl">{t.icon}</div>
								<p className="mt-3 text-sm font-semibold text-slate-800">{t.title}</p>
								<p className="mt-1 text-xs text-slate-500">{t.subtitle}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ONBOARDING & SLA (refinado) */}
			<section id="onboard" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-2xl font-bold text-slate-900">Onboarding partner & SLA</h2>
							<p className="mt-2 text-slate-600 max-w-prose">Proceso diseñado para que logres ventas y entregas con máxima calidad y predictibilidad.</p>
						</div>
						<div className="text-sm text-slate-500">Tiempo medio de onboarding: 7–14 días</div>
					</div>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
						{[
							{ title: 'Kickoff técnico', desc: 'Sesión de integración, acceso a repos y training técnico.' },
							{ title: 'Onboarding comercial', desc: 'Materiales comerciales, pitch deck y demo flow.' },
							{ title: 'SLA & soporte', desc: 'Respuesta inicial <24h, escalado y soporte priorizado.' },
						].map((c, idx) => (
							<div key={c.title} className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-md bg-slate-50 grid place-items-center text-slate-700 font-semibold">{idx + 1}</div>
										<div>
											<h4 className="text-sm font-semibold text-slate-900">{c.title}</h4>
											<p className="mt-1 text-xs text-slate-500">{c.desc}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* REVENUE EXAMPLE (refinado) */}
			<section id="revenue" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-gradient-to-tr from-white to-slate-50 rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-2xl font-bold text-slate-900">Ejemplo de reparto de ingresos</h2>
							<p className="mt-2 text-slate-600">Modelo de muestra para partners (negociable por volumen y tipo de colaboración).</p>
						</div>
						<div className="text-sm text-slate-500">Valores ilustrativos</div>
					</div>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
						<div className="p-6 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-lg transition">
							<p className="text-sm text-slate-500">Ticket promedio</p>
							<p className="mt-3 text-3xl font-extrabold text-slate-900">$300</p>
							<p className="mt-1 text-xs text-slate-500">por automatización</p>
						</div>

						<div className="p-6 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-lg transition">
							<p className="text-sm text-slate-500">Referral</p>
							<p className="mt-3 text-3xl font-extrabold text-slate-900">15–25%</p>
							<p className="mt-1 text-xs text-slate-500">comisión por cierre</p>
						</div>

						<div className="p-6 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-lg transition">
							<p className="text-sm text-slate-500">White-label</p>
							<p className="mt-3 text-3xl font-extrabold text-slate-900">Margen acordado</p>
							<p className="mt-1 text-xs text-slate-500">según volumen y SLA</p>
						</div>
					</div>
				</div>
			</section>

			{/* TESTIMONIOS & CASES (refinado) */}
			<section id="cases" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Casos & testimonios</h2>
					<p className="mt-2 text-slate-600">Historias donde partners escalaron su oferta gracias a Syncwave.</p>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
						<blockquote className="p-6 rounded-2xl bg-slate-50 border-l-4 border-sky-500">
							<p className="text-sm text-slate-700">“Al asociarnos con Syncwave pudimos cerrar integraciones que antes rechazábamos por falta de recursos técnicos. El partner pack y el POC nos ayudaron a ganar la venta.”</p>
							<footer className="mt-3 text-xs text-slate-500">— Agencia integradora (LATAM)</footer>
						</blockquote>

						<div className="p-6 rounded-2xl bg-white border border-slate-100">
							<p className="text-sm text-slate-700">Resumen: integración n8n + servicio de soporte 24/7. Partner vendió paquete a 5 clientes en 3 meses.</p>
							<div className="mt-4 flex items-center justify-between">
								<div className="text-xs text-slate-500">Resultado</div>
								<div className="text-sm font-bold text-slate-900">Ingresos recurrentes & relación estable</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ (mejorado) */}
			<section id="faq" className="max-w-6xl mx-auto px-6 pb-20">
				<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Preguntas frecuentes (Partners)</h2>

					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
						{[
							{ q: '¿Cómo funciona el POC gratuito?', a: 'Creamos una demo técnica para tu cliente en ~1 semana para validar factibilidad y ROI antes de firmar contrato.' },
							{ q: '¿Cuál es la duración de la alianza mínima?', a: 'No exigimos permanencia mínima; negociamos términos según modelo (referral, white-label o co-sell).' },
							{ q: '¿Hay exclusividad por región?', a: 'Podemos negociar exclusividad por país o segmento en acuerdos de volumen.' },
							{ q: '¿Qué soporte brindan a partners?', a: 'Soporte técnico, training, documentación y acceso a materiales comerciales y demos.' },
						].map((f) => (
							<details key={f.q} className="p-3 rounded-lg border hover:shadow-sm transition">
								<summary className="font-medium cursor-pointer">{f.q}</summary>
								<div className="mt-2 text-sm text-slate-600">{f.a}</div>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* BOTTOM CTA BANNER (elegante) */}
			<section className="fixed left-1/2 -translate-x-1/2 bottom-6 z-40 w-[min(980px,95%)]">
				<div className="rounded-full bg-white/95 backdrop-blur-md shadow-2xl px-4 py-3 border border-slate-100 flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg">
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
