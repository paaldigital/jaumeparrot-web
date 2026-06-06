<script setup lang="ts">
const services = [
  {
    icon: '🖥️',
    title: 'Aplicaciones Web',
    description: 'Desarrollo de SPAs y SSR con Vue/Nuxt o React/Next.js. Rápidas, accesibles y fáciles de mantener.',
  },
  {
    icon: '⚙️',
    title: 'APIs & Backend',
    description: 'APIs RESTful y GraphQL con Node.js. Arquitectura limpia, segura y lista para escalar.',
  },
  {
    icon: '🎨',
    title: 'UI / Frontend',
    description: 'Implementación de diseños pixel-perfect, sistemas de diseño y componentes reutilizables.',
  },
  {
    icon: '🗄️',
    title: 'Bases de datos',
    description: 'Diseño y optimización de esquemas con PostgreSQL, MySQL o MongoDB. Migraciones y consultas eficientes.',
  },
  {
    icon: '☁️',
    title: 'Despliegue & DevOps',
    description: 'CI/CD, Docker, Vercel, Railway o VPS. Tu aplicación en producción, estable y monitorizada.',
  },
  {
    icon: '🔍',
    title: 'Consultoría técnica',
    description: 'Revisión de código, arquitectura de proyectos y asesoramiento para tomar las decisiones técnicas correctas.',
  },
]
</script>

<template>
  <section id="servicios" class="bg-white py-24">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-brand-600 text-sm font-semibold uppercase tracking-widest">Servicios</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-bold text-slate-900">¿En qué puedo ayudarte?</h2>
        <p class="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
          Ofrezco servicios end-to-end para llevar tu idea desde cero hasta producción.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 hover:bg-white hover:shadow-md transition-all duration-300"
        >
          <span class="text-4xl mb-4 block">{{ service.icon }}</span>
          <h3 class="text-slate-900 font-semibold text-xl mb-2">{{ service.title }}</h3>
          <p class="text-slate-500 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
