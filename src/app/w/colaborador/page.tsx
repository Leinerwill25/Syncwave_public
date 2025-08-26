// app/w/colaborador/page.tsx
import CTAButtons from '@/components/CTAButtons';
import Image from 'next/image';

export default function ColaboradorPage() {
	return (
		// <Layout>
		<main className="relative overflow-hidden">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left: Texto */}
					<div>
						<h1 id="hero-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
							Únete al equipo de Syncwave <span aria-hidden>👨‍💻👩‍💻</span>
						</h1>

						<p className="mt-3 text-gray-600 max-w-prose">Crece con proyectos reales y pagos justos. Aquí encontrarás oportunidades constantes, con tecnologías modernas y aprendizaje continuo. Queremos sumar talento como el tuyo.</p>

						{/* CTA row */}
						<div className="mt-6 sm:mt-8">
							<CTAButtons
								primary={{
									text: '👉 Dejar CV / GitHub',
									href: 'https://api.whatsapp.com/send/?phone=584242070878',
								}}
								secondary={{
									text: 'Solicitar mini-test (2h)',
									href: 'https://syncwave.com.ve/#contact',
								}}
							/>
							<p className="mt-3 text-sm text-gray-500">Evaluación rápida y transparente — recibe feedback real.</p>
						</div>
					</div>

					{/* Right: Illustration (placeholder simple para mantener balance visual) */}
					<div className="flex items-center justify-center">
						<div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-sm overflow-hidden">
							<Image src="/still.jpg" alt="Portada del pitch deck de Syncwave" width="800" height="600" className="w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</section>

			{/* BENEFITS / FEATURES */}
			<section id="beneficios" className="max-w-5xl mx-auto px-6 pb-16">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
					<h2 className="text-lg font-semibold text-gray-800">Proyectos constantes, tecnología real, aprendizaje continuo</h2>

					<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-green-50 text-green-600">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<div>
								<p className="text-sm font-medium text-gray-800">Herramientas de vanguardia</p>
								<p className="mt-1 text-sm text-gray-600">Trabaja con n8n, JS, PHP, Docker y más.</p>
							</div>
						</li>

						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-600">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
									<path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<div>
								<p className="text-sm font-medium text-gray-800">Pagos claros</p>
								<p className="mt-1 text-sm text-gray-600">Por hitos cumplidos + opción presencial en proyectos clave.</p>
							</div>
						</li>

						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 text-slate-700">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<div>
								<p className="text-sm font-medium text-gray-800">Entrenamientos y POCs</p>
								<p className="mt-1 text-sm text-gray-600">Acceso a prácticas para fortalecer tu portafolio.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
		// </Layout>
	);
}
