<script setup>
import Navbar from '@/components/Navbar.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <div class="flex flex-col min-h-screen">
      <header class=" py-5 px-2 flex justify-between items-center fixed top-0 left-0 right-0 bg-gray-700 bg-opacity-50 z-10">
      <ThemeToggle />
      <Navbar />
      </header>  
      <main class="flex-grow min-h-screen mt-20 ">
        <router-view />
      </main>
      <footer class="flex justify-center w-full mt-auto">
         <Footer />
      </footer>
    </div> 
</template>

<style scoped>

</style>
