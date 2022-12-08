<template>
  <nav class="navbar sticky-top navbar-expand-lg" v-if="userStore.user">
    <div class="container">
      <a class="navbar-brand text-white" href="#">Findout</a>

      <div class="navbar-nav d-flex align-items-center float-end">
        <RouterLink to="/" class="nav-link text-white">Accueil</RouterLink>

        <a class="nav-link text-white" href="#">Features</a>
        <a class="nav-link text-white" href="#">Pricing</a>
        <a class="nav-link text-white">Disabled</a>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://i.pravatar.cc/300"
              width="40"
              height="40"
              alt="avatar"
              class="rounded-circle img-thumbnail border-warning bg-warning"
            />
            <span class="ml-3">
              {{ userStore.user }}
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" @click="handleLogout"
                >Déconnexion</a
              >
            </li>
          </ul>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  methods: {
    handleLogout() {
      this.userStore.setUser(null);
      this.$router.push("/");
    },
  },
};
</script>
