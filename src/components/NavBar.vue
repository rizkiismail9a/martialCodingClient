<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand" href="#">My App</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#appNavBar"
        aria-controls="appNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="appNavBar" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Dropdown</a
            >
            <ul class="dropdown-menu">
              <li class="text-center mb-2">
                <router-link :to="{ name: 'user' }" class="dropdown-item" href="#"
                  >Username Here</router-link
                >
              </li>

              <li class="text-center">
                <button class="btn btn-danger" href="#">Logout</button>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'login' }"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'register' }"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
