/* =========================================
 *   KYBALION — main.js
 *   Estado global · Render · Modal · Búsqueda
 * ========================================= */

/* ---- BASE DE DATOS COMPLETA DEL KYBALION ---- */
/* Campos nuevos: aplicacion (cómo usarlo), tags (búsqueda semántica), relaciones (IDs vinculados) */

const hermeticData = [

    /* ---- LOS 7 PRINCIPIOS HERMÉTICOS ---- */
    {
        id: 1,
        title: "Principio de la Mentalidad",
        category: "principios",
        concept: "El Universo es Mental. Todo es Mental, y el Universo Mental se externaliza en el Universo Físico. El Universo es una Mente infinita, omnipresente, y todo lo que existe es una manifestación de esa Mente.",
        aplicacion: "Observá tus pensamientos como si fueras un testigo externo. Si el universo es Mental, cada pensamiento que sostenés con intensidad tiende a manifestarse. Antes de actuar, preguntate: ¿de qué pensamiento nació este impulso? El dominio empieza en el interior.",
        quote: "Lo que es mental en el principio es lo que es físico en el fin.",
        tags: ["mente", "mental", "universo", "pensamiento", "conciencia", "creacion", "realidad", "manifestacion"],
        relaciones: [2, 11]
    },
    {
        id: 2,
        title: "Principio de la Correspondencia",
        category: "principios",
        concept: "El todo es como la parte; la parte es como el todo. Lo que es arriba es como lo que es abajo, lo que es abajo es como lo que es arriba. Los mundos físico, mental y espiritual se reflejan entre sí constantemente.",
        aplicacion: "Cuando enfrentes un problema externo (conflictos laborales, relacionales), buscá su espejo interno. Lo que ves afuera es una proyección de lo que existe adentro. Solucioná el estado interno y el externo se alineará.",
        quote: "As above, so below. Lo que es arriba es como lo que es abajo.",
        tags: ["correspondencia", "reflejo", "interior", "exterior", "espejo", "arriba", "abajo", "armonia"],
        relaciones: [1, 12]
    },
    {
        id: 3,
        title: "Principio de la Vibración",
        category: "principios",
        concept: "Nada es estacionario en el Universo; todo se mueve, todo vibra. La diferencia entre dos manifestaciones es solo su ritmo de vibración. La materia, la energía, la mente y el espíritu difieren solo en su tasa vibratoria.",
        aplicacion: "Podés elevar tu vibración de forma deliberada: música que te inspire, lecturas que eleven, entornos elegidos conscientemente. Evitá ambientes de baja vibración como elección activa, no como evasión.",
        quote: "La materia es el más lento ritmo de vibración.",
        tags: ["vibracion", "frecuencia", "energia", "movimiento", "resonancia", "ritmo", "materia", "espiritu"],
        relaciones: [7, 8]
    },
    {
        id: 4,
        title: "Principio de Causa y Efecto",
        category: "principios",
        concept: "No existe efecto sin causa. Todo lo que se manifiesta en el Universo es el resultado de una causa específica. No hay cosa tal como la casualidad: es solo el nombre que damos a una causa que no identificamos.",
        aplicacion: "Asumí responsabilidad total de tu vida. Cada resultado es consecuencia de una cadena de causas. En vez de reaccionar ante los efectos, aprendé a identificar y modificar las causas. El maestro actúa como causa, no como efecto.",
        quote: "Todo es efecto. No hay cosa tal como la casualidad.",
        tags: ["causa", "efecto", "casualidad", "responsabilidad", "karma", "consecuencia", "accion"],
        relaciones: [7, 8]
    },
    {
        id: 5,
        title: "Principio de Género",
        category: "principios",
        concept: "El Género existe en todo; todo tiene sus principios masculino y femenino. El principio masculino (voluntad, iniciativa) dirige energía al femenino (creación, receptividad). Su unión genera toda manifestación.",
        aplicacion: "Equilibrá en vos mismo la voluntad activa (masculino) con la receptividad creativa (femenino). El exceso de uno sin el otro genera desequilibrio: acción sin inspiración, o creatividad sin dirección. El equilibrio es el dominio.",
        quote: "El género es la base de toda creación.",
        tags: ["genero", "masculino", "femenino", "voluntad", "creacion", "equilibrio", "dualidad", "union"],
        relaciones: [6, 13]
    },
    {
        id: 6,
        title: "Principio de Polarización",
        category: "principios",
        concept: "Todo tiene su par opuesto; los opuestos son idénticos en naturaleza pero diferentes en grado. El calor y el frío son la misma cosa. El amor y el odio son la misma energía. La transmutación opera sobre este principio.",
        aplicacion: "Usá la polaridad a tu favor: en vez de resistir el miedo, desplazá tu energía hacia el valor (el mismo espectro). En vez de combatir el odio, transmutaló en amor cambiando la polaridad. No pelees contra el polo negativo: movet hacia el positivo.",
        quote: "Los opuestos son la misma cosa en grado diferente.",
        tags: ["polaridad", "opuestos", "miedo", "valor", "amor", "odio", "transmutacion", "espectro", "dualidad"],
        relaciones: [3, 8, 13]
    },
    {
        id: 7,
        title: "Principio de Ritmo",
        category: "principios",
        concept: "Todo fluye, todo oscila, todo tiene un ritmo. El péndulo se manifiesta en todo: la marea sube y baja, todo tiene su flujo y reflujo. Lo que va, vuelve. Nada descansa: todo se mueve.",
        aplicacion: "Aprendé a identificar tus ciclos personales. No luches contra las bajas: son parte del ritmo. El maestro hermético se eleva mentalmente sobre el plano del ritmo, observa el péndulo desde arriba y neutraliza su efecto sobre sí mismo.",
        quote: "La vida es un péndulo.",
        tags: ["ritmo", "ciclo", "pendulo", "flujo", "reflujo", "oscilacion", "tiempo", "patrones"],
        relaciones: [3, 4, 14]
    },

    /* ---- TRANSMUTACIÓN MENTAL ---- */
    {
        id: 8,
        title: "Transmutación Mental",
        category: "transmutacion",
        concept: "Es el arte de cambiar estados mentales cambiando vibración o polaridad. Para eliminar el miedo, cultivá el valor (el mismo espectro, polo opuesto). Para eliminar la oscuridad, encendé la luz. Es la clave del dominio mental.",
        aplicacion: "Identificá un estado mental que quieras cambiar. En vez de suprimirlo (lo que lo refuerza), buscá su opuesto en el mismo espectro y desplazá tu atención deliberadamente hacia allá. La transmutación es gradual: pequeños desplazamientos acumulados.",
        quote: "Transmutar es la clave del dominio.",
        tags: ["transmutacion", "cambio", "transformacion", "miedo", "valor", "dominio", "mente", "vibracion"],
        relaciones: [3, 6, 13]
    },
    {
        id: 9,
        title: "El TODO",
        category: "transmutacion",
        concept: "La realidad substancial detrás de todo, infinita, incognoscible, la Mente viviente. El TODO está en todo y todo está en el TODO. Es la fuente de la cual todo fluye, la sustancia de la cual todo está hecho.",
        aplicacion: "Meditá sobre la idea de que sos una expresión individual de algo infinito. No estás separado del Todo, sos una manifestación de él. Esto disuelve el miedo a la muerte y a la separación, porque lo que sos es indestructible.",
        quote: "El TODO es la realidad substancial.",
        tags: ["todo", "infinito", "dios", "fuente", "absoluto", "conciencia", "ser", "existencia"],
        relaciones: [1, 10]
    },
    {
        id: 10,
        title: "Paradoja Divina",
        category: "transmutacion",
        concept: "El universo es ilusión desde lo absoluto, pero completamente real desde lo relativo. El sabio vive en ambas verdades simultáneamente. Lo que parece nada en un plano es todo en otro. La realidad es una función del punto de observación.",
        aplicacion: "Aprendé a sostener dos verdades contradictorias al mismo tiempo. Algo puede ser real e ilusorio según el plano desde el que se observe. Esto libera del dogmatismo y abre la mente a comprender sistemas aparentemente opuestos.",
        quote: "La realidad es relativa al plano de observación.",
        tags: ["paradoja", "ilusion", "realidad", "maya", "absoluto", "relativo", "perspectiva", "dualidad"],
        relaciones: [1, 9, 11]
    },

    /* ---- RAZONAMIENTO HERMÉTICO ---- */
    {
        id: 11,
        title: "Razonamiento: Mentalismo",
        category: "razonamiento",
        concept: "Si el Universo es una Mente, entonces no somos prisioneros de la materia. Somos pensadores en un pensamiento cósmico. La libertad reside en la imaginación, no en las circunstancias externas. El cuerpo es un vehículo, no una prisión.",
        aplicacion: "Practicá el 'witnessing': observá tus propios procesos mentales desde afuera. Sos el observador del pensamiento, no el pensamiento mismo. Esta distinción es el comienzo del dominio mental.",
        quote: "Eres el Universo imaginando a sí mismo.",
        tags: ["mentalismo", "imaginacion", "libertad", "observador", "testigo", "mente", "dominio"],
        relaciones: [1, 10]
    },
    {
        id: 12,
        title: "Razonamiento: Correspondencia",
        category: "razonamiento",
        concept: "Este principio nos permite leer el universo como un libro. Si el interior (alma) es como el exterior (mundo), podemos curar el cuerpo entendiendo el alma. Las leyes físicas son reflejos de leyes espirituales; la biología refleja la psicología.",
        aplicacion: "Llevá un diario de sincronicidades: eventos externos que parecen reflejar estados internos. Con práctica, la correspondencia se vuelve visible y podés leer tu estado anímico en los eventos de tu día.",
        quote: "El interior se refleja en el exterior.",
        tags: ["correspondencia", "sincronicidad", "interior", "exterior", "reflejo", "alma", "cuerpo", "lectura"],
        relaciones: [2, 9]
    },
    {
        id: 13,
        title: "Razonamiento: Polaridad",
        category: "razonamiento",
        concept: "El odio y el amor son la misma energía; el miedo y el valor, lo mismo. El sabio aprende a transmutar el odio en amor y el miedo en valor mediante el cambio deliberado de vibración. No existen enemigos, solo energías mal polarizadas.",
        aplicacion: "Cuando sientas odio o miedo, reconocé que es amor o valor en su polo opuesto. Preguntate: ¿cómo transito gradualmente al otro extremo de este espectro? La respuesta siempre involucra un cambio de vibración, no una supresión.",
        quote: "Los opuestos son la misma cosa en grado diferente.",
        tags: ["polaridad", "opuestos", "odio", "amor", "miedo", "valor", "transmutacion", "energia"],
        relaciones: [6, 8]
    },
    {
        id: 14,
        title: "Razonamiento: Ritmo y Maestría",
        category: "razonamiento",
        concept: "El maestro no lucha contra el ritmo del péndulo, sino que aprende a elevarse sobre el plano donde opera. Al neutralizar el swing negativo, no elimina el principio sino que trasciende su influencia. La verdadera sabiduría es la capacidad de adaptación sin pérdida de dirección.",
        aplicacion: "Cuando identifiques que estás en un swing negativo (baja energía, fracasos, dudas), no luches contra él. Reconocelo como una fase del ritmo, tomate el tiempo para restaurar, y usá la baja para planificar. El maestro actúa con fuerza solo desde el swing positivo.",
        quote: "La sabiduría es la capacidad de adaptación sin pérdida de dirección.",
        tags: ["ritmo", "maestria", "pendulo", "adaptacion", "swing", "sabiduria", "equilibrio", "ciclo"],
        relaciones: [7, 4]
    }
];

