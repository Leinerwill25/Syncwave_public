'use client';

import React from 'react';

interface CTAItem {
	text: string;
	href?: string;
	action?: 'download-pack';
}

interface CTAProps {
	primary: { text: string; href: string };
	secondary?: CTAItem;
	/**
	 * Optional handler to run when the secondary action is clicked.
	 * Useful to open a modal for anchors like '#caso-real'.
	 */
	onSecondaryClick?: () => void;
}

export default function CTAButtons({ primary, secondary, onSecondaryClick }: CTAProps) {
	// download handler (cuando secondary.action === 'download-pack')
	const handleDownload = async () => {
		try {
			const response = await fetch('/api/packSocios');
			if (!response.ok) throw new Error('Error al generar el PDF');

			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'Syncwave_Pack_Comercial.pdf';
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
		} catch (err) {
			console.error('Error descargando pack:', err);
			// Puedes reemplazar alert por tu propio sistema de notificaciones
			alert('No se pudo descargar el PDF. Intenta nuevamente más tarde.');
		}
	};

	// Click wrapper for secondary that decide qué hacer según props
	const handleSecondaryClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
		// Si es una acción de descarga, interceptamos y ejecutamos la descarga
		if (secondary?.action === 'download-pack') {
			e.preventDefault();
			handleDownload();
			return;
		}

		// Si pasaron onSecondaryClick (p.ej. abrir modal para ancla) y es una ancla o queremos interceptar
		if (onSecondaryClick) {
			// Si el href está presente y es una ancla interna, prevenimos la navegación por defecto
			if (secondary?.href && secondary.href.startsWith('#')) {
				e.preventDefault();
			}
			onSecondaryClick();
		}
		// En el resto de casos se deja que el enlace <a> funcione normalmente.
	};

	// Helper para añadir rel cuando abrimos en nueva pestaña
	const externalRel = (targetBlank: boolean) => (targetBlank ? 'noopener noreferrer' : undefined);

	return (
		<div className="flex flex-col gap-3 mt-6">
			{/* Primary: abrir en nueva pestaña por defecto (link externo) */}
			<a href={primary.href} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-indigo-600 text-white px-4 py-3 rounded-xl font-semibold hover:brightness-95 transition" aria-label={primary.text}>
				{primary.text}
			</a>

			{/* Secondary: distintos flujos según props */}
			{secondary && (
				<>
					{/* Si secondary tiene action (download), mostramos botón que descarga */}
					{secondary.action === 'download-pack' ? (
						<button type="button" onClick={handleDownload} className="w-full text-center border border-indigo-600 text-indigo-600 px-4 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition" aria-label={secondary.text}>
							{secondary.text}
						</button>
					) : // Si tiene href: puede ser ancla interna o vínculo externo
					secondary.href ? (
						// Si es ancla interna (ej: '#caso-real') y pasaron onSecondaryClick -> usar button-like to intercept
						secondary.href.startsWith('#') && onSecondaryClick ? (
							<button
								type="button"
								onClick={(e) => {
									// evitar comportamiento por defecto por si alguien usa <a> en otras implementaciones
									e.preventDefault();
									onSecondaryClick();
								}}
								className="w-full text-center border border-indigo-600 text-indigo-600 px-4 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
								aria-label={secondary.text}>
								{secondary.text}
							</button>
						) : (
							// Normal link: si es anchor (in-page) no abrir en nueva pestaña; si es externo, abrir en _blank
							<a href={secondary.href} target={secondary.href.startsWith('#') ? undefined : '_blank'} rel={secondary.href.startsWith('#') ? undefined : externalRel(true)} onClick={handleSecondaryClick} className="w-full text-center border border-indigo-600 text-indigo-600 px-4 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition" aria-label={secondary.text}>
								{secondary.text}
							</a>
						)
					) : (
						// No href ni action -> botón genérico que puede ejecutar onSecondaryClick si existe
						<button
							type="button"
							onClick={(e) => {
								e.preventDefault();
								if (onSecondaryClick) onSecondaryClick();
							}}
							className="w-full text-center border border-indigo-600 text-indigo-600 px-4 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
							aria-label={secondary.text}>
							{secondary.text}
						</button>
					)}
				</>
			)}
		</div>
	);
}
