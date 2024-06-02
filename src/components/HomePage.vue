<script setup>
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
    <div>
        <div class="h-screen flex flex-col justify-center items-center gap-5 p-10 bg-gray-300 bg-opacity-50 shadow-lg rounded-lg animate-fade-in-up">
        
        <p class="text-4xl font-bold">Welcome to our company</p>

        <p>Click here to find contact details for each employee</p>

        <Button variant="outline">
            <router-link to="/employee">Employee</router-link>
        </Button>
        </div>   
    </div>  
</template>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
}
</style>