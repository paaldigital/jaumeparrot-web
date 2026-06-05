<script setup lang="ts">
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Tienda online con catálogo dinámico, carrito de compra, pasarela de pago y panel de administración.',
    stack: ['Nuxt', 'Node.js', 'PostgreSQL', 'Stripe'],
    url: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Aplicación SaaS con autenticación multitenant, analíticas en tiempo real y gestión de usuarios.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    url: '#',
  },
  {
    title: 'API de Reservas',
    description: 'API RESTful para gestión de reservas con calendario, notificaciones y sistema de pagos integrado.',
    stack: ['Node.js', 'Fastify', 'MySQL', 'Docker'],
    url: '#',
  },
]
</script>

<template>
  <section id="proyectos" class="bg-white py-24">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-indigo-600 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-bold text-slate-900">Proyectos destacados</h2>
        <p class="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
          Una selección de proyectos que demuestran lo que puedo construir para ti.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group flex flex-col rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg overflow-hidden transition-all duration-300"
        >
          <!-- Placeholder image -->
          <div class="h-44 bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
            <span class="text-5xl opacity-60">💻</span>
          </div>

          <div class="flex flex-col flex-1 p-6">
            <h3 class="text-slate-900 font-semibold text-xl mb-2">{{ project.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed flex-1">{{ project.description }}</p>

            <div class="mt-4 flex flex-wrap gap-2 mb-5">
              <span
                v-for="tag in project.stack"
                :key="tag"
                class="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-medium"
              >{{ tag }}</span>
            </div>

            <a
              :href="project.url"
              class="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Ver proyecto
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
