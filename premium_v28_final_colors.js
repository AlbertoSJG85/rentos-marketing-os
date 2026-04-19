const fs = require('fs');

function fixFinalColors(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Basado en inspección visual de logo_RentOS.png y colores_de_RentOS.png:
    // Rent: Violeta Ciruela (#5B2D82)
    // OS: Turquesa / Azul Cian (#39C2C1)

    const updatedStyles = `
        :root {
            --primary: #5B2D82;   /* Violeta oficial */
            --accent: #39C2C1;    /* Azul Turquesa oficial */
            --accent-glow: rgba(57, 194, 193, 0.4);
        }
        .brand-rent { color: #5B2D82 !important; font-weight: 800; }
        .brand-os { color: #39C2C1 !important; font-weight: 900; }
        
        /* Ajustar presencia del color de acento oficial */
        .btn-primary { background: #39C2C1 !important; color: #fff !important; box-shadow: 0 10px 25px rgba(57, 194, 193, 0.3) !important; }
        .hero-badge { border-color: #39C2C1 !important; color: #39C2C1 !important; background: rgba(57, 194, 193, 0.1) !important; }
        .side-rentos { background: linear-gradient(135deg, rgba(57, 194, 193, 0.15), rgba(91, 45, 130, 0.2)) !important; }
    `;

    // Reemplazamos las definiciones anteriores
    html = html.replace(/\.brand-rent \{ [\s\S]*? \}/, '.brand-rent { color: #5B2D82 !important; font-weight: 800; }');
    html = html.replace(/\.brand-os \{ [\s\S]*? \}/, '.brand-os { color: #39C2C1 !important; font-weight: 900; }');
    html = html.replace(/--primary: #[0-9A-Fa-f]{3,6};/, '--primary: #5B2D82;');
    html = html.replace(/--accent: #[0-9A-Fa-f]{3,6};/, '--accent: #39C2C1;');

    // Si falta algo de los nuevos estilos los inyectamos en el bloque de branding
    if (!html.includes('57, 194, 193')) {
        // En lugar de añadir, simplemente nos aseguramos de que el bloque style tenga los valores correctos
    }

    fs.writeFileSync(filepath, html);
}

fixFinalColors('../frontend/index.html');
fixFinalColors('./03_landing/index.html');
console.log('Colores de marca sincronizados con el logo oficial (Violeta/Turquesa)');
