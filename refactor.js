const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// 1. Logo
html = html.replace(
    /<a href="\/" class="landing-logo">RentOS<\/a>/,
    `<a href="/"><img src="img/logo.png" alt="RentOS" style="height: 38px; display: block;"></a>`
);

// 2. Hero Text
html = html.replace(
    /<p style="color: #cbd5e1;">Tu PMS sirve para que entren reservas. RentOS sirve para que esas reservas no te secuestren el día. Frenamos el caos de WhatsApp y los problemas de coordinación de limpieza para que la operativa fluya sin que tengas que estar siempre conectado.<\/p>/,
    `<p style="color: #cbd5e1;">Tu PMS anota las reservas. RentOS evita que te secuestren el día. Controla la limpieza de fondo y filtra al huésped sin que tengas que mirar la pantalla.</p>`
);

// 3. CTA Piloto
html = html.replace(
    /<section class="footer-cta">/,
    `<section class="footer-cta" id="piloto">`
);

// 4. GlorIA Copy
html = html.replace(
    /<h2>Tu primera línea de defensa para el huésped.<\/h2>\s*<p>Tu tiempo es demasiado caro para seguir explicando por WhatsApp en qué cajón de la cocina están las bolsas de basura. GlorIA asume las preguntas repetitivas y las dudas de acceso;\s*<strong>y tú te centras directamente en hacer crecer el negocio.<\/strong><\/p>/,
    `<h2>Ignorar el WhatsApp empieza a ser rentable.</h2>
                <p>GlorIA asume la comunicación operativa de choque. Absorbe de forma inteligente las dudas repetitivas de tus huéspedes (accesos, WiFi, averías...) para quitarte el peso del teléfono de encima. Menos urgencias falsas, más tranquilidad para liderar tu negocio.</p>
                <div style="font-size: 1.1rem; font-weight: 600; color: var(--accent);">
                    Tu tiempo es muy caro para ser el manual de instrucciones del apartamento.
                </div>`
);


// 5. Reordenar (Hero -> Dolor -> GlorIA -> Transformacion -> Comparativa -> Demo -> FAQ -> Cierre)
// Usamos split o recortes. Las secciones son:
// <!-- HERO -->, <!-- BLOQUE DOLOR ...>, <!-- BLOQUE TRANSFORMACIÓN...>, <!-- COMPARATIVA...>, <!-- BLOQUE GLORIA -->, <!-- DEMO CENTRAL -->, <!-- FAQ -->, <!-- Cierre CTA -->
function extractSection(htmlStr, startMarker, endMarker) {
    let startIndex = htmlStr.indexOf(startMarker);
    if(startIndex === -1) return "";
    let endIndex = htmlStr.indexOf(endMarker, startIndex);
    if(endIndex === -1) endIndex = htmlStr.indexOf('</main>', startIndex);
    
    return htmlStr.substring(startIndex, endIndex);
}

// Vamos a dividir el contenido de <main> y reensamblar.
let mainStart = html.indexOf('<main>') + 6;
let mainEnd = html.indexOf('</main>');
let preMain = html.substring(0, mainStart);
let postMain = html.substring(mainEnd);

let secHero = extractSection(html, '<!-- HERO (Ambición', '<!-- BLOQUE DOLOR');
let secDolor = extractSection(html, '<!-- BLOQUE DOLOR', '<!-- BLOQUE TRANSFORMACIÓN');
let secTrans = extractSection(html, '<!-- BLOQUE TRANSFORMACIÓN', '<!-- COMPARATIVA');
let secComp = extractSection(html, '<!-- COMPARATIVA', '<!-- BLOQUE GLORIA');
let secGloria = extractSection(html, '<!-- BLOQUE GLORIA', '<!-- DEMO CENTRAL');
let secDemo = extractSection(html, '<!-- DEMO CENTRAL', '<!-- FAQ');
let secFaq = extractSection(html, '<!-- FAQ', '<!-- Cierre');
let secCierre = extractSection(html, '<!-- Cierre', '</main>');

// Nuevo orden en Main
let newMain = `\n        ${secHero}${secDolor}${secGloria}${secTrans}${secComp}${secDemo}${secFaq}${secCierre}`;

let newHtml = preMain + newMain + postMain;

fs.writeFileSync('../frontend/index.html', newHtml);
fs.writeFileSync('./03_landing/index.html', newHtml);
console.log('Done');
