// app/w/inversor/page.tsx
import Image from 'next/image';

export const metadata = {
	title: 'Syncwave — Oportunidad para Inversores',
	description: 'Modelo híbrido: desarrollos a medida + MRR por soporte. Casos de éxito y plan de crecimiento para LATAM.',
};

// function StatCard({ label, value, hint = '' }: { label: string; value: string; hint?: string }) {
// 	return (
// 		<div className="relative bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
// 			{/* left accent */}
// 			<div className="absolute left-0 top-4 -translate-x-1 h-12 w-1.5 rounded-r-full bg-gradient-to-b from-sky-500 to-indigo-600" aria-hidden />
// 			<div className="flex items-center justify-between gap-4">
// 				<div className="min-w-0">
// 					<p className="text-xs text-slate-500">{label}</p>
// 					<p className="mt-2 text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">{value}</p>
// 					{hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
// 				</div>

// 				<div className="ml-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-tr from-sky-50 to-white border border-sky-100 shadow-xs">
// 					{/* simple icon */}
// 					<svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="none" aria-hidden>
// 						<path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 					</svg>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default function InversorPage() {
	return (
		<main className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
				<div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-slate-100 ring-1 ring-slate-50">
					{/* Left: Texto */}
					<div>
						<div className="inline-flex items-center gap-3">
							<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">Oportunidad de inversión</span>
						</div>

						<h1 id="hero-title" className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
							Bienvenido a la oportunidad <span className="text-sky-700">Syncwave</span> <span aria-hidden>🚀</span>
						</h1>

						<p className="mt-4 text-slate-700 max-w-prose leading-relaxed">Sinergia entre servicios a medida y una línea de ingresos recurrente (MRR) por soporte y mantenimiento. Automatizamos procesos críticos en PYMEs y negocios familiares con resultados demostrables y rápido ROI.</p>

						{/* CTAs */}
						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
							<a href="/assets/syncwave_onepager_v4.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-sky-300 transition">
								Descargar one-pager
								<svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" aria-hidden>
									<path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>

							<a href="https://calendly.com/leinerwill25/30min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 transition">
								Agendar pitch 20
							</a>
						</div>

						<p className="mt-3 text-sm text-slate-500">Información detallada y financials completos disponibles bajo NDA a solicitud.</p>
					</div>

					{/* Right: Illustration */}
					<div className="flex items-center justify-center">
						<div className="w-full max-w-md">
							<div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-md overflow-hidden ring-1 ring-slate-50">
								<Image src="/inversores.jpg" alt="Portada del pitch deck de Syncwave" width={1200} height={900} className="w-full h-full object-cover" />
							</div>

							<div className="mt-4 bg-white rounded-lg border border-slate-100 p-3 shadow-sm text-sm text-slate-600 flex items-center gap-2">
								<strong className="text-slate-800">One-pager</strong>
								<span className="text-slate-500">• Resumen ejecutivo, modelo, KPIs y uso de fondos.</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div>
				{/* PROBLEMA & OPORTUNIDAD */}
				<section id="opportunity" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-lg p-8 sm:p-10 border border-slate-200 ring-1 ring-slate-50">
						<div className="flex items-start justify-between gap-6">
							<div>
								<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">Problema & Oportunidad</h2>
								<p className="mt-3 text-slate-600 max-w-prose leading-relaxed">Las PYMEs pierden horas valiosas en tareas manuales: transcripciones, sincronización entre sistemas, generación de reportes y actualización de precios/tasas. Muchas soluciones de automatización son costosas o no adaptan al contexto local.</p>
							</div>

							<div className="hidden sm:flex flex-col items-end text-right">
								<div className="text-xs uppercase tracking-wider text-slate-500">Fecha</div>
								<div className="mt-1 text-sm text-slate-700 font-medium">Actualizado: {new Date().toLocaleDateString()}</div>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
							{[
								{
									label: 'Impacto promedio',
									value: '70–90% ahorro',
									hint: 'Tiempo en tareas repetitivas',
								},
								{
									label: 'Ejemplo real',
									value: '3.5h → 3min',
									hint: 'Automatización de actualización de tasas',
								},
								{
									label: 'Ventaja local',
									value: 'Self-host opcional',
									hint: 'Cumplimiento y control de datos',
								},
							].map((c) => (
								<div key={c.label} className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
									{/* decorative accent */}
									<div className="absolute -left-4 top-8 h-14 w-1.5 rounded-r-full bg-gradient-to-b from-sky-500 to-indigo-600" aria-hidden />

									<div className="flex items-start gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-sky-600 grid place-items-center text-white text-lg font-semibold shadow-md">{c.label.split(' ')[0][0]}</div>
										</div>

										<div className="min-w-0">
											<p className="text-sm text-slate-500">{c.label}</p>
											<p className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">{c.value}</p>
											<p className="mt-1 text-xs text-slate-500">{c.hint}</p>
										</div>
									</div>

									<div className="mt-4 flex items-center gap-3">
										<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
											<svg className="w-3 h-3 text-sky-700" viewBox="0 0 24 24" fill="none" aria-hidden>
												<path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											Validado
										</span>

										<span className="text-xs text-slate-400">Estimación promedio</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* MODELO DE NEGOCIO */}
				<section id="model" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-lg p-8 sm:p-10 border border-slate-200 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Modelo de negocio</h2>
						<p className="mt-3 text-slate-600 leading-relaxed">Syncwave opera con un modelo híbrido: ticket único por desarrollos y MRR por soporte, con opciones de white-label y upsell hacia BI y licencias.</p>

						<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-700">
							{[
								{ title: 'Ingresos por desarrollo', text: '$100 – $700 (ticket único)' },
								{ title: 'Ingresos recurrentes (MRR)', text: '$20+/mes por automatización' },
								{ title: 'Servicios de expansión', text: 'White-label, integraciones y consultoría' },
								{ title: 'Upsell', text: 'Dashboards BI, licencias self-host, retainer técnico' },
							].map((it) => (
								<li key={it.title} className="group p-5 bg-white rounded-2xl border-l-4 border-sky-600 shadow-sm hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
									<div className="flex items-start gap-4">
										<div className="w-10 h-10 rounded-md bg-slate-50 grid place-items-center text-slate-700 font-semibold">{it.title.split(' ')[0][0]}</div>

										<div className="min-w-0">
											<p className="text-sm text-slate-500">{it.title}</p>
											<p className="mt-1 font-medium text-slate-800">{it.text}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* TRACCIÓN & KPIS */}
				<section id="traction" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-lg p-8 sm:p-10 border border-slate-200 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Tracción y métricas clave</h2>

						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							{[
								{
									title: 'Clientes activos',
									subtitle: 'B2B early',
									value: '3',
									foot: 'Crecimiento por referidos',
								},
								{
									title: 'Retención MRR',
									subtitle: 'Soporte activo',
									value: '> 90%',
									foot: 'Clientes con soporte activo',
								},
								{
									title: 'POC medio',
									subtitle: 'Validación',
									value: '1 week',
									foot: 'Validación rápida',
								},
							].map((k) => (
								<div key={k.title} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
									<div className="flex items-center justify-between">
										<p className="text-sm text-slate-500">{k.title}</p>
										<div className="text-xs text-slate-400">{k.subtitle}</div>
									</div>

									<div className="mt-3 flex items-baseline gap-3">
										<span className="text-3xl md:text-4xl font-extrabold text-slate-900">{k.value}</span>
										<span className="text-sm text-slate-500">— ({k.subtitle})</span>
									</div>

									<p className="mt-3 text-xs text-slate-500">{k.foot}</p>
								</div>
							))}
						</div>

						<div className="mt-6 text-sm text-slate-600">
							<p>
								<strong>Nota:</strong> Métricas históricas y financials detallados se entregan en el pitch deck bajo NDA.
							</p>
						</div>
					</div>
				</section>

				{/* UNIT ECONOMICS */}
				<section id="unit-economics" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Unit economics (ejemplo)</h2>

						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-700">
							{[
								{ label: 'Ticket medio', value: '$300' },
								{ label: 'MRR medio', value: '$30' },
								{ label: 'CAC estimado', value: '$120' },
							].map((u) => (
								<div key={u.label} className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-center">
									{/* left accent */}
									<div className="absolute -left-4 top-6 h-12 w-1.5 rounded-r-full bg-gradient-to-b from-indigo-600 to-sky-500" aria-hidden />
									<div className="flex flex-col items-center justify-center gap-2">
										<p className="text-sm text-slate-500">{u.label}</p>
										<p className="mt-2 font-extrabold text-slate-900 text-3xl md:text-4xl">
											<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-sky-600">{u.value}</span>
										</p>
										<p className="mt-1 text-xs text-slate-500">&nbsp;</p>
									</div>
								</div>
							))}
						</div>

						<div className="mt-6 border-t pt-4 text-sm text-slate-600">
							<p>
								Proyección: payback en <strong>4–6 meses</strong> con upsell y retención adecuada.
							</p>
						</div>
					</div>
				</section>

				{/* MARKET / TAM */}
				<section id="market" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Tamaño de mercado (TAM / SAM / SOM)</h2>

						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
							<div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
								<p className="text-sm text-slate-500 font-medium">TAM</p>
								<p className="text-sm text-slate-700">Millones de PYMEs en LATAM que necesitan digitalización.</p>
							</div>

							<div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
								<p className="text-sm text-slate-500 font-medium">SAM</p>
								<p className="text-sm text-slate-700">PYMEs en servicios financieros, retail y logística (target inicial).</p>
							</div>

							<div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
								<p className="text-sm text-slate-500 font-medium">SOM</p>
								<p className="text-sm text-slate-700">Penetración estimada con recursos actuales; foco inicial en Venezuela.</p>
							</div>
						</div>
					</div>
				</section>

				{/* USE OF FUNDS */}
				<section id="funds" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Uso de fondos (ejemplo de ronda)</h2>

						<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[
								{ title: 'Desarrollo de producto', text: 'Módulos n8n, dashboards BI y mejoras infra.' },
								{ title: 'Ventas y marketing', text: 'Canales digitales y partnerships.' },
								{ title: 'Operaciones y soporte', text: 'DevOps, soporte 24/7 y comercial.' },
								{ title: 'Reserva / contingencia', text: 'Liquidez para ajustes y pruebas regulatorias.' },
							].map((f) => (
								<div key={f.title} className="p-5 bg-white rounded-2xl border-l-4 border-indigo-600/20 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200">
									<p className="text-sm text-slate-500">{f.title}</p>
									<p className="mt-1 text-sm text-slate-700">{f.text}</p>
									{/* subtle progress placeholder */}
									<div className="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
										<div className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" style={{ width: '40%' }} />
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ROADMAP */}
				<section id="roadmap" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Roadmap 12 meses</h2>

						<div className="mt-6 flow-root">
							<ol className="-mb-8">
								<li className="mb-8">
									<div className="relative pb-8">
										<span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white" />
										<div className="ml-6">
											<p className="text-sm font-semibold text-slate-800">
												<strong>0–3 meses:</strong> ampliar POCs, cerrar 10 cuentas piloto y estandarizar flujos n8n.
											</p>
										</div>
									</div>
								</li>

								<li className="mb-8">
									<div className="relative pb-8">
										<span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white" />
										<div className="ml-6">
											<p className="text-sm font-semibold text-slate-800">
												<strong>3–6 meses:</strong> lanzar products-as-a-service y plan regional de ventas.
											</p>
										</div>
									</div>
								</li>

								<li>
									<div className="relative pb-1">
										<span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white" />
										<div className="ml-6">
											<p className="text-sm font-semibold text-slate-800">
												<strong>6–12 meses:</strong> expansión, contrataciones clave y mejoras en analytics/ML.
											</p>
										</div>
									</div>
								</li>
							</ol>
						</div>
					</div>
				</section>

				{/* TEAM */}
				<section id="team" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Equipo</h2>

						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
							{[
								{ name: 'Dereck Ruiz', role: 'Founder — Producto & Operaciones' },
								{ name: 'Lead Dev', role: 'Arquitectura backend e integraciones.' },
								{ name: 'Responsable Comercial', role: 'Ventas B2B y partnerships.' },
							].map((m) => (
								<div key={m.name} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200">
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-white grid place-items-center font-semibold shadow">{m.name.split(' ')[0][0]}</div>
										<div>
											<p className="text-sm font-medium text-slate-800">{m.name}</p>
											<p className="mt-1 text-sm text-slate-600">{m.role}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* RISKS & MITIGATION */}
				<section id="risks" className="max-w-6xl mx-auto px-6 pb-12">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100 ring-1 ring-slate-50">
						<h2 className="text-xl md:text-2xl font-semibold text-slate-900">Riesgos y mitigación</h2>

						<ul className="mt-4 space-y-3 text-slate-700">
							<li className="flex items-start gap-3">
								<span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">1</span>
								<div>
									<p>
										<strong>Dependencia de fuentes externas:</strong> monitoreo, fallback humano y pruebas periódicas.
									</p>
								</div>
							</li>

							<li className="flex items-start gap-3">
								<span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">2</span>
								<div>
									<p>
										<strong>Regulación y privacidad:</strong> self-host y encriptación para clientes sensibles.
									</p>
								</div>
							</li>

							<li className="flex items-start gap-3">
								<span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">3</span>
								<div>
									<p>
										<strong>Competencia:</strong> ventaja local y rápida adaptabilidad a cambios.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</section>

				{/* CTA final */}
				<section id="cta" className="max-w-4xl mx-auto px-6 pb-20">
					<div className="bg-gradient-to-r from-[#f8fafc] to-white rounded-3xl shadow-xl p-6 sm:p-8 text-center border border-slate-200">
						<h3 className="text-xl md:text-2xl font-semibold text-slate-900">¿Listo para revisar el pitch completo?</h3>
						<p className="mt-2 text-slate-600">Descarga el one-pager o agenda una reunión de 20 minutos para recibir el pitch deck y financials.</p>

						<div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
							<a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold shadow-lg hover:brightness-105 transition" href="/assets/syncwave_onepager_v4.pdf" target="_blank" rel="noreferrer">
								Descargar one-pager
							</a>

							<a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white shadow-sm hover:shadow-md transition" href="https://calendly.com/leinerwill25/30min" target="_blank" rel="noreferrer">
								Agendar pitch 20
							</a>

							<a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm hover:shadow-md transition" href="https://api.whatsapp.com/send/?phone=584242070878" target="_blank" rel="noreferrer">
								Contactar por WhatsApp
							</a>
						</div>

						<p className="mt-4 text-xs text-slate-500">Información sujeta a NDA si se requiere. Preguntas? Escríbenos.</p>
					</div>
				</section>
			</div>
		</main>
	);
}
