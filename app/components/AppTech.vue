<script setup lang="ts">
const categories = [
  {
    label: 'Frontend',
    techs: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    techs: ['Node.js', 'Express', 'Fastify', 'REST', 'GraphQL'],
  },
  {
    label: 'Base de datos',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Drizzle'],
  },
  {
    label: 'DevOps & Tools',
    techs: ['Docker', 'GitHub Actions', 'Vercel', 'Railway', 'Linux'],
  },
]
</script>

<template>
  <section id="tecnologias" class="bg-slate-50 py-24">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-indigo-600 text-sm font-semibold uppercase tracking-widest">Stack</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-bold text-slate-900">Tecnologías que uso</h2>
        <p class="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
          Herramientas probadas en proyectos reales, elegidas por su fiabilidad y rendimiento.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="cat in categories" :key="cat.label">
          <h3 class="text-indigo-600 text-sm font-semibold uppercase tracking-wider mb-4">{{ cat.label }}</h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="tech in cat.techs"
              :key="tech"
              class="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
