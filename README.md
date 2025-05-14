# Front-end do D&D Player's Handbook

Esta aplicação faz parte do projeto D&D Player's Handbook, desenvolvido para a disciplina de Back-end (ministrado pelo Professor Bruno Kurzawe) de Engenharia de Software no Centro Universitário SATC em 2024.

*Em 2025 o projeto foi revisitado para realização de uma refatoração durante a disciplina de Clean Code (Ministrada pelo professor Ramon Venson).*

## Setup

- ...

## Funcionalidades

As principais funcionalidades do projeto, são:

- ...

## Refatoração

O projeto carece de uma refatoração extensiva - por isso, uma estratégia de refatoração foi criada para atender os seguintes critérios:

- Propor uma estrutra de projeto mais clara e de acordo com padrões de projeto em React que utilizem *css modules* e *primitive components*.
- Mover módulos e métodos para pastas específicas, respeitando um padrão por funcionalidade.
- Remover importações e dependências não utilizadas no package.json.
- Garantir padronização de nomenclatura (Por exemplo, PascalCase para componentes, camelCase para variáveis).
- Renomear componentes e métodos ambíguos.
- Adotar nome de pastas e arquivos para espelhar hierarquia de módulos.
- Integrar Jest ou Vitest nas pipelines de build.
- Escrever testes unitários para módulos existentes, focando em componentes chave como CharacterInfo e Header.
- Configurar *thresholds* de cobertura para previnir *merge* se a cobertura cair abaixo de 50%.
- Aproveitar o arquivo de configuração .eslintrc.cjs e expandir as regras onde achar necessário.
- Configurar um workflow de auto-fix-on-save se possível.
- Analisar *code smells* nos arquivos CharacterInfo.tsx e Header.tsx (funções extensas, lógica repetida, etc).
- Extrair lógicas comuns em métodos utilitários.
- Simplificar gestão de propriedades e garantir divisão clara de responsabilidades.
- Identificar classes ou funções com múltiplos métodos encadeados.
- Documentar novas interfaces para garantir maior clareza e manutenibilidade.
- Desacoplar métodos com alto acoplamento através de injeção de dependências ou interfaces bem definidas.
- Garantir importação de módulos somente onde necessário.
- Remover ou substituir bibliotecas terceiras desatualizadas.

### Estratégia de Refatoração

1. Reorganizar a estrutura de projeto
2. Padronizar convensão de nomes
3. Implementar a suite de testes com mínimo de 50% de cobertura
4. Utilizar ESLint para enforçar estilos de código
5. Revizar e refatorar componentes existentes
6. Aplicar interfaces fluentes em operações complexas
7. Reduzir acoplamento de código e gerenciar dependências

### Estágios Propostos para Execução do Refatoração

- Estágio 1: Reorganização da estrutura do projeto, convensões de nomes, padronização com ESLint.
- Estágio 2: Estratégia de implementação de testes e refatoração dos componentes existentes.
- Estágio 3: Aplicação de interfaces fluentes e desacoplamento do código.
- Estágio 4: Review fina e higienização para garantir manutenibilidade.

## Autores

- Eduardo Freitas
- Sofia Martins
- Lorenzo Dal Bó
