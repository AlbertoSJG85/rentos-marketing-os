const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// 1. REEMPLAZO LOGO FALSO PNG POR SVG PURO PARA RENTOS (HEADER)
let rentosSVGHeader = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" style="height: 100%; width: auto; min-width: 150px; display: block; object-fit: contain;">
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#381A5D" />
      <stop offset="100%" stop-color="#8A4BDE" />
    </linearGradient>
  </defs>
  <!-- Símbolo: Casa isométrica/Diamante Operativo -->
  <path d="M 40 20 L 75 40 L 75 80 L 40 100 L 5 80 L 5 40 Z" fill="url(#brandGrad)" />
  <circle cx="40" cy="60" r="12" fill="#FFFFFF" opacity="0.9" />
  <!-- Texto RentOS -->
  <text x="110" y="82" font-family="-apple-system, sans-serif" font-weight="900" font-size="70" letter-spacing="-3px" fill="#0F172A">Rent<tspan fill="#8A4BDE">OS</tspan></text>
</svg>
`;
// Quitar img logo viejo en Header
html = html.replace(/<img src="img\/logo.png"[^>]*>/g, rentosSVGHeader);


// 2. REEMPLAZO DE LA WATERMARK GIGANTE
let rentosSVGWatermark = `
<svg class="hero-watermark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120">
    <path d="M 40 20 L 75 40 L 75 80 L 40 100 L 5 80 L 5 40 Z" fill="currentColor" />
    <text x="110" y="82" font-family="-apple-system, sans-serif" font-weight="900" font-size="70" letter-spacing="-3px" fill="currentColor">Rent<tspan fill="currentColor">OS</tspan></text>
</svg>
`;
// Quitar el div watermark antiguo viejo (la cadena de <div class="hero-watermark"></div> estaba vacia antes o no tenia CSS in-line. Y el CSS de watermark tenia background-image: url('img/logo.png')).
// Borramos la imagen del css watermark:
html = html.replace(/background-image: url\('img\/logo.png'\);/g, 'background: none; color: #0F172A;');
html = html.replace(/background-size: [^;]+;/g, '');
html = html.replace(/<div class="hero-watermark"><\/div>/g, rentosSVGWatermark);


// 3. GLORIA CEREBRO LOGO (Quitar "cerebro-gloria.png" falso que podía tener el logo de RentOs y reemplazar por MENTE NEURAL SVG)
let gloriaBrainSVG = `
<svg class="gloria-brain-avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160" style="width:160px; height:auto; filter: drop-shadow(0 0 25px rgba(138, 75, 222, 0.4)); animation: float-brain 6s ease-in-out infinite;">
  <defs>
    <linearGradient id="gloriaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4B5563"/>
      <stop offset="50%" stop-color="#8A4BDE"/>
      <stop offset="100%" stop-color="#4B5563"/>
    </linearGradient>
    <radialGradient id="brainPulseglow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(138,75,222,0.6)" />
        <stop offset="100%" stop-color="rgba(138,75,222,0)" />
    </radialGradient>
  </defs>
  
  <circle cx="100" cy="80" r="70" fill="url(#brainPulseglow)" />
  
  <path d="M 50 100 C 30 90, 30 70, 50 60 C 60 30, 100 20, 100 20 C 100 20, 140 30, 150 60 C 170 70, 170 90, 150 100 C 130 140, 100 140, 100 140 C 100 140, 70 140, 50 100 Z" fill="none" stroke="url(#gloriaGrad)" stroke-width="4" stroke-dasharray="8 4" stroke-linecap="round" />
  
  <!-- Circuit Nodes -->
  <circle cx="50" cy="80" r="4" fill="#8A4BDE"/>
  <circle cx="80" cy="40" r="5" fill="#8A4BDE"/>
  <circle cx="120" cy="40" r="6" fill="#8A4BDE">
     <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle cx="150" cy="80" r="4" fill="#8A4BDE"/>
  <circle cx="100" cy="110" r="7" fill="#8A4BDE">
    <animate attributeName="r" values="7;10;7" dur="1.5s" repeatCount="indefinite" />
  </circle>
  <!-- Connection lines -->
  <path d="M 50 80 L 80 40 L 100 60 L 120 40 L 150 80 L 120 100 L 100 110 L 80 100 Z" fill="none" stroke="#8A4BDE" stroke-width="2" opacity="0.4" />
  <path d="M 100 20 L 100 60" fill="none" stroke="#8A4BDE" stroke-width="2" opacity="0.5" />
  <path d="M 100 110 L 100 140" fill="none" stroke="#381A5D" stroke-width="3" />
  <text x="100" y="85" font-family="'Inter', sans-serif" font-weight="900" font-size="28" letter-spacing="-1px" fill="#FFFFFF" text-anchor="middle">Gl</text>
  <text x="100" y="160" font-family="'Inter', sans-serif" font-weight="800" font-size="20" letter-spacing="-0.5px" fill="var(--bg-dark)" text-anchor="middle">Glor<tspan fill="var(--accent)">IA</tspan></text>
