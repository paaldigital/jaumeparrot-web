<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Entendemos tu negocio, tus objetivos y los requisitos técnicos del proyecto en una llamada inicial sin coste.',
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Preparo una propuesta detallada con alcance, tecnologías, plazos y presupuesto claro.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Desarrollo iterativo con updates regulares y acceso al repositorio para que veas el progreso en todo momento.',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Deploy en producción, documentación y soporte post-lanzamiento para que todo funcione perfectamente.',
  },
]
</script>

<template>
  <section id="proceso" class="bg-slate-50 py-24">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-indigo-600 text-sm font-semibold uppercase tracking-widest">Proceso</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-bold text-slate-900">¿Cómo trabajo?</h2>
        <p class="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
          Un proceso transparente para que sepas exactamente qué esperar en cada fase.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
        >
          <!-- Connector line -->
          <div
            v-if="i < steps.length - 1"
            class="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-slate-300 to-transparent z-10 -translate-x-6"
          />
          <span class="text-5xl font-black text-slate-200 leading-none block mb-4">{{ step.number }}</span>
          <h3 class="text-slate-900 font-semibold text-lg mb-2">{{ step.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