/* =========================================
 *   ESTADO GLOBAL
 * ========================================= */
const State = {
    filter: 'all',
    search: ''
};

/* =========================================
 *   UTILIDADES
 * ========================================= */

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function getCategoryLabel(cat) {
    const labels = { principios: 'Principio', transmutacion: 'Transmutación', razonamiento: 'Razonamiento' };
    return labels[cat] || cat;
}

/* =========================================
 *   LÓGICA DE FILTRADO
 * ========================================= */

function getDataFor(category) {
    let data = hermeticData.filter(d => d.category === category);

    // Filtro por categoría
    if (State.filter !== 'all' && State.filter !== category) return [];

    // Filtro por búsqueda (texto + tags semánticos)
    if (State.search) {
        const term = State.search.toLowerCase();
        data = data.filter(d =>
            d.title.toLowerCase().includes(term) ||
            d.concept.toLowerCase().includes(term) ||
            d.quote.toLowerCase().includes(term) ||
            (d.aplicacion && d.aplicacion.toLowerCase().includes(term)) ||
            (d.tags && d.tags.some(t => t.includes(term)))
        );
    }

    return data;
}

function getTotalResults() {
    return ['principios', 'transmutacion', 'razonamiento']
        .reduce((acc, cat) => acc + getDataFor(cat).length, 0);
}

