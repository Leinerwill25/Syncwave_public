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
			<section className="max-w-6xl mx-auto px-6 py-12">
				<div className="bg-gradient-to-r from-white to-slate-50 rounded-2xl p-8 shadow-sm">
					<h3 className="text-xl font-semibold text-slate-900">Proceso simplificado</h3>
					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 bg-white rounded-lg border shadow-sm">
							<div className="text-slate-700 font-semibold">1. Descubrimiento</div>
							<p className="mt-2 text-sm text-slate-600">Reunión inicial (30–60 min) para alinear objetivos, métricas y recursos.</p>
						</div>
						<div className="p-6 bg-white rounded-lg border shadow-sm">
							<div className="text-slate-700 font-semibold">2. POC</div>
							<p className="mt-2 text-sm text-slate-600">Mini-proyecto para validar técnica y comercialmente antes de compromisos mayores.</p>
						</div>
						<div className="p-6 bg-white rounded-lg border shadow-sm">
							<div className="text-slate-700 font-semibold">3. Escalado</div>
							<p className="mt-2 text-sm text-slate-600">Roadmap, SLAs y trabajo conjunto para generar crecimiento sostenido.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CASES + BENEFITS */}
			<section className="max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="col-span-2 bg-white rounded-2xl p-6 shadow-md">
						<h3 className="text-lg font-semibold text-slate-900">Casos prácticos</h3>
						<p className="text-sm text-slate-600 mt-2">Ejemplos reales de colaboraciones y cómo se tradujeron en valor para ambas partes.</p>

						<div className="mt-6 space-y-4">
							<article className="p-4 border rounded-lg">
								<h4 className="font-semibold">Agencia de marketing + Syncwave</h4>
								<p className="text-sm text-slate-600 mt-1">Campañas con landing pages optimizadas, integración de analytics y automatización de seguimiento. Resultado: +30% de conversión en campañas específicas.</p>
								<p className="mt-2 text-xs text-slate-500">Modelo: revenue share / fee por proyecto</p>
							</article>

							<article className="p-4 border rounded-lg">
								<h4 className="font-semibold">E-commerce local + Syncwave</h4>
								<p className="text-sm text-slate-600 mt-1">Implementación de e-commerce + automatización logística. Mejora en velocidad y reducción de errores en pedidos.</p>
								<p className="mt-2 text-xs text-slate-500">Modelo: referral + POC</p>
							</article>
						</div>
					</div>

					<aside className="bg-white rounded-2xl p-6 shadow-md">
						<h3 className="text-lg font-semibold text-slate-900">Beneficios para partners</h3>
						<ul className="mt-3 text-sm text-slate-600 space-y-2">
							<li>➡ Acceso a proyectos pagados y recurrentes.</li>
							<li>➡ Co-marketing y exposición a nuestra base de clientes.</li>
							<li>➡ Documentación técnica y soporte prioritario.</li>
							<li>➡ Condiciones claras y escalado planificado.</li>
						</ul>
					</aside>
				</div>
			</section>

			{/* ONBOARDING CHECKLIST */}
			<section className="max-w-5xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl p-6 shadow-sm">
					<h3 className="text-lg font-semibold text-slate-900">Checklist de onboarding</h3>
					<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
						<ul className="list-disc list-inside">
							<li>Presentación (1 página): servicios y casos de éxito.</li>
							<li>Contacto principal y rol (Slack/WhatsApp/email).</li>
							<li>Plantilla de propuesta o pricing.</li>
						</ul>
						<ul className="list-disc list-inside">
							<li>Accesos a staging/repos (solo si aplica).</li>
							<li>Ejemplo de flujo de trabajo (hitos y entregables).</li>
							<li>Contacto técnico para integraciones (webhooks, APIs).</li>
						</ul>
					</div>
				</div>
			</section>

			{/* RESOURCES + CTA FOOTER */}
			<section className="max-w-7xl mx-auto px-6 pb-20">
				<div className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-6 md:p-8 shadow-md">
					<div className="md:flex md:items-center md:justify-between">
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
