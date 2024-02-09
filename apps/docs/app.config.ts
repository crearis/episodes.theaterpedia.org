export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'stone',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Theaterpedia Dokumentation',
  },
  header: {
    logo: {
      alt: '',
      light: '/theaterpedia-logo.png',
      dark: '/theaterpedia-logo.png'
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'heroicons-outline:home',
      to: 'https://theaterpedia.org',
      target: '_blank',
      'aria-label': 'Theaterpedia Homepage'
    }, {
      icon: 'mingcute:egg-line',
      to: 'https://dasei.eu',
      target: '_blank',
      'aria-label': 'DAS Ei - Theaterpädagogisches Institut Bayern e.V.'
    }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [{
      icon: 'heroicons-outline:home',
      to: 'https://theaterpedia.org',
      target: '_blank',
      'aria-label': 'Theaterpedia Homepage'
    }, {
      icon: 'mingcute:egg-line',
      to: 'https://dasei.eu',
      target: '_blank',
      'aria-label': 'DAS Ei - Theaterpädagogisches Institut Bayern e.V.'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank',
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank',
      }]
    }
  }
})