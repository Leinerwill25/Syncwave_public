import React from 'react';
import CTAButtons from '@/components/CTAButtons';
import CTAButtonstwo from '@/components/CTAButtonstwo';

import Image from 'next/image';

export default function ColaboradorPage() {
	return (
		<main className="bg-neutral-50 min-h-screen text-slate-800">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-700 to-sky-600 text-white">
				<div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
					<div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div className="space-y-6">
							<p className="text-sm uppercase tracking-wider text-sky-200 font-medium">Alianzas estratégicas</p>
							<h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
								Colabora con <span className="text-sky-300">Syncwave</span> y multiplica impacto
							</h1>

							<p className="text-slate-100 max-w-xl">Potenciamos emprendimientos mediante alianzas win-win: desarrollo, marketing, integraciones y soporte técnico. Si tu agencia cubre marketing, nosotros convertimos leads en experiencias digitales.</p>

							<div className="flex flex-col sm:flex-row sm:items-center gap-3">
								<CTAButtonstwo
									primary={{
										text: '📩 Enviar propuesta',
										href: 'https://api.whatsapp.com/send/?phone=584242070878&text=Hola%2C+quiero+colaborar+con+Syncwave',
									}}
									secondary={{ text: '📂 Dejar CV / Portafolio', href: 'mailto:colaboradores@syncwave.com.ve' }}
								/>
								<p className="text-xs text-slate-200 opacity-90 mt-1 sm:mt-0">Respuestas y pasos claros en 48–72h</p>
							</div>
						</div>

						<div className="flex items-center justify-center">
							<div className="w-full max-w-md rounded-2xl overflow-hidden ring-1 ring-white/10">
								<Image src="/still.jpg" alt="Portada del pitch deck de Syncwave" width={900} height={700} className="w-full h-auto object-cover" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* INTRO + KPIS */}
			<section className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
				<div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 ring-1 ring-slate-100">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
						<div>
							<h2 className="text-xl font-semibold text-slate-900">Colaboraciones que generan resultados medibles</h2>
							<p className="text-sm text-slate-600 mt-2 max-w-prose">Diseñamos esquemas claros de colaboración: referral, white-label, revenue share, POC y proyectos compartidos. Alineamos objetivos, métricas y responsabilidades desde el inicio.</p>
						</div>

						<div className="flex gap-4">
							<div className="px-4 py-3 bg-slate-50 rounded-lg text-center">
								<p className="text-xs text-slate-500">Proyectos activos</p>
								<p className="text-lg font-bold text-slate-800">+24</p>
							</div>
							<div className="px-4 py-3 bg-slate-50 rounded-lg text-center">
								<p className="text-xs text-slate-500">Partners</p>
								<p className="text-lg font-bold text-slate-800">+12</p>
							</div>
							<div className="px-4 py-3 bg-slate-50 rounded-lg text-center">
								<p className="text-xs text-slate-500">POCs</p>
								<p className="text-lg font-bold text-slate-800">+8</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* MODELS */}
			<section id="models" className="max-w-7xl mx-auto px-6 py-12">
				<h3 className="text-xl font-semibold text-slate-900">Modelos de colaboración</h3>
				<p className="text-sm text-slate-600 mt-2 max-w-prose">Escoge el formato que mejor encaje con tu equipo y clientes.</p>

				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							title: 'Referral / Leads',
							desc: 'Compartimos leads con comisión o fee fijo. Proceso simple y transparente.',
							accent: 'from-sky-500 to-indigo-500',
						},
						{
							title: 'Project-based (Colaborativo)',
							desc: 'Tareas compartidas: tú manejas marketing y UX; nosotros infraestructura y product engineering.',
							accent: 'from-emerald-500 to-sky-500',
						},
						{
							title: 'White-label',
							desc: 'Entrega de producto listo para que lo vendas como propio con soporte técnico incluido.',
							accent: 'from-violet-500 to-fuchsia-500',
						},
						{
							title: 'Revenue share',
							desc: 'Acordamos participación en ingresos en proyectos con ingresos recurrentes.',
							accent: 'from-amber-500 to-rose-500',
						},
						{
							title: 'POC / Pilot',
							desc: 'Prueba de concepto rápida para validar fit técnico y comercial (1–4 semanas).',
							accent: 'from-slate-500 to-sky-400',
						},
						{
							title: 'Intercambio de servicios',
							desc: 'Intercambiamos servicios para minimizar inversión inicial y acelerar go-to-market.',
							accent: 'from-cyan-500 to-blue-500',
						},
					].map((m) => (
						<article key={m.title} className="rounded-2xl p-6 bg-white shadow-md border-l-4 border-transparent hover:shadow-xl transition-shadow">
							<div className={`w-12 h-12 rounded-md bg-gradient-to-br ${m.accent} flex items-center justify-center text-white font-bold`}>{m.title.split(' ')[0][0]}</div>
							<h4 className="mt-4 text-lg font-semibold text-slate-900">{m.title}</h4>
							<p className="mt-2 text-sm text-slate-600">{m.desc}</p>
						</article>
					))}
				</div>
			</section>

			{/* PROCESS */}
			{/* PROCESO SIMPLIFICADO (mejorado) */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<div className="bg-white/95 rounded-3xl p-8 shadow-lg ring-1 ring-slate-100">
					<div className="flex items-center justify-between gap-6">
						<div>
							<h3 className="text-2xl font-semibold text-slate-900">Proceso simplificado</h3>
							<p className="mt-2 text-sm text-slate-600 max-w-prose">Flujo claro y profesional para que las alianzas empiecen a generar valor desde el primer día.</p>
						</div>

						<div className="hidden md:flex items-center gap-4">
							<div className="text-xs uppercase tracking-wide text-slate-500">Duración típica</div>
							<div className="px-3 py-2 bg-slate-50 rounded-md text-sm font-medium text-slate-800">30–60 días (según alcance)</div>
						</div>
					</div>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								num: '1',
								title: 'Descubrimiento',
								text: 'Reunión inicial (30–60 min) para alinear objetivos, métricas y recursos.',
								accent: 'bg-gradient-to-br from-sky-500 to-indigo-600',
							},
							{
								num: '2',
								title: 'POC',
								text: 'Mini-proyecto (1–4 semanas) para validar integración y fit comercial.',
								accent: 'bg-gradient-to-br from-emerald-500 to-sky-500',
							},
							{
								num: '3',
								title: 'Escalado',
								text: 'Roadmap, SLAs y trabajo conjunto para crecimiento sostenido y KPIs medibles.',
								accent: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
							},
						].map((s) => (
							<div key={s.title} className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
								<div className="absolute -left-4 top-6">
									<div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold ${s.accent} ring-4 ring-white`}>{s.num}</div>
								</div>

								<div className="ml-12">
									<div className="text-sm font-semibold text-slate-800">{s.title}</div>
									<p className="mt-2 text-sm text-slate-600">{s.text}</p>

									<div className="mt-4 flex items-center gap-3">
										<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-700 ring-1 ring-slate-100">
											<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
											</svg>
											Hito claro
										</span>
										<span className="text-xs text-slate-400">Entregables definidos</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CASES + BENEFITS (mejorado) */}
			<section className="max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="text-2xl font-semibold text-slate-900">Casos prácticos</h3>
								<p className="text-sm text-slate-600 mt-2">Ejemplos reales de colaboraciones y resultados cuantificables.</p>
							</div>
							<div className="text-sm text-slate-500">Resultados verificados</div>
						</div>

						<div className="mt-6 space-y-5">
							<article className="p-6 rounded-2xl border border-slate-100 bg-slate-50/60 flex flex-col gap-3">
								<div className="flex items-start justify-between">
									<div>
										<h4 className="font-semibold text-slate-900">Agencia de marketing + Syncwave</h4>
										<p className="text-xs text-slate-500 mt-1">Modelo: revenue share / fee por proyecto</p>
									</div>
									<div className="text-right">
										<div className="text-sm font-bold text-slate-900">+30%</div>
										<div className="text-xs text-slate-500">Conversión</div>
									</div>
								</div>

								<p className="text-sm text-slate-600">Campañas con landing pages optimizadas, integración de analytics y automatización de seguimiento — mejoras en conversión y CPAs reducidos.</p>
							</article>

							<article className="p-6 rounded-2xl border border-slate-100 bg-white flex flex-col gap-3">
								<div className="flex items-start justify-between">
									<div>
										<h4 className="font-semibold text-slate-900">E-commerce local + Syncwave</h4>
										<p className="text-xs text-slate-500 mt-1">Modelo: referral + POC</p>
									</div>
									<div className="text-right">
										<div className="text-sm font-bold text-slate-900">+40%</div>
										<div className="text-xs text-slate-500">Eficiencia operativa</div>
									</div>
								</div>

								<p className="text-sm text-slate-600">Implementación de e-commerce y automatización logística, optimizando tiempos de entrega y reduciendo errores de picking/stock.</p>
							</article>
						</div>
					</div>

					<aside className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
						<h3 className="text-lg font-semibold text-slate-900">Beneficios para partners</h3>
						<p className="text-sm text-slate-600 mt-2">Ventajas que obtienen los partners que colaboran con Syncwave:</p>

						<ul className="mt-4 space-y-3 text-sm">
							{['Acceso a proyectos pagados y recurrentes', 'Co-marketing y exposición a nuestra base de clientes', 'Documentación técnica y soporte prioritario', 'Condiciones claras y escalado planificado'].map((b) => (
								<li key={b} className="flex items-start gap-3">
									<span className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-md bg-slate-50 ring-1 ring-slate-100">
										<svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
										</svg>
									</span>
									<span className="text-slate-700">{b}.</span>
								</li>
							))}
						</ul>

						<div className="mt-6 border-t pt-5">
							<p className="text-xs text-slate-500">¿Necesitas un paquete a medida? Podemos definir condiciones específicas por proyecto (fees, revenue share o white-label).</p>
						</div>
					</aside>
				</div>
			</section>

			{/* ONBOARDING CHECKLIST (mejorado) */}
			<section className="max-w-5xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-slate-900">Checklist de onboarding</h3>
						<div className="text-sm text-slate-500">Checklist rápido para empezar</div>
					</div>

					<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-700">
						{[
							['Presentación (1 página): servicios y casos de éxito.', 'Contacto principal y rol (Slack/WhatsApp/email).', 'Plantilla de propuesta o pricing.'],
							['Accesos a staging/repos (solo si aplica).', 'Ejemplo de flujo de trabajo (hitos y entregables).', 'Contacto técnico para integraciones (webhooks, APIs).'],
						].map((col, i) => (
							<ul key={i} className="space-y-3">
								{col.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-50 ring-1 ring-slate-100 text-slate-700">
											<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
											</svg>
										</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
			</section>

			{/* RESOURCES + CTA FOOTER (mejorado) */}
			<section className="max-w-7xl mx-auto px-6 pb-20">
				<div className="bg-gradient-to-b from-white to-slate-50 rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
					<div className="md:flex md:items-center md:justify-between gap-6">
						<div>
							<h3 className="text-xl font-semibold text-slate-900">¿Listo para colaborar?</h3>
							<p className="text-sm text-slate-600 mt-2">Envíanos una propuesta o agenda una llamada de descubrimiento. Construyamos algo juntos.</p>
						</div>

						<div className="mt-4 md:mt-0">
							<CTAButtons
								primary={{
									text: 'Iniciar colaboración',
									href: 'https://api.whatsapp.com/send/?phone=584242070878&text=Quiero+iniciar+una+colaboraci%C3%B3n',
								}}
								secondary={{ text: 'Enviar resumen (email)', href: 'mailto:colaboradores@syncwave.com.ve' }}
							/>
						</div>
					</div>

					<div className="mt-6 border-t pt-6 text-sm text-slate-500">
						<strong>Recursos:</strong> Kit de colaboración (contrato base), guías técnicas y plantillas de propuesta — disponibles a petición.
					</div>
				</div>
			</section>
		</main>
	);
}
