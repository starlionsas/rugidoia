# Yoga con Color 🌈

> **Pequeños movimientos, grandes conexiones.**

Landing page de **Yoga con Color**, un infoproducto de yoga para niños, niñas y adolescentes (3 a 17 años) pensado para practicar en familia. La página enamora con contenido educativo y emocional, explica los beneficios posibles del yoga infantil y de practicarlo juntos, y lleva a las familias interesadas a conversar por WhatsApp.

Construida con **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Lucide Icons**. Lista para desplegar en **Vercel**.

---

## 1. Requisitos

- **Node.js 20.9 o superior** (recomendado: 22 LTS)
- npm 10+

## 2. Instalación y uso local

```bash
cd yoga-con-color
npm install
npm run dev          # http://localhost:3000
```

Otros comandos:

| Comando             | Qué hace                                         |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Servidor de desarrollo con recarga en caliente   |
| `npm run build`     | Compilación de producción                        |
| `npm run start`     | Sirve la compilación de producción               |
| `npm run lint`      | Revisión de código con ESLint                    |
| `npm run typecheck` | Verificación de tipos con TypeScript             |

## 3. Despliegue en Vercel

> Este proyecto vive en la carpeta `yoga-con-color/` del repositorio. En Vercel hay que indicarla como **Root Directory**.

1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio de GitHub.
2. En **Root Directory** selecciona `yoga-con-color`.
3. Vercel detecta **Next.js** automáticamente (no cambies los comandos de build).
4. (Recomendado) En **Environment Variables** agrega:
   - `NEXT_PUBLIC_SITE_URL` = la URL definitiva, por ejemplo `https://www.yogaconcolor.com` (sin barra final).
     Si no la defines, se usa automáticamente el dominio de producción que asigna Vercel.
5. Pulsa **Deploy**. Cada `git push` generará un nuevo despliegue.
6. Para un dominio propio: **Project → Settings → Domains**, y actualiza `NEXT_PUBLIC_SITE_URL`.

Alternativa por consola:

```bash
npm i -g vercel
cd yoga-con-color
vercel        # vista previa
vercel --prod # producción
```

## 4. Estructura del proyecto

```
yoga-con-color/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Fuentes, metadatos SEO/Open Graph, header, footer, WhatsApp flotante
│   │   ├── page.tsx                # Landing: orden de secciones + datos estructurados (JSON-LD)
│   │   ├── aprende/[slug]/page.tsx # Artículos para padres (generados estáticamente)
│   │   ├── not-found.tsx           # Página 404
│   │   ├── icon.svg / apple-icon.tsx / opengraph-image.tsx  # Favicon, ícono iOS e imagen para redes
│   │   ├── robots.ts / sitemap.ts / manifest.ts
│   │   └── globals.css             # Sistema de diseño (paleta, tipografía, animaciones)
│   ├── components/
│   │   ├── layout/                 # Header, Footer, Logo, botón flotante, animación al hacer scroll
│   │   ├── sections/               # Una sección de la landing por archivo
│   │   ├── illustrations/          # Ilustraciones SVG originales (sin licencias de terceros)
│   │   └── ui/                     # Botones, encabezados, íconos, separadores
│   ├── config/site.ts              # ⭐ Datos de la marca, WhatsApp y espacios por personalizar
│   └── content/
│       ├── articles.ts             # Artículos educativos
│       └── faqs.ts                 # Preguntas frecuentes
└── public/                         # Archivos estáticos (fotos futuras, etc.)
```

### Secciones de la landing

