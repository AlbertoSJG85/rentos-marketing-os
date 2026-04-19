const fs = require('fs');

function applyFinalRefinements(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Inyectar estilos para el branding de dos tonos y potenciar el color OS (--accent)
    if (!html.includes('.brand-os')) {
        const brandStyles = `
        .brand-rent { color: var(--primary); font-weight: 800; }
        .brand-os { color: var(--accent); font-weight: 900; }
        
        /* Potenciar presencia del color OS en la landing */
        .pain-header h2 span { color: var(--accent); }
        .hero-badge { border-color: var(--accent) !important; background: rgba(38, 198, 176, 0.1) !important; color: var(--accent) !important; }
        .btn-primary { background: var(--accent) !important; box-shadow: 0 10px 25px rgba(38, 198, 176, 0.3) !important; }
        .gloria-text h2 { border-left: 5px solid var(--accent); padding-left: 1.5rem; }
        `;
        html = html.replace('</style>', brandStyles + '\n    </style>');
    }

    // 2. Reemplazo de RentOS por versión coloreada
    // Evitamos reemplazar dentro de atributos HTML (src, class, etc)
    // Usamos una regex que busque RentOS pero no precedido de "=" o "/"
    html = html.replace(/(?<![="\/])RentOS\b/g, '<span class="brand-rent">Rent</span><span class="brand-os">OS</span>');

    // 3. Reemplazo del Banner / Marquee
    const oldBannerText = '✦ INGENIERÍA DE PAZ OPERATIVA PARA GESTORES ✦ NO ES UN PMS ✦ ES TU BARRERA DE DEFENSA ✦ DOMINA EL APARTAMENTO ✦';
    const newBannerText = 'INGENIERÍA PARA REDUCIR CARGA OPERATIVA ✦ NO ES OTRO PMS ✦ ES CONTROL OPERATIVO REAL';
    html = html.replace(oldBannerText, newBannerText);

    // 4. Reemplazo de la frase de cabecera en el bloque de dolor/ribbons
    const oldHeader = 'La operativa es ruido hasta que le pones sistema';
    const newHeader = 'La diferencia no es trabajar más. Es tener a <span class="brand-rent">Rent</span><span class="brand-os">OS</span> contigo.';
    html = html.replace(oldHeader, newHeader);

    fs.writeFileSync(filepath, html);
    console.log('Refinamientos aplicados en ' + filepath);
}

applyFinalRefinements('../frontend/index.html');
applyFinalRefinements('./03_landing/index.html');
