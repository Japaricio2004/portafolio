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
├─ index.html        # Entrada Vite
├─ src/              # Aplicación React y estilos
├─ images/           # Imágenes originales
├─ assets/           # CV en PDF
└─ vercel.json       # Rutas de la aplicación
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
- LivePersona – Simulador de Personalidad → https://live-personasimulator.netlify.app/
- Plataforma de Gestión de Reservas → https://sistema-de-reservas-16rb.onrender.com/
- JOSETEC – Gestión de Reparaciones → https://projectjtec-1.onrender.com/
- SaludPlus – Bienestar Personal → https://saludplus-bozc.onrender.com/

> Nota: El botón “Ver código” en las cards apunta a mi perfil de GitHub por defecto. Si los repos son públicos, pueden enlazarse directamente por proyecto.

---

## 🧠 Tecnologías utilizadas

- React, Vite, JavaScript y CSS modular
- Tipografía Montserrat servida localmente e iconografía SVG propia
- Hosting: Vercel (producción). Demos individuales en Netlify/Render.

---

## 🎨 Diseño (UI/UX)

Principios
- Presentación directa del perfil, su enfoque técnico y acciones de contacto.
- Proyectos descritos por su problema, alcance, stack y demo.
- Componentes consistentes, SVG escalables y navegación por teclado.

Tema y paleta
- Base carbón verdoso (#080b0e) y paneles oscuros.
- Acento lima (#c2f970), con turquesa y menta para variar estados.
- Fondo estático y detalles editoriales con tipografía serif de apoyo.

Tipografía
- Montserrat variable local para la interfaz; serif del sistema en acentos editoriales.

Componentes y patrones
- Navbar sticky con menú móvil colapsable y botón accesible (aria-label).
- Cards con sombras sutiles y elevación ligera al pasar el cursor.
- Filtros de proyectos, fichas técnicas y enlaces a demos/código.
- Currículum con trayectoria, capacidades y visor PDF bajo demanda.
- Certificados en un modal accesible con cierre por Escape.
- Tipografía local y una hoja de estilos ligera, sin dependencias visuales por CDN.

Responsive
- Grid adaptable (1–2 columnas en sm/md/lg), tamaños de texto y paddings fluidos.
- Ajustes en dispositivos táctiles: desactivar transformaciones agresivas en hover.

Accesibilidad y UX
- Contraste suficiente en textos/elementos interactivos.
- Controles con etiquetas, aria-label en iconos de menú.
- Tocar/click fuera cierra el menú móvil; enlaces del menú cierran el panel.

Animación y rendimiento
- Imágenes secundarias con carga diferida y decodificación asíncrona.
- Respeto de la preferencia del sistema para reducir movimiento.

---

## ▶️ Ejecutar localmente (Windows PowerShell)

Instala las dependencias y ejecuta el servidor de desarrollo:

```pwsh
npm install
npm run dev

# Compilar para producción
npm run build
```

---

## 🚀 Despliegue

- Producción: Vercel (integración con GitHub; comando `npm run build`, directorio `dist`).
- Alternativas: GitHub Pages (static hosting) o Netlify.

---

## 📬 Contacto

- WhatsApp: disponible desde la página de Contacto.
- Email: jorge2946237@gmail.com
- LinkedIn: Ver enlace en Contacto.

---

Gracias por visitar. Abierto a sugerencias, colaboraciones y oportunidades. 🚀

— Jorge Luis Aparicio Álvarez
