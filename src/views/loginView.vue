<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="data.email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="data.password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
  </main>
</template>
<script setup lang="ts">
import type { LoginData } from '@/stores/auth'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()
const errorMsg = ref('')
// const successMsg = ref('')
const data = reactive<LoginData>({
  email: '',
  password: ''
})

const submit = async () => {
  // console.log(data)
  authStore
    .login(data)
    .then(() => {
      // console.log(res)
      router.push('/user')
      // successMsg.value = res?.message
    })
    .catch((err) => {
      errorMsg.value = err?.message
    })
}
</script>
<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
