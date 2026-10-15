export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const images = {
  logo: "/images/frostex-logo.jpg",
  roofWork: "/images/pexels-20046694.jpeg",
  miniSplit: "/images/pexels-32497161.jpeg",
  thermostat: "/images/pexels-5463581.jpeg",
  condenser: "/images/condenser-yard.jpg",
  handler: "/images/utility-air-handler.jpg",
  ducts: "/images/attic-ductwork.jpg",
  grille: "/images/return-grille-thermostat.jpg",
  rooftop: "/images/rooftop-package-unit.jpg",
} as const;

export type ServiceSlug =
  | "ac-repair"
  | "heating"
  | "maintenance"
  | "indoor-air-quality"
  | "ductwork"
  | "installation";

export type Service = {
  slug: ServiceSlug;
  bookable: boolean;
  image: string;
  width: number;
  height: number;
  imageAlt: Record<Locale, string>;
  nav: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  paragraphs: Record<Locale, string[]>;
  description: Record<Locale, string>;
};

export const services: Service[] = [
  {
    slug: "ac-repair",
    bookable: true,
    image: images.miniSplit,
    width: 1920,
    height: 1280,
    imageAlt: {
      en: "Hands mounting a wall air conditioner",
      es: "Manos instalando un aire acondicionado de pared",
    },
    nav: {
      en: "AC repair",
      es: "Reparación de aire acondicionado",
    },
    title: {
      en: "AC Repair in Edinburg, TX",
      es: "Reparación de aire acondicionado en Edinburg, TX",
    },
    summary: {
      en: "Warm air, a loud unit, or a system that will not start.",
      es: "Aire caliente, un equipo ruidoso, o un sistema que no enciende.",
    },
    paragraphs: {
      en: [
        "If the air is warm, the unit is loud, or it will not start, call for AC repair in Edinburg.",
        "FrosTex works on home and business systems in the Rio Grande Valley. You get an honest answer before extra parts go on the ticket.",
      ],
      es: [
        "Si el aire sale caliente, el equipo hace ruido o no enciende, llame para reparación de aire acondicionado en Edinburg.",
        "FrosTex trabaja en sistemas de casas y negocios en el Valle del Río Grande. Le decimos qué necesita el equipo antes de agregar piezas de más.",
      ],
    },
    description: {
      en: "AC repair for homes and businesses in Edinburg, Texas. Call FrosTex at (956) 776-7366. First-time customers save 15% off any repair.",
      es: "Reparación de aire acondicionado para casas y negocios en Edinburg, Texas. Llame a FrosTex al (956) 776-7366. Clientes nuevos ahorran 15% en cualquier reparación.",
    },
  },
  {
    slug: "heating",
    bookable: true,
    image: images.handler,
    width: 1200,
    height: 900,
    imageAlt: {
      en: "Furnace and air handler in a utility closet",
      es: "Calefactor y unidad de aire en un clóset de servicio",
    },
    nav: { en: "Heating", es: "Calefacción" },
    title: {
      en: "Heating in Edinburg, TX",
      es: "Calefacción en Edinburg, TX",
    },
    summary: {
      en: "Furnaces and heat systems when the house will not warm up.",
      es: "Calefacciones cuando la casa no agarra calor.",
    },
    paragraphs: {
      en: [
        "Furnaces and heat systems for Edinburg homes and businesses. If the heat will not keep up, call.",
        "The visit starts with a diagnosis. You hear what the system needs, in plain words, before anything is replaced.",
      ],
      es: [
        "Calefacción para casas y negocios en Edinburg. Si el calor no alcanza, llame.",
        "La visita empieza con un diagnóstico. Le explicamos qué necesita el sistema, en palabras claras, antes de cambiar algo.",
      ],
    },
    description: {
      en: "Heating repair for homes and businesses in Edinburg, in the Rio Grande Valley. Call (956) 776-7366. First-time customers save 15% off any repair.",
      es: "Reparación de calefacción para casas y negocios en Edinburg, en el Valle del Río Grande. Llame al (956) 776-7366.",
    },
  },
  {
    slug: "maintenance",
    bookable: true,
    image: images.thermostat,
    width: 1920,
    height: 1528,
    imageAlt: {
      en: "A person adjusting a wall thermostat",
      es: "Una persona ajustando un termostato de pared",
    },
    nav: { en: "Maintenance", es: "Mantenimiento" },
    title: {
      en: "Preventative Maintenance in Edinburg, TX",
      es: "Mantenimiento preventivo en Edinburg, TX",
    },
    summary: {
      en: "A checkup is available year round, before a hot day or a cold night.",
      es: "La revisión está disponible todo el año, antes de un día de calor o una noche fría.",
    },
    paragraphs: {
      en: [
        "Preventative maintenance is available year round in Edinburg.",
        "A checkup covers the basics: the filter, the drain, and whether the system is running the way it should. Small jobs are part of the work.",
      ],
      es: [
        "El mantenimiento preventivo está disponible todo el año en Edinburg.",
        "Una revisión cubre lo básico: el filtro, el drenaje, y si el sistema está trabajando como debe. Los trabajos chicos también se atienden.",
      ],
    },
    description: {
      en: "Year-round preventative maintenance for Edinburg homes and businesses. Call FrosTex at (956) 776-7366.",
      es: "Mantenimiento preventivo todo el año para casas y negocios en Edinburg. Llame a FrosTex al (956) 776-7366.",
    },
  },
  {
    slug: "indoor-air-quality",
    bookable: false,
    image: images.grille,
    width: 1200,
    height: 900,
    imageAlt: {
      en: "Return grille and thermostat on a wall",
      es: "Rejilla de retorno y termostato en una pared",
    },
    nav: { en: "Indoor air quality", es: "Calidad del aire interior" },
    title: {
      en: "Indoor Air Quality in Edinburg, TX",
      es: "Calidad del aire interior en Edinburg, TX",
    },
    summary: {
      en: "Filters, ventilation, and other indoor air work.",
      es: "Filtros, ventilación y otro trabajo del aire de adentro.",
    },
    paragraphs: {
      en: [
        "Indoor air quality work for homes and businesses in Edinburg.",
        "That can mean filters, ventilation, and other indoor air fixes. Call and say what you are noticing in the house or the shop.",
      ],
      es: [
        "Trabajo de calidad del aire interior para casas y negocios en Edinburg.",
        "Puede ser filtros, ventilación u otro arreglo del aire de adentro. Llame y cuente qué está notando en la casa o en el negocio.",
      ],
    },
    description: {
      en: "Indoor air quality work in Edinburg, Texas, in the Rio Grande Valley. Filters and ventilation. Call (956) 776-7366.",
      es: "Calidad del aire interior en Edinburg, Texas, en el Valle del Río Grande. Filtros y ventilación. Llame al (956) 776-7366.",
    },
  },
  {
    slug: "ductwork",
    bookable: true,
    image: images.ducts,
    width: 1600,
    height: 900,
    imageAlt: {
      en: "Metal ducts in an attic",
      es: "Ductos de metal en un ático",
    },
    nav: { en: "Ductwork", es: "Ductos" },
    title: {
      en: "Ductwork in Edinburg, TX",
      es: "Ductos en Edinburg, TX",
    },
    summary: {
      en: "Repair or replace ducts that leak cool air before it reaches the room.",
      es: "Reparar o cambiar ductos que pierden el frío antes de llegar al cuarto.",
    },
    paragraphs: {
      en: [
        "Ductwork repair and replacement for Edinburg homes and businesses.",
        "Leaky or poorly run ducts waste cooling before it reaches the room. FrosTex repairs ducts and replaces them when that is the right fix.",
      ],
      es: [
        "Reparación y cambio de ductos para casas y negocios en Edinburg.",
        "Los ductos con fugas o mal puestos desperdician el frío antes de que llegue al cuarto. FrosTex repara ductos y los cambia cuando ese es el arreglo correcto.",
      ],
    },
    description: {
      en: "Ductwork repair and replacement in Edinburg, Texas. Call FrosTex at (956) 776-7366. First-time customers save 15% off any repair.",
      es: "Reparación y cambio de ductos en Edinburg, Texas. Llame a FrosTex al (956) 776-7366. Clientes nuevos ahorran 15% en cualquier reparación.",
    },
  },
  {
    slug: "installation",
    bookable: true,
    image: images.condenser,
    width: 1600,
    height: 900,
    imageAlt: {
      en: "Outdoor condenser beside a brick house",
      es: "Condensador exterior junto a una casa de ladrillo",
    },
    nav: { en: "Installation", es: "Instalación" },
    title: {
      en: "System Installation in Edinburg, TX",
      es: "Instalación de sistema en Edinburg, TX",
    },
    summary: {
      en: "A complete heating and cooling system when repair is no longer the right call.",
      es: "Un sistema completo de calefacción y aire cuando la reparación ya no conviene.",
    },
    paragraphs: {
      en: [
        "Complete system installation for homes and businesses in Edinburg.",
        "When a repair will not hold, FrosTex installs a full heating and cooling system and explains the choice in plain words.",
      ],
      es: [
        "Instalación de sistema completo para casas y negocios en Edinburg.",
        "Cuando la reparación ya no conviene, FrosTex instala el sistema de calefacción y aire, y le explica las opciones con claridad.",
      ],
    },
    description: {
      en: "Complete heating and cooling installation for Edinburg homes and businesses. Call (956) 776-7366.",
      es: "Instalación completa de calefacción y aire para casas y negocios en Edinburg. Llame al (956) 776-7366.",
    },
  },
];

