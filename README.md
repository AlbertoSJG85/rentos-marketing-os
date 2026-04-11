# RentOS Marketing & Product System

> "Tu PMS puede ordenar reservas. RentOS entra donde sigue habiendo fricción real."

Este repositorio actúa como el sistema nervioso, central de control y hub operativo para **RentOS, by NexOS**. No es solo un repositorio de código; es un sistema de coordinación de agentes (IA) y humanos trabajando de manera asíncrona pero alineada.

## El Marco Estratégico

1. **RentOS no se comunica con perfil bajo.** Tono ambicioso, comercial y con autoridad.
2. **Cero "SaaS genérico".** RentOS es la salida real al caos. Resuelve la carga operativa, dependencia del móvil, cuadrantes de limpieza, persecución diaria de huéspedes, etc.
3. **Pilar de autoridad:** _RentOS by NexOS._
4. **Funnel Core actual:** Orientado puramente a conversión: Ver demo -> Entrar al piloto -> Onboarding -> Activación. (GlorIA es un valor añadido brutal, pero no el núcleo del embudo ahora mismo).

## Arquitectura de Carpetas

* **/00_control/**: Cerebro y gobierno. Roadmaps, decisiones tomadas, estado actual. (Donde opera el Agente Director).
* **/01_contexto_canonico/**: La Biblia. Archivos de lectura obligatoria con reglas de tono, audiencias y contexto inamovibles.
* **/02_branding/**: Sistema visual, logos, paletas, exportaciones de assets. (Entrada/Salida para Agente de UX/UI).
* **/03_landing/**: Repositorio de la Landing web (o tuneos sobre la actual CMS/código existente). No forzamos un stack (React/Vite) si no es estrictamente necesario, la prioridad es que convierta ya.
* **/04_growth_copy/**: Entregables puros de venta. Guiones de vídeo, ángulos de ads, copies web duros, secuencias de email.
* **/05_qa_tracking/**: Exclusivo para Marketing: Auditoría de claims, coherencia de tonos, plan de medición, GTM, eventos de formulario y detección de fugas de embudo.
* **/06_sprints/**: Registros formales del trabajo iterativo.
* **/agents/**: Directorio con los `system_prompts` (.md) de cada agente.

## Protocolo de Trabajo por Agentes

Cada agente o interviniente debe seguir SIEMPRE la regla de **Reporting Inverso**. Al cerrar cualquier tarea (sea en un PR, issue o log en la carpeta de sprints), debe terminar con:

- **Qué he hecho:**
- **Qué falta:**
- **Qué tienes que hacer tú ahora:**

Ningún agente opera con documentos antiguos o superados. Si existe archivo canónico, esa es la ley.
