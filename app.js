/* ══════════════════════════════════════════════════════════
   CONFIG — edita aquí
   ══════════════════════════════════════════════════════════ */

// Las fotos, videos y canciones van en esta misma carpeta, junto al index.
// (Si algún día las mueves a una subcarpeta, por ejemplo "media/", pon 'media/')
const MEDIA = '';

const START_DATE  = new Date(2026, 1, 12, 0, 0, 0); // 12 febrero 2026
const START_LABEL = '12 de febrero, 2026';

// Canciones del mini reproductor de arriba
const TRACKS = [
  { src: 'perfect.mp3', title: 'Perfect' },
  { src: 'besame.mp3',  title: 'Besame'  },
];

const FRASES = [
  'eres mi lugar favorito', 'te amo más que al mar', 'mi angelito', 'eres tan bonita',
  'me encantan tus ojos', 'gracias por existir', 'tú eres mi calma', 'te pienso siempre',
  'eres todo mi mundo', 'me haces tan feliz', 'eres mi atardecer', 'contigo todo es mejor',
  'mi psicóloga favorita', 'te elegiría mil veces', 'mi amor eterno', 'eres mi sol y mi mar',
  'cada día me enamoro más de ti', 'mi corazón ya tiene dueña', 'contigo ya gané en la vida',
];

// 02 · Fotos que me sacan una sonrisa
const FOTOS = [
  { src: 'mirando.jpeg', cap: 'Admirandote como el primer dia, completamente enamorado tuyo ❤️', sub: 'Gracias por cada mes por cada abrazo por cada accion gracias por todo❤️' },
  { src: 'chi.jpeg',     cap: 'El abrazo más lindo y puro que llego a mi vida ❤️', sub: 'Gracias por llegar ami vida ❤️' },
  { src: 'co.jpeg',      cap: 'Feliz siempre mi amor a tu ladooo ❤️', sub: 'La mejor sin duda alguna❤️' },
  { src: 'novia1.jpeg',  cap: 'Con mi princesita hermosa ❤️', sub: 'ERES LO MEJOR DE MI VIDA ❤️' },
  { src: 'novia2.jpeg',  cap: 'Esa sonrisa me encanta, feliz siempre la quiero ver ❤️', sub: 'Encantado contigo ❤️' },
  { src: 'bebe.jpeg',    cap: 'Con mi niña chiquita❤️', sub: 'amooooo ❤️' },
  { src: 'lb.jpeg',      cap: 'Esos labioooos huy ❤️', sub: 'Me encantan❤️' },
  { src: 'hy.jpeg',      cap: 'Con mi novia lindota ❤️', sub: 'Así siempre, amor ❤️' },
  { src: 'hy2.jpeg',     cap: 'Tus caricias me encantan amor mío ❤️', sub: 'Mi lugar más feliz ❤️' },
  { src: 'cita.jpeg',    cap: 'A tu lado feliz como un niñoooo ❤️', sub: 'Juntitos siempre ❤️' },
  { src: '7.jpeg',       cap: 'Eres la razón más bonita de mis días', sub: 'cada momento contigo' },
  { src: 'rebe4.jpeg',   cap: 'Esos ojitos me matan solo con verlos', sub: 'me enamoran cada día 🌅' },
];

