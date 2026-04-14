const fs = require('fs');

function agujaLaser(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. REEMPLAZO HERO CONTENT
    let heroRegex = /<div class="hero-content">[\s\S]*?<\/div>\s*<div class="hero-visual"/;
    let newHero = `<div class="hero-content" style="flex: 1; position: relative; z-index: 2;">
                <span class="hero-badge" style="background: rgba(138, 75, 222, 0.1); color: var(--accent); border: 1px solid rgba(138, 75, 222, 0.2);">EL SISTEMA OPERATIVO PREMIUM</span>
                <h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1rem; color: var(--bg-dark); letter-spacing: -0.04em;">RentOS viene a cambiar <span style="background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 5px 20px rgba(138, 75, 222, 0.2);">cómo se gestiona de verdad</span> la operativa del alquiler vacacional.</h1>
                <h2 style="font-size: 2rem; color: var(--text-main); margin-bottom: 2rem; font-weight: 800; letter-spacing: -0.03em;">La operativa ya no tiene por qué depender de ti.</h2>
                <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 3rem; max-width: 100%; margin-left: 0;">
                    RentOS ordena la operativa diaria para que dejes de perseguir limpiezas, avisos, cambios y conversaciones una por una, con mucho más control sobre lo que pasa cada día.<br><br>
                    Mete sistema donde más se nota: en la carga diaria que te roba tiempo, en la coordinación que desgasta y en el control que normalmente se pierde entre WhatsApp, tareas y cambios de última hora.
                </p>
                <div class="hero-actions" style="justify-content: flex-start;">
                    <a href="#piloto" id="hero-pilot-btn" class="btn btn-primary" style="padding: 1.1rem 2.5rem; font-size: 1.15rem; border-radius: 12px; box-shadow: 0 10px 30px var(--accent-glow);">Quiero probarlo GRATIS</a>
                </div>
            </div>
            
            <div class="hero-visual"`;
    html = html.replace(heroRegex, newHero);


    // 2. REEMPLAZO BLOQUE DE DOLOR
    let painRegex = /<section class="pain-section">[\s\S]*?<\/section>/;
    let newPain = `<section class="pain-section">
            <div class="pain-container">
                <div class="pain-header" style="margin-bottom: 3rem;">
                    <h2 style="font-size: 3.5rem; color: #fff; letter-spacing: -0.03em;">Gestionar alquiler vacacional no debería sentirse así</h2>
                </div>
                <div style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); padding: 4rem; border-radius: 24px; max-width: 900px; margin: 0 auto; text-align: left; box-shadow: 0 20px 50px rgba(0,0,0,0.3);">
                    <ul style="list-style: none; padding: 0; margin: 0; color: #CBD5E1; font-size: 1.4rem; line-height: 1.8;">
                        <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.6rem;">✕</span> WhatsApp todo el día</li>
                        <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.6rem;">✕</span> Limpiezas que hay que perseguir</li>
                        <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.6rem;">✕</span> Cambios de última hora</li>
                        <li style="margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.6rem;">✕</span> Huéspedes preguntando lo mismo</li>
                        <li style="margin-bottom: 2.5rem; display: flex; align-items: flex-start; gap: 1rem;"><span style="color: #F87171; font-weight: 900; font-size: 1.6rem;">✕</span> Sensación constante de que todo depende de ti</li>
                    </ul>
                    <div style="margin-top: 3.5rem; padding-top: 2.5rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 2.2rem; font-weight: 800; color: white;">
                        RentOS entra justo ahí. <span style="color: var(--accent);">✦</span>
                    </div>
                </div>
            </div>
        </section>`;
    html = html.replace(painRegex, newPain);

    // 3. REEMPLAZO BLOQUE GLORIA TEXT (respetando la imagen y sumando el emotional block)
    let gloriaTextRegex = /<div class="gloria-text" style="flex: 1[^>]*>[\s\S]*?<!-- Columna M.vil/i;
    if (!gloriaTextRegex.test(html)) gloriaTextRegex = /<div class="gloria-text"[^>]*>[\s\S]*?<\/div>\s*<div class="gloria-magic-phone"/;
    
    let newGloriaText = `<div class="gloria-text" style="flex: 1; padding-right: 2rem;">
                    <img src="img/cabecera-gloria.png" alt="GlorIA" style="width: 100%; max-width: none; height: auto; object-fit: contain; filter: drop-shadow(0 10px 40px rgba(138, 75, 222, 0.2)); display: block; transform: scale(1.18); transform-origin: left bottom; margin-left: -5rem; margin-bottom: -1.5rem; position: relative; z-index: 10;">
                    
                    <h2 style="font-size: 3rem; line-height: 1.1; margin-bottom: 1rem; letter-spacing: -0.03em; color: var(--bg-dark); position: relative; z-index: 10;">
                        GlorIA es el cerebro de RentOS.
                    </h2>
                    <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent); margin-bottom: 2.5rem; line-height: 1.3; position: relative; z-index: 10;">
                        La parte visible de un sistema que descarga trabajo real, mueve la operativa y hace que no todo tenga que pasar por ti.
                    </div>
                    
                    <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2rem; line-height: 1.6; position: relative; z-index: 10;">
                        GlorIA absorbe una parte enorme de la carga diaria que más tiempo roba: mueve reservas, activa limpiezas, responde dudas repetitivas, conoce la operativa de cada propiedad y te deja a ti lo que realmente importa. Así el negocio deja de depender tanto de ti y empieza a subir de nivel.
                    </p>
                    
                    <div style="font-size: 1.15rem; font-weight: 600; color: #1E293B; background: rgba(138, 75, 222, 0.05); padding: 1.5rem; border-left: 4px solid var(--accent); border-radius: 0 12px 12px 0; margin-top: 2rem; position: relative; z-index: 10;">
                        Cuando una parte real de la operativa deja de caer siempre sobre ti, cambia cómo se siente el negocio: menos ruido, menos presión, más tranquilidad y una sensación mucho más clara de control.
                    </div>
                </div>

                <!-- Columna M\u00f3vil`; // escapando la ó

    html = html.replace(gloriaTextRegex, newGloriaText);

    // 4. INSERCION BLOQUE DE FINANZAS
    let demoCTA_Regex = /<!-- Demo Central -->/;
    let financeSection = `
        <!-- BLOQUE FINANZAS -->
        <section style="background: var(--bg-light); padding: 8rem 2rem; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
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

        <!-- Demo Central -->`;
    if (!html.includes('<!-- BLOQUE FINANZAS -->')) {
        html = html.replace(demoCTA_Regex, financeSection);
    }

    fs.writeFileSync(filepath, html);
    console.log("Master Iteration ejecutada en " + filepath);
}

agujaLaser('../frontend/index.html');
agujaLaser('./03_landing/index.html');
