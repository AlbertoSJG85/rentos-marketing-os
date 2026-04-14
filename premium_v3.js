const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// 1. HEADER (Reducir aire y pulir by NexOS)
html = html.replace(/padding: 1\.2rem 2\.5rem;/g, 'padding: 0.7rem 2.5rem;');
html = html.replace(
    /<span style="font-size: 0.85rem; color: var\(--accent\); font-weight: 800; letter-spacing: 0.1em; margin-top: -2px; font-size: 0.95rem; padding-left: 2px;">by NexOS<\/span>/,
    `<span style="color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em; margin-top: -6px; font-size: 0.85rem; padding-left: 2px;">by NexOS</span>`
);

// 2. WATERMARK FIJO (position fixed y centrado)
html = html.replace(
    /width: 250vw; height: 250vw; top: -50%; right: -50%; background-image: url\('img\/logo.png'\); background-size: contain; background-repeat: no-repeat; background-position: center; opacity: 0.04; filter: grayscale\(100%\); z-index: 0; pointer-events: none; transform: rotate\(-25deg\);/,
    `position: fixed; top: 50%; left: 50%; width: 100vw; height: 100vh; background-image: url('img/logo.png'); background-size: 65%; background-repeat: no-repeat; background-position: center; opacity: 0.06; filter: grayscale(100%); z-index: 0; pointer-events: none; transform: translate(-50%, -50%);`
);
// Quitar "position: absolute;" que quedó atrás en la clase
html = html.replace(/\.hero-watermark \{\s*position: absolute;/, '.hero-watermark {\n            /* Overriden to fixed below */');

// 3. REMOVER O ELIMINAR LA PÍLDORA DE TRANSFORMACIÓN PARA MOVERLA AL HERO
// Borramos de Transformación
let oldPill = `<div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem;">
                        <div class="status-pill" style="margin-bottom: 0.5rem; padding: 1rem; background: rgba(255,255,255,0.95); backdrop-filter: blur(5px);">
                            <strong>Equipo sincronizado en silencio</strong>
                            <span>La limpieza ya sabe qué hacer y a qué hora.</span>
                        </div>
                    </div>`;
html = html.replace(oldPill, '');

// 4. NUEVA PIEZA VISUAL DERECHA PARA EL HERO (SaaS UI Premium puro vs bloque negro placeholder)
// Reemplazamos todo el contenido de <div class="hero-visual">
let heroVisualExtract = html.substring(html.indexOf('<div class="hero-visual">'), html.indexOf('</section>', html.indexOf('<div class="hero-visual">')));

let newHeroVisual = `<div class="hero-visual" style="perspective: 1200px;">
                <div class="hero-mockup-container" style="background: rgba(255, 255, 255, 0.9); padding: 0; border: 1px solid rgba(138, 75, 222, 0.3); border-radius: 20px; box-shadow: 0 40px 100px -20px rgba(138, 75, 222, 0.4); transform: rotateY(-12deg) rotateX(4deg); transition: transform 0.6s ease;">
                    
                    <!-- App Header -->
                    <div style="background: #F8FAFC; border-bottom: 1px solid #E2E8F0; border-radius: 20px 20px 0 0; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; gap: 0.5rem;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #EF4444;"></div>
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #F59E0B;"></div>
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #10B981;"></div>
                        </div>
                        <div style="font-weight: 700; font-size: 0.9rem; color: #64748B;">Panel Operativo • Hoy</div>
                    </div>

                    <!-- App Content -->
                    <div style="padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
                        
                        <!-- Row 1: KPI -->
                        <div style="display: flex; gap: 1rem;">
                            <div style="flex: 1; background: #F1F5F9; border-radius: 12px; padding: 1rem; border-left: 4px solid var(--accent);">
                                <div style="font-size: 0.8rem; color: #64748B; font-weight: 600;">LLEGADAS HOY</div>
                                <div style="font-size: 1.5rem; font-weight: 800; color: #0F172A;">4 Check-ins</div>
                            </div>
                            <div style="flex: 1; background: #F1F5F9; border-radius: 12px; padding: 1rem; border-left: 4px solid #10B981;">
                                <div style="font-size: 0.8rem; color: #64748B; font-weight: 600;">LIMPIEZA</div>
                                <div style="font-size: 1.5rem; font-weight: 800; color: #0F172A;">100% Ok</div>
                            </div>
                        </div>

                        <!-- Row 2: Acción con Píldora de Sincronización Integrada -->
                        <div style="background: linear-gradient(135deg, rgba(138, 75, 222, 0.05), transparent); border: 1px solid rgba(138, 75, 222, 0.2); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; position: relative; overflow: hidden;">
                            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: rgba(138, 75, 222, 0.1); filter: blur(30px); border-radius: 50%;"></div>
                            <div style="display: flex; align-items: center; gap: 0.8rem;">
                                <div style="width: 40px; height: 40px; background: #10B981; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold;">✓</div>
                                <div>
                                    <strong style="color: #0F172A; font-size: 1.1rem; display: block;">Equipo sincronizado en silencio</strong>
                                    <span style="color: #64748B; font-size: 0.95rem;">La limpieza ya sabe qué hacer y a qué hora. Apartamento #204 listo para Check-in.</span>
                                </div>
                            </div>
                        </div>

                        <!-- Row 3: GlorIA chat heads -->
                        <div style="background: white; border: 1px solid #E2E8F0; border-radius: 16px; padding: 1rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                            <div style="display: flex; align-items: center; gap: 0.8rem;">
                                <div style="width: 32px; height: 32px; background: var(--primary); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold;">Gl</div>
                                <div style="font-size: 0.9rem; font-weight: 600; color: #334155;">GlorIA respondió a 3 dudas operativas</div>
                            </div>
                            <div style="font-size: 0.8rem; background: #E0E7FF; color: #4338CA; padding: 0.2rem 0.6rem; border-radius: 50px; font-weight: 700;">Zero Fricción</div>
                        </div>

                    </div>
                </div>
            </div>
        `;
html = html.replace(heroVisualExtract, newHeroVisual);

fs.writeFileSync('../frontend/index.html', html);
fs.writeFileSync('./03_landing/index.html', html);
console.log('Iteración V3 Completa');