// 03 · Fotos de la canción
const CANCION_FOTOS = [
  { src: '5m2.jpeg',            cap: 'SIN PALABRAS❤️', sub: 'Solamente puedo decir que estoy enamorado de ti mi niña ❤️' },
  { src: 'anaranjado.jpeg',     cap: 'Ese vestido me dejo sin palabras ❤️', sub: 'todo te queda maravilloso❤️' },
  { src: 'mirandoaminiña.jpeg', cap: 'Admirando a la hermosura de mi novia❤️', sub: 'te quiero mi niña ❤️' },
  { src: 'besos.jpeg',          cap: 'No me cansare nunca de darte beshitos mi niña❤️', sub: 'te quiero mi tesorito❤️' },
  { src: 'sonriente.jpeg',      cap: 'Si mi niña es feliz yo soy el triple de feliz ❤️', sub: 'te quiero mi tesorito❤️' },
  { src: 'enamorado.jpeg',      cap: 'Mi niña que me hace tan feliz en mi vida❤️', sub: 'te quiero tantoooo amor que las palabras se quedan cortas ❤️' },
  { src: 'n.jpeg',              cap: 'Mi solecito que ilumina mi vida ❤️', sub: 'te quiero tantoooo ❤️' },
  { src: 'mividabonita.jpg',    cap: 'No te soltaré la mano nunca mi amorcito ❤️', sub: 'te quiero mi psicologa❤️' },
  { src: 'gusta.jpeg',          cap: 'Claramente encontre la que me gusta muchote y me hace taaaan feliz ❤️', sub: 'te quiero mi princesita❤️' },
  { src: 'ch.jpeg',             cap: 'Esos ojitos quiero ver el resto de mi vida❤️', sub: 'te quiero mi bonita❤️' },
  { src: 'babi.jpeg',           cap: 'Con el amor de mi vida ❤️', sub: 'te quiero mi bella niña ❤️' },
  { src: 'anillo.jpeg',         cap: 'Que regalote me diste mi amor estas siendo la primera en todooooo ❤️', sub: 'te quiero mi amorcito ❤️' },
  { src: 'mj.jpeg',             cap: 'Pero amoooor no me mire asi que me deja loquito❤️', sub: 'te quiero mi corazon ❤️' },
  { src: 'mivida.jpeg',         cap: 'Con la mujer que me hace el hombre más feliz ❤️', sub: 'te quiero mi bonita ❤️' },
  { src: 'felicidad.jpeg',      cap: 'TU FELICIDAD ES MI MEJOR REGALO EN LA VIDA CORAZÓN❤️', sub: 'mi amor ❤️' },
  { src: 'ojitos.jpeg',         cap: 'Esos lindos ojitos de mi niña hermosa me encantan los amooo❤️', sub: 'mi amor ❤️' },
  { src: 'feliz.jpeg',          cap: 'A tu lado soy mejor ❤️', sub: 'mi tesoro ❤️' },
  { src: 'minv.jpeg',           cap: 'Eres todo lo que quiero en mi vida ❤️', sub: 'mi amor ❤️' },
  { src: 'novia1.jpeg',         cap: 'Cada vez que te veo mi estados de animos cambian eres mi lugar favorito para estar ❤️', sub: 'siempre así juntos❤️' },
  { src: 'brillo.jpeg',         cap: 'Daría lo que fuera por que esos ojitos brillen con esa intensidad siempre ❤️', sub: 'mi princesita ❤️' },
  { src: 'novia2.jpeg',         cap: 'Mi niña chiquita, mi todo ❤️', sub: 'te quiero tanto ❤️' },
  { src: 'rebe4.jpeg',          cap: 'Los bellos ojitos de mi bella novia ❤️', sub: 'me enamoran cada día 🌅' },
];

// 05 · Fotos del corazón
const CORAZON_FOTOS = [
  'novia1.jpeg','novia2.jpeg','bebe.jpeg','lb.jpeg','hy.jpeg','hy2.jpeg','cita.jpeg',
  '7.jpeg','rebe4.jpeg','j2.jpeg','j5.jpeg','ojazos.jpeg','rebe5.jpeg',
];

// 06 · Álbum (el último es la página de la canción)
const ALBUM = [
  { src: 'novia1.jpeg', cap: 'Con mi princesita hermosa, la más bonita de todas', sub: 'MI AMOR ETERNO ❤️' },
  { src: 'novia2.jpeg', cap: 'Esa sonrisa me alegra todos los días, amor', sub: 'ENCANTADO CONTIGO ❤️' },
  { src: 'hy.jpeg',     cap: 'A tu lado soy el hombre más feliz del mundo', sub: 'SIEMPRE CONTIGO ❤️' },
  { src: 'hy2.jpeg',    cap: 'Tus caricias son mi lugar favorito en este mundo', sub: 'MI LUGAR SEGURO ❤️' },
  { src: 'cita.jpeg',   cap: 'Cada salida contigo es una aventura que amo con todo mi corazón', sub: 'JUNTITOS SIEMPRE ❤️' },
  { src: '7.jpeg',      cap: 'Eres la razón más bonita de todos mis días', sub: 'CADA MOMENTO CONTIGO ❤️' },
  { src: 'rebe4.jpeg',  cap: 'Esos ojitos me matan solo con verlos, amor', sub: 'ME ENAMORAN CADA DÍA ❤️' },
  { src: 'rebe5.jpeg',  cap: 'Te quiero para toda la vida, mi psicologa preciosa', sub: 'PARA SIEMPRE ❤️' },
  { src: 'j2.jpeg',     cap: 'Verte sonreír es el regalo más grande que me das', sub: 'MI TODO ❤️' },
  { src: 'j5.jpeg',     cap: 'Siempre serás mi lugar seguro, mi princesita', sub: 'CON TODO MI AMOR ❤️' },
  { song: true, src: 'rebe5.jpeg', cap: 'Una persona tan especial para mi se merece algo asi de especial', sub: 'Cada nota de esta canción te la dedico a ti, mi preciosa' },
];

