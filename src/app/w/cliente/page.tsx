'use client';

import React, { useState } from 'react';
import CTAButtons from '@/components/CTAButtons';
import Modal from '@/components/Modal';

export default function ClientePage() {
	const [open, setOpen] = useState(false);

	return (
		<main className="relative overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
				<div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					{/* Left: Texto */}
					<div>
						<div className="inline-flex items-center gap-3">
							<span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold border border-emerald-100">Auditoría gratis</span>
							<span className="text-xs text-slate-400">Demo funcional antes de pagar</span>
						</div>

						<h1 id="hero-title" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
							Hola <span aria-hidden>👋</span> — <span className="text-gradient bg-clip-text text-transparent bg-[linear-gradient(90deg,#0ea5a3,#06b6d4)]">Bienvenido a Syncwave</span>
						</h1>

						<p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl">Automatizamos lo repetitivo para que tu equipo haga lo que realmente importa — menos horas perdidas, menos errores y procesos confiables 24/7.</p>

						{/* CTAs */}
						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
							<CTAButtons
								primary={{
									text: '👉 Pedir auditoría gratuita',
									href: 'https://wa.me/584242070878',
								}}
								secondary={{
									text: 'Ver caso real (3.5h → 3min)',
									href: '#caso-real',
								}}
								onSecondaryClick={() => setOpen(true)}
							/>
						</div>

						<ul className="mt-6 flex flex-wrap gap-3 text-sm">
							<li className="inline-flex items-center gap-2 text-slate-600">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 text-xs font-semibold">✓</span>
								Soporte 24/7
							</li>
							<li className="inline-flex items-center gap-2 text-slate-600">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">⚙</span>
								Self-host o cloud (tú decides)
							</li>
							<li className="inline-flex items-center gap-2 text-slate-600">
								<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-50 text-slate-700 text-xs font-semibold">🔒</span>
								Encriptación & privacidad
							</li>
						</ul>
					</div>

					{/* Right: Visual */}
					<div className="flex items-center justify-center">
						<div className="w-full max-w-md transform-gpu transition-transform duration-500 hover:-translate-y-1">
							<div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-lg overflow-hidden">
								<video className="w-full h-full object-cover" playsInline muted autoPlay loop preload="metadata" poster="/scraping-poster.jpg" aria-label="Demostración de scraping automatizado">
									<source src="/scraping.mp4" type="video/mp4" />
									Tu navegador no soporta video HTML5.
								</video>
							</div>

							<div className="mt-4 flex items-center justify-between gap-4 text-sm">
								<div className="text-xs text-slate-500">Demo: actualización automática de tasas</div>
								<div className="text-xs text-emerald-600 font-medium">3.5h → 3min ✔</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* HIGHLIGHT STATS */}
			<section className="max-w-6xl mx-auto px-6 pb-8">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<div className="rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white p-5 shadow-lg">
						<p className="text-xs opacity-90">Ahorro promedio</p>
						<p className="mt-2 text-2xl font-extrabold">80–90%</p>
						<p className="mt-1 text-sm opacity-90">Reducción en tiempo de tareas repetitivas</p>
					</div>

					<div className="rounded-2xl bg-white p-5 shadow border border-slate-100">
						<p className="text-xs text-slate-500">POC típico</p>
						<p className="mt-2 text-2xl font-extrabold text-slate-900">1 semana</p>
						<p className="mt-1 text-sm text-slate-600">Validación funcional sin riesgo</p>
					</div>

					<div className="rounded-2xl bg-white p-5 shadow border border-slate-100">
						<p className="text-xs text-slate-500">Soporte & SLA</p>
						<p className="mt-2 text-2xl font-extrabold text-slate-900">
							Respuesta <span className="text-emerald-600">&lt;24h</span>
						</p>
						<p className="mt-1 text-sm text-slate-600">Monitoreo, alertas y soporte 24/7</p>
					</div>
				</div>
			</section>

			{/* BENEFITS / FEATURES (cards más llamativos) */}
			<section id="beneficios" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
						<h2 className="text-2xl font-bold text-slate-900">Automatizaciones que funcionan desde el día 1</h2>
						<p className="mt-3 text-slate-600">Diseñamos flujos robustos con manejo de errores, logs, alertas y reporting para que tu operación sea estable y medible.</p>

						<ul className="mt-6 grid grid-cols-1 gap-4">
							<li className="flex gap-4 items-start">
								<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 inline-flex items-center justify-center">
									<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
										<path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div>
									<h3 className="text-sm font-semibold text-slate-900">Integraciones seguras</h3>
									<p className="text-sm text-slate-600">Conectamos Google Sheets, CRMs, APIs bancarias y tu ERP sin interrumpir tu operación.</p>
								</div>
							</li>

							<li className="flex gap-4 items-start">
								<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 text-sky-600 inline-flex items-center justify-center">
									<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
										<path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div>
									<h3 className="text-sm font-semibold text-slate-900">Escalabilidad</h3>
									<p className="text-sm text-slate-600">Arquitectura preparada para crecer: Docker, k8s y flujos modulares n8n.</p>
								</div>
							</li>

							<li className="flex gap-4 items-start">
								<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 text-slate-700 inline-flex items-center justify-center">
									<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
										<path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div>
									<h3 className="text-sm font-semibold text-slate-900">Monitoreo y alertas</h3>
									<p className="text-sm text-slate-600">Dashboards en tiempo real y notificaciones por Slack/Email cuando algo requiere atención.</p>
								</div>
							</li>
						</ul>
					</div>

					<div className="bg-gradient-to-tr from-white to-slate-50 rounded-2xl shadow-lg p-6 border border-slate-100">
						<h2 className="text-2xl font-bold text-slate-900">¿Dónde aplicamos automatizaciones?</h2>
						<p className="mt-3 text-slate-600">Problemas reales → soluciones concretas.</p>

						<div className="mt-6 grid grid-cols-1 gap-3">
							{[
								{ title: 'Actualización de tasas / precios', text: 'Scrapers programados que actualizan tu base y software automáticamente.' },
								{ title: 'Generación de reportes', text: 'Reportes automáticos enviados por email o integrados en BI.' },
								{ title: 'Sincronización entre ERPs y CRMs', text: 'Conectores para evitar trabajo manual de integración.' },
								{ title: 'Automatización de facturación', text: 'Scripts y bots que generan invoices y registros contables.' },
							].map((it) => (
								<div key={it.title} className="p-4 bg-white border rounded-lg hover:shadow-md transition">
									<h3 className="text-sm font-semibold text-slate-900">{it.title}</h3>
									<p className="mt-1 text-sm text-slate-600">{it.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* PROCESO (más visual y con llamadas a la acción) */}
			<section id="proceso" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<div className="flex items-center justify-between gap-6">
						<div>
							<h2 className="text-2xl font-bold text-slate-900">Proceso simple y transparente</h2>
							<p className="mt-2 text-slate-600">De contacto a producción en pocos pasos — siempre con una demo funcional antes de pagar.</p>
						</div>

						<div>
							<a href="https://wa.me/584242070878" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:brightness-105 transition">
								Pedir auditoría ahora
							</a>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
						{[
							{ title: '1. Auditoría gratuita', text: 'Formulario corto + muestras de datos (Excel / accesos sandbox).' },
							{ title: '2. POC funcional', text: 'Prueba en ~1 semana por proceso — validas antes de pagar.' },
							{ title: '3. Entrega & Soporte', text: 'Despliegue, UAT y plan de monitoreo / soporte 24/7.' },
						].map((s) => (
							<div key={s.title} className="p-4 bg-white border rounded-lg text-center">
								<div className="inline-flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-sky-50 text-sky-600 mb-3">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
										<path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<h4 className="font-semibold text-slate-900">{s.title}</h4>
								<p className="mt-2 text-sm text-slate-600">{s.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* TESTIMONIOS & RESULTADOS */}
			<section id="resultados" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100">
					<h2 className="text-2xl font-bold text-slate-900">Resultados reales — impacto medible</h2>
					<p className="mt-2 text-slate-600">Métricas que nuestros clientes ven en producción.</p>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="p-6 bg-white border rounded-lg text-center shadow-sm">
							<p className="text-3xl font-extrabold text-slate-900">80–90%</p>
							<p className="mt-2 text-sm text-slate-500">Ahorro en tiempo</p>
						</div>
						<div className="p-6 bg-white border rounded-lg text-center shadow-sm">
							<p className="text-3xl font-extrabold text-slate-900">&lt;1%</p>
							<p className="mt-2 text-sm text-slate-500">Errores post-automatización</p>
						</div>
						<div className="p-6 bg-white border rounded-lg text-center shadow-sm">
							<p className="text-3xl font-extrabold text-slate-900">3–5×</p>
							<p className="mt-2 text-sm text-slate-500">Velocidad de reporting</p>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
						<blockquote className="p-4 border rounded-lg bg-gray-50">
							<p className="text-sm text-slate-700">"Antes transcribíamos tasas manualmente cada día; ahora todo se actualiza automáticamente en 3 minutos. Ahorro enorme de tiempo y cero errores."</p>
							<footer className="mt-3 text-xs text-slate-500">— Empresa financiera</footer>
						</blockquote>

						<div className="p-4 border rounded-lg">
							<p className="text-sm text-slate-700">Caso real: scraper + ETL + actualización en software propio. Tiempo manual 3.5h → automático 3min. POC entregado en 1 semana.</p>
							<div className="mt-3 text-xs text-slate-500">Resultado: reducción de costos operativos y menor dependencia de personal.</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ + PRICING */}
			<section id="faq" className="max-w-6xl mx-auto px-6 pb-20">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div>
						<h3 className="text-xl font-semibold text-slate-900">Preguntas frecuentes</h3>
						<div className="mt-4 space-y-3 text-sm text-slate-700">
							<details className="p-3 border rounded-lg">
								<summary className="font-medium cursor-pointer">¿Puedo ver la solución antes de pagar?</summary>
								<div className="mt-2 text-sm text-slate-600">Sí — entregamos una demo/POC funcional para que valides los resultados.</div>
							</details>

							<details className="p-3 border rounded-lg">
								<summary className="font-medium cursor-pointer">¿Cómo protegen mis datos?</summary>
								<div className="mt-2 text-sm text-slate-600">Encriptación en tránsito y en reposo. Opción self-host y contratos NDA disponibles.</div>
							</details>

							<details className="p-3 border rounded-lg">
								<summary className="font-medium cursor-pointer">¿Cuánto cuesta?</summary>
								<div className="mt-2 text-sm text-slate-600">Orientación: $100–$400 por automatización. Soporte desde $20/mes. Cotización final tras auditoría.</div>
							</details>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-slate-900">Planes orientativos</h3>
						<div className="mt-4 grid grid-cols-1 gap-3">
							<div className="p-4 border rounded-lg">
								<p className="text-xs text-slate-500">Desarrollo por proceso</p>
								<p className="mt-1 text-lg font-semibold text-slate-900">$100 — $400</p>
								<p className="mt-1 text-sm text-slate-600">Incluye POC y 2 semanas de correcciones post-entrega.</p>
							</div>

							<div className="p-4 border rounded-lg">
								<p className="text-xs text-slate-500">Soporte (MRR)</p>
								<p className="mt-1 text-lg font-semibold text-slate-900">$20 / mes</p>
								<p className="mt-1 text-sm text-slate-600">Monitoreo, alertas y mantenimiento básico.</p>
							</div>

							<div className="p-4 border rounded-lg">
								<p className="text-xs text-slate-500">Urgencia</p>
								<p className="mt-1 text-lg font-semibold text-slate-900">+30%</p>
								<p className="mt-1 text-sm text-slate-600">Recargo por entrega premium (máx 1 semana).</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA BANNER */}
			<section className="fixed left-1/2 -translate-x-1/2 bottom-6 z-40 w-[min(920px,95%)]">
				<div className="rounded-full bg-white/95 backdrop-blur-md shadow-lg px-4 py-3 border border-slate-100 flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-sky-500 text-white">
							<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
								<path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>

						<div>
							<p className="text-sm font-semibold text-slate-900">¿Quieres que te mostremos exactamente qué automatizar?</p>
							<p className="text-xs text-slate-500">Solicita tu auditoría gratuita y recibe una demo funcional en 1 semana.</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<a href="https://wa.me/584242070878" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:brightness-105 transition">
							Pedir auditoría
						</a>

						<button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium bg-white hover:shadow-sm transition">
							Ver caso real
						</button>
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
						<p className="text-sm text-slate-600">Resumen del caso real: automatizamos la extracción y actualización de tasas. Antes: 3.5 horas manuales. Ahora: 3 minutos automáticos.</p>

						<ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
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
	);
}
