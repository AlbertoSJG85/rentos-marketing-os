const fs = require('fs');

function implementComparison(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Reemplazo del bloque de dolor actual por la comparativa de 2 columnas
    const painSectionRegex = /<section class="pain-section">[\s\S]*?<\/section>/;
    const newPainSection = `
        <!-- BLOQUE DOLOR (Agitación Fuerte y Comparativa) -->
        <section class="pain-section">
            <div class="pain-container">
                <div class="pain-header" style="margin-bottom: 3rem; text-align: center;">
                    <h2 style="font-size: 3.5rem; color: #fff; letter-spacing: -0.03em;">Gestionar alquiler vacacional no debería sentirse así</h2>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); padding: 4rem; border-radius: 24px; max-width: 1100px; margin: 0 auto; box-shadow: 0 20px 50px rgba(0,0,0,0.3);">
                    
                    <div class="pain-grid-comparison" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
                        <!-- Columna Caos -->
                        <div>
                            <h3 style="color: #F87171; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 2rem; border-bottom: 1px solid rgba(248, 113, 113, 0.2); padding-bottom: 1rem; font-weight: 800;">El Caos Diario</h3>
                            <ul style="list-style: none; padding: 0; margin: 0; color: #CBD5E1; font-size: 1.15rem; line-height: 1.8;">
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.3rem;">✕</span> WhatsApp todo el día</li>
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.3rem;">✕</span> Limpiezas que hay que perseguir</li>
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.3rem;">✕</span> Cambios de última hora</li>
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.3rem;">✕</span> Huéspedes preguntando lo mismo</li>
                                <li style="margin-bottom: 2.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.3rem;">✕</span> Sensación de que todo depende de ti</li>
                            </ul>
                        </div>

                        <!-- Columna RentOS -->
                        <div>
                            <h3 style="color: var(--accent); font-size: 1.4rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 2rem; border-bottom: 1px solid rgba(138, 75, 222, 0.2); padding-bottom: 1rem; font-weight: 800;">Ingeniería de Paz (RentOS)</h3>
                            <ul style="list-style: none; padding: 0; margin: 0; color: #E0E7FF; font-size: 1.15rem; line-height: 1.8;">
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: var(--accent); font-weight: 900; font-size: 1.3rem;">✦</span> <strong>Silencio operativo:</strong> GlorIA filtra el ruido.</li>
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: var(--accent); font-weight: 900; font-size: 1.3rem;">✦</span> <strong>Orquestación automática:</strong> Tu equipo es autónomo.</li>
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: var(--accent); font-weight: 900; font-size: 1.3rem;">✦</span> <strong>Adaptación inteligente:</strong> Cambios sin fricción.</li>
                                <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: var(--accent); font-weight: 900; font-size: 1.3rem;">✦</span> <strong>Soporte oxigenado:</strong> Dudas resueltas 24/7.</li>
                                <li style="margin-bottom: 2.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: var(--accent); font-weight: 900; font-size: 1.3rem;">✦</span> <strong>Control desde la barrera:</strong> Tú diriges, RentOS ejecuta.</li>
                            </ul>
                        </div>
                    </div>

                    <div style="margin-top: 3.5rem; padding-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 2.2rem; font-weight: 800; color: white; text-align: center;">
                        RentOS entra justo ahí. <span style="color: var(--accent);">✦</span>
                    </div>
                </div>
            </div>
        </section>
    `;
    html = html.replace(painSectionRegex, newPainSection);

    // Ajuste responsive para la nueva comparativa
    if (!html.includes('.pain-grid-comparison')) {
        const responsiveStyles = `
        @media (max-width: 850px) {
            .pain-grid-comparison {
                grid-template-columns: 1fr !important;
                gap: 3rem !important;
            }
        }
        `;
        html = html.replace('</style>', responsiveStyles + '\n    </style>');
    }

    fs.writeFileSync(filepath, html);
    console.log('Comparativa inyectada en ' + filepath);
}

implementComparison('../frontend/index.html');
implementComparison('./03_landing/index.html');
