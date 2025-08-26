'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
	logoSrc?: string;
	whatsappNumbers?: string[];
	siteUrl?: string;
}

const normalizePhone = (phone = '') => phone.replace(/[^0-9+]/g, '').replace(/^[+]/, '');

/** Detect simple mobile via userAgent */
const isMobile = () => {
	if (typeof navigator === 'undefined') return false;
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

function buildWhatsAppHref(phone: string, text?: string) {
	const digits = normalizePhone(phone);
	const encoded = text ? `?text=${encodeURIComponent(text)}` : '';
	if (isMobile()) {
		if (text) return `whatsapp://send?phone=${digits}&text=${encodeURIComponent(text)}`;
		return `whatsapp://send?phone=${digits}`;
	}
	return `https://wa.me/${digits}${encoded}`;
}

/* ModalPortal (lo conservamos tal cual; se usa para opciones extendidas) */
function ModalPortal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prev;
		};
	}, [mounted]);

	useEffect(() => {
		if (!mounted) return;
		const el = ref.current;
		if (!el) return;

		const focusable = el.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		first?.focus();

		function onKey(e: KeyboardEvent) {
			if (e.key === 'Tab') {
				if (focusable.length === 0) return;
				if (e.shiftKey) {
					if (document.activeElement === first) {
						e.preventDefault();
						last?.focus();
					}
				} else {
					if (document.activeElement === last) {
						e.preventDefault();
						first?.focus();
					}
				}
			}
			if (e.key === 'Escape') {
				onClose();
			}
		}

		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [mounted, onClose]);

	if (!mounted) return null;

	return createPortal(
		<div className="fixed inset-0 z-[99999] flex items-center justify-center px-4" role="dialog" aria-modal="true">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
			<div ref={ref} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto p-6 z-10" aria-labelledby="modal-title">
				{children}
			</div>
		</div>,
		document.body
	);
}

/* DropdownPortal: renderiza el dropdown en body y lo posiciona */
function DropdownPortal({ anchorRect, onClose, children, preferredWidth = 256 }: { anchorRect: DOMRect | null; onClose: () => void; children: React.ReactNode; preferredWidth?: number }) {
	const portalRef = useRef<HTMLDivElement | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// close on Escape
	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose();
		}
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [onClose]);

	if (!mounted || !anchorRect) return null;

	// compute position: try to align right edge of menu with anchor right; keep inside viewport
	const margin = 8;
	const menuW = preferredWidth;
	const top = window.scrollY + anchorRect.bottom + 8;
	let left = window.scrollX + anchorRect.right - menuW; // align right edges
	if (left < margin) left = margin;
	if (left + menuW + margin > window.innerWidth) left = window.innerWidth - menuW - margin;

	const style: React.CSSProperties = {
		position: 'absolute',
		top,
		left,
		width: menuW,
		zIndex: 99999,
	};

	return createPortal(
		<div
			ref={portalRef}
			style={style}
			onClick={(e) => {
				// stop propagation so click inside portal doesn't bubble to document listener
				e.stopPropagation();
			}}
			className="rounded-xl border border-slate-200 bg-white shadow-2xl">
			{children}
		</div>,
		document.body
	);
}