/* =========================================
 *   VISIBILIDAD DE SECCIONES
 * ========================================= */

function updateSectionVisibility() {
    const map = {
        principios:    ['principios-section'],
        transmutacion: ['transmutacion-section'],
        razonamiento:  ['razonamiento-section'],
        all:           ['principios-section', 'fundamentos', 'transmutacion-section', 'razonamiento-section']
    };

    // Siempre mostrar fundamentos excepto si filtramos transmutacion o razonamiento
    const alwaysVisible = (State.filter === 'all' || State.filter === 'principios')
        ? ['fundamentos']
        : [];

    const allSectionIds = ['principios-section', 'fundamentos', 'transmutacion-section', 'razonamiento-section'];
    const visibleIds = [...(map[State.filter] || []), ...alwaysVisible];

    allSectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (visibleIds.includes(id)) {
            el.classList.remove('section-hidden');
        } else {
            el.classList.add('section-hidden');
        }
    });
}

/* =========================================
 *   RENDER: TARJETAS (PRINCIPIOS / TRANSMUTACIÓN)
 * ========================================= */

/* Símbolos herméticos por id */
const CARD_SYMBOLS = {
    1: '☉', 2: '≡', 3: '≋', 4: '⚖', 5: '⊕',
    6: '↕', 7: '◎', 8: '✦', 9: '∞', 10: '☯',
    11: '⊙', 12: '≡', 13: '⊗', 14: '≈',
};

/* Gradientes oscuros únicos para los headers visuales */
const CARD_GRADIENTS = [
    'linear-gradient(148deg,#181106 0%,#0c0902 100%)', // ámbar cálido
    'linear-gradient(162deg,#0c0d1c 0%,#080912 100%)', // índigo
    'linear-gradient(132deg,#091614 0%,#050f0e 100%)', // teal
    'linear-gradient(148deg,#1a0808 0%,#120606 100%)', // rojo profundo
    'linear-gradient(142deg,#0b1510 0%,#060e08 100%)', // bosque
    'linear-gradient(155deg,#1c1108 0%,#130d06 100%)', // cobre
    'linear-gradient(128deg,#100a1e 0%,#090616 100%)', // violeta
];

