// Datos compartidos por la web (index.html) y el panel del bar (panel.html).
// AVISO: los productos salen de las reseñas de Google; los PRECIOS SON ORIENTATIVOS
// y deben confirmarse con el negocio antes de usarlos de verdad.

const NEGOCIO = {
  nombre: "Rodri",
  tipo: "Cafetería",
  direccion: "C. Reina Mora, 18008 Granada (Zaidín)",
  telefono: "652 91 57 03",
  whatsapp: "34652915703",
  nota: 4.7,
  resenas: 400,
  estrellas: { 5: 324, 4: 53, 3: 11, 2: 2, 1: 10 },
  horario: [
    ["Lunes", "7:00 – 15:30"],
    ["Martes", "7:00 – 15:30"],
    ["Miércoles", "7:00 – 15:30"],
    ["Jueves", "7:00 – 15:30"],
    ["Viernes", "7:00 – 15:30"],
    ["Sábado", "8:00 – 12:30"],
    ["Domingo", "Cerrado"],
  ],
  // [día JS (0=domingo), apertura, cierre] en minutos
  abierto: { 0: null, 1: [420, 930], 2: [420, 930], 3: [420, 930], 4: [420, 930], 5: [420, 930], 6: [480, 750] },
  mapsUrl: "https://maps.app.goo.gl/N6wUgZ7h8tAcmJG47",
};

const CATEGORIAS = [
  { id: "tostadas", nombre: "Tostadas" },
  { id: "pitufos", nombre: "Pitufos y molletes" },
  { id: "combos", nombre: "Desayunos completos" },
  { id: "cafes", nombre: "Cafés y bebidas" },
  { id: "bolleria", nombre: "Bollería" },
  { id: "canas", nombre: "Cañas con tapa" },
];

// tamaños: si existe, el producto se pide eligiendo pan
const CARTA = [
  { id: "t-jamon", cat: "tostadas", nombre: "Tostada de jamón", desc: "Jamón serrano cortado a cuchillo al momento, tomate y aceite de oliva virgen extra.", tamanos: { Media: 2.2, Entera: 3.2 }, estrella: true },
  { id: "t-tomate", cat: "tostadas", nombre: "Tomate y aceite", desc: "La clásica andaluza: tomate rallado, AOVE y sal.", tamanos: { Media: 1.4, Entera: 2.0 } },
  { id: "t-manteca", cat: "tostadas", nombre: "Manteca colorá", desc: "Manteca colorá con carne, como la de siempre.", tamanos: { Media: 1.8, Entera: 2.5 } },
  { id: "t-mixta", cat: "tostadas", nombre: "Jamón york y queso", desc: "Tostada caliente con york y queso fundido.", tamanos: { Media: 1.8, Entera: 2.6 } },
  { id: "t-aguacate", cat: "tostadas", nombre: "Aguacate", desc: "Aguacate, tomate y un toque de sal en escamas.", tamanos: { Media: 2.4, Entera: 3.2 } },
  { id: "t-mantequilla", cat: "tostadas", nombre: "Mantequilla y mermelada", desc: "Para los de dulce.", tamanos: { Media: 1.4, Entera: 2.0 } },

  { id: "p-jamon", cat: "pitufos", nombre: "Pitufo de jamón", desc: "El favorito del barrio: pitufo con tomate y jamón recién cortado.", precio: 2.6, estrella: true },
  { id: "p-tomate", cat: "pitufos", nombre: "Pitufo tomate y aceite", desc: "Pequeño, crujiente y perfecto con el café.", precio: 1.3 },
  { id: "m-aceite", cat: "pitufos", nombre: "Mollete con aceite", desc: "Mollete tierno con aceite de oliva.", precio: 1.6 },
  { id: "m-jamon", cat: "pitufos", nombre: "Mollete de jamón", desc: "Mollete con tomate y jamón serrano.", precio: 3.0 },

  { id: "c-andaluz", cat: "combos", nombre: "Desayuno andaluz", desc: "Café + media tostada de tomate y aceite + zumo de naranja natural.", precio: 3.9 },
  { id: "c-rodri", cat: "combos", nombre: "Desayuno Rodri", desc: "Café + tostada de jamón (media) + zumo de naranja natural.", precio: 4.8, estrella: true },
  { id: "c-dulce", cat: "combos", nombre: "Desayuno dulce", desc: "Café o Cola Cao + bollería a elegir.", precio: 2.8 },

  { id: "b-solo", cat: "cafes", nombre: "Café solo", desc: "", precio: 1.2 },
  { id: "b-cortado", cat: "cafes", nombre: "Cortado", desc: "", precio: 1.3 },
  { id: "b-leche", cat: "cafes", nombre: "Café con leche", desc: "Leche entera, desnatada, sin lactosa o de avena.", precio: 1.4 },
  { id: "b-manchado", cat: "cafes", nombre: "Manchado", desc: "", precio: 1.4 },
  { id: "b-descafe", cat: "cafes", nombre: "Descafeinado", desc: "De sobre o de máquina.", precio: 1.4 },
  { id: "b-colacao", cat: "cafes", nombre: "Cola Cao", desc: "", precio: 1.6 },
  { id: "b-infusion", cat: "cafes", nombre: "Infusión", desc: "Té, manzanilla, poleo…", precio: 1.3 },
  { id: "b-zumo", cat: "cafes", nombre: "Zumo de naranja natural", desc: "Exprimido al momento.", precio: 2.2 },

  { id: "o-croissant", cat: "bolleria", nombre: "Croissant", desc: "", precio: 1.5 },
  { id: "o-napo", cat: "bolleria", nombre: "Napolitana de chocolate", desc: "", precio: 1.6 },
  { id: "o-magdalena", cat: "bolleria", nombre: "Magdalena", desc: "", precio: 1.0 },
  { id: "o-bizcocho", cat: "bolleria", nombre: "Bizcocho casero", desc: "Porción del día.", precio: 1.8 },

  { id: "k-cana", cat: "canas", nombre: "Caña con tapa", desc: "Cerveza de barril con la tapa del día.", precio: 2.2 },
  { id: "k-tinto", cat: "canas", nombre: "Tinto de verano con tapa", desc: "", precio: 2.5 },
  { id: "k-vino", cat: "canas", nombre: "Copa de vino con tapa", desc: "Tinto o blanco de la casa.", precio: 2.5 },
  { id: "k-refresco", cat: "canas", nombre: "Refresco", desc: "", precio: 1.8 },
  { id: "k-agua", cat: "canas", nombre: "Agua", desc: "", precio: 1.2 },
];

// ----- Almacenamiento de pedidos (demo en el navegador) -----
const CLAVE_PEDIDOS = "rodri_pedidos";

function leerPedidos() {
  try { return JSON.parse(localStorage.getItem(CLAVE_PEDIDOS)) || []; } catch (e) { return []; }
}
function guardarPedidos(lista) {
  try { localStorage.setItem(CLAVE_PEDIDOS, JSON.stringify(lista)); } catch (e) {}
}
function euros(n) {
  return n.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}
