<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-16">
    <!-- Gradient background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-200/50 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-200/40 rounded-full blur-3xl" />
    </div>

    <div class="relative max-w-4xl mx-auto px-6 py-24 text-center">
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-300 bg-indigo-50 text-indigo-600 text-sm mb-8">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        Disponible para nuevos proyectos
      </span>

      <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
        Hola, soy<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
          Jaume Parrot
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
        Desarrollador freelance especializado en construir
        <strong class="text-slate-800">aplicaciones web modernas</strong>,
        APIs robustas y experiencias digitales que funcionan.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#contacto"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-colors duration-200 shadow-lg shadow-indigo-600/30"
        >
          Contacta conmigo
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#proyectos"
          class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-semibold text-lg transition-colors duration-200"
        >
          Ver proyectos
        </a>
      </div>

      <div class="mt-20 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl font-bold text-slate-900">5+</span>
          <span>Años de experiencia</span>
        </div>
        <div class="w-px h-10 bg-slate-300 hidden sm:block" />
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl font-bold text-slate-900">30+</span>
          <span>Proyectos entregados</span>
        </div>
        <div class="w-px h-10 bg-slate-300 hidden sm:block" />
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl font-bold text-slate-900">100%</span>
          <span>Clientes satisfechos</span>
        </div>
      </div>
    </div>
  </section>
</template>
