export default function sidebar() {
    return [
      {
        text: 'Circuitos Digitais - 1º Semestre',
        collapsed: false,
        collapsible: true,
        items: [
          { text: 'Introdução', link: '/circuitos-digitais/introducao' },
          { text: 'Sistemas de Numeração', link: '/circuitos-digitais/sistemas-de-numeracao' },
          { text: 'Códigos Binários', link: '/circuitos-digitais/codigos-binarios' },
          { text: 'Aritmética Binária', link: '/circuitos-digitais/aritmetica-binaria' },
          { text: 'Representação Binária com Sinal', link: '/circuitos-digitais/representacao-binaria-sinal' },
          { text: 'Aritmética BCD', link: '/circuitos-digitais/aritmetica-bcd' },
          { text: 'Ferramentas de Descrição de Circuitos Digitais', link: '/circuitos-digitais/ferramentas-descricao-circuitos'},
          { text: 'Funções e Portas Lógicas', link: '/circuitos-digitais/funcoes-portas-logicas'},
          { text: 'Propriedades da Álgebra Booleana', link: '/circuitos-digitais/propriedades-algebra-booleana'},
          { text: 'Formas Canônicas', link: '/circuitos-digitais/formas-canonicas'},
          { text: 'Mapas de Karnaugh', link: '/circuitos-digitais/mapas-karnaugh'},
        ],
      },
      {
        text: 'Matemática Discreta - 1º Semestre',
        collapsed: false,
        collapsible: true,
        items: [
          { text: 'Lógica Matemática', link: '/matematica-discreta/logica-matematica' },

        ]
      }
    ];
  }