<script setup>
const emit = defineEmits(['exit'])

const handleClick = () => {
  emit('exit')
}
</script>

<template>
  <button
    @click="handleClick"
    class="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-pink-600"
  >
    <svg
      class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      ></path>
    </svg>
    <span>Salir del Portal</span>
  </button>
</template>
