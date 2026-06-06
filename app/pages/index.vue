<script setup lang="ts">
useSeoMeta({
  title: 'Jaume Parrot — Desarrollador Freelance',
  description: 'Desarrollador web freelance especializado en Vue/Nuxt, React/Next.js, Node.js y APIs. Construyo aplicaciones modernas y escalables para startups y empresas.',
  ogTitle: 'Jaume Parrot — Desarrollador Freelance',
  ogDescription: 'Aplicaciones web modernas, APIs robustas y experiencias digitales que funcionan.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
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
