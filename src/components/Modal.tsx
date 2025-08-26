'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	className?: string;
	children?: React.ReactNode;
	hideCloseButton?: boolean;
};

export default function Modal({ isOpen, onClose, title, className = '', children, hideCloseButton }: ModalProps) {
	// no render when not open
	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = prev;
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	// portal target
	const mount = typeof document !== 'undefined' ? document.body : null;
	if (!mount) return null;

	return createPortal(
		<div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} aria-hidden="true" />

			{/* Modal panel */}
			<div className={`relative max-w-3xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 overflow-hidden ${className}`}>
				{/* Header */}
				<div className="flex items-start justify-between p-6 sm:p-8">
					<div>
						{title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
						{/* small subtitle slot (optional) */}
					</div>

					{!hideCloseButton && (
						<button type="button" onClick={onClose} aria-label="Cerrar modal" className="ml-4 inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
								<path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
							</svg>
						</button>
					)}
				</div>

				{/* Body */}
				<div className="px-6 pb-6 sm:px-8 sm:pb-8">{children}</div>
			</div>
		</div>,
		mount
	);
}