const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    No se encontraron resultados.<br>
                    Intentá buscar: <em>miedo</em>, <em>valor</em>, <em>ritmo</em>, <em>mente</em>
                </div>`;
        } else {
            data.forEach((item, i) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.animationDelay = `${i * 0.07}s`;
                card.dataset.id = item.id;

                const symbol   = CARD_SYMBOLS[item.id] || '✦';
                const roman    = ROMAN[i] || String(i + 1);
                const gradient = CARD_GRADIENTS[i % CARD_GRADIENTS.length];

                card.innerHTML = `
                    <span class="card-hint">Ver más ↗</span>
                    <div class="card-visual" style="background:${gradient}">
                        <svg class="card-geo" viewBox="0 0 200 155"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="100" cy="77" r="72" fill="none" stroke="rgba(212,175,55,0.07)" stroke-width="1"/>
                            <circle cx="100" cy="77" r="55" fill="none" stroke="rgba(212,175,55,0.055)" stroke-width="0.8"/>
                            <circle cx="100" cy="77" r="38" fill="none" stroke="rgba(212,175,55,0.045)" stroke-width="0.7"/>
                            <circle cx="100" cy="77" r="22" fill="none" stroke="rgba(212,175,55,0.04)" stroke-width="0.6"/>
                            <line x1="28" y1="77" x2="172" y2="77" stroke="rgba(212,175,55,0.04)" stroke-width="0.5"/>
                            <line x1="100" y1="5"  x2="100" y2="149" stroke="rgba(212,175,55,0.04)" stroke-width="0.5"/>
                            <line x1="49"  y1="26" x2="151" y2="128" stroke="rgba(212,175,55,0.025)" stroke-width="0.4"/>
                            <line x1="151" y1="26" x2="49"  y2="128" stroke="rgba(212,175,55,0.025)" stroke-width="0.4"/>
                        </svg>
                        <span class="card-roman">${roman}</span>
                        <span class="card-symbol">${symbol}</span>
                    </div>
                    <div class="card-body">
                        <h3>${item.title}</h3>
                        <p>${item.concept}</p>
                        <div class="quote-highlight">"${item.quote}"</div>
                    </div>
                `;

                card.addEventListener('click', () => openModal(item.id));
                container.appendChild(card);
            });
        }

        container.style.transition = 'opacity 0.35s ease';
        container.style.opacity = '1';
    }, 150);
}

/* =========================================
 *   RENDER: TARJETAS DE RAZONAMIENTO
 * ========================================= */

function renderReasoningCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    No se encontraron resultados de razonamiento para esta búsqueda.
                </div>`;
        } else {
            data.forEach((item, i) => {
                const card = document.createElement('div');
                card.className = 'reasoning-card';
                card.style.animationDelay = `${i * 0.08}s`;
                card.dataset.id = item.id;

                card.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.concept}</p>
                    <div class="quote-highlight">"${item.quote}"</div>
                `;

                card.addEventListener('click', () => openModal(item.id));
                container.appendChild(card);
            });
        }

        container.style.transition = 'opacity 0.3s ease';
        container.style.opacity = '1';
    }, 150);
}

/* =========================================
 *   RENDER PRINCIPAL (dispara todo)
 * ========================================= */

function render() {
    renderCards(getDataFor('principios'), 'principios-grid');
    renderCards(getDataFor('transmutacion'), 'transmutacion-grid');
    renderReasoningCards(getDataFor('razonamiento'), 'razonamiento-grid');
    updateSectionVisibility();
    updateSearchCount();
}

function updateSearchCount() {
    const countEl = document.getElementById('searchCount');
    if (!countEl) return;

    if (State.search) {
        const total = getTotalResults();
        countEl.textContent = `${total} resultado${total !== 1 ? 's' : ''} para "${State.search}"`;
        countEl.hidden = false;
    } else {
        countEl.hidden = true;
    }
}

/* =========================================
 *   RENDER: PILARES (FUNDAMENTOS)
 * ========================================= */

function renderPillars() {
    // Fix: apunta a .pillars-grid, NO al section #fundamentos
    const container = document.getElementById('pillars-grid');
    if (!container) return;

    const principles = [
        "Mentalismo", "Correspondencia", "Vibración",
        "Causa y Efecto", "Género", "Polarización", "Ritmo"
    ];

    container.innerHTML = '';

    principles.forEach((name, index) => {
        const principleId = index + 1;
        const div = document.createElement('div');
        div.className = 'pillar-item';
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
        div.setAttribute('aria-label', `Ver principio ${principleId}: ${name}`);

        div.innerHTML = `<span>${principleId}</span><p>${name}</p>`;

        // Click y teclado
        const openThis = () => openModal(principleId);
        div.addEventListener('click', openThis);
        div.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openThis(); });

        // Animación cascada de entrada
        div.style.opacity = '0';
        div.style.transform = 'scale(0.7)';
        container.appendChild(div);

        setTimeout(() => {
            div.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            div.style.opacity = '1';
            div.style.transform = 'scale(1)';
        }, 80 + index * 90);
    });
}

/* =========================================
 *   PARTÍCULAS DE FONDO
 * ========================================= */

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 22;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';

        const size = Math.random() * 3.5 + 0.8;
        const dur  = Math.random() * 12 + 6;
        const del  = Math.random() * 8;
        const dx   = (Math.random() - 0.5) * 60;

        p.style.left   = `${Math.random() * 100}vw`;
        p.style.width  = `${size}px`;
        p.style.height = `${size}px`;
        p.style.setProperty('--dur',   `${dur}s`);
        p.style.setProperty('--delay', `${del}s`);
        p.style.setProperty('--dx',    `${dx}px`);
        p.style.opacity = `${Math.random() * 0.5 + 0.2}`;

        container.appendChild(p);
    }
}

/* =========================================
 *   HERO CANVAS — Cubo 3D + Ojo de Providencia
 * ========================================= */

let heroRAF = null;

function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    const hero = document.getElementById('hero');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    let W, H, time = 0;
    let stars = [];

    function resize() {
        const rect = hero.getBoundingClientRect();
        W = canvas.width = rect.width;
        H = canvas.height = rect.height;
        buildStars();
    }

    function buildStars() {
        stars = [];
        const n = Math.floor(W * H / 7500);
        for (let i = 0; i < n; i++) {
            stars.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: Math.random() * 1.1 + 0.2,
                a: Math.random() * 0.5 + 0.08,
                sp: Math.random() * 0.015 + 0.004,
                ph: Math.random() * Math.PI * 2
            });
        }
    }

    /* ——— CUBE 3D ——— */
    const cv = [
        [-1,-1,-1], [1,-1,-1], [1,1,-1], [-1,1,-1],
        [-1,-1,1],  [1,-1,1],  [1,1,1],  [-1,1,1]
    ];
    const edges = [
        [0,1],[1,2],[2,3],[3,0],
        [4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7]
    ];

    function rotX(v, a) {
        const c = Math.cos(a), s = Math.sin(a);
        return [v[0], v[1]*c - v[2]*s, v[1]*s + v[2]*c];
    }
    function rotY(v, a) {
        const c = Math.cos(a), s = Math.sin(a);
        return [v[0]*c + v[2]*s, v[1], -v[0]*s + v[2]*c];
    }
    function proj(v, cx, cy, sz) {
        const fov = 420;
        const sc = fov / (fov + v[2]);
        return { x: cx + v[0] * sz * sc, y: cy + v[1] * sz * sc };
    }

    function drawCube(cx, cy, sz, rx, ry, al, gl) {
        const r = cv.map(v => rotY(rotX(v, rx), ry));
        const p = r.map(v => proj(v, cx, cy, sz));

        ctx.save();
        ctx.globalAlpha = al;

        // Glow halo
        if (gl > 0) {
            const gd = ctx.createRadialGradient(cx, cy, 0, cx, cy, sz * 2);
            gd.addColorStop(0, `rgba(212,175,55,${gl*0.25})`);
            gd.addColorStop(1, 'rgba(212,175,55,0)');
            ctx.fillStyle = gd;
            ctx.beginPath();
            ctx.arc(cx, cy, sz * 2, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        edges.forEach(([a, b]) => {
            ctx.beginPath();
            ctx.moveTo(p[a].x, p[a].y);
            ctx.lineTo(p[b].x, p[b].y);
            ctx.strokeStyle = 'rgba(212,175,55,0.85)';
            ctx.lineWidth = 2.2;
            ctx.shadowColor = 'rgba(212,175,55,0.5)';
            ctx.shadowBlur = 10;
            ctx.stroke();
        });

        // Vertices
        p.forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.8, 0, Math.PI * 2);
            ctx.fillStyle = '#F2C94C';
            ctx.shadowColor = 'rgba(212,175,55,0.7)';
            ctx.shadowBlur = 14;
            ctx.fill();
        });

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        ctx.restore();
    }

    /* ——— EYE OF PROVIDENCE (rediseño limpio) ——— */
    function drawEyeProv(cx, cy, sz, al, pl) {
        ctx.save();
        ctx.globalAlpha = al;

        const tH = sz * Math.sqrt(3) / 2;

        /* ── Aura de fondo ── */
        const auraY = cy - tH * 0.12;
        const aura  = ctx.createRadialGradient(cx, auraY, 0, cx, auraY, sz * 1.5);
        aura.addColorStop(0,   `rgba(212,175,55,${0.1 + pl * 0.07})`);
        aura.addColorStop(0.4, `rgba(212,175,55,${0.035 + pl * 0.02})`);
        aura.addColorStop(1,    'rgba(212,175,55,0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(cx, auraY, sz * 1.5, 0, Math.PI * 2);
        ctx.fill();

        /* ── Triángulo ── */
        const tTop = { x: cx,            y: cy - tH * 0.67 };
        const tBL  = { x: cx - sz * 0.5, y: cy + tH * 0.33 };
        const tBR  = { x: cx + sz * 0.5, y: cy + tH * 0.33 };

        // Relleno muy sutil del triángulo
        const tFill = ctx.createLinearGradient(cx, tTop.y, cx, tBL.y);
        tFill.addColorStop(0, `rgba(212,175,55,${0.06 + pl * 0.04})`);
        tFill.addColorStop(1,  'rgba(212,175,55,0.01)');
        ctx.fillStyle = tFill;
        ctx.beginPath();
        ctx.moveTo(tTop.x, tTop.y);
        ctx.lineTo(tBL.x,  tBL.y);
        ctx.lineTo(tBR.x,  tBR.y);
        ctx.closePath();
        ctx.fill();

        // Borde del triángulo
        ctx.beginPath();
        ctx.moveTo(tTop.x, tTop.y);
        ctx.lineTo(tBL.x,  tBL.y);
        ctx.lineTo(tBR.x,  tBR.y);
        ctx.closePath();
        ctx.strokeStyle = `rgba(212,175,55,${0.72 + pl * 0.22})`;
        ctx.lineWidth   = 2.4;
        ctx.lineJoin    = 'round';
        ctx.shadowColor = `rgba(212,175,55,${0.38 + pl * 0.28})`;
        ctx.shadowBlur  = 24;
        ctx.stroke();
        ctx.shadowBlur = 0;

        /* ── Ojo — posición y dimensiones ── */
        const eX   = cx;
        const eY   = (tTop.y + tBL.y + tBR.y) / 3 - tH * 0.015;
        const eyeW = sz * 0.31;   // semiancho horizontal
        const eyeH = sz * 0.125;  // semialtural vertical (forma almendrada)

        // Helper: traza la forma almendrada del ojo
        function eyeOutline(vScale) {
            ctx.beginPath();
            ctx.moveTo(eX - eyeW, eY);
            ctx.bezierCurveTo(
                eX - eyeW * 0.48, eY - eyeH * (1.25 * (vScale || 1)),
                eX + eyeW * 0.48, eY - eyeH * (1.25 * (vScale || 1)),
                eX + eyeW, eY
            );
            ctx.bezierCurveTo(
                eX + eyeW * 0.48, eY + eyeH * (vScale || 1),
                eX - eyeW * 0.48, eY + eyeH * (vScale || 1),
                eX - eyeW, eY
            );
            ctx.closePath();
        }

        /* ── Relleno negro interior ── */
        eyeOutline();
        ctx.fillStyle = 'rgba(0,0,0,0.98)';
        ctx.fill();

        /* ── Clip al interior del ojo → iris + pupila ── */
        ctx.save();
        eyeOutline();
        ctx.clip();

        // Iris con gradiente radial
        const iR = eyeH * 0.94;
        const iGrad = ctx.createRadialGradient(eX, eY - iR * 0.12, 0, eX, eY, iR);
        iGrad.addColorStop(0,   `rgba(168,118,22,${0.88 + pl * 0.1})`);
        iGrad.addColorStop(0.52,`rgba(95,62,8,0.93)`);
        iGrad.addColorStop(1,   `rgba(16,10,2,1)`);
        ctx.fillStyle = iGrad;
        ctx.beginPath();
        ctx.arc(eX, eY, iR, 0, Math.PI * 2);
        ctx.fill();

        // Anillo exterior del iris
        ctx.strokeStyle = `rgba(212,175,55,${0.5 + pl * 0.32})`;
        ctx.lineWidth   = 1.4;
        ctx.shadowColor = `rgba(212,175,55,0.35)`;
        ctx.shadowBlur  = 9;
        ctx.stroke();
        ctx.shadowBlur  = 0;

        // Pupila
        ctx.beginPath();
        ctx.arc(eX, eY, iR * 0.41, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();

        // Reflejo (catchlight)
        ctx.beginPath();
        ctx.arc(eX - iR * 0.26, eY - iR * 0.28, iR * 0.14, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,238,145,${0.52 + pl * 0.26})`;
        ctx.fill();

        ctx.restore(); // fin clip

        /* ── Trazos de los párpados (encima del clip) ── */
        // Párpado superior
        ctx.beginPath();
        ctx.moveTo(eX - eyeW, eY);
        ctx.bezierCurveTo(
            eX - eyeW * 0.48, eY - eyeH * 1.28,
            eX + eyeW * 0.48, eY - eyeH * 1.28,
            eX + eyeW, eY
        );
        ctx.strokeStyle = `rgba(212,175,55,${0.9 + pl * 0.08})`;
        ctx.lineWidth   = 2.2;
        ctx.lineCap     = 'round';
        ctx.shadowColor = `rgba(212,175,55,0.55)`;
        ctx.shadowBlur  = 15;
        ctx.stroke();

        // Párpado inferior
        ctx.beginPath();
        ctx.moveTo(eX - eyeW, eY);
        ctx.bezierCurveTo(
            eX - eyeW * 0.48, eY + eyeH * 1.02,
            eX + eyeW * 0.48, eY + eyeH * 1.02,
            eX + eyeW, eY
        );
        ctx.strokeStyle = `rgba(212,175,55,${0.62 + pl * 0.15})`;
        ctx.lineWidth   = 1.7;
        ctx.shadowBlur  = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;

        /* ── Rayos de luz (hemisferio superior) ── */
        const numRays = 22;
        for (let ri = 0; ri < numRays; ri++) {
            const t    = ri / numRays;
            const ang  = Math.PI * 0.06 + t * Math.PI * 0.88;
            const r1   = eyeW * 1.1;
            const r2   = sz * (0.59 + pl * 0.1);
            const fade = Math.sin(Math.PI * t) * (0.09 + pl * 0.06);

            ctx.beginPath();
            ctx.moveTo(eX + Math.cos(ang) * r1, eY + Math.sin(ang) * r1 * 0.38);
            ctx.lineTo(eX + Math.cos(ang) * r2, eY + Math.sin(ang) * r2);
            ctx.strokeStyle = `rgba(212,175,55,${fade})`;
            ctx.lineWidth   = 1.1;
            ctx.stroke();
        }

        ctx.globalAlpha = 1;
        ctx.restore();
    }

    /* ——— LIGHT RAYS Eye → Cube ——— */
    function drawRays(cx, eY, cY, sz, al, pl) {
        ctx.save();
        ctx.globalAlpha = al * (0.12 + pl*0.12);

        for (let i = -4; i <= 4; i++) {
            const sp = i * 0.12;
            const g = ctx.createLinearGradient(
                cx + sp*sz*0.4, eY + sz*0.25,
                cx + sp*sz*0.15, cY - sz*0.4
            );
            g.addColorStop(0, 'rgba(212,175,55,0)');
            g.addColorStop(0.3, `rgba(242,201,76,${0.25 - Math.abs(i)*0.025})`);
            g.addColorStop(0.7, `rgba(212,175,55,${0.15 - Math.abs(i)*0.02})`);
            g.addColorStop(1, 'rgba(212,175,55,0)');

            ctx.beginPath();
            ctx.moveTo(cx + sp*sz*0.4, eY + sz*0.25);
            ctx.lineTo(cx + sp*sz*0.15, cY - sz*0.4);
            ctx.lineWidth = 3 - Math.abs(i)*0.3;
            ctx.strokeStyle = g;
            ctx.shadowColor = `rgba(212,175,55,${0.15 - Math.abs(i)*0.015})`;
            ctx.shadowBlur = 25;
            ctx.stroke();
        }

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        ctx.restore();
    }

    /* ——— VIGNETTE ——— */
    function drawVignette() {
        const g = ctx.createRadialGradient(W/2, H*0.38, W*0.08, W/2, H*0.38, Math.max(W,H)*0.7);
        g.addColorStop(0, 'rgba(0,0,0,0)');
        g.addColorStop(0.45, 'rgba(0,0,0,0.03)');
        g.addColorStop(1, 'rgba(0,0,0,0.88)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);

        const b = ctx.createLinearGradient(0, H*0.58, 0, H);
        b.addColorStop(0, 'rgba(0,0,0,0)');
        b.addColorStop(1, 'rgba(0,0,0,0.5)');
        ctx.fillStyle = b;
        ctx.fillRect(0, H*0.58, W, H*0.42);
    }

    /* ——— LOOP ——— */
    function loop() {
        time += 0.007;
        ctx.clearRect(0, 0, W, H);

        // Deep background
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, W, H);

        const bgGrad = ctx.createRadialGradient(W/2, H*0.3, 0, W/2, H*0.3, Math.max(W,H)*0.5);
        bgGrad.addColorStop(0, '#0a0802');
        bgGrad.addColorStop(1, '#050505');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        const pl = Math.sin(time * 0.5) * 0.5 + 0.5;

        // Stars
        stars.forEach(s => {
            s.ph += s.sp;
            const a = s.a * (0.35 + Math.sin(s.ph)*0.65);
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
            ctx.fillStyle = `rgba(212,175,55,${a})`;
            ctx.fill();
        });

        // Layout
        const sMin = Math.min(W, H);
        const cubeSz = sMin * 0.095;
        const eyeSz  = sMin * 0.26;
        const cX = W/2;
        const cY = H * 0.58;
        const eX = W/2;
        const eY = H * 0.27;

        drawRays(cX, eY, cY, eyeSz, 1, pl);
        drawEyeProv(eX, eY, eyeSz, 1, pl);
        drawCube(cX, cY, cubeSz, time*0.35, time*0.5, 1, 0.5 + pl*0.2);
        drawVignette();

        heroRAF = requestAnimationFrame(loop);
    }

    resize();
    loop();
    window.addEventListener('resize', resize);
}

