# Avancli — Movement in focus

Rediseño local con HTML5, CSS3, JavaScript vanilla y SVG. Sin compilación, dependencias de ejecución ni servicios remotos para tipografía o imágenes. Abrir `index.html` con Live Server.

## Datos y procedencia

Fuente primaria abierta el 06/11/2026: https://avancli.com/. Confirma los datos ya conservados en el proyecto: clínica de fisioterapia y osteopatía en Ubrique, teléfono +34 655 08 60 07, correo hola@avancli.com y Calle San Juan Bautista, 12, 11600 Ubrique, Cádiz. La dirección figuraba como pendiente en el encargo, pero ya existía verificada en la versión anterior y se ha contrastado de nuevo. No se atribuye una sede en El Bosque.

La portada oficial publica tres áreas: fisioterapia avanzada, osteopatía y rehabilitación. Son las únicas incluidas; no se han creado descripciones clínicas, técnicas, indicaciones, profesionales, credenciales, horarios, precios, testimonios ni resultados. El acceso directo a la página de servicios devolvió un error; los enlaces de ampliación apuntan a la portada oficial, que sí pudo abrirse.

Contacto: `tel:+34655086007`, `mailto:hola@avancli.com` y búsqueda de Google Maps con la dirección confirmada. No se añaden WhatsApp, redes sociales ni formularios.

## Diseño y recursos

Fotografía a gran formato, titular superpuesto sobre una banda de azul petróleo, tipografía sans expresiva, trayectorias SVG, presentación editorial, áreas en filas abiertas y contacto de gran formato. Paleta #F7F9F8, #153D46, #C5E77B y #252D2F; lima reservado a acentos. Revelados de entrada y microinteracciones sin movimiento continuo ni alteración del desplazamiento normal. Se respeta `prefers-reduced-motion` y la lectura sin JavaScript.

Dos imágenes nuevas generadas con la herramienta integrada `image_gen`, revisadas y señaladas como ilustrativas: no muestran instalaciones, pacientes ni profesionales reales de Avancli. Originales en `assets/images/originals/`; variantes JPEG optimizadas a 768/1536 y 600/1024 px. Prompts completos y rutas en `qa/image-generation-prompts.json`. No se repite ninguna fotografía.

Manrope variable alojada localmente, procedente de Google Fonts: https://github.com/google/fonts/tree/main/ofl/manrope. Licencia SIL OFL conservada en `assets/fonts/OFL-Manrope.txt`. Símbolos SVG y favicon originales, sin caracteres decorativos convertibles en emoji.

## Validación

Desde `Landing webs`: `node avancli/qa/browser-check.mjs` (Chrome instalado en su ruta estándar de Windows). Capturas y resultados en `qa/`.

Verificación en Chrome headless a 375, 390, 768, 1440 y 1920 px: sin desbordamiento horizontal, imágenes y fuente cargadas, un H1, una etiqueta `noindex, nofollow`, navegación interna y transferencia de foco al destino, recorrido por tabulador y botones principales con altura mínima de 44 px. Sin excepciones de JavaScript detectadas; sintaxis revisada con `node --check`. Comprobación de movimiento reducido y lectura sin JavaScript. Las pruebas de interacción se ejecutan con movimiento reducido. No se han probado llamadas reales ni enviado correos. Se comprueban los formatos de enlaces externos.

No hay Safari ni iPhone físico disponibles; la emulación de anchuras no acredita una prueba en Safari. Las otras 13 webs se comparan con sus hashes previos. No se han realizado commits, pushes, publicación ni cambios globales.
