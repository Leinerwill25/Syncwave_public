'use client';

import React from 'react';
import Image from 'next/image';

interface FooterProps {
	logoSrc?: string;
	instagram?: string; // sin arroba: 'syncwave'
	email?: string;
	whatsappNumbers?: string[];
	siteUrl?: string;
}

const normalizePhoneFooter = (phone = '') => phone.replace(/[^0-9+]/g, '').replace(/^\+/, '');

export function Footer({ logoSrc = '/3.png', instagram = 'syncwave_agency', email = 'syncwave_agency@gmail.com', whatsappNumbers = ['+58 424 2070878', '+58 412 4885623'], siteUrl = 'https://syncwave.com.ve' }: FooterProps) {
	return (
		<footer className="bg-slate-900 text-slate-100 py-10">
			<div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Logo y descripción */}
				<div className="flex flex-col gap-3">
					<div className="relative w-40 h-10">
						<Image src={'logoSrc'} alt="Syncwave logo" fill sizes="160px" className="object-contain" />
					</div>
					<p className="text-sm text-slate-300">Agencia de automatizaciones. Diseñamos flujos, integraciones y experiencias digitales que hacen que tu empresa funcione con menos esfuerzo.</p>
					<p className="text-xs text-slate-500 mt-2">© {new Date().getFullYear()} Syncwave. Todos los derechos reservados.</p>
				</div>

				{/* Contacto */}
				<div className="flex flex-col gap-2">
					<h4 className="font-medium text-white">Contacto</h4>
					<a className="text-sm text-slate-300 hover:underline" href={`mailto:${email}`}>
						{email}
					</a>

					<div className="mt-2">
						<span className="block text-sm text-slate-300">WhatsApp</span>
						<ul className="mt-1 space-y-1">
							{whatsappNumbers.map((n) => {
								const digits = normalizePhoneFooter(n);
								return (
									<li key={n}>
										<a href={`https://wa.me/${digits}`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:underline">
											{n}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* Socials y sitio */}
				<div className="flex flex-col gap-2">
					<h4 className="font-medium text-white">Síguenos</h4>

					<a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:underline">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
							<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span>{`@${instagram}`}</span>
					</a>

					<a href={siteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:underline mt-3">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
							<path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M21 21H3V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span>syncwave.com.ve</span>
					</a>
				</div>
			</div>

			<div className="mt-8 border-t border-slate-800 pt-6">
				<div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center justify-between">
					<span>Diseñado y desarrollado por Syncwave</span>
					<span>Política de privacidad · Términos</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
