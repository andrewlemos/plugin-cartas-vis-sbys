import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-sbys-visibilidade',
    version: '1.0.0',
    title: 'SBYS - Carta de Visibilidade',
    icon: '🛫',
    description:
        'Cartas de visibilidade do Campo Fontenelle / Academia da Força Aérea (SBYS) - Pirassununga, com TMA e área de instrução',
    author: 'Andrew Lemos',
    desktopUI: 'rhpane',
    mobileUI: 'small',
    repository: 'https://github.com/andrewlemos/cartas-visibilidade-sbys',
    routerPath: '/sbys-visibilidade',
    private: false,
};

export default config;
