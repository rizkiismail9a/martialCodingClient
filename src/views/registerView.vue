<template>
  <main class="form-signin w-100 m-auto">
    <div class="alert alert-danger" role="alert" v-if="errorMsg !== ''">{{ errorMsg }}</div>
    <div class="alert alert-success" role="alert" v-if="successMsg !== ''">
      {{ successMsg }}
    </div>

    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Register</h1>

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
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
          v-model="data.username"
        />
        <label for="username">Username</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="first_name"
          placeholder="name@example.com"
          v-model="data.first_name"
        />
        <label for="first_name">First Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="last_name"
          placeholder="name@example.com"
          v-model="data.last_name"
        />
        <label for="last_name">Last Name</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="data.password"
        />
        <label for="password">Password</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password_confirm"
          placeholder="Password"
          v-model="data.password_confirm"
        />
        <label for="password_confirm">Password Confirm</label>
      </div>

      <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
    </form>
  </main>
</template>
<script setup lang="ts">
import type { RegisterData } from '@/stores/auth'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
// import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const errorMsg = ref('')
const successMsg = ref('')
const data: RegisterData = reactive({
  email: '',
  username: '',
  first_name: '',
  last_name: '',
  password: '',
  password_confirm: ''
})

const submit = async () => {
  // console.log(data)
  authStore
    .register(data)
    .then((res) => {
      console.log(res)
      if (res?.status === 400) {
        return (errorMsg.value = res?.message)
      }
      successMsg.value = res?.message
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
.form-signin input[type='text'] {
  margin-bottom: -1px;
  border-radius: 0;
}
#password_confirm {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
#password {
  margin-bottom: -1px;
  border-radius: 0;
}
</style>
