import { Noticia } from '../models/Notica.model';
import { EstadoPublicacion } from '../enum/EstadoPublicacion';

export const MOCKUP_NOTICIAS: Noticia[] = [
  {
    id: 'not-001',
    titulo: 'Descubren nueva especie de rana en la cuenca del Amazonas',
    subtitulo: 'Científicos identifican una rana de colores brillantes con propiedades medicinales únicas',
    contenido: `
      Un equipo internacional de biólogos ha anunciado el descubrimiento de una nueva especie de rana en las profundidades de la selva amazónica. La rana, de aproximadamente 3 centímetros de longitud, presenta colores vibrantes que van del verde esmeralda al azul turquesa.

      Los investigadores señalan que esta especie podría tener compuestos en su piel con potencial farmacológico. "Este hallazgo refuerza la importancia de conservar la biodiversidad amazónica", afirmó la Dra. Silva, líder del equipo.

      El descubrimiento se realizó en una expedición de tres meses en la región del río Caquetá, en colaboración con comunidades indígenas locales que conocían de la existencia de esta rana desde hace generaciones.
    `,
    categoriaId: 'cat-001',
    imagen: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7',
      'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c'
    ],
    autorUid: 'user-002',
    fechaCreacion: new Date('2024-10-15T10:30:00'),
    fechaActualizacion: new Date('2024-10-15T14:20:00'),
    estado: EstadoPublicacion.PUBLICADO
  },
  {
    id: 'not-002',
    titulo: 'Comunidades indígenas reciben premio internacional por conservación forestal',
    subtitulo: 'El esfuerzo de tres décadas protegiendo más de 500,000 hectáreas es reconocido mundialmente',
    contenido: `
      La Nación Cofán de Ecuador ha sido galardonada con el Premio Ecuatorial 2024 por su destacada labor en la conservación del bosque amazónico. Durante más de 30 años, esta comunidad ha protegido exitosamente su territorio ancestral contra la deforestación y la minería ilegal.

      El líder indígena manifestó su orgullo por el reconocimiento: "Nuestro compromiso es con la Madre Tierra y las futuras generaciones. Este premio no es solo nuestro, sino de todos los pueblos que luchan por preservar la selva".

      La iniciativa ha logrado mantener intacto el 95% de la cobertura forestal en su territorio, estableciendo un modelo replicable para otras comunidades amazónicas.
    `,
    categoriaId: 'cat-003',
    imagen: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19'
    ],
    autorUid: 'user-003',
    fechaCreacion: new Date('2024-10-20T09:15:00'),
    fechaActualizacion: new Date('2024-10-20T16:45:00'),
    estado: EstadoPublicacion.PUBLICADO
  },
  {
    id: 'not-003',
    titulo: 'Deforestación en la Amazonía alcanza niveles críticos en septiembre',
    subtitulo: 'Satélites registran pérdida de 1,200 km² de bosque en un solo mes',
    contenido: `
      Nuevos datos satelitales revelan que la deforestación en la región amazónica alcanzó cifras alarmantes durante septiembre de 2024. Los sistemas de monitoreo identificaron la pérdida de 1,200 kilómetros cuadrados de cobertura forestal, un incremento del 35% respecto al mismo período del año anterior.

      Los expertos atribuyen este aumento a la expansión de la frontera agrícola y actividades mineras ilegales. "Estamos en un punto crítico. La Amazonía está perdiendo su capacidad de regeneración", advirtió un investigador del Instituto Nacional de Pesquisas de la Amazonia.

      Organizaciones ambientales exigen acciones urgentes de los gobiernos regionales para frenar esta tendencia devastadora.
    `,
    categoriaId: 'cat-004',
    imagen: [
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce'
    ],
    autorUid: 'user-002',
    fechaCreacion: new Date('2024-10-12T08:00:00'),
    fechaActualizacion: new Date('2024-10-12T08:00:00'),
    estado: EstadoPublicacion.PENDIENTE
  },
  {
    id: 'not-004',
    titulo: 'Festival de Arte Indígena celebra la riqueza cultural amazónica',
    subtitulo: 'Más de 30 comunidades participan en encuentro de tradiciones ancestrales',
    contenido: `
      El primer Festival Internacional de Arte Indígena Amazónico reúne a artistas y artesanos de más de 30 comunidades diferentes en Leticia. Durante cinco días, visitantes pueden apreciar tejidos, cerámicas, música y danzas tradicionales.

      "Este festival es una oportunidad única para mostrar al mundo la belleza y profundidad de nuestras culturas", expresó una artesana Tikuna. Las actividades incluyen talleres, presentaciones musicales y exhibiciones de arte tradicional.

      El evento busca promover el intercambio cultural y generar oportunidades económicas para las comunidades participantes, respetando siempre sus conocimientos ancestrales.
    `,
    categoriaId: 'cat-005',
    imagen: [
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69',
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e'
    ],
    autorUid: 'user-004',
    fechaCreacion: new Date('2024-10-18T11:30:00'),
    fechaActualizacion: new Date('2024-10-19T10:15:00'),
    estado: EstadoPublicacion.PUBLICADO
  },
  {
    id: 'not-005',
    titulo: 'Jaguar avistado cerca de zona urbana genera alarma y fascinación',
    subtitulo: 'Expertos trabajan en protocolo de convivencia entre fauna silvestre y comunidades',
    contenido: `
      Un jaguar adulto fue avistado a menos de dos kilómetros del centro poblado de Puerto Nariño, generando tanto preocupación como admiración entre los habitantes. Las autoridades ambientales activaron protocolos de seguridad y educación comunitaria.

      Biólogos explican que este comportamiento es indicativo de la presión sobre el hábitat natural del felino. "Los jaguares necesitan grandes extensios de territorio. Su aparición cerca de poblados señala la fragmentación de su ecosistema", indicó un experto.

      Se está trabajando en un plan de manejo que garantice la seguridad humana mientras se protege a esta especie amenazada, considerada clave para el equilibrio del ecosistema amazónico.
    `,
    categoriaId: 'cat-001',
    imagen: [
      'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60'
    ],
    autorUid: 'user-003',
    fechaCreacion: new Date('2024-10-22T15:20:00'),
    fechaActualizacion: new Date('2024-10-22T15:20:00'),
    estado: EstadoPublicacion.BORRADOR
  },
  {
    id: 'not-006',
    titulo: 'Nueva reserva natural protegerá 80,000 hectáreas de bosque primario',
    subtitulo: 'Acuerdo entre gobierno y comunidades locales crea corredor biológico estratégico',
    contenido: `
      Tras dos años de negociaciones, se oficializó la creación de la Reserva Natural Yasuní-Caquetá, que protegerá 80,000 hectáreas de bosque primario amazónico. Este logro es resultado de una alianza sin precedentes entre entidades gubernamentales, organizaciones ambientales y cinco comunidades indígenas.

      La nueva área protegida servirá como corredor biológico, conectando otros dos parques nacionales y permitiendo el libre tránsito de especies amenazadas como el oso de anteojos y el tapir amazónico.

      "Esta es una victoria para la conservación y el reconocimiento de los derechos territoriales indígenas", celebró el director del proyecto. La reserva será co-administrada con participación directa de las comunidades locales.
    `,
    categoriaId: 'cat-002',
    imagen: [
      'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0',
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a'
    ],
    autorUid: 'user-002',
    fechaCreacion: new Date('2024-10-25T13:45:00'),
    fechaActualizacion: new Date('2024-10-26T09:30:00'),
    estado: EstadoPublicacion.PUBLICADO
  },
  {
    id: 'not-007',
    titulo: 'Ecoturismo genera $5 millones anuales para comunidades locales',
    subtitulo: 'Modelo de turismo sostenible transforma economía de seis poblados amazónicos',
    contenido: `
      Un innovador programa de ecoturismo comunitario está transformando la realidad económica de seis poblados en la región amazónica de Putumayo. En solo tres años, la iniciativa ha generado más de $5 millones en ingresos directos para las familias participantes.

      El programa ofrece a visitantes experiencias auténticas dirigidas por guías nativos: caminatas por la selva, observación de fauna, talleres de medicina tradicional y alojamiento en malocas tradicionales. Todo bajo estrictos principios de sostenibilidad.

      "Ahora nuestros jóvenes tienen una razón para quedarse en el territorio, manteniendo vivas nuestras tradiciones mientras obtienen ingresos dignos", expresó uno de los líderes comunitarios involucrados en el proyecto.
    `,
    categoriaId: 'cat-006',
    imagen: [
      'https://images.unsplash.com/photo-1563289318-64e20a133545',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
    ],
    autorUid: 'user-004',
    fechaCreacion: new Date('2024-10-28T10:00:00'),
    fechaActualizacion: new Date('2024-10-28T17:20:00'),
    estado: EstadoPublicacion.PUBLICADO
  },
  {
    id: 'not-008',
    titulo: 'Estudiantes indígenas desarrollan app para documentar lenguas nativas',
    subtitulo: 'Tecnología al servicio de la preservación cultural en la Amazonía',
    contenido: `
      Un grupo de jóvenes estudiantes indígenas ha desarrollado una aplicación móvil pionera para documentar y enseñar lenguas nativas amazónicas en peligro de extinción. La app, llamada "Yawaraka" (que significa "nuestra voz" en lengua Secoya), ya cuenta con contenido en ocho idiomas diferentes.

      La plataforma incluye lecciones interactivas, grabaciones de hablantes nativos, y un diccionario colaborativo donde las comunidades pueden contribuir con nuevas palabras y expresiones. Todo el contenido es validado por los ancianos de cada comunidad.

      Este proyecto demuestra cómo la tecnología puede ser una aliada poderosa en la preservación cultural, adaptándose a las necesidades y cosmovisión de los pueblos amazónicos.
    `,
    categoriaId: 'cat-005',
    imagen: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b'
    ],
    autorUid: 'user-003',
    fechaCreacion: new Date('2024-10-30T14:30:00'),
    fechaActualizacion: new Date('2024-10-30T14:30:00'),
    estado: EstadoPublicacion.BORRADOR
  },
  {
    id: 'not-009',
    titulo: 'Sequía histórica afecta niveles de ríos amazónicos',
    subtitulo: 'Comunidades ribereñas enfrentan crisis de abastecimiento y transporte',
    contenido: `
      Una sequía sin precedentes está afectando gravemente los niveles de los principales ríos amazónicos, generando una crisis humanitaria para las comunidades ribereñas que dependen del agua para transporte, pesca y consumo diario.

      El río Amazonas registra su nivel más bajo en 50 años, dejando varadas embarcaciones y aislando a poblaciones enteras. Científicos atribuyen este fenómeno a una combinación del cambio climático y el fenómeno de El Niño.

      Organizaciones humanitarias están coordinando el envío de ayuda, mientras autoridades trabajan en planes de emergencia. Expertos advierten que estos eventos extremos podrían volverse más frecuentes si no se toman medidas urgentes contra el calentamiento global.
    `,
    categoriaId: 'cat-004',
    imagen: [
      'https://images.unsplash.com/photo-1589553416260-f586c8f1514f',
      'https://images.unsplash.com/photo-1571255623589-608d9b87bc9e'
    ],
    autorUid: 'user-002',
    fechaCreacion: new Date('2024-11-01T08:45:00'),
    fechaActualizacion: new Date('2024-11-01T08:45:00'),
    estado: EstadoPublicacion.RECHAZADO
  },
  {
    id: 'not-010',
    titulo: 'Científicos documentan 85 especies nuevas en expedición de dos meses',
    subtitulo: 'Hallazgos incluyen insectos, plantas medicinales y anfibios únicos en el mundo',
    contenido: `
      Una expedición científica a una de las zonas más remotas de la Amazonía ha resultado en el descubrimiento de 85 especies previamente desconocidas para la ciencia. El equipo multinacional de biólogos, botánicos y entomólogos trabajó en colaboración con guías indígenas durante dos meses.

      Entre los hallazgos destacan 23 especies de escarabajos con colores metálicos únicos, 15 plantas con propiedades medicinales potenciales, 12 especies de orquídeas miniatura, y varios anfibios que muestran adaptaciones extraordinarias a su entorno.

      "Cada nueva especie que descubrimos es un recordatorio de cuánto queda por conocer y proteger en la Amazonía", señaló el jefe de la expedición. Los resultados serán publicados en varias revistas científicas internacionales durante los próximos meses.
    `,
    categoriaId: 'cat-001',
    imagen: [
      'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3',
      'https://images.unsplash.com/photo-1535083783855-76ae62b2914e',
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b'
    ],
    autorUid: 'user-004',
    fechaCreacion: new Date('2024-11-05T12:15:00'),
    fechaActualizacion: new Date('2024-11-06T10:30:00'),
    estado: EstadoPublicacion.PUBLICADO
  }
];
