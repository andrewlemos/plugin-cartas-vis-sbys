/**
 * Dados da Carta de Visibilidade de SBYS (Campo Fontenelle / Academia da Força Aérea - Pirassununga).
 * Embutidos no bundle para que o plugin funcione sem requisições externas.
 * Origem: planilha "Referencias_SBYS_planilha_transcricao.xlsx" (pontos calculados a partir
 * de distância + azimute verdadeiro a partir das torres T-27 e T-25) e
 * "Overlay Coordenadas TMA-YS.kml" (TMA e setores de instrução).
 */

export interface RefPoint {
    /** Número do ponto na carta (1, 2, 3...). */
    id: number;
    name: string;
    lat: number;
    lng: number;
    /** Altura / desnível do ponto, em metros (conforme planilha de referência). */
    heightM: number;
    /** Distância, em metros (conforme planilha de referência). */
    distanceM: number;
    /** Azimute verdadeiro no formato graus/minutos/segundos. */
    azimuth: string;
    /** Identificação da carta de origem (ex.: SBYS-003). */
    chart: string;
}

/** Centro dos anéis — referência SBYS (KML Academia da Força Aérea). [lat, lng] */
export const CENTER: [number, number] = [-21.9843, -47.3375];

/** Torres de observação (para referência / popups). */
export const TOWER_T27: [number, number] = [-21.985142805555558, -47.33843108333333];
export const TOWER_T25: [number, number] = [-21.98522563888889, -47.32957013888889];

/** Raios dos anéis, em metros. */
export const RING_RADII_M: number[] = [
    200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000,
    4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000,
];

/** Anéis destacados em vermelho. */
export const EMPHASIS_RADII_M: number[] = [8000, 16000];

/**
 * Pontos de referência aeronáutica até 2 km.
 * Combina SBYS-003 (TWR T-27) e SBYS-001 (TWR T-25).
 */
export const POINTS_2KM: RefPoint[] = [
    // SBYS-003 — TWR (T-27) Torre DTCEA
    { id: 1, name: "Canil", lat: -21.9796069, lng: -47.3360331, heightM: -19.28, distanceM: 663.37, azimuth: "21° 53' 06\"", chart: "SBYS-003" },
    { id: 2, name: "Caixa d'água (BINFA)", lat: -21.9811460, lng: -47.3340260, heightM: 6.6, distanceM: 635.47, azimuth: "45° 37' 30\"", chart: "SBYS-003" },
    { id: 3, name: "VHF", lat: -21.9823780, lng: -47.3350338, heightM: 35.52, distanceM: 466.07, azimuth: "48° 43' 43\"", chart: "SBYS-003" },
    { id: 4, name: "Grupo de pinheiros antes do canavial", lat: -21.9866974, lng: -47.3314584, heightM: -14.65, distanceM: 739.43, azimuth: "103° 31' 14\"", chart: "SBYS-003" },
    { id: 5, name: "Prédio do CCAER", lat: -21.9903613, lng: -47.3321842, heightM: -9.86, distanceM: 866.94, azimuth: "132° 01' 01\"", chart: "SBYS-003" },
    { id: 6, name: "Portão sul", lat: -21.9947957, lng: -47.3368866, heightM: -18.17, distanceM: 1085.1, azimuth: "171° 33' 41\"", chart: "SBYS-003" },
    { id: 7, name: "Grupo de pinheiros", lat: -21.9868647, lng: -47.3537404, heightM: 16.78, distanceM: 1590.09, azimuth: "263° 04' 53\"", chart: "SBYS-003" },
    { id: 8, name: "DVOR", lat: -21.9841561, lng: -47.3440798, heightM: -17.44, distanceM: 592.68, azimuth: "280° 40' 03\"", chart: "SBYS-003" },
    { id: 9, name: "Grupo de pinheiros", lat: -21.9742384, lng: -47.3463551, heightM: 4.31, distanceM: 1462.12, azimuth: "326° 01' 27\"", chart: "SBYS-003" },
    { id: 10, name: "Hangarete", lat: -21.9808179, lng: -47.3395155, heightM: -14.74, distanceM: 493.73, azimuth: "346° 54' 39\"", chart: "SBYS-003" },
    { id: 11, name: "DME - Localizer", lat: -21.9733062, lng: -47.3406109, heightM: -20.56, distanceM: 1335.22, azimuth: "350° 18' 30\"", chart: "SBYS-003" },
    // SBYS-001 — TWR (T-25) Torre Academia
    { id: 12, name: "Estande de tiro", lat: -21.9806661, lng: -47.3283987, heightM: -16, distanceM: 521.19, azimuth: "13° 24' 01\"", chart: "SBYS-001" },
    { id: 13, name: "Árvore próxima THR 20L", lat: -21.9749485, lng: -47.3261804, heightM: 2.37, distanceM: 1195.03, azimuth: "17° 00' 27\"", chart: "SBYS-001" },
    { id: 14, name: "Árvore na estrada de terra", lat: -21.9865698, lng: -47.3226076, heightM: -15.28, distanceM: 733.29, azimuth: "101° 45' 45\"", chart: "SBYS-001" },
    { id: 15, name: "Grupo de árvores no CCAER", lat: -21.9919186, lng: -47.3307437, heightM: 23.77, distanceM: 754, azimuth: "189° 14' 05\"", chart: "SBYS-001" },
    { id: 16, name: "Alojamento", lat: -21.9894470, lng: -47.3304600, heightM: -6.27, distanceM: 478.28, azimuth: "191° 03' 33\"", chart: "SBYS-001" },
];

