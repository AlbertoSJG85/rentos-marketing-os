# RentOS Marketing & Product System

> "Tu PMS puede ordenar reservas. RentOS entra donde sigue habiendo fricción real."

Este repositorio actúa como el sistema nervioso, central de control y hub operativo para **RentOS, by NexOS**. No es solo un repositorio de código; es un sistema de coordinación de agentes (IA) y humanos trabajando de manera asíncrona pero alineada.

## El Marco Estratégico

1. **RentOS no se comunica con perfil bajo.** Tono ambicioso, comercial y con autoridad.
2. **Cero "SaaS genérico".** RentOS es la salida real al caos. Resuelve la carga operativa, dependencia del móvil, cuadrantes de limpieza, persecución diaria de huéspedes, etc.
3. **Pilar de autoridad:** _RentOS by NexOS._

## Arquitectura de Carpetas

* **/00_control/**: Cerebro y gobierno. Roadmaps, estado de sprints y archivos canónicos de control de flujo. (Donde opera el Agente Director).
* **/01_contexto_canonico/**: La Biblia. Archivos de lectura obligatoria con reglas de tono, audiencias y contexto inamovibles (salvo pivote formal).
* **/02_branding/**: Sistema visual, logos, paletas, exportaciones de assets. (Entrada/Salida para Agente de UX/UI).
* **/03_landing/**: Repositorio del Frontend. Código fuente de landings, componentes, etc. (React/Vite o el stack elegido).
* **/04_growth_copy/**: Entregables puros de venta. Guiones de vídeo, ángulos de ads, copies web duros, secuencias de email.
* **/05_qa_tracking/**: Plan de medición (GTM, Pixel), auditorías, checklists de fugas de producto y pruebas funcionales.
* **/06_sprints/**: Registros formales del trabajo semanal. Cada "push" o iteración termina aquí documentado: qué se hizo, qué falta, bloqueos.
* **/agents/**: Directorio con los `system_prompts` (.md) de cada agente especializado para invocarlo en nuevas sesiones manteniendo el carácter exacto.

## Protocolo de Trabajo por Agentes

Cada agente o interviniente debe seguir SIEMPRE la regla de **Reporting Inverso**. Al cerrar cualquier tarea (sea en un PR, issue o log en la carpeta de sprints), debe terminar con:

- **Qué he hecho:**
- **Qué falta:**
- **Qué tienes que hacer tú ahora:**

Ningún agente opera con documentos antiguos o superados. Si existe archivo canónico, esa es la ley.
