// api/share.js
// ----------------------------------------------------------------------------
// Vista previa al compartir (Open Graph) para cada nota del Blog y Novedades.
//
// Cuando WhatsApp, Facebook, etc. piden el enlace de una nota, Vercel los manda
// a esta función (ver vercel.json). Acá buscamos los datos reales de esa nota
// en tu Apps Script y devolvemos las etiquetas correctas: su título, su resumen
// y su propia imagen. Las personas normales NO pasan por acá: ven el sitio común.
//
// No necesita variables de entorno ni cuentas de servicio.
// ----------------------------------------------------------------------------

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxx8awTRhfKDp8cNV_rV8YRX1B3UQ49erGNjd5fDAhB-KQEEcN2GuVjuV3eaZ5Pbf9tWg/exec';
const SITIO = 'https://estudiolopez.ar';
const IMAGEN_DEFECTO = SITIO + '/og-image.jpg';

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function absolutizar(url) {
  const u = String(url || '').trim();
  if (!u) return IMAGEN_DEFECTO;
  if (/^https?:\/\//i.test(u)) return u;
  return SITIO + (u.charAt(0) === '/' ? '' : '/') + u;
}

export default async function handler(req, res) {
  const tipo = (req.query.tipo === 'blog') ? 'blog' : 'novedad';
  const slug = (req.query.slug || '').toString();

  // Valores por defecto (si no encontramos la nota, no se rompe nada)
  let titulo = 'Estudio Jurídico Juan Fernando López';
  let descripcion = 'Crónicas, novedades y opiniones del Estudio Jurídico Juan Fernando López.';
  let imagen = IMAGEN_DEFECTO;

  const seccion = (tipo === 'blog') ? 'blog' : 'novedades';
  const urlNota = SITIO + '/' + seccion + '/' + slug;

  try {
    const action = (tipo === 'blog') ? 'blog-post' : 'novedades-post';
    const r = await fetch(APPS_SCRIPT_URL + '?action=' + action + '&slug=' + encodeURIComponent(slug));
    const data = await r.json();
    if (data && data.ok) {
      const nota = data.articulo || data.entrada;
      if (nota) {
        if (nota.titulo) titulo = nota.titulo;
        if (nota.resumen) descripcion = nota.resumen;
        imagen = absolutizar(nota.imagen);
      }
    }
  } catch (e) {
    // Si falla la consulta, quedan los valores por defecto.
  }

  const t = escapeHtml(titulo);
  const d = escapeHtml(descripcion);
  const img = escapeHtml(imagen);
  const url = escapeHtml(urlNota);

  const html = '<!doctype html>\n' +
    '<html lang="es-AR">\n' +
    '  <head>\n' +
    '    <meta charset="UTF-8" />\n' +
    '    <title>' + t + ' — Estudio Jurídico López</title>\n' +
    '    <meta name="description" content="' + d + '" />\n' +
    '    <link rel="canonical" href="' + url + '" />\n' +
    '    <meta property="og:type" content="article" />\n' +
    '    <meta property="og:site_name" content="Estudio Jurídico Juan Fernando López" />\n' +
    '    <meta property="og:title" content="' + t + '" />\n' +
    '    <meta property="og:description" content="' + d + '" />\n' +
    '    <meta property="og:url" content="' + url + '" />\n' +
    '    <meta property="og:image" content="' + img + '" />\n' +
    '    <meta property="og:image:secure_url" content="' + img + '" />\n' +
    '    <meta property="og:locale" content="es_AR" />\n' +
    '    <meta name="twitter:card" content="summary_large_image" />\n' +
    '    <meta name="twitter:title" content="' + t + '" />\n' +
    '    <meta name="twitter:description" content="' + d + '" />\n' +
    '    <meta name="twitter:image" content="' + img + '" />\n' +
    '    <meta http-equiv="refresh" content="0; url=' + url + '" />\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <p>Redirigiendo a <a href="' + url + '">' + t + '</a>…</p>\n' +
    '  </body>\n' +
    '</html>';

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=86400');
  res.status(200).send(html);
}