/**
 * Pontos de referência aeronáutica até 20 km.
 * Combina SBYS-004 (TWR T-27) e SBYS-001 (TWR T-25).
 */
export const POINTS_20KM: RefPoint[] = [
    // SBYS-004 — TWR (T-27) Torre DTCEA
    { id: 1, name: "Árvore no morro", lat: -21.9519937, lng: -47.3381923, heightM: 40.36, distanceM: 3686.09, azimuth: "00° 22' 58\"", chart: "SBYS-004" },
    { id: 2, name: "Grupo de árvores após o canavial", lat: -21.9899721, lng: -47.3177993, heightM: -12.85, distanceM: 2194.01, azimuth: "104° 10' 16\"", chart: "SBYS-004" },
    { id: 3, name: "Silo próximo à árvore", lat: -22.0076855, lng: -47.2498371, heightM: 48.14, distanceM: 9471.8, azimuth: "105° 21' 44\"", chart: "SBYS-004" },
    { id: 4, name: "Grupo de árvores", lat: -22.0284022, lng: -47.3263857, heightM: 14.72, distanceM: 4967.93, azimuth: "165° 31' 37\"", chart: "SBYS-004" },
    { id: 5, name: "Rotatória", lat: -22.0054309, lng: -47.3363915, heightM: -17.09, distanceM: 2265.71, azimuth: "174° 40' 30\"", chart: "SBYS-004" },
    { id: 6, name: "Silo", lat: -22.0282866, lng: -47.3539226, heightM: 38.57, distanceM: 5056.22, azimuth: "198° 24' 36\"", chart: "SBYS-004" },
    { id: 7, name: "Caixa d'água da SAEP (saída de Pirassununga)", lat: -22.0311216, lng: -47.4195376, heightM: 95.15, distanceM: 9800.64, azimuth: "238° 32' 28\"", chart: "SBYS-004" },
    { id: 8, name: "Castelo d'água da Vila dos SGT", lat: -21.9902243, lng: -47.3621496, heightM: 16.96, distanceM: 2509.97, azimuth: "256° 59' 09\"", chart: "SBYS-004" },
    { id: 9, name: "Prédio na cidade", lat: -21.9956337, lng: -47.4251081, heightM: 72.17, distanceM: 9012.66, azimuth: "262° 32' 49\"", chart: "SBYS-004" },
    { id: 10, name: "Caixa d'água azul e branca", lat: -21.9542646, lng: -47.3801640, heightM: 10.68, distanceM: 5505.37, azimuth: "308° 34' 35\"", chart: "SBYS-004" },
    { id: 11, name: "Antena de celular bairro Santa Fé", lat: -21.9436795, lng: -47.3663494, heightM: 19.92, distanceM: 5435.6, azimuth: "328° 00' 43\"", chart: "SBYS-004" },
    { id: 12, name: "Castelo d'água da Vila dos Oficiais", lat: -21.9404537, lng: -47.3674814, heightM: -10.18, distanceM: 5802.4, azimuth: "328° 54' 35\"", chart: "SBYS-004" },
    { id: 13, name: "Morro", lat: -21.8876170, lng: -47.3640424, heightM: 87.64, distanceM: 11161.49, azimuth: "346° 18' 17\"", chart: "SBYS-004" },
    // SBYS-001 — TWR (T-25) Torre Academia
    { id: 14, name: "Início do morro do Justo", lat: -21.9558099, lng: -47.3245022, heightM: 11.18, distanceM: 3312.37, azimuth: "09° 04' 43\"", chart: "SBYS-001" },
    { id: 15, name: "Araucárias no morro a nordeste", lat: -21.8775196, lng: -47.2927060, heightM: 163.18, distanceM: 12565.51, azimuth: "17° 37' 17\"", chart: "SBYS-001" },
    { id: 16, name: "Silo próximo à árvore", lat: -22.0076859, lng: -47.2498538, heightM: 55.89, distanceM: 8589.89, azimuth: "106° 55' 03\"", chart: "SBYS-001" },
    { id: 17, name: "Antena", lat: -22.0085564, lng: -47.3126171, heightM: 21.48, distanceM: 3128.14, azimuth: "146° 02' 00\"", chart: "SBYS-001" },
    { id: 18, name: "Silo com duas torres", lat: -22.0177028, lng: -47.3177817, heightM: 14.72, distanceM: 3810.32, azimuth: "161° 24' 07\"", chart: "SBYS-001" },
    { id: 19, name: "Torre e cabos de um silo", lat: -22.0226684, lng: -47.3231405, heightM: 13.53, distanceM: 4215.88, azimuth: "170° 57' 18\"", chart: "SBYS-001" },
    { id: 20, name: "Morro do Justo", lat: -21.9520276, lng: -47.3351563, heightM: 47.51, distanceM: 3736.13, azimuth: "351° 07' 46\"", chart: "SBYS-001" },
];