// 07 · Línea de tiempo
const HISTORIA = [
  { emoji: '📚', badge: 'el destino tenia algo para nosotros mi rebe', date: 'Hace 2 años',
    title: 'La primera vez que te vi ufff la vi bieeeen',
    preview: 'Te conocí dandote clases sin creer el impacto que tendrias en mi',
    desc: 'Hace dos años te vi por primera vez ahi toda nerviosa sin querer preguntar, toda preciosa con timidez',
    msg: 'El destino nos junto a dar clases y ahora a seguir dando clases huuuuy 💋.' },
  { emoji: '💬', badge: 'el primer paso', date: '6 de febrero 2026',
    title: 'Te escribí por primera vez, con un chiste para romper el hielo y ver que pasaba obviamente mi interes ya estaba en ti amoor',
    preview: 'Pensé muchas formas de hablarle hasta que se me ocurrioo algo',
    desc: 'El 6 de febrero me armé de valor y te escribí ese mensaje lo pensé mil veces antes de mandarlo y o sabía si ibas a responder, pero lo mandé sin miedo al exito.',
    msg: 'La mejor accion que puede hacer.' },
  { emoji: '🦋', badge: 'los nervios de ese dia ufff', date: '20 de febrero 2026',
    title: 'Nos vimos por primera vez en persona ni queria sentarmeeeee',
    preview: 'Los dos nerviosos, los dos emocionados. Te vi y WOW solo dije que mujer más preciosa que tengo enfrenteeee',
    desc: 'El 20 de febrero nos vimos por primera vez verte ahi enfrente mio, que me sonrieras por primera vezzz uff y me vieras a los ojoooos ❤️',
    msg: 'Te vi y pensé: qué mujer tan increíble.' },
  { emoji: '💋', badge: 'primer besito, bueno fueron variooooos', date: '2 de marzo 2026', photo: 'beso.jpeg',
    title: 'Primera foto juntos y ese primer beso uffff',
    preview: 'Nuestra primera foto. Ese beso que me dejó mudo aunque se queda corto mudo jajajaja',
    desc: 'Ese día me dejaste sin palabras mi amooor WOW sin palabras como tomaste la iniciatva me encanto 💋',
    msg: 'No hablé en todo el camino de regreso. Solo pensaba en ti.' },
  { emoji: '🌄', badge: 'ese día tan bonito', date: '20 de marzo 2026', photo: 'mano.jpg',
    title: 'El paisaje, ese vestido, esa sonrisa uffff',
    preview: 'Hay amor ese diaaaa huuuy tenia los ojos en otro ladoooo ufff',
    desc: 'Desde que la vi de lejitos esperandome me cambia el estado de animos la sonrisa todoooooo',
    msg: 'Ese día lo disfrute muchoteeee' },
  { emoji: '🍽️', badge: 'nuestra mejor cita o bueno la primeraaaaa', date: '27 de marzo 2026', photo: 'comida.jpg',
    title: 'Verte tan feliz conmigo no tiene precio ❤️',
    preview: 'Comimos juntos, reímos, estuvimos los dos solos ufff lo mejooooor',
    desc: 'El 27 de marzo fue uno de mis momentos más favoritos a tu lado amor, estar contigo disfrutando despues de que tuvo una semana pesada realmente me gusto pasarlo con usted mi reina',
    msg: 'Ese día me enamoré aún más de ti, mi amorcito ❤️' },
  { emoji: '🎉', special: true, badge: '2 MESES JUNTOOOOOS AMOOOOR', date: '9 de abril 2026', photo: 'rebe4.jpeg',
    title: 'Hoy cumplimos 2 meses contigo',
    preview: 'Dos meses siendo el hombre más afortunado del mundo y creeme que si amooor',
    desc: 'Hoy, 9 de abril, cumplimos 2 meses juntos. Dos meses de verte, de escucharte, de admirarte, de reírme contigo, de querer estar siempre cerca tuyo. Dos meses siendo el hombre más afortunado del mundo por tenerte a mi lado, mi princesa preciosa.',
    msg: 'Felices 2 meses, mi psicóloga preciosa la quiero muchoteeeeee ❤️' },
  { emoji: '✨', badge: 'cada día', date: 'Todos los días', photo: 'c4.jpeg',
    title: 'Cada vez que hablamos y me alegras el día',
    preview: 'No hay un día que no piense en ti creeme cada foto que me mandas me enamora mas y mas de ti',
    desc: 'Cada mensaje cada llamada cada vez que te veo me alegra el corazón ❤️',
    msg: 'Gracias por existir y por estar en mi vida mi amorcito de mi vidaaaaaa.' },
  { emoji: '💍', special: true, badge: 'El dia oficial mi amorcito', date: '17 de abril 2026', photo: 'pr2.jpeg',
    title: 'Cada detalle de tu servidor te encanto esos ojitos brillaban de alegria',
    preview: 'No puedo explicar aveces lo que siento por ti y cuando te pedi que fueras mi novia esos ojitos te brillaron de una forma UFF',
    desc: 'Supe en ese momento que contigo quiero estar siempre mi cielito te quierooooo❤️ Verte salir esas lágrimas de la emoción uff',
    msg: 'Gracias por existir y formar parte de mi vida mi amor ❤️' },
  { emoji: '🌍', badge: 'lo que nos queda', date: 'El futuro', photo: 'rebe1.jpeg',
    title: 'Todo lo que aún nos queda por vivir',
    preview: 'Más citas, más risas, más momentos, más nosotros juntitoooos y enamoradoooos',
    desc: 'Esta linea de tiempo es corta amor pero representa nuestra historia y donde comenzo todo y tiene que seguir asi confiando siempre en Dios nuestro FUTURO ❤️.',
    msg: 'Te elegiría mil veces más, con los ojos cerrados TU SABES ❤️' },
];

