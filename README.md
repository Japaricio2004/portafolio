# 🧑‍💻 Portafolio Web – Jorge Luis Giovanni Aparicio Álvarez

Bienvenido/a a mi portafolio web. Aquí muestro proyectos, habilidades y formas de contacto. Soy estudiante de **Ingeniería de Software** con foco en **desarrollo web** y **bases de datos**.

> Nota: El sitio evoluciona de forma continua, pero se mantiene siempre funcional y navegable.

---

## 🌐 Sitio en línea

- 🚀 Portafolio: https://portafolio-jorge-aparicio.vercel.app/

---

## �️ Estructura del proyecto

```
portafolio/
├─ index.html        # Inicio
├─ sobremi.html      # Sobre mí
├─ cv.html           # CV
├─ proyectos.html    # Proyectos con vistas previas
├─ contacto.html     # Contacto y disponibilidad
├─ images/           # Imágenes
└─ assets/           # Recursos estáticos (si aplica)
```

---

## 🧭 Páginas clave y funciones

- Inicio
	- Presentación y resumen de habilidades a simple vista.

- Sobre mí
	- Intereses y habilidades blandas.

- Proyectos
	- Cards con vista previa embebida por iframe y carga diferida (IntersectionObserver) para mejor rendimiento.
	- Botones “Ver demo” y “Ver código” en cada card. El click en los botones no interfiere con el click del card.
	- Tecnologías listadas y chips visuales por proyecto.

- Contacto
	- Botones directos: WhatsApp y Email.
	- Chip de disponibilidad con toggle dinámico (Disponible/Ocupado) y persistencia en localStorage.
	- Zona horaria visible.

---

## 🧪 Proyectos destacados (demos)

- Toque Mágico – Juego Web Interactivo → https://magic-touch-game.netlify.app/
- Agenda Interactiva 3D → https://agenda-interactiva-ja.netlify.app/
- LivePersona – Simulador de Personalidad → https://live-personasimulator.netlify.app/
- Plataforma de Gestión de Reservas → https://sistema-de-reservas-16rb.onrender.com/
- JOSETEC – Gestión de Reparaciones → https://projectjtec-1.onrender.com/
- SaludPlus – Bienestar Personal → https://saludplus-bozc.onrender.com/

> Nota: El botón “Ver código” en las cards apunta a mi perfil de GitHub por defecto. Si los repos son públicos, pueden enlazarse directamente por proyecto.

---

## 🧠 Tecnologías utilizadas

- HTML5, CSS3, Tailwind CSS (CDN)
- JavaScript (interactividad, IntersectionObserver)
- Hosting: Vercel (producción). Demos individuales en Netlify/Render.

---

## 🎨 Diseño (UI/UX)

Principios
- Claridad y legibilidad en dark mode: alto contraste, tipografía limpia.
- Consistencia visual: mismos radios, sombras y espaciados en componentes.
- Feedback inmediato: hover/transiciones suaves y estados activos visibles.

Tema y paleta
- Base oscura: negro/antracita con fondos degradados animados.
- Acentos: rojo principal (#ef4444). Complementos: azul (#3b82f6), morado (#a855f7), verde (#22c55e), cyan (#06b6d4).
- Uso de transparencias (bg-…/20–30) y bordes sutiles para efecto “glass”.

Tipografía
- Inter (sistema sans-serif de respaldo). Jerarquía con peso y tamaño, no múltiples familias.

Componentes y patrones
- Navbar sticky con menú móvil colapsable y botón accesible (aria-label).
- Cards con glassmorphism, sombras personalizadas (shadow-3d, neon) y hover 3D.
- Chips y badges para tecnologías/estado (por ejemplo, disponibilidad y niveles).
- Botones CTA (sólido y bordeado) con foco en accesibilidad y tamaño táctil.
- Barras de progreso animadas para habilidades (Inicio/Proyectos).
- Vistas previas con iframes lazy, con precarga en primer hover.
- Toggle de disponibilidad en Contacto con persistencia localStorage.
- Fondos dinámicos: gradientes animados y partículas sutiles (sin bloquear UI).

Responsive
- Grid adaptable (1–2 columnas en sm/md/lg), tamaños de texto y paddings fluidos.
- Ajustes en dispositivos táctiles: desactivar transformaciones agresivas en hover.

Accesibilidad y UX
- Contraste suficiente en textos/elementos interactivos.
- Controles con etiquetas, aria-label en iconos de menú.
- Tocar/click fuera cierra el menú móvil; enlaces del menú cierran el panel.

Animación y rendimiento
- IntersectionObserver para: 1) cargar iframes al entrar en viewport y 2) animar barras.
- Fallback si no hay soporte: carga directa y animación mínima.
- Pointer-events: none en iframes de preview para evitar interferencia al scroll.

---

## ▶️ Ejecutar localmente (Windows PowerShell)

Este proyecto es estático. Puedes abrir `index.html` directamente en el navegador. Opcionalmente, usa un servidor local:

```pwsh
# Opción 1: Python (si está instalado)
python -m http.server 5500

# Luego navega a: http://localhost:5500/

# Opción 2: Abrir directamente en Edge/Chrome (ejemplo Edge)
Start-Process msedge .\index.html
```

---

## 🚀 Despliegue

- Producción: Vercel (arrastre del proyecto o integración con GitHub).
- Alternativas: GitHub Pages (static hosting) o Netlify.

---

## 📬 Contacto

- WhatsApp: disponible desde la página de Contacto.
- Email: jorge2946237@gmail.com
- LinkedIn: Ver enlace en Contacto.

---

Gracias por visitar. Abierto a sugerencias, colaboraciones y oportunidades. 🚀

— Jorge Luis Aparicio Álvarez
