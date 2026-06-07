<script setup lang="ts">
const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="text-slate-900 font-bold text-lg tracking-tight">
        jaumeparrot<span class="text-brand-600">.com</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-slate-500 hover:text-slate-900 text-sm transition-colors duration-200"
          >{{ link.label }}</a>
        </li>
      </ul>

      <a
        href="#contacto"
        class="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors duration-200"
      >
        Hablemos
      </a>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-slate-500 hover:text-slate-900"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Abrir menú"
      >
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="text-slate-600 hover:text-slate-900 text-sm py-1"
        @click="isMenuOpen = false"
      >{{ link.label }}</a>
      <a
        href="#contacto"
        class="mt-2 inline-flex justify-center px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium"
        @click="isMenuOpen = false"
      >Hablemos</a>
    </div>
  </header>
</template>