// 08 · Sueños
const SUENOS = [
  { src: 'fr.jpeg', tag: 'La primera mi amor', title: 'Trabajar duro para tener un lugar juntos mi niña donde vivir, nosotros solitos ❤️',
    desc: 'Te imaginas mi amor tu y yo, un lugar con flores, arboles donde podamos respirar aire puro y convivir juntos el resto de nuestras vidas ❤️' },
  { src: 'pr3.jpeg', tag: 'La segunda mi amor', title: 'El día más bonito',
    desc: 'Y es pedir tu mano mi amor, que me concedas el sueño de ser tu esposo mi amor y unirnos por la iglesia 🤍' },
  { src: 'tesoro.jpeg', tag: 'Tercera mi princesa', title: 'Nuestro primer viaje juntos',
    desc: 'Las aventuras en la universidad ya son increíbles ya me imagino mi amor en lugar que nos encante a los dos mi amor, sería increíble mi amor a tu lado. un sueño hecho realidad 🌅' },
  { src: 'rebe5.jpeg', tag: 'Cuarta mi amor', title: 'Nuestra familia',
    desc: 'Llenar esa casa de amor, risas y alguien que tenga tus mismos ojitos preciosos 🦋 pero quiero que sepas mi amor que siempre respetaré las decisiones mi niña bonita ❤️' },
  { src: 'mi psicologa.jpeg', tag: 'Quinta mi amor', title: 'Crecer juntos como profesionales y personas',
    desc: 'Verte graduada, cumpliendo tus sueños mi amor, será algo increíble que viviremos juntos mi amor 💛' },
  { src: 'b2.jpeg', tag: 'para toda la vidaaaa', title: 'Envejecer contigo y vivir una vida de felicidad de la mano de Dios mi amor',
    desc: 'Llegar a viejitos tomados de la mano viendo el mar juntos, y adorando a Dios toda la vida mi bebe ese es mi sueño contigo 🌅' },
];

// 10 · Videos del final
const VIDEOS = ['290.mp4', '291.mp4', '292.mp4'];

const MENSAJES_ALIENTO = [
  'Está bien sentirse mal o desanimado pero eso no cambia nada mi amor yo te querré igual ❤️.',
  'Aunque no esté ahí físicamente a tu lado mi corazon late por el mismo sentimiento hacia ti mi amor ❤️.',
  'Eres muchísimo más fuerte de lo que hoy crees eres una gran persona te admiro mucho mi niña ❤️',
  'No necesitas tener todo resuelto para que yo te admire ya lo hago me lo has demostrado con cada una de tus acciones lo valiosa que eres corazon ❤️.',
  'Mandame siempre mensaje de lo que te pase lo bueno y lo malo tu angelito siempre estará para ti ❤️',
  'De todos los días que nos quedan por vivir juntos no pienso irme a ningun lado estaré ahi siempre ❤️',
  'Estoy orgulloso de ti incluso en los días en que tú no lo estás de ti misma ❤️.',
  'Cierra los ojos un segundo e imagina que estamos juntitos felices y abrazadooooos ❤️',
  'No pasa nada si hoy solo alcanzas lo mínimo en algo amor, mañana sera otro dia y lo alcanzaremos juntos ❤️',
  'Vas a cuidar a tanta gente algún día mi licenciada en psicología preciosa pero hasta que eso llegue dejame cuidarte ami ❤️',
  'Te quiero siempre mi amor en momentos buenos y malos ❤️',
  'No estás sola en esto recuerda siempre mi amor ahora ESTAS CONMIGO ❤️',
];

