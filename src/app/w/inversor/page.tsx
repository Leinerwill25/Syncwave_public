// app/w/inversor/page.tsx
import Image from 'next/image';

export const metadata = {
	title: 'Syncwave — Oportunidad para Inversores',
	description: 'Modelo híbrido: desarrollos a medida + MRR por soporte. Casos de éxito y plan de crecimiento para LATAM.',
};

function StatCard({ label, value, hint = '' }: { label: string; value: string; hint?: string }) {
	return (
		<div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-xs text-slate-500">{label}</p>
					<p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
					{hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
				</div>
				<div className="ml-4 flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-tr from-sky-50 to-white border border-sky-100">
					{/* simple icon */}
					<svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="none" aria-hidden>
						<path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
			</div>
		</div>
	);
}

export default function InversorPage() {
	return (
		<main className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
			{/* HERO */}
			<section aria-labelledby="hero-title" className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
				<div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					{/* Left: Texto */}
					<div>
						<div className="inline-flex items-center gap-3">
							<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">Oportunidad de inversión</span>
						</div>

						<h1 id="hero-title" className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
							Bienvenido a la oportunidad <span className="text-sky-700">Syncwave</span> <span aria-hidden>🚀</span>
						</h1>

						<p className="mt-4 text-slate-700 max-w-prose">Sinergia entre servicios a medida y una línea de ingresos recurrente (MRR) por soporte y mantenimiento. Automatizamos procesos críticos en PYMEs y negocios familiares con resultados demostrables y rápido ROI.</p>

						{/* CTAs */}
						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
							<a href="/assets/syncwave_onepager_v4.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold shadow hover:scale-[1.01] transition">
								Descargar one-pager
								<svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" aria-hidden>
									<path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>

							<a href="https://calendly.com/leinerwill25/30min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 transition">
								Agendar pitch 20'
							</a>
						</div>

						<p className="mt-3 text-sm text-slate-500">Información detallada y financials completos disponibles bajo NDA a solicitud.</p>
					</div>

					{/* Right: Illustration */}
					<div className="flex items-center justify-center">
						<div className="w-full max-w-md">
							<div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-sm overflow-hidden">
								<Image src="/inversores.jpg" alt="Portada del pitch deck de Syncwave" width={1200} height={900} className="w-full h-full object-cover" />
							</div>

							<div className="mt-4 bg-white rounded-lg border border-slate-100 p-3 shadow-sm text-sm text-slate-600">
								<strong className="text-slate-800">One-pager</strong> • Resumen ejecutivo, modelo, KPIs y uso de fondos.
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* PROBLEMA & OPORTUNIDAD */}
			<section id="opportunity" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<div className="flex items-start justify-between gap-4">
						<div>
							<h2 className="text-lg font-semibold text-slate-800">Problema & Oportunidad</h2>
							<p className="mt-3 text-slate-700 max-w-prose">Las PYMEs pierden horas valiosas en tareas manuales: transcripciones, sincronización entre sistemas, generación de reportes y actualización de precios/tasas. Muchas soluciones de automatización son costosas o no adaptan al contexto local.</p>
						</div>

						<div className="hidden sm:block">
							<div className="text-xs text-slate-500">Fecha</div>
							<div className="mt-1 text-sm text-slate-700">Actualizado: {new Date().toLocaleDateString()}</div>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Impacto promedio</p>
							<p className="mt-2 text-xl font-bold text-slate-900">70–90% ahorro</p>
							<p className="mt-1 text-xs text-slate-500">Tiempo en tareas repetitivas</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Ejemplo real</p>
							<p className="mt-2 text-xl font-bold text-slate-900">3.5h → 3min</p>
							<p className="mt-1 text-xs text-slate-500">Automatización de actualización de tasas</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Ventaja local</p>
							<p className="mt-2 text-xl font-bold text-slate-900">Self-host opcional</p>
							<p className="mt-1 text-xs text-slate-500">Cumplimiento y control de datos</p>
						</div>
					</div>
				</div>
			</section>

			{/* MODELO DE NEGOCIO */}
			<section id="model" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Modelo de negocio</h2>
					<p className="mt-3 text-slate-700">Syncwave opera con un modelo híbrido: ticket único por desarrollos y MRR por soporte, con opciones de white-label y upsell hacia BI y licencias.</p>

					<ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
						<li className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Ingresos por desarrollo</p>
							<p className="mt-1 font-medium text-slate-800">$100 – $700 (ticket único)</p>
						</li>

						<li className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Ingresos recurrentes (MRR)</p>
							<p className="mt-1 font-medium text-slate-800">$20+/mes por automatización</p>
						</li>

						<li className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Servicios de expansión</p>
							<p className="mt-1 font-medium text-slate-800">White-label, integraciones y consultoría</p>
						</li>

						<li className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Upsell</p>
							<p className="mt-1 font-medium text-slate-800">Dashboards BI, licencias self-host, retainer técnico</p>
						</li>
					</ul>
				</div>
			</section>

			{/* TRACCIÓN & KPIS */}
			<section id="traction" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Tracción y métricas clave</h2>

					<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
						<StatCard label="Clientes activos" value="3 — (B2B early)" hint="Crecimiento por referidos" />
						<StatCard label="Retención MRR" value="> 90%" hint="Clientes con soporte activo" />
						<StatCard label="POC medio" value="1 semana / proceso" hint="Validación rápida" />
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
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Unit economics (ejemplo)</h2>

					<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Ticket medio</p>
							<p className="mt-2 font-semibold text-slate-900">$300</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">MRR medio</p>
							<p className="mt-2 font-semibold text-slate-900">$30</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">CAC estimado</p>
							<p className="mt-2 font-semibold text-slate-900">$120</p>
						</div>
					</div>

					<div className="mt-4 text-sm text-slate-600">
						<p>
							Proyección: payback en <strong>4–6 meses</strong> con upsell y retención adecuada.
						</p>
					</div>
				</div>
			</section>

			{/* MARKET / TAM */}
			<section id="market" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Tamaño de mercado (TAM / SAM / SOM)</h2>
					<ul className="mt-4 list-inside list-disc text-slate-700 space-y-2">
						<li>
							<strong>TAM:</strong> Millones de PYMEs en LATAM que necesitan digitalización.
						</li>
						<li>
							<strong>SAM:</strong> PYMEs en servicios financieros, retail y logística (target inicial).
						</li>
						<li>
							<strong>SOM:</strong> Penetración estimada con recursos actuales; foco inicial en Venezuela.
						</li>
					</ul>
				</div>
			</section>

			{/* USE OF FUNDS */}
			<section id="funds" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Uso de fondos (ejemplo de ronda)</h2>

					<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Desarrollo de producto</p>
							<p className="mt-1 text-sm text-slate-700">Módulos n8n, dashboards BI y mejoras infra.</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Ventas y marketing</p>
							<p className="mt-1 text-sm text-slate-700">Canales digitales y partnerships.</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Operaciones y soporte</p>
							<p className="mt-1 text-sm text-slate-700">DevOps, soporte 24/7 y comercial.</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm text-slate-500">Reserva / contingencia</p>
							<p className="mt-1 text-sm text-slate-700">Liquidez para ajustes y pruebas regulatorias.</p>
						</div>
					</div>
				</div>
			</section>

			{/* ROADMAP */}
			<section id="roadmap" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Roadmap 12 meses</h2>

					<ol className="mt-4 list-decimal list-inside space-y-3 text-slate-700">
						<li>
							<strong>0–3 meses:</strong> ampliar POCs, cerrar 10 cuentas piloto y estandarizar flujos n8n.
						</li>
						<li>
							<strong>3–6 meses:</strong> lanzar products-as-a-service y plan regional de ventas.
						</li>
						<li>
							<strong>6–12 meses:</strong> expansión, contrataciones clave y mejoras en analytics/ML.
						</li>
					</ol>
				</div>
			</section>

			{/* TEAM */}
			<section id="team" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Equipo</h2>

					<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm font-medium text-slate-800">Dereck Ruiz</p>
							<p className="mt-1 text-sm text-slate-600">Founder — Producto & Operaciones</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm font-medium text-slate-800">Lead Dev</p>
							<p className="mt-1 text-sm text-slate-600">Arquitectura backend e integraciones.</p>
						</div>

						<div className="p-4 bg-white border rounded-lg shadow-sm">
							<p className="text-sm font-medium text-slate-800">Responsable Comercial</p>
							<p className="mt-1 text-sm text-slate-600">Ventas B2B y partnerships.</p>
						</div>
					</div>
				</div>
			</section>

			{/* RISKS & MITIGATION */}
			<section id="risks" className="max-w-6xl mx-auto px-6 pb-12">
				<div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-100">
					<h2 className="text-lg font-semibold text-slate-800">Riesgos y mitigación</h2>

					<ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
						<li>
							<strong>Dependencia de fuentes externas:</strong> monitoreo, fallback humano y pruebas periódicas.
						</li>
						<li>
							<strong>Regulación y privacidad:</strong> self-host y encriptación para clientes sensibles.
						</li>
						<li>
							<strong>Competencia:</strong> ventaja local y rápida adaptabilidad a cambios.
						</li>
					</ul>
				</div>
			</section>

			{/* CTA final */}
			<section id="cta" className="max-w-4xl mx-auto px-6 pb-20">
				<div className="bg-gradient-to-r from-[#f8fafc] to-white rounded-2xl shadow-sm p-6 sm:p-8 text-center border border-slate-100">
					<h3 className="text-xl font-semibold text-slate-900">¿Listo para revisar el pitch completo?</h3>
					<p className="mt-2 text-slate-600">Descarga el one-pager o agenda una reunión de 20 minutos para recibir el pitch deck y financials.</p>

					<div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
						<a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:brightness-105" href="/assets/syncwave_onepager_v4.pdf" target="_blank" rel="noreferrer">
							Descargar one-pager
						</a>

						<a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-200 text-slate-800" href="https://calendly.com/leinerwill25/30min" target="_blank" rel="noreferrer">
							Agendar pitch 20'
						</a>
						<a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white border border-slate-200 text-slate-800" href="https://api.whatsapp.com/send/?phone=584242070878" target="_blank" rel="noreferrer">
							Contactar por WhatsApp
						</a>
					</div>

					<p className="mt-4 text-xs text-slate-500">Información sujeta a NDA si se requiere. Preguntas? Escríbenos.</p>
				</div>
			</section>
		</main>
	);
}
