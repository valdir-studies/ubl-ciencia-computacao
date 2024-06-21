import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default {
  base: '/ubl-ciencia-computacao/',
  title: "Ciência da Computação - UBL",
  description: "Anotações das matérias de Ciência da Computação da Universidade Brasileira Livre",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '1º Semestre', link: '/circuitos-digitais/introducao' }
    ],

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/valdir-studies/ubl-ciencia-computacao' }
    ]
  }
}
