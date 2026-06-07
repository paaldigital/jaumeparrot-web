<script setup lang="ts">
</script>

<template>
  <section id="clientes" class="bg-slate-50 py-24">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-brand-600 text-sm font-semibold uppercase tracking-widest">Clientes</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-bold text-slate-900">Clientes</h2>
        <p class="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
          Empresas y emprendedores que han confiado en mí para llevar sus ideas adelante.
        </p>
      </div>

      <div class="flex flex-col items-center justify-center py-16 px-6 rounded-2xl border-2 border-dashed border-slate-200 bg-white text-center">
        <span class="text-5xl mb-4">🤝</span>
        <h3 class="text-slate-900 font-semibold text-xl mb-2">¿Trabajamos juntos?</h3>
        <p class="text-slate-500 max-w-md">
          Aún no tengo clientes que mostrar, pero podría ser el tuyo. Cuéntame tu proyecto y construimos algo juntos.
        </p>
        <a
          href="#contacto"
          class="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-brand-600/30"
        >
          Sé el primero
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
