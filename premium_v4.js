const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// 1. CTA CHANGE
html = html.replace(/Quiero entrar al Piloto/g, 'Quiero probarlo GRATIS');
html = html.replace(/Acceder al Programa Piloto/g, 'Quiero probarlo GRATIS');

// 2. CSS PARA MAGIA GLORIA (Lo añadimos antes del script final de styles o dentro del premium_v2 css)
let gloriaCss = `
        /* GlorIA Phone Magic UI */
        .gloria-section {
            padding: 8rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            background: transparent !important;
            border: none !important;
        }
        
        .gloria-layout {
            display: flex;
            align-items: center;
            gap: 5rem;
        }

        .gloria-brain-avatar {
            width: 180px;
            height: auto;
            filter: drop-shadow(0 0 40px var(--accent-glow));
            margin-bottom: 2rem;
            animation: float-brain 6s ease-in-out infinite;
        }

        @keyframes float-brain {
            0% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 30px var(--accent-glow)); }
            50% { transform: translateY(-15px) scale(1.05); filter: drop-shadow(0 0 60px rgba(138, 75, 222, 0.8)); }
            100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 30px var(--accent-glow)); }
        }

        .gloria-magic-phone {
            width: 340px;
            height: 680px;
            background: #020617;
            border-radius: 45px;
            border: 10px solid #1E293B;
            box-shadow: 0 40px 100px rgba(138, 75, 222, 0.3), inset 0 0 20px rgba(255,255,255,0.05);
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
            transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
        }

        .phone-header {
            background: rgba(30, 41, 59, 0.8);
            backdrop-filter: blur(10px);
            padding: 1.5rem 1rem 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            text-align: center;
            color: white;
            font-weight: 700;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .phone-chat-area {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            height: 100%;
            height: calc(100% - 70px);
            position: relative;
        }

        .phone-chat-area::before {
            content: '';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 250px; height: 250px;
            background: rgba(138, 75, 222, 0.15);
            filter: blur(50px);
            border-radius: 50%;
            z-index: 0;
        }

        .chat-bubble {
            padding: 1rem;
            border-radius: 18px;
            font-size: 0.95rem;
            max-width: 85%;
            position: relative;
            z-index: 1;
            line-height: 1.4;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            animation: slideUpFade 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        @keyframes slideUpFade {
            to { opacity: 1; transform: translateY(0); }
        }

        .bubble-guest {
            background: #334155;
            color: white;
            align-self: flex-start;
            border-bottom-left-radius: 4px;
            animation-delay: 0.2s;
        }

        .bubble-clean {
            background: #047857;
            color: white;
            align-self: flex-start;
            border-bottom-left-radius: 4px;
            animation-delay: 1.8s;
        }

        .bubble-gloria {
            background: linear-gradient(135deg, var(--accent), var(--primary));
            color: white;
            align-self: flex-end;
            border-bottom-right-radius: 4px;
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 10px 25px rgba(138, 75, 222, 0.3);
        }
        
        .bubble-gloria:nth-of-type(2) { animation-delay: 1s; }
        .bubble-gloria:nth-of-type(4) { animation-delay: 2.6s; }

        .chat-label {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.3rem;
            opacity: 0.8;
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }
        
        @media (max-width: 900px) {
            .gloria-layout { flex-direction: column; text-align: center; }
            .bubble-guest, .bubble-clean { align-self: flex-start; }
            .bubble-gloria { align-self: flex-end; }
        }
`;

html = html.replace('/* ENHANCED PREMIUM STYLES */', '/* ENHANCED PREMIUM STYLES */\n' + gloriaCss);

// 3. GLORIA SECTION REPLACEMENT
let gloriaSectionExtract = html.substring(html.indexOf('<!-- BLOQUE GLORIA -->'), html.indexOf('<!-- BLOQUE TRANSFORMACIÓN:'));

let newGloriaSection = `<!-- BLOQUE GLORIA -->
        <section class="gloria-section">
            <div class="bg-glow-orb" style="top: 20%; right: 10%; width: 500px; height: 500px; background: rgba(56, 26, 93, 0.15); z-index: -1;"></div>
            
            <div class="gloria-layout">
                <!-- Columna Texto y Cerebro -->
                <div class="gloria-text" style="flex: 1;">
                    <img src="img/cerebro-gloria.png" class="gloria-brain-avatar" alt="GlorIA Brain">
                    <h2 style="font-size: 3.2rem; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em;">Ignorar el WhatsApp empieza a ser responsable.</h2>
                    <p style="font-size: 1.35rem; color: var(--text-muted); margin-bottom: 2rem;">GlorIA asume la comunicación operativa de choque. Absorbe de forma inteligente las dudas repetitivas de tus huéspedes (accesos, WiFi, averías) y coordina alertas con el equipo de limpieza, quitándote el peso del teléfono de encima.</p>
                    <div style="font-size: 1.15rem; font-weight: 600; color: var(--accent); padding-left: 1.5rem; border-left: 4px solid var(--accent);">
                        "Tu tiempo es muy caro para ser el manual de instrucciones del apartamento."
                    </div>
                </div>

                <!-- Columna Móvil Mágico -->
                <div class="gloria-magic-phone">
                    <div class="phone-header">
                        <span style="color: var(--accent);">✦</span> Inbox Operativo
                    </div>
                    <div class="phone-chat-area">
                        <!-- Mensaje Huésped -->
                        <div class="chat-bubble bubble-guest">
                            <div class="chat-label">👤 Huésped Apt. 3</div>
                            Hola, acabo de llegar, ¿cómo puedo abrir la caja de llaves de fuera? 
                        </div>
                        
                        <!-- Respuesta GlorIA -->
                        <div class="chat-bubble bubble-gloria">
                            <div class="chat-label"><span style="color: #fff;">✦</span> GlorIA (Auto)</div>
                            ¡Hola Carlos! Tienes que girar el cajetín e introducir el código 4492. Aquí tienes un pequeño vídeo de cómo se hace: 🔗[Ver_Guía]
                        </div>

                        <!-- Mensaje Limpieza -->
                        <div class="chat-bubble bubble-clean">
                            <div class="chat-label">🧹 Limpieza</div>
                            Piso 4 preparado para mañana. Faltan toallas limpias grandes.
                        </div>

                        <!-- Respuesta GlorIA a Limpieza -->
                        <div class="chat-bubble bubble-gloria">
                            <div class="chat-label"><span style="color: #fff;">✦</span> GlorIA (Operativa)</div>
                            Registrado. Tarea de toallas añadida a lavandería y Gestor notificado en dashboard.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;

html = html.replace(gloriaSectionExtract, newGloriaSection);

fs.writeFileSync('../frontend/index.html', html);
fs.writeFileSync('./03_landing/index.html', html);
console.log('Iteracion 4: GlorIA Magica y GRATIS aplicada.');