/* =========================================
 *   BOOK-JOINT & HERO SCROLL FADE
 * ========================================= */

function initHeroScroll() {
    const hero = document.getElementById('hero');
    const joint = document.getElementById('bookJoint');
    if (!hero || !joint) return;

    function update() {
        const rect = hero.getBoundingClientRect();
        const heroH = rect.height;
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / heroH, 0), 1);

        // Book joint: expand from center based on scroll
        const jointW = progress * 100;
        joint.style.width = `${jointW}vw`;

        // Fade hero content
        if (progress > 0.05 && progress < 0.6) {
            hero.classList.add('fade-active');
        } else if (progress >= 0.6) {
            hero.classList.remove('fade-active');
            hero.style.opacity = Math.max(1 - (progress - 0.6) / 0.4, 0);
        } else {
            hero.classList.remove('fade-active');
            hero.style.opacity = 1;
        }
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* =========================================
 *   MODAL DE DEEP-DIVE
 * ========================================= */

function openModal(id) {
    const item = hermeticData.find(d => d.id === id);
    if (!item) return;

    const related = (item.relaciones || [])
        .map(rid => hermeticData.find(d => d.id === rid))
        .filter(Boolean);

    document.getElementById('modalBody').innerHTML = `
        <span class="modal-category-badge">${getCategoryLabel(item.category)}</span>
        <h2 class="modal-title">${item.title}</h2>
        <p class="modal-concept">${item.concept}</p>
        <blockquote class="modal-quote">"${item.quote}"</blockquote>

        ${item.aplicacion ? `
        <div class="modal-section">
            <h4>☉ Cómo aplicarlo</h4>
            <p>${item.aplicacion}</p>
        </div>` : ''}

        ${related.length > 0 ? `
        <div class="modal-section">
            <h4>☿ Principios relacionados</h4>
            <div class="modal-relation-chips">
                ${related.map(r => `
                    <button class="modal-chip" data-rel-id="${r.id}">${r.title}</button>
                `).join('')}
            </div>
        </div>` : ''}
    `;

    // Chips de navegación entre principios relacionados
    document.querySelectorAll('.modal-chip').forEach(chip => {
        chip.addEventListener('click', () => openModal(Number(chip.dataset.relId)));
    });

    const overlay = document.getElementById('modalOverlay');
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    // Foco accesibilidad
    document.getElementById('modal').focus();
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
}

