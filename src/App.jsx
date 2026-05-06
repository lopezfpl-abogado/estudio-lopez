import React, { useState, useEffect } from 'react';
import {
  Scale,
  Briefcase,
  Users,
  FileText,
  MessageSquare,
  MessageCircle,
  Mail,
  Send,
  Loader2,
  Calendar,
  ChevronRight,
  Menu,
  X,
  File,
  Download,
  CheckCircle,
  Clock,
  Shield,
  Newspaper,
  ArrowRight,
  ArrowLeft,
  Share2,
  Copy,
  BookOpen
} from 'lucide-react';

// Foto de perfil (embebida como data URI para que renderice en el artifact)
const profilePhoto = "data:image/jpeg;base64,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";

// Configuración global de WhatsApp
const WHATSAPP_NUMBER = "5492216180192";
const WHATSAPP_DEFAULT_MSG = "Hola Dr. López, vi su sitio y quería hacerle una consulta.";

const buildWhatsAppUrl = (message) => {
  const text = message || WHATSAPP_DEFAULT_MSG;
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
};

// Ícono oficial de WhatsApp (SVG)
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Botón flotante de WhatsApp (siempre visible)
const FloatingWhatsApp = () => (
  <a
    href={buildWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl ring-4 ring-green-500/20 transition-all hover:scale-110 group"
    aria-label="Consultar por WhatsApp"
    title="Consultar por WhatsApp"
  >
    <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
    <span className="absolute right-full mr-3 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
      Chateá con nosotros
    </span>
  </a>
);

// URL del Apps Script desplegado (Google Sheets backend del Portal)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxx8awTRhfKDp8cNV_rV8YRX1B3UQ49erGNjd5fDAhB-KQEEcN2GuVjuV3eaZ5Pbf9tWg/exec";

// Botón anchor de WhatsApp reutilizable (uso inline)
const WhatsAppButton = ({ message, children, className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg",
  };
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={"bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors flex items-center justify-center shadow-md " + sizeClasses[size] + " " + className}
    >
      <WhatsAppIcon className={size === "sm" ? "h-4 w-4 mr-2" : "h-5 w-5 mr-2"} />
      {children}
    </a>
  );
};


// Textos completos de las áreas de servicio
const TEXTO_JUBILACIONES = `En Argentina, gestionar tu jubilación o defender el monto de tu haber puede convertirse en un laberinto burocrático que se prolonga durante años. Mi trabajo es acortar esos tiempos y asegurar que recibas todo lo que te corresponde por ley.

Te acompaño en el inicio de la jubilación ordinaria, por edad avanzada o por invalidez; en el reajuste de haberes y los reclamos por movilidad jubilatoria mal aplicada; en pensiones por fallecimiento y derecho de pensión de cónyuges, convivientes e hijos; en el reconocimiento de servicios prestados —incluso de períodos sin aportes registrados—; en regímenes diferenciales y especiales, como docentes o trabajadores insalubres; y en recursos administrativos y demandas judiciales contra ANSES.

Todo el trámite se gestiona de forma online a través del Portal del Cliente: tomás tu turno por videollamada, firmás digitalmente y seguís el avance del expediente sin moverte de tu casa.`;

const TEXTO_SUCESIONES = `Una sucesión es uno de los trámites más sensibles que enfrenta una familia: combina el dolor de una pérdida con la urgencia de poner orden en patrimonios, papeles y plazos. Mi trabajo es despejar ese laberinto, explicarte en cada etapa qué corresponde hacer, y avanzar con celeridad para que la herencia se transmita sin demoras innecesarias.

Atiendo sucesiones testamentarias e intestadas, con o sin testamento; declaratoria de herederos y posesión hereditaria; partición y adjudicación de bienes, tanto extrajudicial por convenio entre herederos como judicial cuando hay desacuerdo; inscripción de inmuebles, automotores y cuentas bancarias en cabeza de los herederos; cesión de derechos hereditarios; aceptación con beneficio de inventario; reclamos por colación, exclusión hereditaria o nulidad de testamento; y planificación sucesoria preventiva, para quienes quieren ordenar la transmisión de su patrimonio en vida.

Trabajo con honorarios pactados desde la primera consulta y, en sucesiones donde el activo se realiza con la inscripción de bienes, ofrezco esquemas de pago diferido al cierre del trámite para que la familia no tenga que adelantar grandes sumas en momentos difíciles.`;

const TEXTO_CIVIL = `Las cuestiones civiles y de familia atraviesan los momentos más sensibles de la vida: una herencia, una separación, un accidente, un contrato incumplido. Mi enfoque combina rigor técnico con un acompañamiento humano y discreto, buscando primero la solución negociada y llegando a juicio sólo cuando es necesario para proteger tus derechos.

Atiendo divorcios expresos —de común acuerdo o unilaterales—, compensación económica, régimen de comunicación con hijos y cuota alimentaria; redacción y revisión de contratos de locación, compraventa, comodato y convenios privados; reclamos por daños y perjuicios derivados de accidentes de tránsito, mala praxis o incumplimientos contractuales; desalojos por falta de pago, vencimiento o intrusión; y amparos en materia de salud, consumidor y vivienda.`;

// ============================================================================
// COMPONENTE QUIÉN SOY (página de trayectoria profesional)
// ============================================================================

