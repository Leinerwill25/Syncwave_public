import { NextResponse } from 'next/server';
import { jsPDF } from 'jspdf';

// --- Interfaz para errores ---
interface DataType {
	message: string;
}

export async function GET() {
	try {
		const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
		const pageWidth = doc.internal.pageSize.getWidth();
		let y = 40;
		const margin = 20;
		const contentWidth = pageWidth - 2 * margin;

		// --- Portada ---
		doc.setFillColor(0, 51, 102);
		doc.rect(0, 0, pageWidth, 150, 'F');
		doc.setFontSize(28);
		doc.setTextColor(255, 255, 255);
		doc.text('Syncwave Partner Pack', pageWidth / 2, 80, { align: 'center' });
		doc.setFontSize(14);
		doc.text('Conviértete en socio estratégico y potencia tus ingresos con automatización empresarial', pageWidth / 2, 110, { align: 'center', maxWidth: contentWidth - 20 });
		y = 170;

		// --- Función para secciones ---
		const addSection = (title: string, content: string[], bgColor: [number, number, number], titleColor: [number, number, number]) => {
			const sectionHeight = content.length * 18 + 40;
			doc.setFillColor(...bgColor);
			doc.roundedRect(margin, y, contentWidth, sectionHeight, 5, 5, 'F');
			doc.setFontSize(16);
			doc.setTextColor(...titleColor);
			doc.text(title, margin + 10, y + 20);
			doc.setFontSize(12);
			doc.setTextColor(50, 50, 50);
			let textY = y + 40;
			content.forEach((line) => {
				doc.text(line, margin + 10, textY, { maxWidth: contentWidth - 20 });
				textY += 18;
			});
			y += sectionHeight + 20;
		};

		// --- Secciones ---
		addSection('Perfil del Socio Ideal', ['Buscamos inversionistas y personas con contactos en PYMES que necesiten automatizar procesos y optimizar su negocio.'], [235, 240, 250], [0, 51, 102]);

		addSection('Beneficios del Socio', ['• Comisiones atractivas: Hasta 20% según tu contribución.', '• Formación opcional: Invierte tus comisiones en cursos de automatización.', '• Networking estratégico: Acceso a nuestra red de clientes y profesionales del sector.'], [245, 250, 245], [0, 102, 0]);

		// --- Tabla de Comisiones ---
		const tableData = [
			['Clientes referidos', '% Comisión'],
			['5 o más', '20%'],
			['2 a 4', '10%'],
			['1', '5%'],
		];

		const rowHeight = 25;
		const tableX = margin + 10;
		let tableY = y;
		const tableWidth = 250;

		doc.setFontSize(16);
		doc.setTextColor(102, 51, 0);
		doc.text('Estructura de Comisiones', tableX, tableY);
		tableY += 15;

		tableData.forEach((row, index) => {
			const fillColor: [number, number, number] = index === 0 ? [0, 51, 102] : [255, 255, 255];
			const textColor = index === 0 ? 255 : 50;
			doc.setFillColor(...fillColor);
			doc.setDrawColor(200);
			doc.rect(tableX, tableY, tableWidth, rowHeight, 'FD');
			doc.setTextColor(textColor);
			doc.setFontSize(12);
			doc.text(row[0], tableX + 5, tableY + 17);
			doc.text(row[1], tableX + tableWidth - 50, tableY + 17);
			tableY += rowHeight;
		});

		doc.setTextColor(50, 50, 50);
		doc.text('Primeros 5 socios: sin inversión inicial.', tableX, tableY + 20);
		y = tableY + 40;

		addSection('Metas y Propósito', ['• Generar ingresos recurrentes mediante comisiones.', '• Contribuir al crecimiento de empresas mediante automatización.', '• Expandir la marca Syncwave y crear oportunidades conjuntas.'], [250, 245, 255], [102, 0, 102]);

		addSection('Cómo Unirse', ['1. Contacta al equipo de Syncwave.', '2. Confirma tus datos y tus contactos.', '3. Comienza a referir clientes y gana comisiones.'], [255, 245, 245], [153, 0, 0]);

		// --- CTA Final ---
		const ctaHeight = 40;
		doc.setFillColor(0, 51, 102);
		doc.roundedRect(margin, y, contentWidth, ctaHeight, 5, 5, 'F');
		doc.setFontSize(14);
		doc.setTextColor(255, 255, 255);
		doc.text('¡Únete ahora y potencia tus ingresos!', pageWidth / 2, y + 27, { align: 'center' });

		// --- Exportar PDF ---
		const pdfOutput = doc.output('arraybuffer');
		return new NextResponse(Buffer.from(pdfOutput), {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename=Syncwave_Partner_Pack.pdf',
			},
		});
	} catch (error: unknown) {
		const e = error as DataType;
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}
