export default function sidebar() {
    return [
      {
        text: 'Circuitos Digitais - 1º Semestre',
        collapsed: true,
        collapsible: true,
        items: [
          { text: 'Introdução', link: '/circuitos-digitais/introducao' },
          { text: 'Sistemas de Numeração', link: '/circuitos-digitais/sistemas-de-numeracao' },
          { text: 'Códigos Binários', link: '/circuitos-digitais/codigos-binarios' },
          { text: 'Aritmética Binária', link: '/circuitos-digitais/aritmetica-binaria' },
          { text: 'Representação Binária com Sinal', link: '/circuitos-digitais/representacao-binaria-sinal' },
          { text: 'Aritmética BCD', link: '/circuitos-digitais/aritmetica-bcd' },

        ],
      },
    ];
  }