const HitoBlock = ({ titulo, periodo, items }) => (
  <div className="mb-8">
    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3 pb-2 border-b border-slate-200">
      <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900">{titulo}</h3>
      {periodo && <span className="text-sm text-amber-600 font-medium">{periodo}</span>}
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start text-slate-700 leading-relaxed">
          <span className="text-amber-500 mr-2 mt-1.5 flex-shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const QuienSoyView = ({ navigateTo }) => {
  const hitos = [
    {
      titulo: 'Formación',
      periodo: '1989',
      items: [
        'Abogado, Universidad Nacional de La Plata (UNLP)',
        'Matrícula vigente en el Colegio de Abogados de Dolores desde 1989',
      ],
    },
    {
      titulo: 'Ejercicio privado y gremial',
      periodo: '1989 — 2009',
      items: [
        'Sindicatura de quiebras y concursos: aproximadamente 40 procesos',
        'Estudio Jurídico López & Zabalza, La Plata: socio fundador, especialización en derecho laboral, comercial y empresarial',
        'Departamento Jurídico de YPF: 1.500 juicios bajo seguimiento',
        'Asesoría legal del Sindicato SOEME: 18 años de continuidad',
      ],
    },
    {
      titulo: 'Investigación y políticas públicas',
      periodo: '1996 — 2008',
      items: [
        'Presidente y Consultor del CEPADE (Centro de Estudios para el Desarrollo)',
        'Estudios sobre canasta básica familiar, desocupación regional y análisis de coyuntura',
        'Diseño de seminarios y proyectos de investigación socio-económica',
      ],
    },
    {
      titulo: 'Función pública nacional',
      periodo: '2000 — 2001',
      items: [
        'Coordinador y Jefe de Gabinete, Subsecretaría de Promoción Social y Secretaría de Políticas Sociales del Ministerio de Desarrollo Social y Medio Ambiente de la Nación',
        'Responsable de distribución alimentaria a nivel nacional',
        'Negociación con movimientos sociales durante la crisis 2001',
      ],
    },
    {
      titulo: 'Función pública provincial',
      periodo: '2004 — 2008',
      items: [
        'Director Provincial de Regiones, Patronato de Liberados Bonaerense',
        'Responsable de la Unidad Presidencia',
        'Plan de Fortalecimiento: 170 sedes, 980 agentes, 78 cargos jerárquicos',
        'Modernización tecnológica de la ejecución penal: legajo electrónico tutelar',
        'Monitoreo de 48.000 personas tuteladas',
        'Participación en la Reforma de Política Criminal de la Provincia',
      ],
    },
    {
      titulo: 'Gestión empresarial y directorios',
      periodo: '2009 — 2012',
      items: [
        'Gerente General, Fideicomiso Empresa Papelera Quilmes (ex Massuh SA): 520 trabajadores en 3 plantas',
        'Asesor del Estado en Papel Prensa SA, en representación accionaria',
        'Director en ALL — América Latina Logística Argentina S.A. (transporte ferroviario de cargas)',
        'Consultor y supervisor de Bapro Mandatos y Negocios SA: actualización de manuales, control interno, evaluación tecnológica de sistemas de fideicomisos',
      ],
    },
    {
      titulo: 'Transformación digital y gestión de sistemas',
      periodo: '2013 — 2024',
      items: [
        'Director de Recursos Humanos Ferroviarios SACPEM (luego DECHAF): sistemas de RR.HH. para 22.000 empleados, manuales de procedimientos, tableros de monitoreo',
        'Proyecto de Digitalización de Legajos: 500.000 documentos relevados y digitalizados',
        'Coordinación de impresión de infracciones de tránsito provinciales (2018-2019)',
        'Director de Atención a la Ciudadanía, Subsecretaría de Gobierno Digital de Buenos Aires: 350 personas a cargo, gestión del 148, servicios online y chatbot de atención automática (2022-2024)',
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Juan Fernando López"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-amber-400 shadow-2xl"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="inline-flex items-center bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                <Briefcase className="h-3 w-3 mr-1.5" />
                TRAYECTORIA PROFESIONAL
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3">Quién soy</h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Juan Fernando López — Abogado UNLP (1989). Más de 35 años de práctica jurídica con experiencia integrada en función pública de alto nivel, dirección de empresas y proyectos de transformación digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen narrativo */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-800 leading-relaxed mb-6">
              Soy abogado, recibido en la Universidad Nacional de La Plata en 1989 y matriculado en el Colegio de Abogados de Dolores. Llevo más de 35 años de ejercicio profesional ininterrumpido, una trayectoria que combina algo poco habitual: práctica en derecho privado y empresarial, asesoramiento gremial sostenido en el tiempo, y experiencia real en alta dirección en organismos del Estado y empresas con miles de empleados a cargo.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed mb-6">
              Empecé como abogado de sindicatura en concursos y quiebras en Dolores, mi ciudad natal. A los seis meses ingresé al Departamento Jurídico de YPF, donde trabajé con un volumen que pocos jóvenes abogados manejan: aproximadamente <strong>1.500 juicios bajo seguimiento</strong>, recursos extraordinarios y control licitatorio. En paralelo, fundé un estudio propio en La Plata especializado en derecho laboral, comercial y empresarial, que sostuve casi una década, y asumí la representación legal del Sindicato de Obreros y Empleados de la Minoridad y la Educación, una relación que duró <strong>18 años</strong>.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed mb-6">
              Esa formación combinada —estudio privado, empresa, gremio— me dio una mirada que después se profundizó cuando entré a la función pública. Fui Coordinador y Jefe de Gabinete en el Ministerio de Desarrollo Social y Medio Ambiente de la Nación durante la crisis del 2001, responsable de la distribución alimentaria nacional y la negociación con movimientos sociales en la sede ministerial. Después dirigí la Unidad Presidencia del Patronato de Liberados Bonaerense, donde lideré la implementación de un Plan de Fortalecimiento que llegó a <strong>170 sedes, 980 agentes y el monitoreo electrónico de 48.000 personas tuteladas</strong>.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed mb-6">
              A partir de 2009 mi rol fue cambiando hacia la gestión empresarial directa. Fui Gerente General del fideicomiso de la ex Massuh (papel y celulosa), con <strong>520 trabajadores en tres plantas</strong>; integré el equipo de asesores del Estado en Papel Prensa SA; fui Director en representación del Estado en ALL Argentina, una empresa de transporte ferroviario de cargas con capitales mayoritariamente brasileños; y supervisé procesos de control interno y digitalización en Bapro Mandatos.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed mb-6">
              En los últimos diez años me especialicé en algo que hoy es central para cualquier empresa: <strong>la transformación digital aplicada a la gestión administrativa</strong>. Dirigí los sistemas de Recursos Humanos para una empresa con 22.000 empleados ferroviarios, lideré un proyecto de digitalización de 500.000 legajos en guarda, y más recientemente fui Director de Atención a la Ciudadanía en la Provincia de Buenos Aires, a cargo de un equipo de 350 personas que gestionaba el centro telefónico 148, los servicios online y el chatbot de atención automática.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed">
              Esta combinación es la que define mi forma de trabajar hoy. Cuando un cliente me consulta sobre un contrato, una sucesión o un conflicto laboral, no veo solo el expediente: veo el flujo administrativo, el impacto operativo, la lógica del negocio. Cuarenta años de práctica jurídica con experiencia simultánea en gestión empresarial, función pública y digitalización me dan una visión integral que pocos asesores legales pueden ofrecer.
            </p>
          </div>
        </div>
      </section>

      {/* Hitos profesionales */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Clock className="h-3 w-3 mr-1.5" />
              HITOS PROFESIONALES
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">35 años de carrera, 7 etapas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Una trayectoria que recorre el ejercicio privado, la función pública, la dirección empresarial y los proyectos de transformación digital.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-slate-200">
            {hitos.map((bloque, i) => (
              <HitoBlock key={i} titulo={bloque.titulo} periodo={bloque.periodo} items={bloque.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial / cierre */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Mi diferencial</h2>
          </div>
          <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed italic border-l-4 border-amber-500 pl-6 mb-6">
            No soy un abogado de despacho. Cuarenta años de práctica me llevaron por estudios privados, gremios, ministerios, directorios de empresas y proyectos de digitalización masivos. Esa diversidad me permite entender a mis clientes desde múltiples ángulos: el del expediente, el del flujo de caja, el del equipo a cargo y el del sistema administrativo que sostiene todo.
          </blockquote>
          <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed italic border-l-4 border-amber-500 pl-6">
            Cuando me consultan, no doy una respuesta legal abstracta: doy una respuesta integrada al negocio o a la situación familiar concreta de quien me consulta.
          </blockquote>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3">¿Querés conversar sobre tu caso?</h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            La primera consulta es sin cargo. Escribime por WhatsApp y vemos juntos cómo puedo ayudarte.
          </p>
          <a
            href={buildWhatsAppUrl('Hola Dr. López, vi su sitio y quería hacerle una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-md transition-colors inline-flex items-center shadow-lg text-lg"
          >
            <WhatsAppIcon className="h-6 w-6 mr-3" />
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

// ============================================================================
// COMPONENTES DE NOVEDADES DEL DERECHO
// ============================================================================

const NOVEDADES_CATEGORIA_COLORS = {
  'Familia': 'bg-pink-100 text-pink-700 border-pink-200',
  'Laboral': 'bg-blue-100 text-blue-700 border-blue-200',
  'Sucesiones': 'bg-violet-100 text-violet-700 border-violet-200',
  'Civil': 'bg-green-100 text-green-700 border-green-200',
  'General': 'bg-slate-100 text-slate-700 border-slate-200',
};

// Renderiza el cuerpo Markdown-light: ## subtítulos, **negritas**, - listas, "citas" (Autor)
const renderCuerpoMarkdown = (cuerpo) => {
  if (!cuerpo) return [];

  // Helper: convertir texto con **negritas** en JSX
  const formatInline = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Separar por bloques (línea en blanco doble)
  const bloques = cuerpo.split(/\n\s*\n/).map(b => b.trim()).filter(b => b.length > 0);

  return bloques.map((bloque, idx) => {
    // Subtítulo H3 (### )
    if (bloque.startsWith('### ')) {
      return (
        <h3 key={idx} className="text-xl md:text-2xl font-serif font-bold text-slate-900 mt-8 mb-3">
          {formatInline(bloque.replace(/^###\s+/, ''))}
        </h3>
      );
    }
    // Subtítulo H2 (## )
    if (bloque.startsWith('## ')) {
      return (
        <h2 key={idx} className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200">
          {formatInline(bloque.replace(/^##\s+/, ''))}
        </h2>
      );
    }
    // Subtítulo H1 (# )
    if (bloque.startsWith('# ')) {
      return (
        <h2 key={idx} className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-10 mb-4">
          {formatInline(bloque.replace(/^#\s+/, ''))}
        </h2>
      );
    }
    // Lista con - o *
    if (/^[-*]\s+/.test(bloque)) {
      const items = bloque.split('\n').filter(l => /^[-*]\s+/.test(l));
      return (
        <ul key={idx} className="list-disc pl-6 mb-6 space-y-2 text-slate-800 text-lg">
          {items.map((item, i) => (
            <li key={i} className="leading-relaxed">{formatInline(item.replace(/^[-*]\s+/, ''))}</li>
          ))}
        </ul>
      );
    }
    // Cita: párrafo que empieza y termina con comilla, con (Autor) opcional al final
    const citaMatch = bloque.match(/^["“]([\s\S]+?)["”](?:\s*\(([^)]+)\))?\s*$/);
    if (citaMatch) {
      return (
        <blockquote key={idx} className="border-l-4 border-amber-500 bg-amber-50/50 pl-6 pr-4 py-4 my-8 italic text-slate-700">
          <p className="text-lg leading-relaxed">"{formatInline(citaMatch[1])}"</p>
          {citaMatch[2] && (
            <footer className="mt-3 text-sm not-italic text-slate-600 font-semibold">— {citaMatch[2]}</footer>
          )}
        </blockquote>
      );
    }
    // Párrafo normal
    return (
      <p key={idx} className="text-slate-800 text-lg leading-relaxed mb-6">
        {formatInline(bloque)}
      </p>
    );
  });
};

// Tarjeta de novedad (usada en home y en listado)
const NovedadCard = ({ novedad, navigateTo, compact = false }) => {
  const catClass = NOVEDADES_CATEGORIA_COLORS[novedad.categoria] || NOVEDADES_CATEGORIA_COLORS['General'];
  return (
    <article
      onClick={() => navigateTo('novedad-post', novedad.slug)}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer flex flex-col group"
    >
      {novedad.imagen && (
        <div className={`overflow-hidden bg-slate-100 ${compact ? 'h-32' : 'h-44'}`}>
          <img
            src={novedad.imagen}
            alt={novedad.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${catClass}`}>
            {novedad.categoria}
          </span>
          <span className="text-xs text-slate-500 flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {novedad.fecha}
          </span>
        </div>
        <h3 className="font-serif font-bold text-slate-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors text-base">
          {novedad.titulo}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-grow line-clamp-3">
          {novedad.resumen}
        </p>
        <div className="mt-3 text-amber-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
          Leer más <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </article>
  );
};

// Sección de Novedades en la home (4 tarjetas chicas)
const NovedadesDerechoHome = ({ navigateTo }) => {
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNovedades = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL + "?action=novedades&limit=4");
        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        if (data.ok) {
          setNovedades(data.novedades || []);
        }
      } catch (e) {
        // silencioso, no mostramos sección si falla
      } finally {
        setLoading(false);
      }
    };
    fetchNovedades();
  }, []);

  if (!loading && novedades.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Newspaper className="h-3 w-3 mr-1.5" />
            ACTUALIDAD JURÍDICA
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">Novedades del Derecho</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Análisis y cambios normativos comentados desde mi experiencia profesional.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-pulse">
                <div className="h-44 bg-slate-200"></div>
                <div className="p-5">
                  <div className="h-3 w-24 bg-slate-200 rounded mb-3"></div>
                  <div className="h-5 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 bg-slate-100 rounded mb-2"></div>
                  <div className="h-3 w-2/3 bg-slate-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {novedades.map((nov, i) => (
                <NovedadCard key={i} novedad={nov} navigateTo={navigateTo} compact />
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => navigateTo('novedades')}
                className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium transition-colors"
              >
                Ver todas las novedades <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Listado completo de Novedades (sección propia con filtros)
const NovedadesListView = ({ navigateTo }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL + "?action=novedades-list");
        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        if (data.ok) {
          setItems(data.novedades || []);
        } else {
          setError(data.error || 'No se pudieron cargar las novedades');
        }
      } catch (e) {
        setError('No pudimos cargar las novedades. Intentá refrescar la página.');
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);

  const categorias = ['Todas', 'Familia', 'Laboral', 'Sucesiones', 'Civil', 'General'];
  const itemsFiltrados = filtroCategoria === 'Todas'
    ? items
    : items.filter(a => a.categoria === filtroCategoria);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <Newspaper className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Novedades del Derecho</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Análisis y cambios normativos en Familia, Laboral, Sucesiones y Civil, comentados desde mi experiencia.
          </p>
        </div>

        {!loading && items.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setFiltroCategoria(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filtroCategoria === cat
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:text-amber-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-pulse">
                <div className="h-44 bg-slate-200"></div>
                <div className="p-5">
                  <div className="h-3 w-24 bg-slate-200 rounded mb-3"></div>
                  <div className="h-5 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 bg-slate-100 rounded mb-2"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!loading && !error && itemsFiltrados.length === 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-12 text-center">
            <Newspaper className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <p className="text-amber-900 font-medium text-lg">
              {filtroCategoria === 'Todas'
                ? 'Todavía no hay novedades publicadas.'
                : `No hay novedades en la categoría "${filtroCategoria}".`}
            </p>
          </div>
        )}

        {!loading && !error && itemsFiltrados.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsFiltrados.map((n, i) => (
              <NovedadCard key={i} novedad={n} navigateTo={navigateTo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Vista de un artículo individual con renderizado de Markdown
const NovedadPostView = ({ slug, navigateTo }) => {
  const [post, setPost] = useState(null);
  const [relacionados, setRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError('Artículo no encontrado');
      setLoading(false);
      return;
    }
    const fetchPost = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL + "?action=novedades-post&slug=" + encodeURIComponent(slug));
        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        if (data.ok && data.articulo) {
          setPost(data.articulo);
          setRelacionados(data.relacionados || []);
        } else {
          setError(data.error || 'No encontramos el artículo');
        }
      } catch (e) {
        setError('No pudimos cargar el artículo. Intentá refrescar la página.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  const url = typeof window !== 'undefined' ? window.location.origin + '/novedades/' + slug : '';

  const compartirWhatsApp = () => {
    if (!post) return;
    const texto = encodeURIComponent(post.titulo + ' — ' + url);
    window.open('https://wa.me/?text=' + texto, '_blank');
  };

  const copiarLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (e) { /* ignore */ }
  };

  if (loading) {
    return (
      <div className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 w-24 bg-slate-200 rounded mb-6"></div>
            <div className="h-12 bg-slate-200 rounded mb-4"></div>
            <div className="h-72 bg-slate-200 rounded-xl mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold text-slate-900 mb-4">Artículo no disponible</h1>
          <p className="text-slate-600 mb-8">{error || 'No encontramos lo que estabas buscando.'}</p>
          <button
            onClick={() => navigateTo('novedades')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Novedades
          </button>
        </div>
      </div>
    );
  }

  const catClass = NOVEDADES_CATEGORIA_COLORS[post.categoria] || NOVEDADES_CATEGORIA_COLORS['General'];

  return (
    <div className="bg-slate-50 min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <button
          onClick={() => navigateTo('novedades')}
          className="text-sm text-slate-600 hover:text-amber-600 font-medium mb-6 inline-flex items-center transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver a Novedades
        </button>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${catClass}`}>
              {post.categoria}
            </span>
            <span className="text-sm text-slate-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.fecha}
            </span>
            {post.tiempoLectura > 0 && (
              <span className="text-sm text-slate-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.tiempoLectura} min de lectura
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight mb-4">
            {post.titulo}
          </h1>
          {post.resumen && (
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic border-l-4 border-amber-400 pl-4">
              {post.resumen}
            </p>
          )}
        </header>

        {post.imagen && (
          <div className="mb-10 rounded-xl overflow-hidden bg-slate-100 shadow-md">
            <img
              src={post.imagen}
              alt={post.titulo}
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.parentElement.style.display = 'none'; }}
            />
          </div>
        )}

        <div className="prose prose-slate max-w-none">
          {renderCuerpoMarkdown(post.cuerpo)}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6 md:p-8 border border-green-200">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
              ¿Tenés dudas sobre cómo te afecta esto?
            </h3>
            <p className="text-slate-700 mb-5 leading-relaxed">
              Cada situación es particular. Escribime por WhatsApp y vemos juntos cómo aplica este cambio normativo a tu caso concreto.
            </p>
            <a
              href={buildWhatsAppUrl('Hola Dr. López, leí su artículo "' + post.titulo + '" y quería hacerle una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center shadow-md"
            >
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              Consultar por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className="text-sm font-semibold text-slate-700 flex items-center">
              <Share2 className="h-4 w-4 mr-2" /> Compartir:
            </span>
            <button
              onClick={compartirWhatsApp}
              className="bg-white hover:bg-green-50 border border-green-600 text-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
            >
              <WhatsAppIcon className="h-4 w-4 mr-2" /> WhatsApp
            </button>
            <button
              onClick={copiarLink}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
            >
              <Copy className="h-4 w-4 mr-2" /> {copiado ? '¡Copiado!' : 'Copiar link'}
            </button>
          </div>
        </div>
      </article>

      {relacionados.length > 0 && (
        <section className="bg-white border-t border-slate-200 py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Otras novedades sobre {post.categoria}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relacionados.map((n, i) => (
                <NovedadCard key={i} novedad={n} navigateTo={navigateTo} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// ============================================================================
// COMPONENTES DEL BLOG (relatos personales/profesionales)
// ============================================================================

const BlogCard = ({ entrada, navigateTo }) => {
  return (
    <article
      onClick={() => navigateTo('blog-post', entrada.slug)}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer flex flex-col group"
    >
      {entrada.imagen && (
        <div className="overflow-hidden bg-slate-100 relative h-48">
          <img
            src={entrada.imagen}
            alt={entrada.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
          />
          {entrada.tieneVideo && (
            <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center shadow-md">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Video
            </div>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-slate-500 flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {entrada.fecha}
          </span>
          {entrada.tiempoLectura > 0 && (
            <span className="text-xs text-slate-500 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {entrada.tiempoLectura} min
            </span>
          )}
        </div>
        <h3 className="font-serif font-bold text-slate-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors text-lg">
          {entrada.titulo}
        </h3>
        {entrada.subtitulo && (
          <p className="text-sm text-slate-600 italic mb-3">{entrada.subtitulo}</p>
        )}
        <p className="text-slate-600 text-sm leading-relaxed flex-grow line-clamp-4">
          {entrada.resumen}
        </p>
        <div className="mt-4 text-amber-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
          Leer relato <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </article>
  );
};

// Listado completo del Blog (sin categorías, ordenado cronológicamente)
const BlogListView = ({ navigateTo }) => {
  const [entradas, setEntradas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL + "?action=blog-list");
        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        if (data.ok) {
          setEntradas(data.entradas || []);
        } else {
          setError(data.error || 'No se pudieron cargar las entradas');
        }
      } catch (e) {
        setError('No pudimos cargar el blog. Intentá refrescar la página.');
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Crónicas, recuerdos y reflexiones de mi trayectoria profesional.
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-pulse">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <div className="h-3 w-24 bg-slate-200 rounded mb-3"></div>
                  <div className="h-5 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 bg-slate-100 rounded mb-2"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!loading && !error && entradas.length === 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-12 text-center">
            <Newspaper className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <p className="text-amber-900 font-medium text-lg">Todavía no hay entradas publicadas.</p>
          </div>
        )}

        {!loading && !error && entradas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entradas.map((e, i) => (
              <BlogCard key={i} entrada={e} navigateTo={navigateTo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Vista de una entrada individual del Blog
const BlogPostView = ({ slug, navigateTo }) => {
  const [post, setPost] = useState(null);
  const [relacionados, setRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError('Entrada no encontrada');
      setLoading(false);
      return;
    }
    const fetchPost = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL + "?action=blog-post&slug=" + encodeURIComponent(slug));
        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        if (data.ok && data.entrada) {
          setPost(data.entrada);
          setRelacionados(data.relacionados || []);
        } else {
          setError(data.error || 'No encontramos la entrada');
        }
      } catch (e) {
        setError('No pudimos cargar la entrada. Intentá refrescar.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  const url = typeof window !== 'undefined' ? window.location.origin + '/blog/' + slug : '';

  const compartirWhatsApp = () => {
    if (!post) return;
    const texto = encodeURIComponent(post.titulo + ' — ' + url);
    window.open('https://wa.me/?text=' + texto, '_blank');
  };

  const copiarLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (e) { /* ignore */ }
  };

  if (loading) {
    return (
      <div className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 w-24 bg-slate-200 rounded mb-6"></div>
            <div className="h-12 bg-slate-200 rounded mb-4"></div>
            <div className="h-72 bg-slate-200 rounded-xl mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold text-slate-900 mb-4">Entrada no disponible</h1>
          <p className="text-slate-600 mb-8">{error || 'No encontramos lo que estabas buscando.'}</p>
          <button
            onClick={() => navigateTo('blog')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <button
          onClick={() => navigateTo('blog')}
          className="text-sm text-slate-600 hover:text-amber-600 font-medium mb-6 inline-flex items-center transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver al Blog
        </button>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-sm text-slate-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.fecha}
            </span>
            {post.tiempoLectura > 0 && (
              <span className="text-sm text-slate-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.tiempoLectura} min de lectura
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight mb-4">
            {post.titulo}
          </h1>
          {post.subtitulo && (
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic">
              {post.subtitulo}
            </p>
          )}
        </header>

        {post.imagen && (
          <div className="mb-8 rounded-xl overflow-hidden bg-slate-100 shadow-md">
            <img
              src={post.imagen}
              alt={post.titulo}
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.parentElement.style.display = 'none'; }}
            />
          </div>
        )}

        {post.youtubeId && (
          <div className="mb-10 rounded-xl overflow-hidden bg-black shadow-md">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={"https://www.youtube.com/embed/" + post.youtubeId}
                title={post.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="prose prose-slate max-w-none">
          {renderCuerpoMarkdown(post.cuerpo)}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6 md:p-8 border border-green-200">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
              ¿Querés conversar sobre esto?
            </h3>
            <p className="text-slate-700 mb-5 leading-relaxed">
              Escribime por WhatsApp y conversamos. Cada relato abre nuevas conversaciones.
            </p>
            <a
              href={buildWhatsAppUrl('Hola Dr. López, leí su entrada del blog "' + post.titulo + '" y quería contactarlo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center shadow-md"
            >
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className="text-sm font-semibold text-slate-700 flex items-center">
              <Share2 className="h-4 w-4 mr-2" /> Compartir:
            </span>
            <button
              onClick={compartirWhatsApp}
              className="bg-white hover:bg-green-50 border border-green-600 text-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
            >
              <WhatsAppIcon className="h-4 w-4 mr-2" /> WhatsApp
            </button>
            <button
              onClick={copiarLink}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
            >
              <Copy className="h-4 w-4 mr-2" /> {copiado ? '¡Copiado!' : 'Copiar link'}
            </button>
          </div>
        </div>
      </article>

      {relacionados.length > 0 && (
        <section className="bg-white border-t border-slate-200 py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Otras entradas del Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relacionados.map((e, i) => (
                <BlogCard key={i} entrada={e} navigateTo={navigateTo} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// ============================================================================
// COMPONENTES DE MEMORIAS PROFESIONALES
// ============================================================================

const MEMORIAS_CATEGORIA_COLORS = {
  'Crisis políticas': 'bg-red-100 text-red-700 border-red-200',
  'Casos memorables': 'bg-blue-100 text-blue-700 border-blue-200',
  'Función pública': 'bg-violet-100 text-violet-700 border-violet-200',
  'Sindical': 'bg-amber-100 text-amber-700 border-amber-200',
};

const MemoriaCard = ({ memoria, navigateTo, compact = false }) => {
  const catClass = MEMORIAS_CATEGORIA_COLORS[memoria.categoria] || 'bg-slate-100 text-slate-700 border-slate-200';
  return (
    <article
      onClick={() => navigateTo('memoria-post', memoria.slug)}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer flex flex-col group"
    >
      {memoria.imagen && (
        <div className={`overflow-hidden bg-slate-100 relative ${compact ? 'h-40' : 'h-48'}`}>
          <img
            src={memoria.imagen}
            alt={memoria.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          {memoria.tieneVideo && (
            <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center shadow-md">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Video
            </div>
          )}
        </div>
      )}
      <div className={`p-5 flex flex-col flex-grow ${compact ? '' : 'p-6'}`}>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${catClass}`}>
            {memoria.categoria}
          </span>
          <span className="text-xs text-slate-500 flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {memoria.fecha}
          </span>
          {memoria.tiempoLectura > 0 && (
            <span className="text-xs text-slate-500 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {memoria.tiempoLectura} min
            </span>
          )}
        </div>
        <h3 className={`font-serif font-bold text-slate-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors ${compact ? 'text-base' : 'text-lg'}`}>
          {memoria.titulo}
        </h3>
        {!compact && memoria.subtitulo && (
          <p className="text-sm text-slate-600 italic mb-3">{memoria.subtitulo}</p>
        )}
        <p className={`text-slate-600 leading-relaxed flex-grow ${compact ? 'text-xs line-clamp-3' : 'text-sm line-clamp-4'}`}>
          {memoria.resumen}
        </p>
        <div className="mt-4 text-amber-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
          Leer relato <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </article>
  );
};

const MemoriasListView = ({ navigateTo }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');

  useEffect(() => {
    const fetchMemorias = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL + "?action=memorias-list");
        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        if (data.ok) {
          setItems(data.memorias || []);
        } else {
          setError(data.error || 'No se pudieron cargar las memorias');
        }
      } catch (e) {
        setError('No pudimos cargar las memorias. Intentá refrescar la página.');
      } finally {
        setLoading(false);
      }
    };
    fetchMemorias();
  }, []);

  const categorias = ['Todas', 'Crisis políticas', 'Casos memorables', 'Función pública', 'Sindical'];
  const itemsFiltrados = filtroCategoria === 'Todas'
    ? items
    : items.filter(a => a.categoria === filtroCategoria);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Memorias profesionales</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Relatos en primera persona de mis 35 años de carrera: crisis, casos, lugares y personas que dejaron huella.
          </p>
        </div>

        {!loading && items.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setFiltroCategoria(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filtroCategoria === cat
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:text-amber-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-pulse">
                <div className="h-48 bg-slate-200"></div>
                <div className="p-6">
                  <div className="h-3 w-24 bg-slate-200 rounded mb-3"></div>
                  <div className="h-5 bg-slate-200 rounded mb-2"></div>
                  <div className="h-5 w-3/4 bg-slate-200 rounded mb-4"></div>
                  <div className="h-3 bg-slate-100 rounded mb-2"></div>
                  <div className="h-3 w-2/3 bg-slate-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!loading && !error && itemsFiltrados.length === 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-12 text-center">
            <Newspaper className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <p className="text-amber-900 font-medium text-lg">
              {filtroCategoria === 'Todas'
                ? 'Todavía no hay relatos publicados.'
                : `No hay relatos en la categoría "${filtroCategoria}" todavía.`}
            </p>
            <p className="text-sm text-amber-700 mt-2">Pronto vamos a estar publicando memorias aquí.</p>
          </div>
        )}

        {!loading && !error && itemsFiltrados.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsFiltrados.map((m, i) => (
              <MemoriaCard key={i} memoria={m} navigateTo={navigateTo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const MemoriaPostView = ({ slug, navigateTo }) => {
  const [post, setPost] = useState(null);
  const [relacionados, setRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError('Relato no encontrado');
      setLoading(false);
      return;
    }
    const fetchPost = async () => {
      try {
        const response = await fetch(APPS_SCRIPT_URL + "?action=memorias-post&slug=" + encodeURIComponent(slug));
        if (!response.ok) throw new Error('Error de red');
        const data = await response.json();
        if (data.ok && data.memoria) {
          setPost(data.memoria);
          setRelacionados(data.relacionados || []);
        } else {
          setError(data.error || 'No encontramos el relato');
        }
      } catch (e) {
        setError('No pudimos cargar el relato. Intentá refrescar la página.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  const url = typeof window !== 'undefined' ? window.location.origin + '/memorias/' + slug : '';

  const compartirWhatsApp = () => {
    if (!post) return;
    const texto = encodeURIComponent(post.titulo + ' — ' + url);
    window.open('https://wa.me/?text=' + texto, '_blank');
  };

  const copiarLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (e) {
      // fallback silencioso
    }
  };

  if (loading) {
    return (
      <div className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 w-24 bg-slate-200 rounded mb-6"></div>
            <div className="h-12 bg-slate-200 rounded mb-4"></div>
            <div className="h-12 w-2/3 bg-slate-200 rounded mb-8"></div>
            <div className="h-72 bg-slate-200 rounded-xl mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold text-slate-900 mb-4">Relato no disponible</h1>
          <p className="text-slate-600 mb-8">{error || 'No encontramos lo que estabas buscando.'}</p>
          <button
            onClick={() => navigateTo('memorias')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Memorias
          </button>
        </div>
      </div>
    );
  }

  const catClass = MEMORIAS_CATEGORIA_COLORS[post.categoria] || 'bg-slate-100 text-slate-700 border-slate-200';
  // Separar párrafos por línea en blanco doble (uno o más \n con espacios opcionales en el medio)
  const parrafos = post.cuerpo.split(/\n\s*\n/);

  return (
    <div className="bg-slate-50 min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        <button
          onClick={() => navigateTo('memorias')}
          className="text-sm text-slate-600 hover:text-amber-600 font-medium mb-6 inline-flex items-center transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver a Memorias
        </button>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${catClass}`}>
              {post.categoria}
            </span>
            <span className="text-sm text-slate-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.fecha}
            </span>
            {post.tiempoLectura > 0 && (
              <span className="text-sm text-slate-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.tiempoLectura} min de lectura
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight mb-4">
            {post.titulo}
          </h1>
          {post.subtitulo && (
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic">
              {post.subtitulo}
            </p>
          )}
        </header>

        {post.imagen && (
          <div className="mb-8 rounded-xl overflow-hidden bg-slate-100 shadow-md">
            <img
              src={post.imagen}
              alt={post.titulo}
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.parentElement.style.display = 'none'; }}
            />
          </div>
        )}

        {post.youtubeId && (
          <div className="mb-10 rounded-xl overflow-hidden bg-black shadow-md">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={"https://www.youtube.com/embed/" + post.youtubeId}
                title={post.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="prose prose-slate max-w-none">
          {parrafos.map((p, i) => (
            <p key={i} className="text-slate-800 text-lg leading-relaxed mb-6">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6 md:p-8 border border-green-200">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
              ¿Tenés un caso o situación similar?
            </h3>
            <p className="text-slate-700 mb-5 leading-relaxed">
              Si este relato te resonó con algo que estás atravesando, hablemos. Cada caso tiene su propia complejidad y vale la pena consultarlo.
            </p>
            <a
              href={buildWhatsAppUrl('Hola Dr. López, leí su relato "' + post.titulo + '" y quería hacerle una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center shadow-md"
            >
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              Consultar por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className="text-sm font-semibold text-slate-700 flex items-center">
              <Share2 className="h-4 w-4 mr-2" /> Compartir:
            </span>
            <button
              onClick={compartirWhatsApp}
              className="bg-white hover:bg-green-50 border border-green-600 text-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
            >
              <WhatsAppIcon className="h-4 w-4 mr-2" /> WhatsApp
            </button>
            <button
              onClick={copiarLink}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
            >
              <Copy className="h-4 w-4 mr-2" /> {copiado ? '¡Copiado!' : 'Copiar link'}
            </button>
          </div>
        </div>
      </article>

      {relacionados.length > 0 && (
        <section className="bg-white border-t border-slate-200 py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Otros relatos sobre {post.categoria}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relacionados.map((m, i) => (
                <MemoriaCard key={i} memoria={m} navigateTo={navigateTo} compact />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};


const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentSlug, setCurrentSlug] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (view, slug = null) => {
    setCurrentView(view);
    setCurrentSlug(slug);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* Navbar */}
      <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer space-x-3"
              onClick={() => navigateTo('home')}
            >
              <div className="h-12 w-12 bg-white rounded-full p-1 flex items-center justify-center">
                <Scale className="h-7 w-7 text-slate-900" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Estudio <span className="text-amber-500">López</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <button onClick={() => navigateTo('home')} className={`hover:text-amber-400 transition-colors ${currentView === 'home' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Inicio</button>
              <button onClick={() => navigateTo('jubilaciones')} className={`hover:text-amber-400 transition-colors ${currentView === 'jubilaciones' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Jubilaciones</button>
              <button onClick={() => navigateTo('sucesiones')} className={`hover:text-amber-400 transition-colors ${currentView === 'sucesiones' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Sucesiones</button>
              <button onClick={() => navigateTo('civil')} className={`hover:text-amber-400 transition-colors ${currentView === 'civil' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Civil y Familia</button>
              <button onClick={() => navigateTo('quien-soy')} className={`hover:text-amber-400 transition-colors ${currentView === 'quien-soy' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Quién soy</button>
              <button onClick={() => navigateTo('novedades')} className={`hover:text-amber-400 transition-colors ${(currentView === 'novedades' || currentView === 'novedad-post') ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Novedades</button>
              <button onClick={() => navigateTo('blog')} className={`hover:text-amber-400 transition-colors ${(currentView === 'blog' || currentView === 'blog-post') ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Blog</button>
              <button onClick={() => navigateTo('portal')} className={`hover:text-amber-400 transition-colors ${currentView === 'portal' ? 'text-amber-500 border-b-2 border-amber-500' : ''}`}>Portal del Cliente</button>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium transition-colors flex items-center"
              >
                <WhatsAppIcon className="h-4 w-4 mr-2" />
                Consultá por WhatsApp
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => navigateTo('home')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Inicio</button>
              <button onClick={() => navigateTo('jubilaciones')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Jubilaciones</button>
              <button onClick={() => navigateTo('sucesiones')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Sucesiones</button>
              <button onClick={() => navigateTo('civil')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Civil y Familia</button>
              <button onClick={() => navigateTo('quien-soy')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Quién soy</button>
              <button onClick={() => navigateTo('novedades')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Novedades</button>
              <button onClick={() => navigateTo('blog')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Blog</button>
              <button onClick={() => navigateTo('portal')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-slate-700 rounded-md">Portal del Cliente</button>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center w-full px-3 py-2 text-base font-medium text-green-400 hover:bg-slate-700 rounded-md"><WhatsAppIcon className="h-4 w-4 mr-2" />Consultá por WhatsApp</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' && <HomeView navigateTo={navigateTo} />}
        {currentView === 'jubilaciones' && <ServiceDetailView title="Jubilaciones y Pensiones" icon={<Clock className="h-12 w-12 text-amber-600" />} body={TEXTO_JUBILACIONES} navigateTo={navigateTo} />}
        {currentView === 'sucesiones' && <ServiceDetailView title="Sucesiones" icon={<FileText className="h-12 w-12 text-amber-600" />} body={TEXTO_SUCESIONES} navigateTo={navigateTo} />}
        {currentView === 'civil' && <ServiceDetailView title="Derecho Civil y Familia" icon={<Users className="h-12 w-12 text-amber-600" />} body={TEXTO_CIVIL} navigateTo={navigateTo} />}
        {currentView === 'quien-soy' && <QuienSoyView navigateTo={navigateTo} />}
        {currentView === 'novedades' && <NovedadesListView navigateTo={navigateTo} />}
        {currentView === 'novedad-post' && <NovedadPostView slug={currentSlug} navigateTo={navigateTo} />}
        {currentView === 'blog' && <BlogListView navigateTo={navigateTo} />}
        {currentView === 'blog-post' && <BlogPostView slug={currentSlug} navigateTo={navigateTo} />}
        {currentView === 'memorias' && <MemoriasListView navigateTo={navigateTo} />}
        {currentView === 'memoria-post' && <MemoriaPostView slug={currentSlug} navigateTo={navigateTo} />}
        {currentView === 'portal' && <ClientPortalView />}
        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-amber-500" />
              <span className="font-serif text-xl font-bold text-white">Estudio <span className="text-amber-500">López</span></span>
            </div>
            <p className="text-sm">Estudio Jurídico Juan Fernando López. Más de 35 años de experiencia brindando soluciones legales, gestión de crisis y modernización digital.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('home')} className="hover:text-amber-500 transition-colors">Inicio</button></li>
              <li><button onClick={() => navigateTo('jubilaciones')} className="hover:text-amber-500 transition-colors">Jubilaciones</button></li>
              <li><button onClick={() => navigateTo('sucesiones')} className="hover:text-amber-500 transition-colors">Sucesiones</button></li>
              <li><button onClick={() => navigateTo('civil')} className="hover:text-amber-500 transition-colors">Civil y Familia</button></li>
              <li><button onClick={() => navigateTo('quien-soy')} className="hover:text-amber-500 transition-colors">Quién soy</button></li>
              <li><button onClick={() => navigateTo('novedades')} className="hover:text-amber-500 transition-colors">Novedades del Derecho</button></li>
              <li><button onClick={() => navigateTo('blog')} className="hover:text-amber-500 transition-colors">Blog</button></li>
              <li><button onClick={() => navigateTo('portal')} className="hover:text-amber-500 transition-colors">Portal del Cliente</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-500 transition-colors">Formulario de consulta</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:lopezf.pl@gmail.com" className="hover:text-amber-500 transition-colors">lopezf.pl@gmail.com</a></li>
              <li><a href="tel:+5492216180192" className="hover:text-amber-500 transition-colors">+54 9 221 618-0192</a></li>
              <li>Punta Lara, Ensenada, Pcia. Bs. As.</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Estudio Jurídico Juan Fernando López. Todos los derechos reservados.
        </div>
      </footer>

      {/* Botón flotante de WhatsApp - visible en todas las páginas */}
      <FloatingWhatsApp />
    </div>
  );
};

/* --- VIEWS --- */


const HomeView = ({ navigateTo }) => (
  <div>
    {/* Hero Section */}
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-900 to-black"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Experiencia, liderazgo y <span className="text-amber-500 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">soluciones legales integrales.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            Soy Juan Fernando López, abogado con más de 35 años de trayectoria. Combino el sólido ejercicio del derecho con la modernización digital para resolver tus problemas legales y gestionar trámites evitando demoras, optimizando tu tiempo y manteniéndote informado.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-all flex items-center justify-center shadow-lg ring-4 ring-green-500/20"
            >
              <WhatsAppIcon className="h-6 w-6 mr-2" />
              Consultá ahora por WhatsApp
            </a>
            <button
              onClick={() => navigateTo('portal')}
              className="bg-transparent border border-slate-500 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-all flex items-center justify-center"
            >
              Ingresar a mi cuenta
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-2/5 pl-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 font-bold p-3 rounded-full shadow-lg">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4 border-b border-slate-700 pb-2">Estado de tu Caso</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-900 p-3 rounded-md border border-slate-700">
                <div className="flex items-center space-x-3">
                  <FileText className="text-amber-500 h-5 w-5" />
                  <span className="text-sm font-medium">Sucesión #234</span>
                </div>
                <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded-full border border-green-800">Sentencia Favorable</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900 p-3 rounded-md border border-slate-700">
                <div className="flex items-center space-x-3">
                  <Clock className="text-amber-500 h-5 w-5" />
                  <span className="text-sm font-medium">Reajuste Jubilatorio #189</span>
                </div>
                <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded-full border border-blue-800">En trámite ANSES</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-400 italic">"Transparencia total en tiempo real."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Profile Section */}
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-slate-200 rounded-full border-4 border-slate-300 shadow-xl overflow-hidden flex items-center justify-center text-slate-500">
              <img
                src={profilePhoto}
                alt="Juan Fernando López"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Juan Fernando López</h2>
            <h3 className="text-xl text-amber-600 font-medium mb-4">Abogado (UNLP)</h3>
            <p className="text-slate-600 mb-4 text-lg">
              Con una sólida carrera iniciada en 1989, con apenas 22 años, he desarrollado mi profesión abarcando múltiples áreas.
            </p>
            <p className="text-slate-600 mb-4 text-lg">
              A lo largo de mi trayectoria, he ocupado roles de alta dirección pública y privada. Hoy combino el sólido ejercicio del derecho con la modernización digital para resolver tus problemas legales y previsionales de forma ágil, transparente y con atención personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">¿Cómo funciona nuestro Estudio Virtual?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Un proceso simple, diseñado para ahorrarte tiempo y darte tranquilidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <WhatsAppIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">1. Escribinos</h3>
            <p className="text-slate-600">Tocá el botón verde de WhatsApp y contanos brevemente tu caso. Te respondemos en horario de atención.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">2. Te asesoramos</h3>
            <p className="text-slate-600">Analizamos tu caso, revisamos la documentación y coordinamos una videollamada o reunión presencial si hace falta.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">3. Seguís todo online</h3>
            <p className="text-slate-600">Acceso 24/7 al Portal del Cliente para ver avances, firmar documentos y consultar al equipo.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sección de Novedades del Derecho (lee de Google Sheets) */}
    <NovedadesDerechoHome navigateTo={navigateTo} />
  </div>
);

const ServiceDetailView = ({ title, icon, body, navigateTo }) => {
  const paragraphs = body.split('\n\n');
  return (
    <div className="py-16 bg-slate-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-md border border-slate-100">
            {icon}
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">{title}</h1>
        </div>
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-5 last:mb-0 text-base md:text-lg">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={buildWhatsAppUrl("Hola Dr. López, vi su sitio y quería hacerle una consulta sobre " + title + ".")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-all inline-flex items-center shadow-md"
          >
            <WhatsAppIcon className="h-5 w-5 mr-2" />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const ClientPortalView = () => {

  const [activeTab, setActiveTab] = useState('casos');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedCaso, setExpandedCaso] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [casos, setCasos] = useState([]);

  const handleLogin = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!dni.trim() || !password.trim()) {
      setError('Por favor ingresá DNI y contraseña.');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      // Usamos GET con query params para evitar restricciones CORS de Apps Script
      const url = APPS_SCRIPT_URL +
        "?action=login" +
        "&dni=" + encodeURIComponent(dni.trim()) +
        "&password=" + encodeURIComponent(password.trim());

      const response = await fetch(url, { method: 'GET' });

      if (!response.ok) {
        setError('No pudimos conectar con el servidor. Probá de nuevo en unos segundos.');
        setIsLoading(false);
        return;
      }

      const data = await response.json();

      if (data.ok) {
        setCliente(data.cliente);
        setCasos(data.casos || []);
        setIsLoggedIn(true);
      } else {
        setError(data.error || 'No pudimos validar las credenciales.');
      }
    } catch (err) {
      setError('Hubo un problema de conexión. Verificá tu internet o intentá más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCliente(null);
    setCasos([]);
    setDni('');
    setPassword('');
    setExpandedCaso(null);
    setActiveTab('casos');
  };

  const toggleCaso = (idx) => {
    setExpandedCaso(expandedCaso === idx ? null : idx);
  };

  const handleContactWhatsApp = (caso) => {
    const nombre = cliente ? cliente.nombre : '';
    const msg = caso
      ? "Hola Dr. López, soy " + nombre + ". Le escribo por mi caso " + caso.id + " (" + caso.titulo + ")."
      : "Hola Dr. López, soy " + nombre + ". Necesito hacerle una consulta sobre mis trámites.";
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  // ============================== LOGIN ==============================
  if (!isLoggedIn) {
    return (
      <div className="min-h-[70vh] bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 max-w-md w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-amber-500"></div>
          <div className="flex justify-center mb-6 mt-2">
            <div className="bg-slate-900 p-4 rounded-full shadow-lg">
              <Shield className="h-8 w-8 text-amber-500" />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-center text-slate-900 mb-2">Acceso Clientes</h2>
          <p className="text-center text-slate-600 mb-6 text-sm">Ingresá tus credenciales para ver el estado de tus trámites.</p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">DNI / Pasaporte</label>
              <input
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleLogin(e); }}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-shadow bg-slate-50 disabled:opacity-60"
                placeholder="Ej: 12345678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleLogin(e); }}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-shadow bg-slate-50 disabled:opacity-60"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-100">{error}</p>}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors shadow-md mt-4 flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Verificando...
                </>
              ) : (
                <>
                  Ingresar al Portal <ChevronRight className="h-5 w-5 ml-1" />
                </>
              )}
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 mb-4">
              ¿Olvidaste tu contraseña?{" "}
              <a
                href={buildWhatsAppUrl("Hola Dr. López, olvidé mi contraseña del Portal del Cliente y necesito recuperarla.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:underline font-medium"
              >
                Recuperala por WhatsApp
              </a>
            </p>
            <div className="border-t border-slate-100 pt-5 mt-2">
              <p className="text-xs text-slate-400 flex items-center justify-center">
                <Shield className="h-3 w-3 mr-1" /> Tu información está protegida por el secreto profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================== DASHBOARD ==============================
  const casosActivos = casos.filter(c => c.progreso < 100).length;
  const totalDocs = casos.reduce((sum, c) => sum + (c.docs ? c.docs.length : 0), 0);
  const honorariosPendientes = casos.filter(c => c.honorario && !/cancelado|abonado/i.test(c.honorario.estado || '')).length;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-slate-900">Portal del Cliente</h1>
            <p className="text-slate-600">Hola, {cliente.nombre}. Cliente desde {cliente.desde}.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => handleContactWhatsApp(null)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium flex items-center shadow-sm transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              Contactar al Dr. López
            </button>
            <button
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-md font-medium shadow-sm transition-colors"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {casos.length === 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center mb-6">
            <Shield className="h-10 w-10 text-amber-500 mx-auto mb-2" />
            <p className="text-amber-900 font-medium">No tenés casos cargados todavía.</p>
            <p className="text-sm text-amber-700 mt-1">En cuanto el estudio cargue tu primer expediente, lo verás acá.</p>
          </div>
        )}

        {casos.length > 0 && (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Casos activos</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{casosActivos}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Documentos</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{totalDocs}</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Honorarios pendientes</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{honorariosPendientes}</p>
                  </div>
                  <div className={honorariosPendientes === 0 ? "bg-green-100 p-3 rounded-lg" : "bg-amber-100 p-3 rounded-lg"}>
                    {honorariosPendientes === 0
                      ? <CheckCircle className="h-6 w-6 text-green-600" />
                      : <File className="h-6 w-6 text-amber-600" />
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-200 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('casos')}
                  className={`px-6 py-4 font-medium text-sm sm:text-base flex items-center whitespace-nowrap ${activeTab === 'casos' ? 'border-b-2 border-amber-500 text-amber-600 bg-amber-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  <Briefcase className="h-5 w-5 mr-2" /> Mis casos
                </button>
                <button
                  onClick={() => setActiveTab('documentos')}
                  className={`px-6 py-4 font-medium text-sm sm:text-base flex items-center whitespace-nowrap ${activeTab === 'documentos' ? 'border-b-2 border-amber-500 text-amber-600 bg-amber-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  <FileText className="h-5 w-5 mr-2" /> Documentos
                </button>
                <button
                  onClick={() => setActiveTab('honorarios')}
                  className={`px-6 py-4 font-medium text-sm sm:text-base flex items-center whitespace-nowrap ${activeTab === 'honorarios' ? 'border-b-2 border-amber-500 text-amber-600 bg-amber-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  <File className="h-5 w-5 mr-2" /> Honorarios
                </button>
              </div>

              <div className="p-6">

                {/* TAB CASOS */}
                {activeTab === 'casos' && (
                  <div className="space-y-4">
                    {casos.map((caso, i) => (
                      <div key={i} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                        <div className="p-5">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className="text-xs font-bold text-slate-500">{caso.id}</span>
                                {caso.area && <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">{caso.area}</span>}
                              </div>
                              <h3 className="text-lg font-bold text-slate-900">{caso.titulo}</h3>
                              {caso.organismo && <p className="text-sm text-slate-500 mt-1">{caso.organismo}</p>}
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                              caso.progreso >= 90 ? 'bg-green-100 text-green-700' :
                              caso.progreso >= 50 ? 'bg-blue-100 text-blue-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {caso.estado}
                            </span>
                          </div>

                          <div className="mb-2 flex justify-between text-sm text-slate-600">
                            <span>Progreso del caso</span>
                            <span className="font-medium">{caso.progreso}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                            <div className="bg-amber-500 h-2 rounded-full transition-all" style={{ width: caso.progreso + "%" }}></div>
                          </div>

                          {caso.proximoPaso && (
                            <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4">
                              <p className="text-sm text-blue-900"><strong>Próximo paso:</strong> {caso.proximoPaso}</p>
                            </div>
                          )}

                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="text-sm text-slate-500 flex items-center">
                              <Clock className="h-4 w-4 mr-1" /> Última actualización: {caso.ultimaAct}
                            </div>
                            <div className="flex gap-2">
                              {((caso.hitos && caso.hitos.length > 0) || (caso.docs && caso.docs.length > 0)) && (
                                <button
                                  onClick={() => toggleCaso(i)}
                                  className="text-sm text-slate-600 hover:text-amber-600 font-medium flex items-center"
                                >
                                  {expandedCaso === i ? 'Ocultar detalle' : 'Ver detalle'}
                                  <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${expandedCaso === i ? 'rotate-90' : ''}`} />
                                </button>
                              )}
                              <button
                                onClick={() => handleContactWhatsApp(caso)}
                                className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md font-medium flex items-center transition-colors"
                              >
                                <WhatsAppIcon className="h-4 w-4 mr-1.5" />
                                Consultar
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Detalle expandible */}
                        {expandedCaso === i && (
                          <div className="border-t border-slate-200 bg-slate-50 p-5 space-y-5">
                            {caso.hitos && caso.hitos.length > 0 && (
                              <div>
                                <h4 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Línea de tiempo</h4>
                                <div className="space-y-3">
                                  {caso.hitos.map((hito, hi) => (
                                    <div key={hi} className="flex items-start gap-3">
                                      <div className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                        hito.completado ? 'bg-green-500' : 'bg-slate-300'
                                      }`}>
                                        {hito.completado && <CheckCircle className="h-4 w-4 text-white" />}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-medium ${hito.completado ? 'text-slate-900' : 'text-slate-500'}`}>
                                          {hito.texto}
                                        </p>
                                        <p className="text-xs text-slate-500">{hito.fecha}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {caso.docs && caso.docs.length > 0 && (
                              <div>
                                <h4 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Documentos del caso ({caso.docs.length})</h4>
                                <div className="space-y-2">
                                  {caso.docs.map((doc, di) => (
                                    <div key={di} className="flex items-center justify-between bg-white p-3 rounded border border-slate-200">
                                      <div className="flex items-center min-w-0 flex-1">
                                        <File className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                                        <div className="min-w-0 flex-1">
                                          <p className="text-sm font-medium text-slate-900 truncate">{doc.nombre}</p>
                                          <p className="text-xs text-slate-500">{doc.fecha} · {doc.tamaño}</p>
                                        </div>
                                      </div>
                                      {doc.link && (
                                        <a
                                          href={doc.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-slate-600 hover:text-amber-600 ml-2"
                                          title="Abrir documento"
                                        >
                                          <Download className="h-5 w-5" />
                                        </a>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB DOCUMENTOS */}
                {activeTab === 'documentos' && (
                  <div>
                    {totalDocs === 0 ? (
                      <p className="text-center text-slate-500 py-8">No hay documentos cargados todavía.</p>
                    ) : (
                      <>
                        <p className="text-sm text-slate-600 mb-4">Todos los documentos cargados, agrupados por caso.</p>
                        <div className="space-y-6">
                          {casos.filter(c => c.docs && c.docs.length > 0).map((caso, ci) => (
                            <div key={ci}>
                              <h3 className="text-sm font-bold text-slate-700 mb-2 flex items-center">
                                <Briefcase className="h-4 w-4 mr-2 text-slate-500" />
                                {caso.id} — {caso.titulo}
                              </h3>
                              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                                <table className="min-w-full text-left text-sm">
                                  <thead className="text-xs uppercase tracking-wider border-b border-slate-200 bg-slate-50 text-slate-500">
                                    <tr>
                                      <th scope="col" className="px-4 py-2.5">Archivo</th>
                                      <th scope="col" className="px-4 py-2.5 hidden sm:table-cell">Fecha</th>
                                      <th scope="col" className="px-4 py-2.5 hidden sm:table-cell">Tamaño</th>
                                      <th scope="col" className="px-4 py-2.5 text-right">Acción</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {caso.docs.map((doc, di) => (
                                      <tr key={di} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                                        <td className="px-4 py-3 flex items-center font-medium text-slate-900">
                                          <File className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                                          <span className="truncate">{doc.nombre}</span>
                                        </td>
                                        <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">{doc.fecha}</td>
                                        <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">{doc.tamaño}</td>
                                        <td className="px-4 py-3 text-right">
                                          {doc.link && (
                                            <a href={doc.link} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-amber-600" title="Abrir">
                                              <Download className="h-5 w-5 inline" />
                                            </a>
                                          )}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* TAB HONORARIOS */}
                {activeTab === 'honorarios' && (
                  <div>
                    {honorariosPendientes === 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-green-900">No tenés saldos pendientes</p>
                          <p className="text-sm text-green-700 mt-1">Todos los honorarios convenidos están al día o pactados según el resultado del caso.</p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      {casos.filter(c => c.honorario).map((c, i) => (
                        <div key={i} className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-xs font-bold text-slate-500">{c.id}</p>
                              <p className="font-medium text-slate-900 mt-0.5">{c.honorario.concepto}</p>
                              <p className="text-sm text-slate-600 mt-1">{c.honorario.monto}</p>
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap self-start sm:self-center">
                              {c.honorario.estado}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {casos.filter(c => c.honorario).length === 0 && (
                      <p className="text-center text-slate-500 py-8">No hay información de honorarios cargada.</p>
                    )}

                    <p className="text-xs text-slate-500 mt-6 italic">
                      Los honorarios se rigen por la Ley 27.423 de Honorarios Profesionales y el convenio firmado con cada cliente.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Footer del portal */}
        <div className="mt-6 text-center text-xs text-slate-500 flex items-center justify-center">
          <Shield className="h-3 w-3 mr-1.5" />
          Portal seguro · Toda la información está protegida por el secreto profesional
        </div>
      </div>
    </div>
  );
};

const ContactView = () => {
  // ===========================================================================
  // CONFIGURACIÓN: pegá acá tu endpoint de Formspree después de registrarte
  // ===========================================================================
  // 1) Andá a https://formspree.io y registrate con tu email lopezf.pl@gmail.com
  // 2) Creá un nuevo formulario (botón "+ New Form")
  // 3) Copiá la URL del endpoint (ej: https://formspree.io/f/abcd1234)
  // 4) Pegala acá abajo reemplazando "YOUR_FORM_ID":
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
  // ===========================================================================

  const WHATSAPP_NUMBER = "5492216180192";
  const EMAIL_DESTINO = "lopezf.pl@gmail.com";

  const [submitted, setSubmitted] = useState(false);
  const [submittedVia, setSubmittedVia] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    area: "",
    descripcion: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    if (!formData.nombre.trim()) return "Por favor, ingresá tu nombre y apellido.";
    if (!formData.telefono.trim()) return "Por favor, ingresá tu teléfono.";
    if (!formData.email.trim()) return "Por favor, ingresá tu correo electrónico.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "El correo electrónico no parece válido.";
    if (!formData.descripcion.trim()) return "Por favor, describí brevemente tu consulta.";
    return "";
  };

  const buildMessage = () => {
    const lines = [
      "Hola Dr. López, le escribo para solicitar una consulta a través del sitio.",
      "",
      "Nombre: " + formData.nombre,
      "Teléfono / WhatsApp: " + formData.telefono,
      "Email: " + formData.email,
    ];
    if (formData.area && !formData.area.startsWith("Selecciona")) {
      lines.push("Área de interés: " + formData.area);
    }
    lines.push("");
    lines.push("Consulta:");
    lines.push(formData.descripcion);
    return lines.join("\n");
  };

  const handleAutoSubmit = async () => {
    const err = validate();
    if (err) { setError(err); return; }

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setError("El envío automático todavía no está configurado. Por favor, usá WhatsApp o Email mientras tanto.");
      return;
    }

    setError("");
    setIsSending(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          telefono: formData.telefono,
          email: formData.email,
          area: formData.area || "(no especificada)",
          descripcion: formData.descripcion,
          _subject: "Consulta web - " + formData.nombre,
          _replyto: formData.email,
        }),
      });
      if (response.ok) {
        setSubmittedVia("auto");
        setSubmitted(true);
      } else {
        setError("Hubo un problema al enviar tu consulta. Probá con WhatsApp o Email, o intentá de nuevo en unos minutos.");
      }
    } catch (e) {
      setError("No pudimos conectar con el servidor. Probá con WhatsApp o Email.");
    } finally {
      setIsSending(false);
    }
  };

  const handleWhatsApp = () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    const msg = encodeURIComponent(buildMessage());
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg, "_blank");
    setSubmittedVia("whatsapp");
    setSubmitted(true);
  };

  const handleEmail = () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    const subject = encodeURIComponent("Consulta web - " + formData.nombre);
    const body = encodeURIComponent(buildMessage());
    window.location.href = "mailto:" + EMAIL_DESTINO + "?subject=" + subject + "&body=" + body;
    setSubmittedVia("email");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedVia("");
    setError("");
    setFormData({ nombre: "", telefono: "", email: "", area: "", descripcion: "" });
  };

  if (submitted) {
    let title = "";
    let message = "";
    if (submittedVia === "auto") {
      title = "¡Consulta enviada!";
      message = "Recibimos tu consulta correctamente. Te respondemos en horario de atención (lunes a viernes, 9 a 18hs).";
    } else if (submittedVia === "whatsapp") {
      title = "¡Mensaje preparado!";
      message = "Tu consulta quedó cargada en WhatsApp con todos tus datos. Solo te falta tocar \"Enviar\" en la app para que llegue al estudio.";
    } else {
      title = "¡Mensaje preparado!";
      message = "Tu consulta quedó cargada en tu cliente de email. Solo te falta tocar \"Enviar\" para que llegue al estudio.";
    }

    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
          <p className="text-slate-600 mb-6">{message}</p>
          <button
            onClick={handleReset}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Volver al formulario
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Agendá tu Consulta Virtual</h1>
          <p className="text-lg text-slate-600">
            Completá el formulario y elegí cómo querés enviarnos la consulta.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="md:w-1/3 bg-slate-900 text-white p-8">
            <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Teléfono / WhatsApp</h4>
                  <a href="tel:+5492216180192" className="text-slate-400 hover:text-amber-400 text-sm mt-1 block transition-colors">+54 9 221 618-0192</a>
                  <p className="text-xs text-slate-500 mt-1">Lunes a Viernes 9 a 18hs</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:lopezf.pl@gmail.com" className="text-slate-400 hover:text-amber-400 text-sm mt-1 block transition-colors">lopezf.pl@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Ubicación</h4>
                  <p className="text-slate-400 text-sm mt-1">Punta Lara, Ensenada<br />Pcia. de Buenos Aires</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-2/3 p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre y Apellido</label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange("nombre")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange("telefono")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow"
                    placeholder="+54 11 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Área de Interés</label>
                <select
                  value={formData.area}
                  onChange={handleChange("area")}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow bg-white"
                >
                  <option value="">Selecciona un área...</option>
                  <option>Jubilaciones y Pensiones</option>
                  <option>Sucesiones</option>
                  <option>Derecho Civil y Familia</option>
                  <option>Concursos y Quiebras</option>
                  <option>Consultoría Empresarial / Gestión de Crisis</option>
                  <option>Otro / No estoy seguro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Breve descripción de tu caso</label>
                <textarea
                  rows="4"
                  value={formData.descripcion}
                  onChange={handleChange("descripcion")}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow resize-none"
                  placeholder="Describí brevemente tu situación para que el especialista adecuado analice tu caso..."
                ></textarea>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Botón principal: envío automático */}
              <button
                onClick={handleAutoSubmit}
                disabled={isSending}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed text-white font-medium py-4 rounded-lg transition-colors shadow-md flex justify-center items-center text-lg"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Enviando consulta...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar consulta
                  </>
                )}
              </button>

              {/* Separador con alternativas */}
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-px bg-slate-200"></div>
                <span className="text-xs text-slate-500 uppercase tracking-wider">o también</span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsApp}
                  disabled={isSending}
                  className="flex-1 bg-white hover:bg-green-50 border-2 border-green-600 text-green-700 font-medium py-2.5 rounded-lg transition-colors flex justify-center items-center disabled:opacity-50"
                >
                  <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp
                </button>
                <button
                  onClick={handleEmail}
                  disabled={isSending}
                  className="flex-1 bg-white hover:bg-slate-50 border-2 border-slate-700 text-slate-700 font-medium py-2.5 rounded-lg transition-colors flex justify-center items-center disabled:opacity-50"
                >
                  <Mail className="h-5 w-5 mr-2" /> Email
                </button>
              </div>

              <p className="text-xs text-center text-slate-500 mt-2">
                Tus datos están protegidos por el secreto profesional y nuestra política de privacidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
