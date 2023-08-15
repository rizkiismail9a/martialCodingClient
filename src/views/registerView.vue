<script setup lang="ts"></script>

<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Register</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="username" placeholder="Username" />
        <label for="username">Username</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="first_name" placeholder="name@example.com" />
        <label for="first_name">First Name</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="last_name" placeholder="name@example.com" />
        <label for="last_name">Last Name</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password" placeholder="Password" />
        <label for="password">Password</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password_confirm" placeholder="Password" />
        <label for="password_confirm">Password Confirm</label>
      </div>

      <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
    </form>
  </main>
</template>
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
