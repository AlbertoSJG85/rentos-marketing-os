# REGISTRO DE DECISIONES CANÓNICAS (ADRs COMERCIALES)

Este archivo guarda el "por qué" de las decisiones estratégicas o técnicas principales. Si alguien duda de por qué se hizo algo, la respuesta está aquí.

## DEC-001: El Funnel orienta al Piloto, no a GlorIA.
- **Fecha:** 11-04-2026.
- **Contexto:** GlorIA ha tomado un papel central en nuestro sistema operativo. Sin embargo, en la fase de adquisición (Marketing / Landing), vender "un chat con GlorIA para demo" puede despistar el objetivo comercial duro.
- **Decisión:** El objetivo de la web/ads es forzar a que el host quiera *entrar al programa piloto* de RentOS y pruebe la herramienta real, no solo chatear. GlorIA aporta valor contextual, pero el botón principal lleva al onboarding / registro.

## DEC-002: Freno a frameworks no necesarios (React/Next).
- **Fecha:** 11-04-2026.
- **Contexto:** Querer hacer landings perfectas en frameworks modernos muchas veces mata la velocidad del marketing de guerrilla.
- **Decisión:** Para la landing principal, la prioridad es "tunear" y optimizar lo existente. Si la base actual aguanta el diseño y los trackers, se usa. No se migrará a un stack superior (Next.js/React) salvo que un cuello de botella o requerimiento estructural explícito lo exija en un Sprint futuro.

## DEC-003: QA exclusivo de Marketing.
- **Fecha:** 11-04-2026.
- **Contexto:** Al mezclar roles, el agente de QA se saturaba revisando fallos del producto final vs fallos de la web de ventas.
- **Decisión:** El QA en este repositorio (`/05_qa_tracking`) vigilará solo: copy roto, CTAs ocultos, tracking de píxeles, envío de formularios y coherencia de claims. Todo QA del producto base RentOS va por otra rama u otro repo.
