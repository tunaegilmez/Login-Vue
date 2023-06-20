<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-col justify-between">
      <div></div>

      <form class="flex flex-col gap-12 my-24">
        <label for="login" class="text-red-500 text-xl">Login</label>
        <div>
          <label class="label">
            <span class="label-text text-red-600">required</span>
          </label>
          <input
            v-model="username"
            type="text"
            placeholder="username"
            class="input w-full max-w-xs border border-red-500 text-white"
          />
        </div>
        <div>
          <label class="label">
            <span class="label-text text-red-600">required</span>
          </label>
          <input
            v-model="password"
            type="text"
            placeholder="password"
            class="input w-full max-w-xs border border-red-500 text-white"
          />
        </div>
        <div>
          <router-link :to="isAuth ? '/greeting' : ''">
            <button
              @click="handleLogin"
              class="px-4 py-2 rounded-md text-white border border-white"
            >
              Login
            </button>
          </router-link>
        </div>
      </form>
      <!-- <Toast v-if="loadingError">Username or password is wrong</Toast> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

// import Toast from "@/shared/TheToast.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      encodedPass: "",
      // loginError: false,
    };
  },
  components: {
    // Toast,
  },
  computed: {
    ...mapState("auth", ["isAuth"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    handleLogin() {
      this.encodedPass = btoa(this.password);

      this.login({
        username: this.username,
        password: this.encodedPass,
      });
    },
  },
};
</script>