/** Terminal SBYS (TMA-YS) — polígono externo. Coordenadas [lat, lng]. */
export const POLY_TMA_YS: [number, number][] = [
    [-23.0755, -47.727833],
    [-22.999667, -47.924333],
    [-22.930333, -48.174833],
    [-22.7225, -48.8725],
    [-22.509667, -48.651],
    [-22.245833, -48.549167],
    [-22.087, -48.655833],
    [-21.665833, -49.731833],
    [-20.591833, -48.595],
    [-20.542667, -47.859333],
    [-20.589667, -47.3885],
    [-20.9625, -47.018167],
    [-21.738333, -46.816333],
    [-22.004833, -46.7495],
    [-22.200667, -46.744833],
    [-22.459833, -46.9715],
    [-22.696, -47.563667],
    [-23.075667, -47.733167],
];

/** Setores da Área de Instrução SBYS. Cada entrada: nome + anel de [lat, lng]. */
export const INSTRUCTION_SECTORS: { name: string; coords: [number, number][] }[] = [
    {
        name: "CAPRICÓRNIO",
        coords: [
            [-22.0375, -47.43316667],
            [-22.1785, -47.39716667],
            [-22.36816667, -47.391],
            [-22.58316667, -47.51666667],
            [-22.28316667, -48.11666667],
            [-22.25266667, -47.81933333],
            [-22.12766667, -47.66666667],
            [-22.0375, -47.43316667],
        ],
    },
    {
        name: "AQUARIUS",
        coords: [
            [-22.0375, -47.43316667],
            [-22.12766667, -47.66666667],
            [-22.25266667, -47.81933333],
            [-22.28316667, -48.11666667],
            [-21.6, -48.36666667],
            [-21.79716667, -48.1735],
            [-21.90683333, -47.6235],
            [-21.85266667, -47.47316667],
            [-22.0375, -47.43316667],
        ],
    },
    {
        name: "PEIXES",
        coords: [
            [-21.74133333, -47.57883333],
            [-21.85266667, -47.47316667],
            [-21.90683333, -47.6235],
            [-21.79716667, -48.1735],
            [-21.6, -48.36666667],
            [-21.32933333, -47.7285],
            [-21.3905, -47.69716667],
            [-21.4255, -47.653],
            [-21.47433333, -47.63933333],
            [-21.64216667, -47.61216667],
            [-21.74133333, -47.57883333],
        ],
    },
    {
        name: "TAURUS",
        coords: [
            [-21.32933333, -47.7285],
            [-21.26666667, -47.3],
            [-21.46666667, -47.01666667],
            [-21.49166667, -47.37216667],
            [-21.7125, -47.46666667],
            [-21.85266667, -47.47316667],
            [-21.74133333, -47.57883333],
            [-21.64216667, -47.61216667],
            [-21.47433333, -47.63933333],
            [-21.4255, -47.653],
            [-21.3905, -47.69716667],
            [-21.32933333, -47.7285],
        ],
    },
    {
        name: "LIBRA",
        coords: [
            [-21.49166667, -47.37216667],
            [-21.46666667, -47.01666667],
            [-21.71666667, -46.81666667],
            [-21.77066667, -47.04816667],
            [-21.82766667, -47.25],
            [-22.00683333, -47.31383333],
            [-22.33316667, -47.1735],
            [-22.36666667, -46.96666667],
            [-22.58316667, -47.51666667],
            [-22.36816667, -47.391],
            [-22.1785, -47.39716667],
            [-22.0375, -47.43316667],
            [-21.85266667, -47.47316667],
            [-21.7125, -47.46666667],
            [-21.49166667, -47.37216667],
        ],
    },
    {
        name: "VIRGEM",
        coords: [
            [-21.82766667, -47.25],
            [-21.77066667, -47.04816667],
            [-21.71666667, -46.81666667],
            [-21.96666667, -46.78316667],
            [-22.05816667, -46.98316667],
            [-22.00683333, -47.31383333],
            [-21.82766667, -47.25],
        ],
    },
    {
        name: "GÊMEOS",
        coords: [
            [-21.96666667, -46.78316667],
            [-22.36666667, -46.96666667],
            [-22.33316667, -47.1735],
            [-22.00683333, -47.31383333],
            [-22.05816667, -46.98316667],
            [-21.96666667, -46.78316667],
        ],
    },
    {
        name: "CENTRAL",
        coords: [
            [-21.49166667, -47.37216667],
            [-21.70816667, -47.2735],
            [-21.82766667, -47.25],
            [-22.00683333, -47.31383333],
            [-22.33316667, -47.1735],
            [-22.36666667, -46.96666667],
            [-22.58316667, -47.51666667],
            [-22.36816667, -47.391],
            [-22.1785, -47.39716667],
            [-22.0375, -47.43316667],
            [-21.85266667, -47.47316667],
            [-21.7125, -47.46666667],
            [-21.49166667, -47.37216667],
        ],
    },
    {
        name: "SAGITÁRIO",
        coords: [
            [-21.74366667, -47.2665],
            [-21.74066764, -47.2800344],
            [-21.73831917, -47.29371671],
            [-21.73662748, -47.30751074],
            [-21.73559704, -47.32138005],
            [-21.73523055, -47.33528799],
            [-21.735529, -47.34919782],
            [-21.7364916, -47.36307277],
            [-21.7381158, -47.37687619],
            [-21.74039731, -47.39057159],
            [-21.74333009, -47.40412278],
            [-21.74690641, -47.41749394],
            [-21.75111681, -47.43064971],
            [-21.75595015, -47.44355531],
            [-21.76139367, -47.45617659],
            [-21.76743297, -47.46848016],
            [-21.76816667, -47.46916667],
            [-21.7125, -47.46666667],
            [-21.49166667, -47.37216667],
            [-21.70816667, -47.2735],
            [-21.74366667, -47.2665],
        ],
    },
];
