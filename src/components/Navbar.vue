<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="border-gray-800 border rounded-md">
        Menu
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
       <router-link to="/">Home</router-link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <router-link to="/employee">Employee</router-link>  
     </DropdownMenuItem>
     <DropdownMenuItem>
        <router-link to="#">About</router-link>  
     </DropdownMenuItem>
     <DropdownMenuItem>
        <router-link to="#">Contact Us</router-link>  
     </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>