const MENSAJES_FOTOS = [
  'Cada foto tuya es un pedacito de mi corazón guardado para siempre ❤️',
  'No hay ángulo, ni luz, ni día en que no te veas hermosa para mí mi amor ❤️',
  'Esta foto me recuerda lo afortunado que soy de tenerte a mi lado ❤️',
  'Contigo hasta el momento más simple se vuelve mi favorito, mi vida ❤️',
  'Quiero seguir llenando este corazón de fotos contigo toda la vida ❤️',
  'Cada recuerdo que hacemos juntos vale más que cualquier tesoro, mi niña ❤️',
  'Verte sonreír en cada foto es mi razón favorita para sonreír yo también ❤️',
];

/* ══════════════════════════════════════════════════════════
   A partir de aquí ya no hace falta tocar nada
   ══════════════════════════════════════════════════════════ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const media = f => encodeURI(MEDIA + f);
const pad = n => String(n).padStart(2, '0');
const fmt = s => isFinite(s) ? `${Math.floor(s / 60)}:${pad(Math.floor(s % 60))}` : '0:00';
function pick(list, last) {
  if (list.length < 2) return 0;
  let i; do { i = Math.floor(Math.random() * list.length); } while (i === last);
  return i;
}

// Si una foto no carga, en vez de quedar vacía muestra su nombre
function fotoRespaldo(img) {
  const nombre = decodeURI((img.getAttribute('src') || '').split('/').pop()) || 'foto';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
    <rect width="400" height="500" fill="#ece0cf"/>
    <text x="200" y="230" font-size="64" text-anchor="middle">❤️</text>
    <text x="200" y="300" font-family="Georgia,serif" font-size="26" fill="#6e1631" text-anchor="middle">${nombre.replace(/[<&>]/g, '')}</text>
    <text x="200" y="340" font-family="Arial,sans-serif" font-size="16" fill="#8d7071" text-anchor="middle">no se encontró esta foto</text>
  </svg>`;
  img.dataset.failed = '1';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
document.addEventListener('error', e => {
  const el = e.target;
  if (el.tagName === 'IMG' && !el.dataset.failed) fotoRespaldo(el);
}, true);

// Rutas de archivos con data-m
$$('[data-m]').forEach(el => { el.src = media(el.dataset.m); });

/* ── Audio: que solo suene una cosa a la vez ── */
const allAudio = new Set();
function soloPlay(el) {
  allAudio.forEach(a => { if (a !== el && !a.paused) a.pause(); });
  const v = $('#heroVideo');
  if (el !== v && v && !v.muted) { v.muted = true; syncHeroIcon(); }
}

/* ── Portada ── */
function daysTogether() { return Math.max(0, Math.floor((Date.now() - START_DATE) / 864e5)); }
$('#coverIssue').textContent = `Día ${daysTogether()}`;
$('#enterBtn').addEventListener('click', () => {
  $('#cover').classList.add('gone');
  document.body.classList.add('entered');
  setTimeout(() => $('#cover').remove(), 900);
  mpPlay(); // arranca la música con el clic
});

/* ── Contador ── */
$('#startLabel').textContent = START_LABEL;
function tick() {
  const d = Math.max(0, Date.now() - START_DATE);
  $('#cDays').textContent    = Math.floor(d / 864e5);
  $('#cHours').textContent   = pad(Math.floor(d / 36e5) % 24);
  $('#cMinutes').textContent = pad(Math.floor(d / 6e4) % 60);
  $('#cSeconds').textContent = pad(Math.floor(d / 1e3) % 60);
}
tick(); setInterval(tick, 1000);

/* ── Marquee de frases ── */
(function () {
  const html = FRASES.map(f => `<span>${f}</span><i>♥</i>`).join('');
  $('#marquee').innerHTML = html + html;
})();