/* =========================================
 *   HAMBURGUESA / MOBILE NAV
 * ========================================= */

function initHamburger() {
    const btn      = document.getElementById('hamburger');
    const nav      = document.getElementById('mobileNav');
    const backdrop = document.getElementById('mobileNavBackdrop');
    const closeBtn = document.getElementById('mobileNavClose');
    if (!btn || !nav) return;

    function openMenu() {
        nav.classList.add('open');
        nav.setAttribute('aria-hidden', 'false');
        backdrop.classList.add('visible');
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        nav.classList.remove('open');
        nav.setAttribute('aria-hidden', 'true');
        backdrop.classList.remove('visible');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => {
        nav.classList.contains('open') ? closeMenu() : openMenu();
    });

    closeBtn && closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    // Cerrar al navegar
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ESC cierra el menú
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
    });
}

/* =========================================
 *   SCROLL-SPY (IntersectionObserver)
 * ========================================= */

function initScrollSpy() {
    const sections = document.querySelectorAll('#principios-section, #fundamentos, #transmutacion-section, #razonamiento-section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach(s => observer.observe(s));
}

/* =========================================
 *   HEADER SCROLLED (sombra al hacer scroll)
 * ========================================= */

function initHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

/* =========================================
 *   BÚSQUEDA
 * ========================================= */

function initSearch() {
    const input    = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    if (!input) return;

    const handleSearch = debounce(() => {
        State.search = input.value.trim();
        clearBtn && (clearBtn.hidden = State.search === '');
        render();
    }, 220);

    input.addEventListener('input', handleSearch);

    clearBtn && clearBtn.addEventListener('click', () => {
        input.value = '';
        State.search = '';
        clearBtn.hidden = true;
        input.focus();
        render();
    });
}

/* =========================================
 *   FILTROS
 * ========================================= */

function initFilters() {
    const btns = document.querySelectorAll('.filter-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            State.filter = btn.dataset.filter;
            render();

            // Scroll suave a la sección correspondiente
            const targetMap = {
                principios:    'principios-section',
                transmutacion: 'transmutacion-section',
                razonamiento:  'razonamiento-section',
                all:           null
            };
            const targetId = targetMap[State.filter];
            if (targetId) {
                const el = document.getElementById(targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* =========================================
 *   MODAL: EVENTOS GLOBALES
 * ========================================= */

function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn && closeBtn.addEventListener('click', closeModal);

    // Clic fuera del modal cierra
    overlay && overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });

    // ESC cierra el modal
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay && !overlay.hasAttribute('hidden')) closeModal();
    });
}

/* =========================================
 *   INICIALIZACIÓN
 * ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    initHeroCanvas();
    initHeroScroll();
    createParticles();
    renderPillars();
    render();
    initSearch();
    initFilters();
    initModal();
    initHamburger();
    initScrollSpy();
    initHeaderScroll();
});