export const bookableServices = services.filter((service) => service.bookable);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const ui = {
  en: {
    offer: "First-time customers save 15% off any repair.",
    call: "Call",
    text: "Text",
    callNow: "Call (956) 776-7366",
    book: "Book a service",
    services: "Services",
    about: "About",
    contact: "Contact",
    home: "Home",
    language: "Español",
    hours: "Mon to Fri, call for hours",
    serviceArea: "Service area: Edinburg, Texas, in the Rio Grande Valley.",
    demoBooking: "No real booking is made.",
    demoBadge: "Demo",
    footerDemo: "Demo preview. Requests on this site are not delivered.",
    licenseLabel: "License",
    skip: "Skip to content",
    mainNav: "Main",
    footerNav: "Footer",
    menu: "Menu",
    close: "Close",
    allServices: "All services",
    heroKicker: "Edinburg, Texas",
    heroTitle: "AC and heating for Edinburg homes and businesses",
    heroBody:
      "FrosTex Air Conditioning & Heating LLC repairs systems, keeps them maintained, and installs new ones.",
    claimsTitle: "What you can count on",
    claims: [
      "The technicians are skilled professionals.",
      "Maintenance is available year round.",
      "No job is too small or too large.",
      "The work is done with integrity, on time, and with an honest solution.",
    ],
    servicesTitle: "Services",
    servicesIntro:
      "AC repair, heating, preventative maintenance, indoor air quality, ductwork, and complete system installation.",
    formTitle: "Request service",
    formBody:
      "Say what the system is doing. This demo keeps the request on the screen.",
    formDemo: "Demo form. Nothing is sent.",
    name: "Name",
    phone: "Phone",
    service: "Service",
    message: "Message",
    messageHint: "What is the system doing?",
    submit: "Request service",
    choose: "Choose a service",
    successTitle: "Request stayed on this screen",
    successBody:
      "Nothing was sent. Call (956) 776-7366 to reach FrosTex.",
    errName: "Enter your name.",
    errPhone: "Enter a phone number with area code.",
    errService: "Pick a service.",
    errMessage: "Add a short message.",
    errCheck: "Complete the check below.",
    aboutTitle: "About FrosTex",
    aboutParagraphs: [
      "Federico Cantu owns FrosTex Air Conditioning & Heating LLC.",
      "The shop is at 33102 W FM 681, Edinburg, Texas 78541.",
      "The company works on homes and businesses. The stated service area is Edinburg, in the Rio Grande Valley.",
      "Skilled professionals. Maintenance available year round. No job too small or too large. Integrity, timely service, and honest solutions.",
      "Hours are Mon to Fri. Call for hours.",
    ],
    contactTitle: "Talk to FrosTex in Edinburg",
    contactBody: "Call (956) 776-7366, send a text, or use the form.",
    address: "Address",
    email: "Email",
    hoursLabel: "Hours",
    map: "Open the address in maps",
    bookTitle: "Book a service",
    bookIntro: "Pick a service, a weekday, and a demo time.",
    stepService: "Service",
    stepTime: "Time",
    stepContact: "Contact",
    stepDone: "Done",
    stepServiceTitle: "What do you need?",
    stepTimeTitle: "Pick a weekday and a demo time",
    stepContactTitle: "Who should the shop ask for?",
    stepDoneTitle: "Demo confirmation",
    timeNote:
      "These times are demo slots. Shop hours are Mon to Fri. Call for hours.",
    note: "Note",
    noteHint: "Gate code, attic unit, or anything else useful",
    continue: "Continue",
    back: "Back",
    confirmBody: "No real booking is made. Nothing was sent.",
    loading: "Loading the scheduler.",
    notFoundTitle: "Page not found",
    notFoundBody: "That page is not on this demo.",
    backHome: "Back to the home page",
    details: "Details",
    photoCaption: "Equipment like this is part of the work in Edinburg.",
  },
  es: {
    offer: "Los clientes nuevos ahorran 15% en cualquier reparación.",
    call: "Llamar",
    text: "Texto",
    callNow: "Llamar al (956) 776-7366",
    book: "Agendar servicio",
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    home: "Inicio",
    language: "English",
    hours: "De lunes a viernes, llame para el horario",
    serviceArea: "Área de servicio: Edinburg, Texas, en el Valle del Río Grande.",
    demoBooking: "No se hace una cita real.",
    demoBadge: "Demo",
    footerDemo: "Vista demo. Las solicitudes de este sitio no se envían.",
    licenseLabel: "Licencia",
    skip: "Saltar al contenido",
    mainNav: "Principal",
    footerNav: "Pie de página",
    menu: "Menú",
    close: "Cerrar",
    allServices: "Todos los servicios",
    heroKicker: "Edinburg, Texas",
    heroTitle: "Aire acondicionado y calefacción para casas y negocios en Edinburg",
    heroBody:
      "FrosTex Air Conditioning & Heating LLC repara sistemas, les da mantenimiento e instala equipos nuevos.",
    claimsTitle: "En qué puede confiar",
    claims: [
      "Los técnicos son profesionales con experiencia.",
      "El mantenimiento está disponible todo el año.",
      "Ningún trabajo es demasiado chico o demasiado grande.",
      "El trabajo se hace con integridad, a tiempo, y con una solución honesta.",
    ],
    servicesTitle: "Servicios",
    servicesIntro:
      "Reparación de aire acondicionado, calefacción, mantenimiento preventivo, calidad del aire interior, ductos e instalación de sistema completo.",
    formTitle: "Pedir servicio",
    formBody:
      "Diga qué está haciendo el sistema. Esta demo deja la solicitud en la pantalla.",
    formDemo: "Formulario demo. No se envía nada.",
    name: "Nombre",
    phone: "Teléfono",
    service: "Servicio",
    message: "Mensaje",
    messageHint: "¿Qué está haciendo el equipo?",
    submit: "Pedir servicio",
    choose: "Elija un servicio",
    successTitle: "La solicitud se quedó en esta pantalla",
    successBody:
      "No se envió nada. Llame al (956) 776-7366 para hablar con FrosTex.",
    errName: "Escriba su nombre.",
    errPhone: "Escriba un teléfono con código de área.",
    errService: "Elija un servicio.",
    errMessage: "Agregue un mensaje corto.",
    errCheck: "Complete la verificación de abajo.",
    aboutTitle: "Sobre FrosTex",
    aboutParagraphs: [
      "Federico Cantu es el dueño de FrosTex Air Conditioning & Heating LLC.",
      "El taller está en 33102 W FM 681, Edinburg, Texas 78541.",
      "La compañía trabaja en casas y negocios. El área de servicio que se indica es Edinburg, en el Valle del Río Grande.",
      "Profesionales con experiencia. Mantenimiento disponible todo el año. Ningún trabajo es demasiado chico o demasiado grande. Integridad, servicio a tiempo y soluciones honestas.",
      "El horario es de lunes a viernes. Llame para el horario.",
    ],
    contactTitle: "Hable con FrosTex en Edinburg",
    contactBody: "Llame al (956) 776-7366, mande un texto, o use el formulario.",
    address: "Dirección",
    email: "Correo",
    hoursLabel: "Horario",
    map: "Abrir la dirección en el mapa",
    bookTitle: "Agendar servicio",
    bookIntro: "Elija el servicio, un día de semana y una hora de demo.",
    stepService: "Servicio",
    stepTime: "Hora",
    stepContact: "Contacto",
    stepDone: "Listo",
    stepServiceTitle: "¿Qué necesita?",
    stepTimeTitle: "Elija un día de semana y una hora de demo",
    stepContactTitle: "¿A quién pregunta el taller?",
    stepDoneTitle: "Confirmación de demo",
    timeNote:
      "Estos horarios son de demo. El taller atiende de lunes a viernes. Llame para el horario.",
    note: "Nota",
    noteHint: "Código del portón, equipo en el ático, u otro dato útil",
    continue: "Continuar",
    back: "Atrás",
    confirmBody: "No se hace una cita real. No se envió nada.",
    loading: "Cargando el calendario.",
    notFoundTitle: "Página no encontrada",
    notFoundBody: "Esa página no está en esta demo.",
    backHome: "Volver al inicio",
    details: "Detalles",
    photoCaption: "Equipo como este es parte del trabajo en Edinburg.",
  },
} as const;

export const homeDescription = {
  en: "AC repair, heating, maintenance, ducts, indoor air, and system installs in Edinburg, Texas. Call (956) 776-7366. First-time customers save 15% off any repair.",
  es: "Reparación de aire, calefacción, mantenimiento, ductos, aire interior e instalación en Edinburg, Texas. Llame al (956) 776-7366. Clientes nuevos ahorran 15% en cualquier reparación.",
} as const;

export const homeTitle = "FrosTex Air Conditioning & Heating | Edinburg, TX";
