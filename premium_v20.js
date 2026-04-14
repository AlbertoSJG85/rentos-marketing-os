const fs = require('fs');

function afinarFinal(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Cambiar la frase emocional dentro del bloque de GlorIA
    html = html.replace(
        'Cuando una parte real de la operativa deja de caer siempre sobre ti, cambia cómo se siente el negocio: menos ruido, menos presión, más tranquilidad y una sensación mucho más clara de control.',
        'Porque el verdadero cambio no es solo operativo. También es mental: menos ruido, menos carga y más tranquilidad para dirigir el negocio.'
    );

    // 2. Asegurarse que el bloque de Finanzas tiene los márgenes adecuados para respirar con lo anterior
    // Si la seccion finanzas tiene padding-top: 8rem, tal vez es demasiado si esta pegado a la emocioanl
    // Depende, si está visualmente coherente lo dejo intacto o le doy un aire más sutil.
    html = html.replace(
        /<section style="background: var\(--bg-light\); padding: 8rem 2rem; border-top: 1px solid var\(--border\); border-bottom: 1px solid var\(--border\);">/,
        '<section style="background: var(--bg-light); padding: 7rem 2rem; border-top: 1px solid rgba(138, 75, 222, 0.1); border-bottom: 1px solid var(--border); box-shadow: inset 0 20px 40px rgba(0,0,0,0.02);">'
    );

    fs.writeFileSync(filepath, html);
    console.log("Afianzado en " + filepath);
}

afinarFinal('../frontend/index.html');
afinarFinal('./03_landing/index.html');
