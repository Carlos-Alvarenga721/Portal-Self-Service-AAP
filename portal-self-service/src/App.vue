<script setup>
import { ref } from 'vue'
import MenuCard from './components/MenuCard.vue'
import ExitButton from './components/ExitButton.vue'

const menuOptions = ref([
  {
    id: 1,
    title: 'Gestión de Empleados',
    description: 'Altas y bajas de usuarios en Windows y Linux',
    icon: '👥',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Auditoría de Seguridad',
    description: 'Ejecutar auditorías CIS Benchmark Level 1',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Gestión de Entornos',
    description: 'Aprovisionamiento y destrucción de entornos temporales',
    icon: '🖥️',
    color: 'from-purple-500 to-pink-500'
  }
])

const handleOptionClick = (option) => {
  alert(`Has seleccionado: ${option.title}`)
  console.log('Opción seleccionada:', option)
}

const handleExit = () => {
  if (confirm('¿Estás seguro que deseas salir del portal?')) {
    alert('Gracias por usar el Portal Self-Service. ¡Hasta pronto!')
    console.log('Saliendo del sistema...')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-6">
    <!-- Header -->
    <header class="text-center mb-12">
      <div class="mb-4">
        <span class="text-5xl">🚀</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
        Portal Self-Service
      </h1>
      <p class="text-lg text-purple-200 opacity-90">
        Ansible Automation Platform
      </p>
      <p class="text-sm text-gray-400 mt-2">
        Selecciona una opción para comenzar
      </p>
    </header>

    <!-- Menu Grid -->
    <main class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
      <MenuCard
        v-for="option in menuOptions"
        :key="option.id"
        :option="option"
        @click="handleOptionClick(option)"
      />
    </main>

    <!-- Footer -->
    <footer>
      <ExitButton @exit="handleExit" />
    </footer>

    <!-- Decorative elements -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    </div>
  </div>
</template>
