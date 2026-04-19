const fs = require('fs');

function finalizeLanding(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. ELIMINAR BLOQUE TRANSFORMACION (Deja de perseguir)
    // Buscamos desde el comentario hasta el fin de la seccion
    const transformHeader = '<!-- BLOQUE TRANSFORMACIÓN: Antes/Después Agresivo con Vídeo de Alivio -->';
    const transformRegex = /<!-- BLOQUE TRANSFORMACIÓN: Antes\/Después Agresivo con Vídeo de Alivio -->\s*<section class="transformation-section">[\s\S]*?<\/section>/;
    html = html.replace(transformRegex, '');

    // 2. INYECTAR BLOQUE FINANZAS DEBAJO DE GLORIA
    // Buscamos el final de </section> de gloria-section
    const gloriaEnd = '</section>';
    // Pero hay varios </section>. Buscamos el que está después del comment BLOQUE GLORIA
    let splitPos = html.indexOf('<!-- BLOQUE GLORIA -->');
    if (splitPos !== -1) {
        let sectionEndPos = html.indexOf('</section>', splitPos);
        if (sectionEndPos !== -1) {
            sectionEndPos += 10; // Incluimos el </section>
            
            const financeSection = `
        <!-- BLOQUE FINANZAS -->
        <section style="background: var(--bg-light); padding: 7rem 2rem; border-top: 1px solid rgba(138, 75, 222, 0.1); border-bottom: 1px solid var(--border); box-shadow: inset 0 20px 40px rgba(0,0,0,0.02);">
            <div style="max-width: 1000px; margin: 0 auto; display: flex; gap: 3rem; align-items: center; flex-direction: column; text-align: center;">
                
                <h2 style="font-size: 3rem; color: var(--bg-dark); letter-spacing: -0.03em; margin-bottom: 1rem;">Visión integral de tu negocio</h2>
                
                <p style="font-size: 1.35rem; color: var(--text-muted); max-width: 800px; line-height: 1.6; margin-bottom: 2rem;">
                    RentOS no solo ordena la operativa. También te deja ver cómo va el negocio: <strong>ingresos del mes, ocupación, visión del año y documentación útil</strong> cuando la necesitas. Todo en el mismo sitio, para que no tengas una parte del negocio en la cabeza y otra repartida entre herramientas.
                </p>

                <!-- Panel KPI Falso -->
                <div style="width: 100%; max-width: 800px; border-radius: 20px; background: white; border: 1px solid var(--border); box-shadow: 0 20px 50px rgba(0,0,0,0.06); padding: 3rem; display: flex; justify-content: space-around; transform: translateY(10px);">
                    <div style="text-align: center;">
                        <span style="font-size: 0.95rem; color: var(--text-muted); text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em; display:flex; align-items:center; gap:0.5rem; justify-content:center;"><span style="color:var(--success); font-size:1.2rem;">●</span> Ingresos Mes</span>
                        <div style="font-size: 2.2rem; font-weight: 900; color: var(--bg-dark); margin-top: 0.5rem;">€ 42.500</div>
                    </div>
                    <div style="width: 2px; background: var(--border);"></div>
                    <div style="text-align: center;">
                        <span style="font-size: 0.95rem; color: var(--text-muted); text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em; display:flex; align-items:center; gap:0.5rem; justify-content:center;"><span style="color:var(--accent); font-size:1.2rem;">●</span> Ocupación</span>
                        <div style="font-size: 2.2rem; font-weight: 900; color: var(--bg-dark); margin-top: 0.5rem;">89%</div>
                    </div>
                    <div style="width: 2px; background: var(--border);"></div>
                    <div style="text-align: center;">
                        <span style="font-size: 0.95rem; color: var(--text-muted); text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em; display:flex; align-items:center; gap:0.5rem; justify-content:center;"><span style="color:var(--primary); font-size:1.2rem;">●</span> Viviendas</span>
                        <div style="font-size: 2.2rem; font-weight: 900; color: var(--bg-dark); margin-top: 0.5rem;">15 Activas</div>
                    </div>
                </div>
                
            </div>
        </section>
`;
            if (!html.includes('<!-- BLOQUE FINANZAS -->')) {
                html = html.slice(0, sectionEndPos) + financeSection + html.slice(sectionEndPos);
            }
        }
    }

    fs.writeFileSync(filepath, html);
}

finalizeLanding('../frontend/index.html');
finalizeLanding('./03_landing/index.html');
console.log('Final Layout Applied');
