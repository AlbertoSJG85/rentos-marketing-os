const fs = require('fs');

function implementRibbonTrial(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Inyectar estilos para el Ribbon
    if (!html.includes('.comparison-ribbon')) {
        const ribbonStyles = `
        .comparison-ribbon {
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 2rem;
            background: rgba(255, 255, 255, 0.01);
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .comparison-ribbon:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            border-color: rgba(138, 75, 222, 0.3);
        }
        .ribbon-side {
            padding: 2.5rem 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .side-caos {
            flex: 0 0 40%;
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent);
            border-right: 1px solid rgba(255, 255, 255, 0.05);
            position: relative;
        }
        .side-caos::after {
            content: '✕';
            position: absolute;
            top: 10px; right: 20px;
            font-size: 4rem;
            color: rgba(239, 68, 68, 0.1);
            font-weight: 900;
        }
        .side-rentos {
            flex: 1;
            background: linear-gradient(135deg, rgba(138, 75, 222, 0.15), rgba(56, 26, 93, 0.2));
            position: relative;
        }
        .side-label {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            margin-bottom: 0.5rem;
            font-weight: 800;
        }
        .ribbon-title {
            font-size: 1.6rem;
            font-weight: 800;
            line-height: 1.2;
            letter-spacing: -0.02em;
        }
        @media (max-width: 850px) {
            .comparison-ribbon { flex-direction: column; }
            .side-caos { border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        }
        `;
        html = html.replace('</style>', ribbonStyles + '\n    </style>');
    }

    // 2. Reemplazar el contenido de pain-container
    const painContainerRegex = /<div class="pain-container">[\s\S]*?<\/div>\s*<\/section>/;
    const newPainContent = `
            <div class="pain-container" style="max-width: 1100px; margin: 0 auto;">
                <div class="pain-header" style="margin-bottom: 4rem; text-align: center;">
                    <h2 style="font-size: 3.5rem; color: #fff; letter-spacing: -0.04em;">La operativa es <span style="color: #F87171;">ruido</span> hasta que le pones <span style="color: var(--accent);">sistema</span></h2>
                </div>

                <!-- RIBBON 1: COMUNICACION -->
                <div class="comparison-ribbon">
                    <div class="ribbon-side side-caos">
                        <span class="side-label" style="color: #F87171;">El Caos</span>
                        <div class="ribbon-title" style="color: #CBD5E1;">WhatsApp infinito drenando tu tiempo.</div>
                    </div>
                    <div class="ribbon-side side-rentos">
                        <span class="side-label" style="color: var(--accent);">Impacto RentOS</span>
                        <div class="ribbon-title" style="color: #fff;">Silencio operativo. <span style="color: var(--accent);">GlorIA</span> filtra el 90% de las dudas y solo te avisa si es crítico.</div>
                    </div>
                </div>

                <!-- RIBBON 2: COORDINACION -->
                <div class="comparison-ribbon">
                    <div class="ribbon-side side-caos">
                        <span class="side-label" style="color: #F87171;">El Desgate</span>
                        <div class="ribbon-title" style="color: #CBD5E1;">Perseguir limpiezas y avisar de cambios a mano.</div>
                    </div>
                    <div class="ribbon-side side-rentos">
                        <span class="side-label" style="color: var(--accent);">Impacto RentOS</span>
                        <div class="ribbon-title" style="color: #fff;">Orquestación automática. El equipo recibe su ruta en tiempo real, sin tu intervención.</div>
                    </div>
                </div>

                <!-- RIBBON 3: MENTALIDAD -->
                <div class="comparison-ribbon">
                    <div class="ribbon-side side-caos">
                        <span class="side-label" style="color: #F87171;">La Barrera</span>
                        <div class="ribbon-title" style="color: #CBD5E1;">Tú eres el cuello de botella de tu negocio.</div>
                    </div>
                    <div class="ribbon-side side-rentos">
                        <span class="side-label" style="color: var(--accent);">Impacto RentOS</span>
                        <div class="ribbon-title" style="color: #fff;">Control desde la barrera. El negocio escala porque el sistema ejecuta mientras tú diriges.</div>
                    </div>
                </div>

                <div style="margin-top: 4rem; text-align: center; font-size: 1.25rem; color: #94A3B8; font-style: italic;">
                    "RentOS entra donde el PMS se detiene: en la vida real del apartamento."
                </div>

            </div>
        </section>`;
    
    html = html.replace(painContainerRegex, newPainContent);

    fs.writeFileSync(filepath, html);
    console.log('Premium Ribbons implementados en ' + filepath);
}

implementRibbonTrial('../frontend/index.html');
implementRibbonTrial('./03_landing/index.html');