/* ── Mini reproductor ── */
const mpAudio = $('#mpAudio');
allAudio.add(mpAudio);
let mpIndex = 0;
function mpLoad(i) {
  mpIndex = (i + TRACKS.length) % TRACKS.length;
  mpAudio.src = media(TRACKS[mpIndex].src);
  $('#mpTitle').textContent = TRACKS[mpIndex].title;
}
function mpPlay() { soloPlay(mpAudio); mpAudio.play().catch(() => {}); }
function mpSync() {
  const on = !mpAudio.paused;
  $('#mpPlay').textContent = on ? '❚❚' : '▶';
  $('#mpEq').classList.toggle('paused', !on);
}
mpLoad(0);
$('#mpPlay').addEventListener('click', () => mpAudio.paused ? mpPlay() : mpAudio.pause());
$('#mpNext').addEventListener('click', () => { mpLoad(mpIndex + 1); mpPlay(); });
mpAudio.addEventListener('ended', () => { mpLoad(mpIndex + 1); mpPlay(); });
mpAudio.addEventListener('play', mpSync);
mpAudio.addEventListener('pause', mpSync);

/* ── Video del inicio (botón de sonido) ── */
const heroVideo = $('#heroVideo');
function syncHeroIcon() {
  $('#heroSoundIcon').textContent = heroVideo.muted ? '▶' : '🔊';
  $('#heroSound').classList.toggle('on', !heroVideo.muted);
}
$('#heroSound').addEventListener('click', () => {
  heroVideo.muted = !heroVideo.muted;
  if (!heroVideo.muted) { allAudio.forEach(a => a.pause()); heroVideo.currentTime = 0; heroVideo.play(); }
  syncHeroIcon();
});

/* ── Barra superior: progreso + sección activa ── */
const navLinks = $$('#tbNav a');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  $('#tbProgress').style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
}, { passive: true });
const secObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => {
      const on = a.getAttribute('href') === '#' + e.target.id;
      a.classList.toggle('active', on);
      if (on) {
        const nav = $('#tbNav');
        nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
      }
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main .sec').forEach(s => secObs.observe(s));

/* ── Aparecer al hacer scroll ── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); } });
}, { threshold: 0.12 });
function watchReveal(root = document) { $$('.reveal:not(.in)', root).forEach(el => revObs.observe(el)); }

/* ── Modal de mensajes ── */
const msgModal = $('#msgModal');
function openMsg(text, { photo = null, icon = '🤍' } = {}) {
  $('#msgText').textContent = text;
  $('#msgIcon').textContent = icon;
  const img = $('#msgPhoto');
  if (photo) { img.src = photo; img.hidden = false; } else { img.hidden = true; }
  msgModal.classList.add('open');
}
let lastAliento = -1, lastFoto = -1;
$$('[data-aliento]').forEach(b => b.addEventListener('click', () => {
  lastAliento = pick(MENSAJES_ALIENTO, lastAliento);
  openMsg(MENSAJES_ALIENTO[lastAliento], { icon: '🤍' });
}));
$$('[data-thumb]').forEach(b => b.addEventListener('click', () => {
  lastFoto = pick(MENSAJES_FOTOS, lastFoto);
  openMsg(MENSAJES_FOTOS[lastFoto], { photo: $('img', b).src, icon: '❤' });
}));

/* ── Visor de fotos ── */
const lb = $('#lightbox');
let lbList = [], lbIdx = 0;
function lbShow() {
  const it = lbList[lbIdx];
  $('#lbImg').src = media(it.src);
  $('#lbCap').textContent = it.cap ? `“${it.cap}”` : '';
  $('#lbSub').textContent = it.sub || '';
}
function openLightbox(list, idx) { lbList = list; lbIdx = idx; lbShow(); lb.classList.add('open'); }
function lbStep(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbShow(); }
$('#lbPrev').addEventListener('click', () => lbStep(-1));
$('#lbNext').addEventListener('click', () => lbStep(1));

// Cerrar modales
function closeAll() { msgModal.classList.remove('open'); lb.classList.remove('open'); }
$$('[data-close]').forEach(b => b.addEventListener('click', closeAll));
[msgModal, lb].forEach(m => m.addEventListener('click', e => { if (e.target === m) closeAll(); }));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll();
  if (lb.classList.contains('open')) {
    if (e.key === 'ArrowLeft') lbStep(-1);
    if (e.key === 'ArrowRight') lbStep(1);
  }
});
// Deslizar con el dedo en el visor
(function () {
  let x0 = null;
  lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1);
    x0 = null;
  });
})();

