const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// 1. Agrandar logo a 80px
html = html.replace(/height: 55px !important;/g, 'height: 80px !important;');
html = html.replace(/height: 55px;/g, 'height: 80px;');

// 2. Corregir "BY NEXOS" mayúscula a "by NexOS" como exige la marca.
html = html.replace(
    /BY NEXOS/g,
    'by NexOS'
);
// Rebajar un pelo el font size del span para que la N mayúscula no sobresalga mal o poner text-transform none
html = html.replace(
    /text-transform: uppercase; margin-top: 4px;/g,
    'margin-top: -2px; font-size: 0.95rem;' // Se quita el uppercase forzado
);

// 3. Watermark Hero (Más inmenso, cruzando toda la pantalla)
html = html.replace(
    /width: 1200px;\s*height: 1200px;\s*background-image:[^;]+;\s*background-size:[^;]+;\s*background-repeat:[^;]+;\s*background-position:[^;]+;\s*opacity: 0.02;\s*filter: grayscale\(100%\);\s*z-index: 0;\s*pointer-events: none;\s*transform: rotate\(-10deg\);/,
    `width: 250vw; height: 250vw; top: -50%; right: -50%; background-image: url('img/logo.png'); background-size: contain; background-repeat: no-repeat; background-position: center; opacity: 0.04; filter: grayscale(100%); z-index: 0; pointer-events: none; transform: rotate(-25deg);`
);

// 4. Grid Pattern premium SaaS para la atmósfera
let gridCss = `
        /* Premium Background Grid */
        body::before {
            content: '';
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: radial-gradient(rgba(138, 75, 222, 0.1) 1px, transparent 1px);
            background-size: 30px 30px;
            z-index: -1;
            pointer-events: none;
        }
`;
html = html.replace('/* ENHANCED PREMIUM STYLES */', '/* ENHANCED PREMIUM STYLES */' + gridCss);

// 5. Franja de manifiesto (marquee/ticker)
let manifesto = `
        <!-- MANIFIESTO BANNER -->
        <div style="background: linear-gradient(90deg, var(--bg-dark), var(--primary), var(--bg-dark)); padding: 1.5rem 0; text-align: center; border-top: 1px solid rgba(138, 75, 222, 0.3); border-bottom: 1px solid rgba(138, 75, 222, 0.3); overflow: hidden; position: relative;">
            <div style="color: white; font-weight: 700; font-size: 0.95rem; letter-spacing: 0.25em; text-transform: uppercase; white-space: nowrap; opacity: 0.9;">
                ✦ INGENIERÍA DE PAZ OPERATIVA PARA GESTORES ✦ NO ES UN PMS ✦ ES TU BARRERA DE DEFENSA ✦ DOMINA EL APARTAMENTO ✦
            </div>
        </div>

        <!-- BLOQUE DOLOR (Agitación Fuerte) -->`;

html = html.replace(/<!-- BLOQUE DOLOR \(Agitación Fuerte\) -->/, manifesto);

fs.writeFileSync('../frontend/index.html', html);
fs.writeFileSync('./03_landing/index.html', html);
console.log('Iteración Fuerte Aplicada');
