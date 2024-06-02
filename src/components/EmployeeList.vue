<script setup>
import EmployeeCardPage1 from '@/components/EmployeeCardPage1.vue'
import EmployeeCardPage2 from '@/components/EmployeeCardPage2.vue'
import { ref } from 'vue'
import {
  Button,
} from '@/components/ui/button'

const currentPage = ref(1);

</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center gap-5 mt-auto">
    <div  v-if="currentPage === 1">
        <EmployeeCardPage1 class="mt-auto"/>
    </div>
    <div v-else>
        <EmployeeCardPage2 class="mt-auto"/>
    </div>
    <div  class="flex mt-10 mb-5 gap-2">
        <span class="material-symbols-outlined cursor-pointer hover:text-gray-500"  @click="currentPage = 1">
            chevron_left
        </span>
        <span class="material-symbols-outlined cursor-pointer hover:text-gray-500"  @click="currentPage = 2">
            chevron_right
        </span>
    </div>
  </div>

</template>