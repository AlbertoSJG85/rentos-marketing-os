const fs = require('fs');

function addGloriaDemoBtn(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Ubicamos el final del bloque emocional de GlorIA
    // Buscamos: Porque el verdadero cambio no es solo operativo...
    const emotionalPhrase = 'Porque el verdadero cambio no es solo operativo. También es mental: menos ruido, menos carga y más tranquilidad para dirigir el negocio.';
    
    const demoBtn = `
                    <div style="margin-top: 2.5rem; position: relative; z-index: 10;">
                        <a href="/demo/" class="btn btn-dark" style="padding: 1rem 2rem; font-size: 1.1rem; border-radius: 12px; display: inline-flex; align-items: center; gap: 0.75rem; box-shadow: 0 10px 20px rgba(0,0,0,0.2);">
                            Ver demo interactiva <span style="color: var(--accent);">✦</span>
                        </a>
                    </div>`;

    // Lo inyectamos justo antes de que se cierre el div del texto de gloria
    // El div de gloria-text se cierra después de la frase emocional.
    // Buscamos el final de la frase y el cierre del div
    let target = emotionalPhrase + '\n                    </div>';
    let replacement = emotionalPhrase + '\n                    </div>' + demoBtn;
    
    // Verificamos si el botón ya existe para no duplicarlo
    if (!html.includes('Ver demo interactiva') && html.includes(emotionalPhrase)) {
        html = html.replace(target, replacement);
    }

    fs.writeFileSync(filepath, html);
    console.log('Botón de demo añadido a la sección GlorIA en ' + filepath);
}

addGloriaDemoBtn('../frontend/index.html');
addGloriaDemoBtn('./03_landing/index.html');
