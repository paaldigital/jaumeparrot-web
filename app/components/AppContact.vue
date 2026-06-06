<script setup lang="ts">
const { pending, error, execute } = useLazyAsyncData('contact', async () => {}, { immediate: false })

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

async function handleSubmit() {
  // TODO: Replace with your real email API (Resend, Formspree, etc.)
  await new Promise(r => setTimeout(r, 600))
  submitted.value = true
}
</script>

<template>
  <section id="contacto" class="bg-white py-24">
    <div class="max-w-3xl mx-auto px-6">
      <div class="text-center mb-12">
        <span class="text-brand-600 text-sm font-semibold uppercase tracking-widest">Contacto</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-bold text-slate-900">Hablemos de tu proyecto</h2>
        <p class="mt-4 text-slate-500 text-lg">
          Cuéntame qué necesitas y te respondo en menos de 24 h.
        </p>
      </div>

      <!-- Success state -->
      <div
        v-if="submitted"
        class="rounded-2xl bg-brand-50 border border-brand-200 p-10 text-center"
      >
        <span class="text-5xl block mb-4">✅</span>
        <h3 class="text-slate-900 font-semibold text-xl mb-2">¡Mensaje recibido!</h3>
        <p class="text-slate-500">Te responderé lo antes posible.</p>
      </div>

      <!-- Form -->
      <form
        v-else
        class="space-y-6 rounded-2xl bg-slate-50 border border-slate-200 p-8"
        @submit.prevent="handleSubmit"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-slate-700 mb-1.5">Nombre</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Tu nombre"
              class="w-full rounded-lg bg-white border border-slate-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none transition"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="tu@email.com"
              class="w-full rounded-lg bg-white border border-slate-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none transition"
            />
          </div>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-slate-700 mb-1.5">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            placeholder="Cuéntame sobre tu proyecto, presupuesto aproximado y plazos..."
            class="w-full rounded-lg bg-white border border-slate-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none transition resize-none"
          />
        </div>

        <button
          type="submit"
          class="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base transition-colors duration-200 shadow-lg shadow-brand-600/20"
        >
          Enviar mensaje
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>

      <div class="mt-8 flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
        <a href="mailto:hola@jaumeparrot.com" class="hover:text-brand-400 transition-colors">
          hola@jaumeparrot.com
        </a>
        <a href="https://github.com/jaumeparrot" target="_blank" rel="noopener" class="hover:text-brand-400 transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/jaumeparrot" target="_blank" rel="noopener" class="hover:text-brand-400 transition-colors">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