</svg>
`;
html = html.replace(/<img src="img\/cerebro-gloria.png" class="gloria-brain-avatar" ([^>]*)>/g, gloriaBrainSVG);


// 4. ANIMACIÓN VIVA DE WHATSAPP / MÓVIL MAGIA
let magicPhoneLogicStr = `
        .phone-chat-area {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            height: 100%;
            height: calc(100% - 70px);
            position: relative;
        }
`;
let newMagicPhoneCSS = `
        .phone-chat-area {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: calc(100% - 70px);
            position: relative;
            overflow: hidden;
        }
        
        .chat-scroller {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            width: 100%;
            position: absolute;
            bottom: 2rem;
            left: 0;
            padding: 0 1.5rem;
            animation: scrollerUp 12s infinite cubic-bezier(0.1, 0.8, 0.2, 1);
        }

        @keyframes scrollerUp {
            0%, 15% { transform: translateY(120%); } /* Todo oculto abajo */
            20%, 35% { transform: translateY(60%); } /* Sube mensaje 1 y 2 */
            40%, 55% { transform: translateY(0%); } /* Sube mensaje 3 y 4 */
            60%, 75% { transform: translateY(-60%); } /* Sube mensaje extra */
            80%, 95% { transform: translateY(-120%); } /* Todo sube fuera de pantalla hacia arriba */
            100% { transform: translateY(-150%); } 
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
            transition: all 0.3s ease;
        }

        .bubble-guest { background: #334155; color: white; align-self: flex-start; border-bottom-left-radius: 4px; }
        .bubble-clean { background: #047857; color: white; align-self: flex-start; border-bottom-left-radius: 4px; }
        .bubble-gloria { background: linear-gradient(135deg, var(--accent), var(--primary)); color: white; align-self: flex-end; border-bottom-right-radius: 4px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 10px 25px rgba(138, 75, 222, 0.4); }

        .typing-indicator {
            align-self: flex-end;
            background: rgba(138,75,222, 0.3);
            border-radius: 20px;
            padding: 0.5rem 1rem;
            display: flex;
            gap: 5px;
            opacity: 0;
            animation: pulseTyping 12s infinite;
        }
        .typing-indicator span {
            width: 8px; height: 8px; background: white; border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
        @keyframes pulseTyping { 0%, 35% {opacity:0} 38%, 42% {opacity:1} 45%, 100% {opacity:0} }

`;
html = html.replace(magicPhoneLogicStr, newMagicPhoneCSS);

let oldChatHTML = `                        <!-- Mensaje Huésped -->
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
                        </div>`;

let newChatHTML = `                        <!-- Flujo Interesante Que se mueve -->
                        <div class="chat-scroller">
                            <div class="chat-bubble bubble-guest">
                                <div class="chat-label">👤 Carlos (Huésped)</div>
                                ¿Se puede hacer late check-out mañana? 🕒
                            </div>
                            <div class="chat-bubble bubble-gloria">
                                <div class="chat-label"><span style="color: #fff;">✦</span> GlorIA</div>
                                ¡Claro Carlos! Lo he activado hasta las 14:00 GRATIS por ser tú. He pausado la entrada de limpieza para que no te molesten.
                            </div>

                            <div class="chat-bubble bubble-clean">
                                <div class="chat-label">🧹 Equipo Limpieza</div>
                                Ojo, en Apt 4 se han llevado las llaves. 🔑
                            </div>
                            
                            <div class="typing-indicator"><span></span><span></span><span></span></div>

                            <div class="chat-bubble bubble-gloria">
                                <div class="chat-label"><span style="color: #fff;">✦</span> GlorIA</div>
                                Ya les he escrito a su WhatsApp y están volviendo a dejarlas. 🚀 Acceso bloqueado mientras tanto. Tú a limpiar el Apt 5.
                            </div>
                        </div>`;
html = html.replace(oldChatHTML, newChatHTML);

fs.writeFileSync('../frontend/index.html', html);
fs.writeFileSync('./03_landing/index.html', html);
console.log('Iteracion 5: SVGs, Marca Real, Watermark puro, Autoscroll Chat vivos aplicados');
