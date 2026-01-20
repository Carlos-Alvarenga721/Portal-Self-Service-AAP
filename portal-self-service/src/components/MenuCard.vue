<script setup>
defineProps({
  option: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20"
  >
    <!-- Gradient overlay on hover -->
    <div
      :class="['absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br', option.color]"
    ></div>

    <!-- Content -->
    <div class="relative z-10">
      <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {{ option.icon }}
      </div>
      <h2 class="text-xl font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
        {{ option.title }}
      </h2>
      <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
        {{ option.description }}
      </p>
    </div>

    <!-- Arrow indicator -->
    <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
      <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
      </svg>
    </div>
  </div>
</template>