| # | Sección | Ancla |
|---|---------|-------|
| 1 | Hero principal | `#inicio` |
| 2 | Una infancia con más bienestar (8 beneficios) | `#beneficios` |
| 3 | El poder de practicar juntos | `#padres-e-hijos` |
| – | Frase protagonista | – |
| 4 | ¿Qué es Yoga con Color? + universo de colores interactivo | `#yoga-con-color` |
| – | La guía por dentro (contenido + vista previa de páginas) | `#guia` |
| – | ¿Te suena familiar? (momentos cotidianos) | `#momentos` |
| – | Oferta con precio y botón “Llévatelo ahora” | `#oferta` |
| 5 | ¿Para qué edades? | `#edades` |
| 6 | Una experiencia llena de color + ejercicio de respiración guiado | `#experiencia` |
| 7 | Contenido educativo para padres (7 artículos) | `#aprende` |
| 8 | Una invitación para las familias | `#invitacion` |
| 9 | Preguntas frecuentes | `#preguntas` |
| 10 | Contacto y WhatsApp | `#contacto` |

## 5. ✏️ Qué personalizar (pendiente de información real)

Toda la información sensible está centralizada en **`src/config/site.ts`**. Busca la etiqueta **`[PERSONALIZAR]`** en el código:

```bash
grep -rn "PERSONALIZAR" src
```

| Elemento | Dónde | Estado actual |
|----------|-------|---------------|
| URL del sitio | `NEXT_PUBLIC_SITE_URL` (Vercel) | Usa el dominio de Vercel si no se define |
| Redes sociales y correo | `siteConfig.social` | Vacíos → no se muestran |
| **Testimonios** | `testimonials` | Vacío → sección oculta. Solo testimonios reales y autorizados |
| **Precio / qué incluye** | `productOffer` | ✅ $24.000 COP (antes $47.000), contenido de la guía PDF |
| Contenido de la guía (secciones “La guía por dentro” y “¿Te suena familiar?”) | `src/content/guide.ts` | ✅ Basado en la guía PDF real |
| **Facilitador(a) y credenciales** | `facilitator` | `null` → sección oculta. Solo formación verificable |
| Asociación de colores del universo | `src/components/sections/ColorUniverse.tsx` | Propuesta conceptual; ajustar al contenido real |
| Respuestas de FAQ sobre formato, duración, materiales y compra | `src/content/faqs.ts` | Textos provisionales responsables; confirmar con el producto |

Cuando completes `testimonials`, `productOffer` o `facilitator`, la sección correspondiente aparece automáticamente en la página.

### WhatsApp

- Número: **301 473 1830** (`+57 301 473 1830`).
- Enlace principal (botón flotante, header, invitación y contacto):
  `https://wa.me/573014731830?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20Yoga%20con%20Color.`
- Algunos botones usan un mensaje ligeramente distinto (edad del hijo, artículos, conocer el producto) para saber desde qué parte de la página llega cada conversación. Se editan en `whatsappMessages` dentro de `src/config/site.ts`.

### Fotografías

Las ilustraciones actuales son SVG originales creados para la marca, así que no requieren licencias. Si se desean fotografías reales, guárdalas en `public/` (formato `.webp` o `.avif`) y úsalas con el componente `next/image`. Usa solo fotos propias o con licencia adecuada y con autorización de las familias que aparezcan.

## 6. Criterios editoriales

- No se inventan testimonios, certificaciones, estudios, resultados, precios ni bonificaciones.
- Los beneficios del yoga se presentan como **posibles**, no como resultados garantizados ni tratamientos médicos o psicológicos.
- Se recomienda siempre la supervisión de un adulto y respetar los límites de cada niño.
- Se vende desde el valor y la conexión familiar, sin miedo ni culpa.

## 7. Calidad técnica

- Páginas 100 % estáticas (SSG): carga rápida y sin base de datos.
- SEO: títulos y descripciones por página, Open Graph/Twitter, `canonical`, `sitemap.xml`, `robots.txt` y datos estructurados (`Organization`, `WebSite`, `FAQPage`, `Article`).
- Accesibilidad: HTML semántico, enlace “Saltar al contenido”, foco visible, textos alternativos, contraste AA en botones y textos, acordeón nativo (`<details>`) y respeto de `prefers-reduced-motion`.
- Animaciones ligeras con CSS e `IntersectionObserver`; el contenido sigue visible si JavaScript no está disponible.
- Sin dependencias innecesarias: solo `next`, `react`, `react-dom` y `lucide-react` en producción.
