<template>
  <div class="container">
    <div class="card m-auto" style="width: 18rem" v-if="user">
      <div class="card-body">
        <h5 class="card-title">{{ user.full_name }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">username: {{ user.username }}</h6>
        <p class="card-text">Email: {{ user.email }}</p>

        <router-link to="/" class="card-link">&leftarrow; Back to home</router-link>
      </div>
    </div>
    <div v-else><h1>Please login or register</h1></div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { computed, onMounted } from 'vue'

onMounted(async () => {
  await useAuthStore().getUser()
})
const user = computed(() => {
  return useAuthStore().userDetail
})
</script>
