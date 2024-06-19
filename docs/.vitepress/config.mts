import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default {
  title: "Ciência da Computação - UBL",
  description: "Anotações das matérias de Ciência da Computação da Universidade Brasileira Livre",
  themeConfig: {
    base: '/ubl-ciencia-computacao/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '1º Semestre', link: '/circuitos-digitais/introducao' }
    ],

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/techhub-br/ubl-ciencia-computacao' }
    ]
  }
}