export default function NavBar({ logoSrc = '/3.png', whatsappNumbers = ['+58 424 2070878', '+58 412 4885623'], siteUrl = 'https://syncwave.com.ve' }: NavBarProps) {
	const [openDropdown, setOpenDropdown] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

	// Recompute anchorRect when opening
	useEffect(() => {
		function computeRect() {
			const btn = buttonRef.current;
			if (!btn) return setAnchorRect(null);
			setAnchorRect(btn.getBoundingClientRect());
		}

		if (openDropdown) {
			computeRect();
			// update on resize and scroll
			window.addEventListener('resize', computeRect);
			window.addEventListener('scroll', computeRect, true);
		}
		return () => {
			window.removeEventListener('resize', computeRect);
			window.removeEventListener('scroll', computeRect, true);
		};
	}, [openDropdown]);

	// Click outside handler that works with portal: check if click is inside button or inside portal element
	useEffect(() => {
		function onDocClick(e: MouseEvent) {
			const target = e.target as Node;
			const btn = buttonRef.current;
			const portalEl = document.querySelector('.__syncwave_dropdown_portal') as HTMLElement | null;

			if (btn && btn.contains(target)) {
				return; // clicked the button
			}

			if (portalEl && portalEl.contains(target)) {
				return; // clicked inside portal
			}

			// otherwise close
			setOpenDropdown(false);
		}

		if (openDropdown) {
			document.addEventListener('click', onDocClick);
		}
		return () => document.removeEventListener('click', onDocClick);
	}, [openDropdown]);

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				setOpenDropdown(false);
				setOpenModal(false);
			}
		}
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, []);

	const firstNumber = whatsappNumbers[0];
	const waHrefFirst = buildWhatsAppHref(firstNumber);

	const openWaWithText = (phone: string, text: string) => {
		return buildWhatsAppHref(phone, text);
	};

	return (
		<header className="w-full bg-white/90 backdrop-blur-sm shadow-md z-30">
			<nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between" aria-label="Main navigation">
				<Link href={siteUrl} aria-label="Ir a Syncwave" className="flex items-center gap-3">
					<div className="relative w-[110px] h-8 sm:w-[140px] sm:h-10 md:w-[180px] md:h-12">
						<Image src={logoSrc} alt="Syncwave logo" fill sizes="(max-width: 640px) 110px, (max-width: 1024px) 140px, 180px" className="object-contain" />
					</div>
					<span className="sr-only">Syncwave - Agencia de automatizaciones</span>
				</Link>

				<div className="flex items-center gap-3">
					<a href={waHrefFirst} target="_blank" rel="noopener noreferrer" aria-label={`Abrir WhatsApp ${firstNumber}`} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-sm shadow-lg hover:scale-105 transition-transform duration-200">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
							<path d="M20.52 3.478A11.873 11.873 0 0012.047.75C6.245.75 1.75 5.246 1.75 11.048c0 1.944.506 3.842 1.467 5.52L.75 23.25l6.95-2.633a11.19 11.19 0 005.347 1.299h.002c5.803 0 10.298-4.495 10.298-10.297 0-2.746-1.02-5.317-2.626-7.191z" fill="currentColor" />
							<path d="M17.42 14.05c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2 0-.38-.05-.53-.05-.15-.68-1.65-.93-2.27-.24-.6-.48-.52-.68-.53-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.81.38-.28.3-1.06 1.03-1.06 2.5 0 1.47 1.09 2.9 1.24 3.1.15.2 2.15 3.42 5.21 4.8 3.06 1.4 3.06.93 3.61.87.56-.06 1.77-.72 2.02-1.42.24-.7.24-1.3.17-1.42-.07-.11-.28-.17-.58-.29z" fill="white" />
						</svg>
						<span className="hidden sm:inline">Contáctanos</span>
					</a>

					{/* Dropdown button */}
					<div className="relative">
						<button ref={buttonRef} onClick={() => setOpenDropdown((s) => !s)} aria-expanded={openDropdown} aria-haspopup="menu" type="button" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white shadow hover:shadow-md transition-shadow" title="Más opciones de contacto">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
								<circle cx="5" cy="12" r="2" fill="#111827" />
								<circle cx="12" cy="12" r="2" fill="#111827" />
								<circle cx="19" cy="12" r="2" fill="#111827" />
							</svg>
						</button>

						{/* Dropdown rendered in portal (above all) */}
						{openDropdown && anchorRect && (
							<div className="__syncwave_dropdown_portal" aria-hidden>
								<DropdownPortal anchorRect={anchorRect} onClose={() => setOpenDropdown(false)}>
									<div className="px-3 pb-2">
										<p className="text-xs text-slate-500">Contactos de WhatsApp</p>
									</div>
									<ul className="divide-y divide-slate-100">
										{whatsappNumbers.map((num) => {
											const href = buildWhatsAppHref(num);
											return (
												<li key={num} className="px-3 py-2">
													<a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md px-2 py-1 transition-colors">
														<span>{num}</span>
														<span className="text-xs text-slate-400">WhatsApp</span>
													</a>
												</li>
											);
										})}
										<li className="px-3 py-2">
											<button
												onClick={() => {
													setOpenModal(true);
													setOpenDropdown(false);
												}}
												className="w-full text-left text-sm text-slate-700 hover:bg-slate-50 rounded-md px-2 py-1 transition-colors"
												type="button">
												Más opciones (llamar / predefinir mensaje)
											</button>
										</li>
									</ul>
								</DropdownPortal>
							</div>
						)}
					</div>
				</div>
			</nav>

			{/* Modal con estructura mejorada */}
			{openModal && (
				<ModalPortal onClose={() => setOpenModal(false)}>
					<header className="flex items-start justify-between">
						<h3 id="modal-title" className="text-lg font-semibold text-gray-800">
							Opciones de contacto
						</h3>
						<button onClick={() => setOpenModal(false)} className="text-gray-500 hover:text-gray-700" aria-label="Cerrar modal" type="button">
							Cerrar
						</button>
					</header>

					<div className="mt-3 text-sm text-gray-600">
						<p>Elige cómo quieres comunicarte con nosotros. Puedes llamar, enviar un mensaje directo por WhatsApp o usar un mensaje predefinido.</p>
					</div>

					<main className="mt-6 space-y-5 max-h-[60vh] overflow-y-auto z-50">
						<ul className="space-y-6">
							{whatsappNumbers.map((num) => {
								const digits = normalizePhone(num);
								const waUrl = buildWhatsAppHref(num);
								const waPreUrl = openWaWithText(num, 'Hola! Estoy interesado en sus servicios.');

								return (
									<li key={num} className="flex items-center justify-between gap-4">
										<div>
											<div className="text-sm font-medium text-gray-800">{num}</div>
											<div className="text-xs text-gray-400">Syncwave</div>
										</div>

										<div className="flex items-center gap-3">
											<a href={`tel:${digits}`} className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
												Llamar
											</a>

											<a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-green-600 text-white font-medium text-sm shadow hover:bg-green-700">
												Mensaje
											</a>

											<a href={waPreUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
												Mensaje predef.
											</a>
										</div>
									</li>
								);
							})}
						</ul>
					</main>

					<footer className="mt-6 flex justify-end">
						<button onClick={() => setOpenModal(false)} type="button" className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
							Cerrar
						</button>
					</footer>
				</ModalPortal>
			)}
		</header>
	);
}
