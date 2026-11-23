# SBYS - Carta de Visibilidade (plugin Windy)

Plugin do [Windy](https://www.windy.com) que desenha sobre o mapa a carta de visibilidade do
Campo Fontenelle / Academia da Força Aérea (SBYS) - Pirassununga (SP):

- anéis concêntricos de 200 m a 2 km (azul) e de 4 km a 20 km (laranja; 8 km e 16 km em vermelho);
- referência SBYS no centro dos anéis;
- 16 pontos de referência até 2 km (cartas SBYS-003 e SBYS-001) e 20 pontos até 20 km (cartas SBYS-004 e SBYS-001);
- pontos numerados no mapa; ao clicar, mostram nome, carta, altura/desnível, distância e azimute verdadeiro;
- polígono da Terminal SBYS (TMA-YS);
- setores da Área de Instrução (Capricórnio, Aquarius, Peixes, Taurus, Libra, Virgem, Gêmeos, Central, Sagitário);
- lista dos pontos no painel (clique para ir até o ponto), liga/desliga de cada grupo e botão para centralizar o mapa.

Todos os dados ficam embutidos no plugin (`src/data.ts`); não há requisições externas.

**Fontes dos dados**

- Planilha de transcrição das Cartas de Pontos de Referência 2 km e 20 km (SBYS) — ICA 105-15 / 2021.
- Coordenadas calculadas a partir das torres T-27 (DTCEA) e T-25 (Academia) com distância e azimute verdadeiro.
- Overlay KML TMA-YS (Terminal e setores de instrução).

> Por se tratar de referência para segurança aérea, confira sempre os valores nas cartas oficiais vigentes antes de qualquer uso operacional.

## Desenvolvimento

1. `npm install`
2. `npm start`
3. Abra <https://www.windy.com/developer-mode> e carregue <https://localhost:9999/plugin.js>

## Publicação

1. Crie o repositório no GitHub e envie estes arquivos.
2. Em *Settings → Secrets and variables → Actions*, crie o secret `WINDY_API_KEY`.
3. Em *Actions → publish-plugin*, clique em *Run workflow*.

## Estrutura

| Arquivo | Função |
| --- | --- |
| `src/plugin.svelte` | Interface e camadas do mapa |
| `src/pluginConfig.ts` | Configuração exigida pelo Windy |
| `src/data.ts` | Centro, raios, pontos de referência, TMA e setores |
| `src/geo.ts` | Geração dos círculos geodésicos e utilitários |

Documentação: <https://docs.windy-plugins.com/>
