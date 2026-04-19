const fs = require('fs');

function adjustBrandColors(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Re-definir variables de color para ajustarse al logo real
    // Violeta para Rent, Azul Claro para OS
    const newColors = `
        :root {
            --primary: #8A4BDE;   /* Violeta Rent */
            --accent: #00D1FF;    /* Azul Claro OS */
            --accent-glow: rgba(0, 209, 255, 0.4);
        }
        .brand-rent { color: #8A4BDE !important; font-weight: 800; }
        .brand-os { color: #00D1FF !important; font-weight: 900; }
        
        /* Asegurar que el azul claro de OS esté presente */
        .hero h1 span { color: #00D1FF !important; }
        .btn-primary { background: #00D1FF !important; color: #000 !important; box-shadow: 0 10px 25px rgba(0, 209, 255, 0.3) !important; }
        .hero-badge { border-color: #00D1FF !important; color: #00D1FF !important; background: rgba(0, 209, 255, 0.1) !important; }
    `;

    // Si ya inyecté estilos antes, los reemplazo. Si no, los añado.
    if (html.includes('.brand-os')) {
        // Buscamos el bloque que inyecté antes y lo machacamos con el nuevo esquema
        const styleRegex = /<style>[\s\S]*?\.brand-os[\s\S]*?<\/style>/;
        // O más seguro, buscamos la definición de las clases que acabo de poner
        html = html.replace(/\.brand-rent \{ [\s\S]*? \}/, '.brand-rent { color: #8A4BDE !important; font-weight: 800; }');
        html = html.replace(/\.brand-os \{ [\s\S]*? \}/, '.brand-os { color: #00D1FF !important; font-weight: 900; }');
        
        // Actualizamos las variables en :root
        html = html.replace(/--primary: #[0-9A-Fa-f]{3,6};/, '--primary: #8A4BDE;');
        html = html.replace(/--accent: #[0-9A-Fa-f]{3,6};/, '--accent: #00D1FF;');
    } else {
        html = html.replace('</style>', newColors + '\n    </style>');
    }

    fs.writeFileSync(filepath, html);
}

adjustBrandColors('../frontend/index.html');
adjustBrandColors('./03_landing/index.html');
console.log('Colores de marca ajustados: Violeta y Azul Claro');