/* ── 02 · Bento de fotos ── */
(function () {
  const shapes = ['big', '', 'tall', '', 'wide', '', '', 'tall', 'big', '', 'wide', ''];
  $('#bento').innerHTML = FOTOS.map((f, i) => `
    <button class="tile reveal ${shapes[i % shapes.length]}" type="button" data-i="${i}" style="--d:${(i % 4) * 70}ms">
      <img loading="lazy" src="${media(f.src)}" alt="">
      <span class="tile-num">${pad(i + 1)}</span>
      <span class="tile-cap">${f.cap}</span>
    </button>`).join('');
  $$('#bento .tile').forEach(t => t.addEventListener('click', () => openLightbox(FOTOS, +t.dataset.i)));
})();

/* ── 03 · Canción + tira de fotos ── */
(function () {
  const audio = $('#songAudio'); allAudio.add(audio);
  const strip = $('#strip');
  const play = $('#songPlay');
  let auto = null;

  strip.innerHTML = CANCION_FOTOS.map((f, i) => `
    <figure class="polaroid" data-i="${i}" style="--r:${[-2.5, 1.5, -1, 2.2, -1.8][i % 5]}deg">
      <img loading="lazy" src="${media(f.src)}" alt="">
      <figcaption>“${f.cap}”<span>— ${f.sub}</span></figcaption>
    </figure>`).join('');
  const cards = $$('.polaroid', strip);
  cards.forEach(c => c.addEventListener('click', () => openLightbox(CANCION_FOTOS, +c.dataset.i)));

  const current = () => Math.round(strip.scrollLeft / (cards[0].offsetWidth + 18));
  function go(i) {
    const n = (i + cards.length) % cards.length;
    strip.scrollTo({ left: cards[n].offsetLeft - strip.offsetLeft - 4, behavior: 'smooth' });
  }
  function count() { $('#stripCount').textContent = `${Math.min(current() + 1, cards.length)} / ${cards.length}`; }
  strip.addEventListener('scroll', count, { passive: true }); count();
  $('#stripPrev').addEventListener('click', () => go(current() - 1));
  $('#stripNext').addEventListener('click', () => go(current() + 1));

  function sync() {
    const on = !audio.paused;
    play.textContent = on ? '❚❚' : '▶';
    $('#vinyl').classList.toggle('spin', on);
    $('#tonearm').classList.toggle('on', on);
    clearInterval(auto);
    if (on) auto = setInterval(() => go(current() + 1), 4500);
  }
  play.addEventListener('click', () => { if (audio.paused) { soloPlay(audio); audio.play(); } else audio.pause(); });
  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  audio.addEventListener('loadedmetadata', () => { $('#songDur').textContent = fmt(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    $('#songCur').textContent = fmt(audio.currentTime);
    $('#songBar').style.width = (audio.currentTime / (audio.duration || 1)) * 100 + '%';
  });
  $$('[data-skip]').forEach(b => b.addEventListener('click', () => { audio.currentTime += +b.dataset.skip; }));
  $('#songProgress').addEventListener('click', e => {
    const r = e.currentTarget.getBoundingClientRect();
    if (audio.duration) audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
  });
})();

/* ── 04 · Flor que florece ── */
(function () {
  let html = '';
  for (let i = 0; i < 12; i++) html += `<i class="petal outer" style="--a:${i * 30}deg;--d:${i * 60}ms"></i>`;
  for (let i = 0; i < 8; i++)  html += `<i class="petal inner" style="--a:${i * 45 + 22}deg;--d:${700 + i * 60}ms"></i>`;
  $('#petals').innerHTML = html;
})();

/* ── 05 · Corazón de fotos ── */
(function () {
  const shape = [
    '0110110',
    '1111111',
    '1111111',
    '1111111',
    '0111110',
    '0011100',
    '0001000',
  ];
  const list = CORAZON_FOTOS.map(src => ({ src }));
  let k = 0, html = '';
  shape.forEach((row, r) => [...row].forEach((c, col) => {
    if (c === '1') {
      const i = k++ % list.length;
      html += `<button class="hcell" type="button" data-i="${i}" style="--d:${(r + col) * 60}ms"><img loading="lazy" src="${media(list[i].src)}" alt=""></button>`;
    } else html += '<span class="hgap"></span>';
  }));
  const mosaic = $('#heartMosaic');
  mosaic.innerHTML = html;
  $$('.hcell', mosaic).forEach(b => b.addEventListener('click', () => openLightbox(list, +b.dataset.i)));
  new IntersectionObserver((es, o) => es.forEach(e => {
    if (e.isIntersecting) { mosaic.classList.add('in'); o.disconnect(); }
  }), { threshold: 0.25 }).observe(mosaic);
})();

/* ── 06 · Álbum (mazo de fotos) ── */
(function () {
  const deck = $('#deck');
  const N = ALBUM.length;
  deck.innerHTML = ALBUM.map((a, i) => a.song ? `
    <article class="card song-card" data-i="${i}">
      <img src="${media(a.src)}" alt="">
      <div class="card-body">
        <span class="card-num">${pad(i + 1)}</span>
        <p class="card-cap">${a.cap}</p>
        <button class="btn-primary small" type="button" id="albumSong">▶ Nuestra canción</button>
        <span class="card-sub">${a.sub} ❤️</span>
      </div>
    </article>` : `
    <article class="card" data-i="${i}">
      <img loading="lazy" src="${media(a.src)}" alt="">
      <div class="card-body">
        <span class="card-num">${pad(i + 1)}</span>
        <p class="card-cap">“${a.cap}”</p>
        <span class="card-sub">${a.sub}</span>
      </div>
    </article>`).join('');
  const cards = $$('.card', deck);
  let order = cards.map((_, i) => i);
  const tilt = [0, -4, 3.5, -2];

  function render() {
    order.forEach((ci, k) => {
      const c = cards[ci];
      c.style.zIndex = N - k;
      c.style.opacity = k < 4 ? 1 : 0;
      c.style.transform = `translateY(${k * 10}px) rotate(${tilt[k] ?? 0}deg) scale(${1 - k * 0.04})`;
      c.classList.toggle('top', k === 0);
    });
    $('#deckCount').textContent = `${order[0] + 1} / ${N}`;
  }
  let busy = false;
  function next() {
    if (busy) return; busy = true;
    const top = cards[order[0]];
    top.classList.add('fly');
    setTimeout(() => { top.classList.remove('fly'); order.push(order.shift()); render(); busy = false; }, 420);
  }
  function prev() { order.unshift(order.pop()); render(); }
  deck.addEventListener('click', e => { if (!e.target.closest('#albumSong')) next(); });
  $('#deckNext').addEventListener('click', next);
  $('#deckPrev').addEventListener('click', prev);
  $('#albumSong').addEventListener('click', e => { e.stopPropagation(); mpLoad(0); mpPlay(); });
  render();
})();

/* ── 07 · Línea de tiempo ── */
(function () {
  $('#timeline').innerHTML = HISTORIA.map((m, i) => `
    <li class="tl-item reveal ${m.special ? 'special' : ''} ${i % 2 ? 'right' : 'left'}">
      <span class="tl-node">${m.emoji}</span>
      <details class="tl-card">
        <summary>
          <span class="tl-date">${m.date}</span>
          <span class="tl-badge">${m.badge}</span>
          <span class="tl-title">${m.title}</span>
          <span class="tl-preview">${m.preview}</span>
          <span class="tl-more">ver más</span>
        </summary>
        <div class="tl-open">
          ${m.photo ? `<img loading="lazy" src="${media(m.photo)}" alt="">` : ''}
          <p>${m.desc}</p>
          <p class="hand">${m.msg}</p>
        </div>
      </details>
    </li>`).join('');
})();

/* ── 08 · Sueños ── */
(function () {
  $('#dreams').innerHTML = SUENOS.map((s, i) => `
    <article class="dream reveal" style="--d:${(i % 3) * 90}ms">
      <div class="dream-photo"><img loading="lazy" src="${media(s.src)}" alt=""><span class="dream-stamp">de la mano<br>de Dios</span></div>
      <div class="dream-body">
        <span class="dream-num">${pad(i + 1)}</span>
        <span class="dream-tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    </article>`).join('');
})();

/* ── 09 · Carta ── */
$('#envelope').addEventListener('click', () => {
  $('#letterStage').classList.add('open');
  setTimeout(() => $('#letter').scrollIntoView({ behavior: 'smooth', block: 'start' }), 700);
});

/* ── 10 · Videos ── */
(function () {
  $('#videoGrid').innerHTML = VIDEOS.map((v, i) => `
    <div class="vcard">
      <video src="${media(v)}" playsinline preload="metadata" controls></video>
      <span class="vtag">${pad(i + 1)}</span>
    </div>`).join('');
  $$('#videoGrid video').forEach(v => v.addEventListener('play', () => {
    allAudio.forEach(a => a.pause());
    $$('#videoGrid video').forEach(o => { if (o !== v) o.pause(); });
  }));
})();

watchReveal();
