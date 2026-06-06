<script setup lang="ts">
useSeoMeta({
  title: 'Jaume Parrot — Desarrollador Freelance',
  description: 'Desarrollador web freelance especializado en Vue/Nuxt, React/Next.js, Node.js y APIs. Construyo aplicaciones modernas y escalables para startups y empresas.',
  ogTitle: 'Jaume Parrot — Desarrollador Freelance',
  ogDescription: 'Aplicaciones web modernas, APIs robustas y experiencias digitales que funcionan.',
  ogImage: 'https://jaumeparrot.com/og-image.png',
  ogUrl: 'https://jaumeparrot.com',
  ogType: 'website',
  ogLocale: 'es_ES',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jaume Parrot — Desarrollador Freelance',
  twitterDescription: 'Aplicaciones web modernas, APIs robustas y experiencias digitales que funcionan.',
  twitterImage: 'https://jaumeparrot.com/og-image.png',
  robots: 'index, follow',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://jaumeparrot.com' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jaume Parrot',
        url: 'https://jaumeparrot.com',
        jobTitle: 'Desarrollador Freelance',
        description: 'Desarrollador web freelance especializado en Vue/Nuxt, React/Next.js, Node.js y APIs.',
        knowsAbout: ['Vue.js', 'Nuxt.js', 'React', 'Next.js', 'Node.js', 'TypeScript', 'APIs REST'],
        sameAs: [],
        offers: {
          '@type': 'Offer',
          description: 'Desarrollo de aplicaciones web modernas, APIs robustas y experiencias digitales.',
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-white">
    <AppNav />
    <main>
      <AppHero />
      <AppServices />
      <AppProjects />
      <AppProcess />
      <AppContact />
    </main>
    <AppFooter />
  </div>
</template>
