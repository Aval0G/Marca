<template>
  <div class="loading-section">
    <!-- Mostrar el spinner solo mientras `isLoading` es verdadero -->
    <div v-if="isLoading" class="loader">Cargando...</div>
    <!-- Contenido de la sección que se muestra después de la carga -->
    <div v-else>
      <h2>Contenido cargado</h2>
      <p>Este es el contenido que se muestra después de la carga simulada.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoading = ref(false) // Estado para gestionar la carga

const handleScroll = () => {
  const section = document.querySelector('.loading-section')
  const sectionTop = section.getBoundingClientRect().top

  if (sectionTop < window.innerHeight) {
    // Si la sección es visible en la ventana, mostrar la carga
    isLoading.value = true

    setTimeout(() => {
      // Después de 3 segundos, ocultar el loader
      isLoading.value = false
    }, 3000)
  }
}

// Añadir el listener de scroll cuando se monta el componente
window.addEventListener('scroll', handleScroll)
</script>

<style scoped>
.loading-section {
  height: 100vh; /* Ajusta el tamaño según sea necesario */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
}

.loader {
  font-size: 20px;
  font-weight: bold;
}
</style>
