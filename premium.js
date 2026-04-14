const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// 1. Modificar CSS para inyectar diseño Premium
// Cambiamos variables del root o añadimos nuevos overrides premium.
let premiumCSS = `
        /* ENHANCED PREMIUM STYLES */
        .landing-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(138, 75, 222, 0.15);
            padding: 1.2rem 2.5rem;
            max-width: 100%;
        }
        
        /* Logo grande */
        .header-logo-container img {
            height: 55px !important;
            transition: transform 0.3s ease;
        }
        .header-logo-container img:hover {
            transform: scale(1.02);
        }

        /* Hero 2 Columnas */
        .hero {
            padding: 8rem 2rem 6rem;
            text-align: left;
            max-width: 1300px;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            gap: 4rem;
        }
        
        .hero-watermark {
            position: absolute;
            top: -10%;
            right: -20%;
            width: 1200px;
            height: 1200px;
            background-image: url('img/logo.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.02;
            filter: grayscale(100%);
            z-index: 0;
            pointer-events: none;
            transform: rotate(-10deg);
        }
        
        .hero-content {
            flex: 1;
            position: relative;
            z-index: 2;
        }
        
        .hero h1 {
            font-size: 4.5rem;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: var(--bg-dark);
            letter-spacing: -0.04em;
        }

        .hero p {
            font-size: 1.35rem;
            color: var(--text-muted);
            margin-bottom: 3rem;
            max-width: 100%;
            margin-left: 0;
        }

        .hero-actions {
            justify-content: flex-start;
        }

        /* Mockup Premium en Hero */
        .hero-visual {
            flex: 1;
            position: relative;
            z-index: 2;
        }
        
        .hero-mockup-container {
            position: relative;
            border-radius: 24px;
            padding: 10px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(138, 75, 222, 0.2);
            box-shadow: 0 40px 100px -20px var(--accent-glow), 
                        inset 0 0 0 1px rgba(255, 255, 255, 0.5);
            transform: perspective(1000px) rotateY(-8deg) rotateX(4deg);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hero-mockup-container:hover {
            transform: perspective(1000px) rotateY(-2deg) rotateX(2deg);
        }
        
        .mockup-inner {
            border-radius: 16px;
            overflow: hidden;
            background: #000;
            position: relative;
            aspect-ratio: 16/10;
        }
        
        /* Efectos Glow Esféricos de Fondo globales */
        .bg-glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
            pointer-events: none;
            opacity: 0.6;
        }
        
        /* Premium Cards */
        .pain-card {
            background: rgba(255, 255, 255, 0.02) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
            padding: 3rem !important;
            border-radius: 20px !important;
            position: relative;
            overflow: hidden;
        }
        .pain-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }
        .pain-card:hover {
            border-color: rgba(138, 75, 222, 0.4) !important;
            box-shadow: 0 15px 40px rgba(138, 75, 222, 0.15) !important;
        }
        
        @media (max-width: 990px) {
            .hero {
                flex-direction: column;
                text-align: center;
                padding-top: 6rem;
            }
            .hero p { margin-left: auto; margin-right: auto; }
            .hero-actions { justify-content: center; }
            .hero h1 { font-size: 3.2rem; }
            .hero-mockup-container { transform: none !important; }
        }
`;

html = html.replace('</style>', premiumCSS + '\n    </style>');

// 2. Modificamos el Header para engordar los logos
let oldHeader = `<header class="landing-header">
        <div style="display: flex; flex-direction: column; justify-content: center;">
            <a href="/"><img src="img/logo.png" alt="RentOS" style="height: 38px; display: block;"></a>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">by NexOS</span>
        </div>`;
let newHeader = `<header class="landing-header">
        <div style="display: flex; flex-direction: column; justify-content: center;" class="header-logo-container">
            <a href="/"><img src="img/logo.png" alt="RentOS" style="height: 55px; display: block; object-fit: contain;"></a>
            <span style="font-size: 0.85rem; color: var(--accent); font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; padding-left: 2px;">BY NEXOS</span>
        </div>`;
html = html.replace(oldHeader, newHeader);

// 3. Reestructuramos el Hero de Plano a Grid con Mockup y Watermark
// Hay que coger <section class="hero" ... hasta </section> antes del 'pain-section'
let heroStart = html.indexOf('<section class="hero"');
let heroEnd = html.indexOf('<!-- BLOQUE DOLOR');
let oldHeroFull = html.substring(heroStart, heroEnd);

let newHero = `<section class="hero">
            <!-- Glow Orb Backgrounds -->
            <div class="bg-glow-orb" style="top: -100px; left: -200px; width: 600px; height: 600px; background: rgba(138, 75, 222, 0.15);"></div>
            <div class="bg-glow-orb" style="bottom: 100px; right: -100px; width: 500px; height: 500px; background: rgba(56, 26, 93, 0.1);"></div>
            
            <!-- Watermark del Logo gigante oscuro -->
            <div class="hero-watermark"></div>
            
            <div class="hero-content">
                <span class="hero-badge" style="background: rgba(138, 75, 222, 0.1); color: var(--accent); border: 1px solid rgba(138, 75, 222, 0.2);">EL SISTEMA OPERATIVO PREMIUM</span>
                <h1>Tu negocio no debería depender de que mires <span style="background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 5px 20px rgba(138, 75, 222, 0.2);">WhatsApp cada 5 minutos</span>.</h1>
                <p>Tu PMS anota las reservas. RentOS evita que te secuestren el día. Controla la limpieza de fondo y filtra al huésped sin que tengas que mirar la pantalla constantemente.</p>
                <div class="hero-actions">
                    <a href="#piloto" id="hero-pilot-btn" class="btn btn-primary" style="padding: 1.1rem 2.5rem; font-size: 1.15rem; border-radius: 12px;">Quiero entrar al Piloto</a>
                    <a href="/demo/" id="hero-demo-btn" class="btn btn-secondary" style="padding: 1.1rem 2.5rem; font-size: 1.15rem; border-radius: 12px;">Ver funcionamiento</a>
                </div>
            </div>
            
            <div class="hero-visual">
                <div class="hero-mockup-container">
                    <div class="mockup-inner">
                        <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
                            <source src="img/hero-tension-placeholder.mp4" type="video/mp4">
                        </video>
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(0,0,0,0.8), transparent); padding: 2rem; color: white;">
                            <div style="font-weight: 700; font-size: 1.2rem;">Panel Operativo En Vivo</div>
                            <div style="opacity: 0.8; font-size: 0.9rem;">Sincronizando 12 propiedades. 0 alertas.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;

html = html.replace(oldHeroFull, newHero);


// 4. Modificamos GLORIA visualmente y la Sección Comparativa
let gloriaSectionStr = `<!-- BLOQUE GLORIA -->
        <section class="gloria-section">`;
let newGloriaStart = `<!-- BLOQUE GLORIA -->
        <section class="gloria-section" style="position: relative; background: var(--bg-light); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
            <div class="bg-glow-orb" style="top: 20%; left: 10%; width: 400px; height: 400px; background: rgba(138, 75, 222, 0.05);"></div>`;
html = html.replace(gloriaSectionStr, newGloriaStart);

fs.writeFileSync('../frontend/index.html', html);
fs.writeFileSync('./03_landing/index.html', html);
console.log('CSS Premium Aplicado');
