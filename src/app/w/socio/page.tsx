// app/w/socio/page.tsx
import CTAButtons from '@/components/CTAButtons';
import Image from 'next/image';

export default function SocioPage() {
	return (
		<main className="relative overflow-hidden">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left: Texto */}
					<div>
						<h1 id="hero-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
							Bienvenido, partner potencial <span aria-hidden>🤝</span>
						</h1>

						<p className="mt-3 text-gray-600 max-w-prose">Sumemos fuerzas para entregar más valor a tus clientes. Si buscas reducir tiempos, ampliar tu oferta y evitar sobrecargar tu equipo, Syncwave puede ser tu socio estratégico de confianza.</p>

						{/* CTA row */}
						<div className="mt-6 sm:mt-8">
							<CTAButtons
								primary={{
									text: '👉 Solicitar MoU / POC',
									href: 'https://api.whatsapp.com/send/?phone=584242070878',
								}}
								secondary={{
									text: 'Descargar pack comercial (1 página PDF)',
									action: 'download-pack',
								}}
							/>
							<p className="mt-3 text-sm text-gray-500">POC inicial gratuito para tu primer cliente referido.</p>
						</div>
					</div>

					{/* Right: Illustration */}
					<div className="flex items-center justify-center">
						<div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-sm overflow-hidden">
							<Image src="/com.jpg" alt="Portada del pitch deck de Syncwave" width="800" height="600" className="w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</section>

			{/* BENEFITS / FEATURES */}
			<section id="beneficios" className="max-w-5xl mx-auto px-6 pb-16">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
					<h2 className="text-lg font-semibold text-gray-800">Más proyectos, más ingresos, sin más carga operativa</h2>

					<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-green-50 text-green-600">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<div>
								<p className="text-sm font-medium text-gray-800">Externaliza integraciones</p>
								<p className="mt-1 text-sm text-gray-600">Apóyate en nuestra experiencia comprobada para ampliar tu alcance.</p>
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
								<p className="text-sm font-medium text-gray-800">White-label y co-branding</p>
								<p className="mt-1 text-sm text-gray-600">Tu marca, tu cliente, nuestro motor tecnológico.</p>
							</div>
						</li>

						<li className="flex gap-4 items-start">
							<span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600">
								<svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden>
									<path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="0" />
								</svg>
							</span>
							<div>
								<p className="text-sm font-medium text-gray-800">POC gratuito</p>
								<p className="mt-1 text-sm text-gray-600">Oferta especial en eventos para tu primer cliente referido.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
