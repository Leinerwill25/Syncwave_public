// app/w/page.tsx
import Link from 'next/link';

export const metadata = {
	title: 'Syncwave — Bienvenida',
	description: 'Selecciona tu perfil para ver una propuesta personalizada: Clientes, Socios, Colaboradores o Inversores.',
};

function Icon({ name }: { name: 'client' | 'partner' | 'talent' | 'investor' }) {
	if (name === 'client')
		return (
			<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
				<path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	if (name === 'partner')
		return (
			<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
				<path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
				<path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</svg>
		);
	if (name === 'talent')
		return (
			<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
				<path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
				<path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</svg>
		);
	return (
		<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" aria-hidden>
			<path d="M3 17l6-10 4 6 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function Card({ href, title, subtitle, tag, icon, accentClass = 'text-primary' }: { href: string; title: string; subtitle: string; tag: string; icon: 'client' | 'partner' | 'talent' | 'investor'; accentClass?: string }) {
	return (
		<Link href={href} className="group h-full">
			{/* Link is a full-height flex container so child fills equal row height */}
			<article aria-labelledby={title} className="h-full flex flex-col justify-between rounded-2xl border border-slate-100 bg-white/60 backdrop-blur-sm p-6 shadow-[0_8px_40px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_50px_rgba(2,6,23,0.10)] transition-transform transform group-hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/25">
				<div>
					<div className="flex items-start gap-4">
						<div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${accentClass} bg-gradient-to-tr from-white/30 to-white/10 border border-white/30`}>
							<Icon name={icon} />
						</div>
						<div className="flex-1 min-w-0">
							<h3 id={title} className="text-lg font-semibold text-slate-900 truncate">
								{title}
							</h3>
							<p className="mt-1 text-sm text-slate-600 leading-relaxed line-clamp-3">{subtitle}</p>
						</div>
					</div>
				</div>

				{/* footer area inside the card - stays at bottom due to flex-col justify-between */}
				<div className="mt-4 flex items-center justify-between">
					<span className="text-xs font-medium uppercase tracking-wider text-slate-500">{tag}</span>

					<div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 group-hover:text-slate-900">
						<span>Ver propuesta</span>
						<svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden>
							<path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				</div>
			</article>
		</Link>
	);
}

export default function WelcomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#f7fafc] via-[#f1f5f9] to-[#eef2ff] flex items-center justify-center py-16 px-6">
			<div className="w-full max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
					{/* Left column */}
					<div className="md:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(2,6,23,0.06)] border border-slate-100">
						<div>
							<div className="inline-flex items-center gap-3">
								<div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#0ea5a3] to-[#06b6d4] flex items-center justify-center shadow-sm">
									<span className="font-bold text-white">SW</span>
								</div>
								<div>
									<h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
										Bienvenido a <span className="text-primary">Syncwave</span>
									</h1>
									<p className="mt-1 text-sm text-slate-600 max-w-xs">Automatizaciones inteligentes para pymes: menos trabajo manual, menos errores, más crecimiento.</p>
								</div>
							</div>

							<div className="mt-6 text-sm text-slate-600 space-y-3">
								<p>
									<strong className="text-slate-800">¿Qué hacemos?</strong> Transformamos tareas repetitivas en procesos automáticos y supervisables.
								</p>
								<p>
									<strong className="text-slate-800">Resultados típicos:</strong> Reducción 70–90% del tiempo en procesos, menos errores y mayor consistencia.
								</p>
							</div>
						</div>

						<div className="mt-6">
							<a href="https://wa.me/584242070878?text=Hola%20Syncwave,%20quiero%20una%20auditor%C3%ADa%20gratis" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-[#0ea5a3] to-[#06b6d4] text-white font-semibold shadow hover:brightness-105 transition">
								Solicitar auditoría gratuita
								<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
									<path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>

							<div className="mt-4 text-xs text-slate-500">
								¿Prefieres hablar ahora?{' '}
								<a className="text-primary underline" href="https://wa.me/584242070878">
									WhatsApp
								</a>
							</div>
						</div>
					</div>

					{/* Right column: grid with equal-height rows */}
					<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
						<Card href="/w/cliente" title="Clientes" subtitle="Ahorra tiempo en tareas repetitivas, reduce errores y mejora la eficiencia operativa." tag="Auditoría gratuita" icon="client" accentClass="text-[#1e40af]" />
						<Card href="/w/socio" title="Socios / Agencias" subtitle="Amplía tu oferta con integraciones y white-label. POC gratuito para tu primer referido." tag="Integraciones & White-label" icon="partner" accentClass="text-[#1e3a8a]" />
						<Card href="/w/colaborador" title="Colaboradores" subtitle="Únete a nuestro pool: proyectos reales, pagos por hitos y aprendizaje continuo." tag="Trabaja con nosotros" icon="talent" accentClass="text-[#f59e0b]" />
						<Card href="/w/inversor" title="Inversores" subtitle="Modelo híbrido: desarrollo por ticket + MRR por soporte. Accede al one-pager y pitch." tag="Oportunidad de inversión" icon="investor" accentClass="text-[#075985]" />
					</div>
				</div>

				{/* Footer */}
				<footer className="mt-10 text-center">
					<div className="inline-flex items-center gap-4 px-5 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
						<div className="text-sm text-slate-700">© {new Date().getFullYear()} Syncwave</div>
						<div className="h-4 w-px bg-slate-200" />
						<a className="text-sm text-primary hover:underline" href="https://wa.me/584242070878">
							Contacto WhatsApp
						</a>
						<div className="h-4 w-px bg-slate-200" />
						<div className="text-xs text-slate-500">Auditoría gratuita • Demo funcional • Soporte 24/7</div>
					</div>
				</footer>
			</div>
		</main>
	);
}
