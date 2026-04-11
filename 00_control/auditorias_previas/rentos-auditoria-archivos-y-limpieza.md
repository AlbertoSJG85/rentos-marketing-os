# Auditoría de archivos y propuesta de limpieza — RentOS

## Archivo que se mantiene intacto
- `deep-research-report.md`
  - Se mantiene tal cual, sin mezclar ni resumir como archivo canónico aparte.
  - Motivo: es la base de investigación externa y de mercado.

## Archivos que SÍ aportan valor y conviene absorber en los nuevos consolidados
- `Plan_Maestro_RentOS_Validacion_y_Ejecucion_v2.md`
  - Es el documento maestro real de esta fase.
- `decisiones-marketing-rentos.md`
  - Útil porque resuelve conflictos y deja claro qué manda y qué no.
- `correcciones-marketing-rentos.md`
  - Útil para no repetir errores y entender por qué se descartaron ciertos enfoques.
- `estado-ejecucion-marketing-rentos.md`
  - Útil para retomar rápido sin volver a pensar desde cero.
- `guion-demo-vivo.md`
  - Útil y directamente accionable.
- `guion-entrevista-feedback.md`
  - Útil para validación real.
- `kit-mensajes-comerciales.md`
  - Útil, aunque había frases más agresivas que conviene dejar ya integradas con control.
- `tracker-leads-outreach.md`
  - Útil como base de pipeline.
- `prospeccion-rentos-marzo-2026.csv`
  - Útil como materia prima de leads; conviene consolidarlo en un solo .md.
- `README.md`
  - Aporta verdad de producto, pero demasiada capa técnica para usarlo como archivo de marketing.
- `README_CONTEXT.txt`
  - Igual que el README: útil como fuente de verdad, no como archivo suelto de publicidad.

## Archivos que NO dejaría como fuentes canónicas de contexto publicitario
- `plan-marketing-rentos.md`
  - Motivo: quedó superado por el Plan Maestro v2 y entra en conflicto con decisiones posteriores.
  - Problemas: propone landing nueva, pricing como bloqueo y una secuencia más propia de escalado que de validación.
- `prospeccion-dashboard.html`
  - Motivo: sirve como visual o herramienta puntual, pero no como fuente de contexto. El contenido ya vive mejor en el consolidado de prospección.
- `rentos-demo.html`
  - Motivo: sí aporta como referencia creativa, pero no la dejaría como archivo canónico de contexto.
  - Razón: mezcla narrativa muy aspiracional con claims como “autonomía total” y “100% de la operativa”, así que vale más como inspiración que como documento base.

## Propuesta final de estructura mínima
1. Mantener `deep-research-report.md` tal cual.
2. Sustituir el resto por estos dos archivos nuevos:
   - `rentos-contexto-marketing-canonico.md`
   - `rentos-ejecucion-y-prospeccion-canonica.md`

## Qué absorbe cada nuevo archivo

### 1) `rentos-contexto-marketing-canonico.md`
Absorbe y ordena:
- Plan maestro
- decisiones
- correcciones
- estado de ejecución
- guion demo
- guion feedback
- kit de mensajes
- verdades de producto extraídas de los README

### 2) `rentos-ejecucion-y-prospeccion-canonica.md`
Absorbe y ordena:
- tracker de leads
- CSV de prospección
- lo útil del dashboard de prospección
- siguientes pasos comerciales

## Recomendación práctica
Después de descargar estos nuevos archivos, yo borraría del proyecto:
- `plan-marketing-rentos.md`
- `prospeccion-dashboard.html`
- `rentos-demo.html`
- `tracker-leads-outreach.md`
- `prospeccion-rentos-marzo-2026.csv`
- `estado-ejecucion-marketing-rentos.md`
- `guion-demo-vivo.md`
- `guion-entrevista-feedback.md`
- `kit-mensajes-comerciales.md`
- `decisiones-marketing-rentos.md`
- `correcciones-marketing-rentos.md`
- `README.md`
- `README_CONTEXT.txt`

Y mantendría:
- `deep-research-report.md`
- `rentos-contexto-marketing-canonico.md`
- `rentos-ejecucion-y-prospeccion-canonica.md`
