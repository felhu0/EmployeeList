<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])
const total = ref(0)

const fetchUsers = async () => {
  try {
    const res = await fetch('https://reqres.in/api/users?page=2')
    const data = await res.json()

    total.value = data.total
    users.value = data.data
  } catch (error) {
    console.log(error);
  }
}

onMounted(fetchUsers)

</script>



<template>
   <div>
         <div class="p-5">
          <p class="text-xl sm:text-2xl md:text-3xl text-center mb-10">Welcome to our company directory!</p>
          <p class="text-sm sm:text-base md:text-lg text-center">We are proud to have a team of <span class="font-semibold">{{ total }}</span> dedicated employees who are here to assist you.</p>
          <p class="text-sm sm:text-base md:text-lg text-center">Feel free to reach out to any of our team members via their contact details below.</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-14 mt-10">
            <div v-for="user in users" :key="user.id" 
             class="flex flex-row mt-10 items-center justify-center bg-gray-500 shadow-md rounded-lg p-4 hover:bg-gray-400 hover:shadow-lg w-48
             transition duration-300 transform hover:-translate-y-1 hover:scale-105 animate-fade-in-up">
                <div class="flex flex-col items-center justify-center gap-6 mt-4 text-sm">
                    <span>
                        <img :src="user.avatar" alt="user.name" class="w-24 h-24 rounded-full" />
                    </span>
                    <span>
                        {{ user.first_name }} {{ user.last_name }}
                    </span>
                    <span>
                        <a :href="`mailto:${user.email}`" class="text-blue-900 hover:underline">{{ user.email }}</a>
                    </span>
                </div>
            </div>
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